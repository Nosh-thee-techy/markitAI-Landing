"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {!logoError ? (
            <Image
              src="/logo.png"
              alt="MarkitAI"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
              priority
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-xl font-bold text-brand-dark">
              Markit<span className="text-brand-purple">AI</span>
            </span>
          )}
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-brand-dark/80 hover:text-brand-purple transition-colors"
          >
            How it works
          </Link>
          <Link
            href="#different"
            className="text-sm font-medium text-brand-dark/80 hover:text-brand-purple transition-colors"
          >
            Why MarkitAI
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-brand-dark/80 hover:text-brand-purple transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="#waitlist"
            className="rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 transition-shadow"
          >
            Join waitlist
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-brand-dark hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              <Link href="#how-it-works" className="py-2 text-brand-dark" onClick={() => setMobileOpen(false)}>
                How it works
              </Link>
              <Link href="#different" className="py-2 text-brand-dark" onClick={() => setMobileOpen(false)}>
                Why MarkitAI
              </Link>
              <Link href="#faq" className="py-2 text-brand-dark" onClick={() => setMobileOpen(false)}>
                FAQ
              </Link>
              <Link
                href="#waitlist"
                className="mt-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-3 text-center font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Join waitlist
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
