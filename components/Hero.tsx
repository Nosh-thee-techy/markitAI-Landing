"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your AI-Powered{" "}
          <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">
            Virtual Marketing Team
          </span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Connect your product data. We analyze performance, create campaigns, post on your approved
          platforms, and track real engagement-to-sales conversion—so you get a marketing team without the cost.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="#waitlist"
            className="w-full rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple px-8 py-4 text-center text-base font-semibold text-white shadow-xl shadow-brand-purple/30 hover:shadow-brand-purple/40 transition-all sm:w-auto"
          >
            Join the Waitlist
          </Link>
          <Link
            href="#how-it-works"
            className="w-full rounded-2xl border-2 border-brand-dark/10 bg-white px-8 py-4 text-center text-base font-semibold text-brand-dark hover:border-brand-purple/30 hover:bg-gray-50 transition-all sm:w-auto"
          >
            See How It Works
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
