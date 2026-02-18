"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "We actively post for you",
    description: "This isn't just a scheduler. MarkitAI runs campaigns and posts on your behalf on approved platforms.",
  },
  {
    title: "Weekly intelligent updates",
    description: "Get audio and dashboard updates so you stay on top of performance without digging through spreadsheets.",
  },
  {
    title: "Real conversion tracking",
    description: "Engagement → interaction → sales. We focus on metrics that tie to revenue, not likes alone.",
  },
  {
    title: "Business intelligence insights",
    description: "AI-driven recommendations and trends so you can make better decisions with your marketing.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function Differentiators() {
  return (
    <section className="bg-white py-20 sm:py-28" id="different">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            What makes MarkitAI different
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            A virtual team that does the work, not just the scheduling.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {points.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50/50 p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
