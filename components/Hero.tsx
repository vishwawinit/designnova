"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MousePointer2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0030] via-[#2D0050] to-[#0A0012]" />

      {/* Decorative orbs */}
      <div className="absolute top-24 right-[15%] w-48 h-48 rounded-full bg-[#E592FF]/15 blur-3xl pulse-orb" />
      <div className="absolute top-40 left-[8%] w-32 h-32 rounded-full bg-[#E592FF]/10 blur-2xl floating-orb" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 right-[5%] w-20 h-20 rounded-full bg-[#E592FF]/15 blur-xl floating-orb" style={{ animationDelay: "2.5s" }} />
      <div className="absolute bottom-24 left-[18%] w-28 h-28 rounded-full bg-[#E592FF]/10 blur-2xl pulse-orb" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#D447FF]/06 blur-3xl" />

      {/* Dashed circle decoration */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dashed-circle opacity-10 pointer-events-none"
        width="900" height="900" viewBox="0 0 900 900"
      >
        <circle cx="450" cy="450" r="400" stroke="#D447FF" strokeWidth="1.5" strokeDasharray="20 20" fill="none" />
      </svg>

      {/* Rounded hero card — matching SVG design */}
      <div className="relative z-10 w-full max-w-[1800px] mx-4 md:mx-8 rounded-[40px] overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C0035] via-[#2A0048] to-[#120020] rounded-[40px]" />

        {/* Inner orbs */}
        <div className="absolute top-16 right-[20%] w-44 h-44 rounded-full bg-[#E592FF]/20 blur-2xl floating-orb" />
        <div className="absolute bottom-20 left-[12%] w-28 h-28 rounded-full bg-[#E592FF]/15 blur-xl floating-orb" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-[5%] w-20 h-20 rounded-full bg-[#E592FF]/20 blur-xl pulse-orb" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 py-20">
          {/* Badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="mb-6 inline-flex items-center gap-2 bg-[#D447FF]/15 border border-[#D447FF]/30 rounded-full px-4 py-2 text-sm text-[#E592FF]"
          >
            <span className="w-2 h-2 rounded-full bg-[#D447FF] animate-pulse" />
            AI-Powered Design Bootcamp · Batch Starting Soon
          </motion.div>

          {/* Main headline */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter text-white"
          >
            Learn
          </motion.h1>
          <motion.h1
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter gradient-text"
          >
            UI UX Design
          </motion.h1>
          <motion.h1
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter text-white"
          >
            In 60 Days
          </motion.h1>

          {/* Sub text */}
          <motion.p
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-8 max-w-2xl text-white/60 text-lg md:text-xl leading-relaxed"
          >
            Master industry-ready UI/UX skills with AI tools, expert mentors, and real-world projects.
            Land your dream design job — or your money back.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              id="enroll"
              href="#curriculum"
              className="btn-primary text-white font-bold text-base px-8 py-4 rounded-full flex items-center gap-3 min-w-[200px] justify-center"
            >
              <MousePointer2 size={18} />
              Enroll Now
            </a>
            <a
              id="demo"
              href="#curriculum"
              className="btn-outline text-white/80 font-semibold text-base px-8 py-4 rounded-full flex items-center gap-3 bg-white/5 min-w-[200px] justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" fill="white" fillOpacity="0.15" />
              </svg>
              Free Demo
            </a>
          </motion.div>

          {/* Social proof avatars + rating */}
          <motion.div
            custom={6} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-12 flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Avatar stack */}
            <div className="flex items-center">
              {[0,1,2,3].map((i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full border-2 border-white bg-gradient-to-br from-[#D447FF] to-[#9519FF] -ml-3 first:ml-0 overflow-hidden flex items-center justify-center text-xs font-bold text-white"
                  style={{ zIndex: 4 - i }}
                >
                  {["AK","SR","VM","PR"][i]}
                </div>
              ))}
              <div className="ml-3 text-white/60 text-sm">
                <span className="text-white font-semibold">50k+</span> Registrations
              </div>
            </div>

            <div className="w-px h-8 bg-white/15 hidden sm:block" />

            {/* Stars */}
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFF707" />
                  </svg>
                ))}
                <span className="text-white font-bold ml-1">4.5</span>
              </div>
              <p className="text-white/50 text-xs">From 1000+ Reviews</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
