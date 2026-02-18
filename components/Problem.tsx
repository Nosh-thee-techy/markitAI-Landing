"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "Marketing overwhelm",
    description: "SMEs wear too many hats. Running campaigns, posting, and analyzing data takes time you don't have.",
    icon: "😓",
  },
  {
    title: "Agencies are expensive",
    description: "Hiring an agency or full-time marketer isn't realistic for most small teams. You need results without the overhead.",
    icon: "💰",
  },
  {
    title: "Data exists but isn't actionable",
    description: "Product data, sales numbers, and engagement live in spreadsheets and platforms—but nobody's turning them into campaigns.",
    icon: "📊",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Problem() {
  return (
    <section className="bg-white py-20 sm:py-28" id="problem">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Sound familiar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Most small businesses face the same marketing bottlenecks.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>{p.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-brand-dark">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
