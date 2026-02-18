"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Connect your product data",
    description:
      "Manual input, CSV upload, or connect Shopify, HubSpot, Jumia, Kilimall, and more. We use what you already have.",
  },
  {
    step: 2,
    title: "We generate campaigns & post",
    description:
      "MarkitAI analyzes performance and creates campaigns, then posts on your approved platforms—actively, not just scheduled.",
  },
  {
    step: 3,
    title: "Track results & weekly insights",
    description:
      "See engagement → interaction → sales in one place. Real conversion metrics, plus voice and dashboard updates.",
  },
  {
    step: 4,
    title: "Optimize campaigns (AI recommendations)",
    description:
      "Get AI-driven suggestions to improve performance and ROI over time.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gray-50/80 py-20 sm:py-28" id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Four steps from your data to real sales.
          </p>
        </motion.div>
        <div className="mt-16 space-y-12 sm:space-y-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="relative flex flex-col items-start rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:gap-8"
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-purple text-2xl font-bold text-white">
                {s.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-dark">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
