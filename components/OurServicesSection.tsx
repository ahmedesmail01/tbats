"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const shield = "/images/shield.png";
const cam = "/images/cam.png";
const bot = "/images/bot.png";

const services = [
  {
    title: "AI-Powered Security Solutions",
    image: shield,
    description:
      "Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work.",
    icon: (
      <div className="relative w-48 h-48 mx-auto mb-6">
        <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative z-10 w-full h-full text-brand-primary drop-shadow-[0_0_15px_rgba(45,70,213,0.5)]"
        >
          <path
            d="M12 2L4 5V11C4 16.55 7.41 21.74 12 23C16.59 21.74 20 16.55 20 11V5L12 2Z"
            fill="currentColor"
            fillOpacity="0.1"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    highlight: true,
  },
  {
    title: "Video Surveillance & AI Analytics",
    image: cam,
    description:
      "Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work.",
    icon: (
      <div className="relative w-48 h-48 mx-auto mb-6">
        <div className="absolute inset-0 bg-brand-secondary/10 blur-3xl rounded-full" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative z-10 w-full h-full text-white/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        >
          <path
            d="M23 7L16 12L23 17V7Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M1 5H15V19H1V5Z"
            fill="currentColor"
            fillOpacity="0.1"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="8" cy="12" r="3" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  },
  {
    title: "Video Surveillance & AI Analytics",
    image: bot,
    description:
      "Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work.",
    icon: (
      <div className="relative w-48 h-48 mx-auto mb-6">
        <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative z-10 w-full h-full text-brand-secondary/60 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        >
          <path
            d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
            fill="currentColor"
            fillOpacity="0.1"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="12" cy="10" r="2" fill="white" />
          <circle cx="16" cy="10" r="2" fill="white" />
          <circle cx="8" cy="10" r="2" fill="white" />
        </svg>
      </div>
    ),
  },
];

const OurServicesSection = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(45,70,213,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Star Particles */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[10%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-[15%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 left-[20%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-40 right-[10%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute top-1/2 left-[5%] w-[1.5px] h-[1.5px] bg-white rounded-full shadow-[0_0_10px_white]"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Services
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl border transition-all duration-500 group flex flex-col items-center text-center h-full
                ${
                  service.highlight
                    ? "bg-white/5 border-brand-primary/30 shadow-[0_0_40px_rgba(45,70,213,0.1)]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/10"
                }`}
            >
              {/* {service.icon} */}
              <Image
                src={service.image}
                alt={service.title}
                width={150}
                height={200}
              />

              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-white/50 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>

              <Link
                href="/services"
                className="w-full py-4 rounded-xl bg-linear-to-b from-brand-primary to-brand-blue text-white font-semibold transition-all hover:opacity-90 shadow-lg shadow-brand-primary/20"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="text-white/60 hover:text-white transition-colors flex items-center justify-center gap-2 text-lg font-medium group"
          >
            View All
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServicesSection;
