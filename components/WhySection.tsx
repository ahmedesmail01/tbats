"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  "Real-time video analytics & early-warning alerts",
  "Movement tracking for pinpoint monitoring",
  "Heightened situational awareness across any environment",
];

const image = "/images/cam-2.png";

const WhySection = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Unleash innovation and accelerate growth with our dynamic product.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Features List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="mt-1 w-6 h-6 flex items-center justify-center rounded-md border border-brand-secondary/30 text-brand-secondary">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl text-white/90 font-medium leading-tight group-hover:text-white transition-colors">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-linear-to-b from-brand-primary to-brand-blue hover:opacity-90 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all shadow-xl shadow-brand-primary/20"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Visual Section */}
          <div className="relative">
            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[40px] overflow-hidden"
            >
              <Image
                src={image}
                alt="Security Camera AI"
                width={490}
                height={500}
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/60 to-transparent" />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute -top-10 -left-10 md:-left-20 z-20 w-full max-w-[320px] p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50"
            >
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse shadow-[0_0_10px_#2d46d5]" />
                <p className="text-lg font-semibold text-white leading-snug">
                  24/7 Automated Monitoring With Our AI Engine
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-10 -right-4 md:-right-10 z-20 w-full max-w-[340px] p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50"
            >
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-brand-secondary rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]" />
                <p className="text-lg font-semibold text-white leading-snug">
                  Seamless Integration Into Your Existing Smart Systems
                  Ecosystem
                </p>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/10 blur-[120px] rounded-full z-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
