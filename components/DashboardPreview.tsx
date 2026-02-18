"use client";

import { motion } from "framer-motion";

const funnelSteps = [
  { label: "Engagement", value: "12.4k", width: "100%", color: "from-brand-cyan to-brand-blue" },
  { label: "Interaction", value: "3.2k", width: "75%", color: "from-brand-blue to-brand-purple" },
  { label: "Sales", value: "847", width: "45%", color: "from-brand-purple to-brand-purple-dark" },
];

export function DashboardPreview() {
  return (
    <section className="bg-gray-50/80 py-20 sm:py-28" id="dashboard">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            One view. Real impact.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            See engagement → interaction → sales in a single funnel. Clear insights, not graph overload.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-12 max-w-2xl rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-brand-dark">Campaign performance</h3>
            <span className="rounded-lg bg-brand-purple/10 px-3 py-1 text-sm font-medium text-brand-purple">
              Last 30 days
            </span>
          </div>
          <div className="space-y-6">
            {funnelSteps.map((step, i) => (
              <div key={step.label}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-brand-dark">{step.label}</span>
                  <span className="text-gray-600">{step.value}</span>
                </div>
                <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${step.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: step.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            Real conversion metrics—not vanity numbers. Updated weekly with AI insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
