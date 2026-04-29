"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Boltshift", icon: "⚡" },
  { name: "Lightbox", icon: "📦" },
  { name: "FeatherDev", icon: "🪶" },
  { name: "GlobalBank", icon: "🌐" },
];

const TrustedSection = () => {
  return (
    <section className="relative z-10 py-8 bg-[#080E1C]  border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-white/40 uppercase tracking-[0.25em] mb-6"
        >
          Trusted by 4,000+ companies
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05, filter: "grayscale(0%)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex items-center space-x-3 grayscale transition-all duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg text-xl border border-white/10 shadow-inner">
                {logo.icon}
              </div>
              <span className="text-sm md:text-2xl font-bold text-white tracking-tighter">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative side glows to blend with brand-dark */}
      {/* <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-dark to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-dark to-transparent z-20 pointer-events-none" /> */}
    </section>
  );
};

export default TrustedSection;
