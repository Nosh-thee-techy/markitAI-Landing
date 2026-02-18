"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40">
      {/* AI connection lines / nodes animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand-cyan/40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            style={{
              left: `${15 + (i * 7) % 70}%`,
              top: `${20 + (i * 11) % 60}%`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            style={{
              width: "80px",
              left: `${10 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
              transformOrigin: "left",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Virtual Marketing Team{" "}
              <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">
                Powered by AI
              </span>
            </motion.h1>
            <motion.p
              className="mx-auto mt-6 max-w-xl text-lg text-gray-600 sm:text-xl lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Analyze products, generate campaigns, post for you, and track real results—all in one platform.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="#waitlist"
                className="w-full rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple px-8 py-4 text-center text-base font-semibold text-white shadow-xl shadow-brand-purple/30 hover:shadow-brand-purple/40 transition-all sm:w-auto"
              >
                Join Waitlist
              </Link>
              <Link
                href="#dashboard"
                className="w-full rounded-2xl border-2 border-brand-dark/10 bg-white px-8 py-4 text-center text-base font-semibold text-brand-dark hover:border-brand-purple/30 hover:bg-gray-50 transition-all sm:w-auto"
              >
                See Demo
              </Link>
            </motion.div>
          </div>
          {/* Hero visual: dashboard / AI concept */}
          <motion.div
            className="relative mx-auto max-w-md lg:max-w-none"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-2xl shadow-brand-purple/10 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-purple" />
                </div>
                <span className="text-xs font-medium text-gray-500">MarkitAI Dashboard</span>
              </div>
              <div className="mt-4 space-y-4">
                <div className="h-2 w-3/4 rounded bg-gray-100" />
                <div className="h-2 w-full rounded bg-gray-100" />
                <div className="flex gap-4 pt-2">
                  <div className="h-16 flex-1 rounded-lg bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20" />
                  <div className="h-16 flex-1 rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-purple/20" />
                </div>
                <div className="h-20 rounded-lg bg-gray-50 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Engagement → Sales</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
