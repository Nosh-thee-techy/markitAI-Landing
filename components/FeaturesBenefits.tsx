"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Real Sales Data Driven",
    description: "Metrics that tie to revenue: engagement → interaction → sales, not vanity numbers.",
    icon: "📊",
  },
  {
    title: "Multi-Platform Posting",
    description: "Shopify, HubSpot, Jumia, Kilimall, Instagram, Facebook, WhatsApp—one place to run campaigns.",
    icon: "🔗",
  },
  {
    title: "AI-Powered Insights",
    description: "Weekly intelligent updates and recommendations so you make better decisions.",
    icon: "✨",
  },
  {
    title: "Custom Weekly Plans",
    description: "Plans that adapt to your goals and product performance.",
    icon: "📅",
  },
  {
    title: "Interactive Timeline / Planner",
    description: "See what’s running and what’s next at a glance.",
    icon: "🗓️",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function FeaturesBenefits() {
  return (
    <section className="bg-gray-50/80 py-20 sm:py-28" id="benefits">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Features & benefits
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Everything you need from a virtual marketing team.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden>{b.icon}</span>
              <h3 className="mt-3 font-semibold text-brand-dark">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
