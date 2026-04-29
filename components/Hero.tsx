"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const streaksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (streaksRef.current) {
      const streaks = streaksRef.current.querySelectorAll(".streak");
      gsap.to(streaks, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random",
        },
      });
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section className="relative bg-[#02092a]  flex flex-col items-center justify-start md:justify-center py-20 overflow-hidden ">
      {/* Background Elements */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        ref={streaksRef}
      >
        <div className="absolute top-0 right-0 w-[80%] h-full bg-gradient-to-l from-brand-primary/20 to-transparent blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-primary/10 blur-[100px] opacity-30" />

        {/* Animated Streaks/Glows managed by GSAP */}
        <div className="streak absolute top-1/4 right-0 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent rotate-[35deg] opacity-40 blur-sm" />
        <div className="streak absolute top-1/3 right-10 w-[400px] h-[1px] bg-white/20 rotate-[35deg] opacity-30" />
        <div className="streak absolute top-1/2 right-0 w-[800px] h-[3px] bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent rotate-[35deg] opacity-50 blur-md" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl md:text-[72px] font-bold text-white leading-tight tracking-tight mb-8"
          variants={itemVariants}
        >
          Protecting What Matters <br />
          <span className="text-white/90 font-medium">
            with Intelligent Security
          </span>
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-[22px] text-white/60 leading-relaxed mb-12 h-[3.5em] md:h-auto"
          variants={itemVariants}
        >
          {"Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep employees engaged from anywhere."
            .split("")
            .map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: index * 0.02 + 0.8,
                }}
              >
                {char}
              </motion.span>
            ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: 0.8,
            }}
            className="inline-block w-[2px] h-[1.2em] bg-brand-primary ml-1 align-middle"
          />
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <Link
            href="/services"
            className="group relative bg-linear-to-b from-brand-primary to-brand-blue hover:bg-brand-secondary text-white px-12 py-5 rounded-full text-lg font-semibold transition-all shadow-2xl shadow-brand-primary/40 flex items-center"
          >
            Explore Our Services
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>

      {/* Subtle Star Particles */}
      <div className="absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40 shadow-[0_0_8px_white]" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-700 opacity-60 shadow-[0_0_8px_white]" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000 opacity-30 shadow-[0_0_8px_white]" />
    </section>
  );
};

export default Hero;
