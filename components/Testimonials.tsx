"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Finally, something that actually posts for us and ties back to sales. Not another scheduler.",
    author: "Early beta user",
    role: "E-commerce, Lagos",
  },
  {
    quote: "The weekly voice update is a game-changer. I know exactly how campaigns are performing without opening a spreadsheet.",
    author: "SME owner",
    role: "Retail",
  },
  {
    quote: "We connected Shopify and Jumia. MarkitAI created and ran campaigns. Our attributed sales went up in the first month.",
    author: "Beta tester",
    role: "Multi-platform seller",
  },
];

const platforms = ["Shopify", "HubSpot", "Jumia", "Kilimall", "Instagram", "Facebook", "WhatsApp"];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-28" id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            What early users say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Early users, beta testers, and SME endorsements.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="mt-12 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/50 p-8 sm:p-10 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center max-w-2xl mx-auto"
              >
                <p className="text-lg sm:text-xl text-brand-dark font-medium">&ldquo;{testimonials[index].quote}&rdquo;</p>
                <p className="mt-4 font-semibold text-brand-dark">{testimonials[index].author}</p>
                <p className="text-sm text-gray-500">{testimonials[index].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-brand-purple" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Platform logos / supported */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-gray-500 mb-4">Supported ecommerce & social platforms</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {platforms.map((name) => (
              <span
                key={name}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
