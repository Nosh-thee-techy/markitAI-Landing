"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Product Data Integration",
    description: "Upload CSV, manual input, or connect ecommerce & social platforms.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
  {
    title: "Campaign Creation & Posting",
    description: "AI generates campaigns, posts with your permission.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783a.75.75 0 001.384-.577c-.42-.963-.74-1.961-.97-2.96h-.399m0 0a18.685 18.685 0 01-.359-2.25H12m-8.445 5.25c.05-.595.072-1.19.072-1.789 0-2.49-.5-4.833-1.385-6.999H17.5a4.5 4.5 0 010 9h-5.445" />
      </svg>
    ),
  },
  {
    title: "Performance Tracking",
    description: "Real-time metrics: engagement → conversion → sales.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 011.414-1.414L21 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18v2.25A2.25 2.25 0 004.5 22.5h15A2.25 2.25 0 0021.75 20.25V18" />
      </svg>
    ),
  },
  {
    title: "Weekly Intelligent Updates",
    description: "Voice + dashboard summary.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
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

export function Features() {
  return (
    <section className="bg-white py-20 sm:py-28" id="features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-brand-purple/30 bg-brand-purple/5 px-4 py-1.5 text-sm font-medium text-brand-purple mb-6">
            Why it&apos;s different
          </div>
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            What we do
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Your virtual marketing team in one platform.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 text-brand-purple">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-dark">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
