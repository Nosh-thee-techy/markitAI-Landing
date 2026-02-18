"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How is MarkitAI different from a scheduler?",
    a: "MarkitAI is not just a scheduler. It actively runs campaigns and posts on your behalf on approved platforms. You also get weekly AI-driven business intelligence updates (audio + dashboard), so it works like a virtual marketing team.",
  },
  {
    q: "Does MarkitAI post for me?",
    a: "Yes. We generate campaigns and post with your permission on your connected platforms. You stay in control of which channels and when; we do the creation and publishing.",
  },
  {
    q: "How secure is my data?",
    a: "We take security seriously. Your product and business data are stored securely and used only to run your campaigns and provide insights. We follow industry best practices and do not sell your data.",
  },
  {
    q: "What platforms are supported?",
    a: "You can connect via manual input, CSV upload, or integrations including Shopify, HubSpot, Jumia, Kilimall, and we're adding more ecommerce and social platforms (e.g. Instagram, Facebook, WhatsApp) for posting.",
  },
  {
    q: "When will MarkitAI launch?",
    a: "We're building in the open and will notify everyone on the waitlist first. Reserve your spot to get early access and updates.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50/80 py-20 sm:py-28" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-600">
            Quick answers to common questions.
          </p>
        </motion.div>
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-brand-dark hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span className="text-brand-purple">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-gray-100 px-6 py-4 text-gray-600">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
