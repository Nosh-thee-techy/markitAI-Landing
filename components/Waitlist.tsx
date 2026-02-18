"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const BUSINESS_TYPES = [
  "E-commerce / Retail",
  "Services",
  "SaaS",
  "Agency",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under $500/mo",
  "$500 – $1,500/mo",
  "$1,500 – $3,000/mo",
  "$3,000+/mo",
  "Prefer not to say",
];

export function Waitlist() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessType: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setMessage("You're on the list! We'll be in touch soon.");
      setForm({ name: "", email: "", businessType: "", budget: "" });
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  };

  return (
    <section className="bg-white py-20 sm:py-28" id="waitlist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Join the waitlist
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Be first to get access. We'll only use your email to notify you at launch.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-12 max-w-lg rounded-3xl border border-gray-200 bg-gray-50/50 p-6 shadow-lg sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {status === "success" ? (
            <div className="rounded-2xl bg-green-50 p-6 text-center">
              <p className="text-lg font-semibold text-green-800">{message}</p>
              <p className="mt-2 text-sm text-green-700">Check your inbox for a confirmation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-brand-dark focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-brand-dark focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-brand-dark">
                  Business type *
                </label>
                <select
                  id="businessType"
                  required
                  value={form.businessType}
                  onChange={(e) => setForm((f) => ({ ...f, businessType: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-brand-dark focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                >
                  <option value="">Select...</option>
                  {BUSINESS_TYPES.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-brand-dark">
                  Monthly marketing budget (optional)
                </label>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-brand-dark focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                >
                  <option value="">Select...</option>
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              {message && (
                <p className={`text-sm ${status === "error" ? "text-red-600" : "text-gray-600"}`}>
                  {message}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple py-4 text-base font-semibold text-white shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 disabled:opacity-70 transition-all"
              >
                {status === "loading" ? "Joining…" : "Join the waitlist"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
