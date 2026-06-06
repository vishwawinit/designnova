"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MousePointer2 } from "lucide-react";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const avatarNames = ["AK", "SR", "VM", "PR"];

export default function Hero() {
  return (
    /* White page background — the card sits on top */
    <section id="hero" className="relative bg-white px-4 md:px-7 pt-4 pb-0 overflow-hidden">

      {/* ── The big gradient hero card (matches SVG paint0_linear #D447FF → #EFB9FF) ── */}
      <div className="relative w-full rounded-[40px] overflow-hidden min-h-[92vh] flex flex-col">

        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #D447FF 0%, #C060FF 30%, #D98FFF 65%, #EFB9FF 100%)",
          }}
        />

        {/* Decorative floating orbs — matching SVG ellipse positions */}
        <div className="absolute top-[8%]  right-[18%] w-52 h-52 rounded-full bg-[#E592FF]/25 blur-3xl float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[22%] left-[6%]  w-32 h-32 rounded-full bg-[#E592FF]/20 blur-2xl float" style={{ animationDelay: "1.8s" }} />
        <div className="absolute bottom-[18%] right-[4%]  w-24 h-24 rounded-full bg-[#E592FF]/30 blur-xl  float" style={{ animationDelay: "3.2s" }} />
        <div className="absolute bottom-[25%] left-[20%] w-20 h-20 rounded-full bg-white/15       blur-xl  pulse-orb" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[42%]  left-[48%] w-36 h-36 rounded-full bg-[#E592FF]/15 blur-3xl pulse-orb" style={{ animationDelay: "0.8s" }} />

        {/* Dashed orbit ring */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12] pointer-events-none spin-slow"
          width="780" height="780" viewBox="0 0 780 780"
        >
          <circle cx="390" cy="390" r="360" stroke="white" strokeWidth="1.2" strokeDasharray="18 18" fill="none" />
        </svg>

        {/* ── Content ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 pt-28 pb-20 flex-1 justify-center"
        >
          {/* Eyebrow tag */}
          <motion.div variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-widest uppercase">
              AI-Powered Design Bootcamp · Next Batch Soon
            </span>
          </motion.div>

          {/* Headline — "LEARN" small, "UI UX DESIGN" mega, "IN 60 DAYS" large */}
          <motion.p variants={fadeUp}
            className="text-white/75 text-lg md:text-xl font-semibold uppercase tracking-[0.25em] mb-2"
          >
            Learn
          </motion.p>

          <motion.h1 variants={fadeUp}
            className="font-black uppercase text-white leading-[0.9] tracking-[-0.02em] mb-2"
            style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
          >
            UI UX Design
          </motion.h1>

          <motion.p variants={fadeUp}
            className="text-white/90 font-black uppercase tracking-[0.12em] mb-8"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)" }}
          >
            In 60 Days
          </motion.p>

          <motion.p variants={fadeUp}
            className="max-w-xl text-white/65 text-base md:text-lg leading-relaxed mb-10"
          >
            Master industry-ready UI&nbsp;/&nbsp;UX skills with AI tools, expert
            mentors & live projects. Land your dream design job — or your money back.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <a
              href="#curriculum"
              className="btn-white flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold min-w-[190px] justify-center"
            >
              <MousePointer2 size={18} className="text-[#D447FF]" />
              Enroll Now
            </a>
            <a
              href="#curriculum"
              className="btn-ghost-white flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold min-w-[190px] justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M5 3L19 12L5 21V3Z" />
              </svg>
              Free Demo
            </a>
          </motion.div>

          {/* Social proof bar */}
          <motion.div variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-7 py-4"
          >
            {/* Avatar stack */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {avatarNames.map((name, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-black text-white bg-white/20"
                    style={{ marginLeft: i > 0 ? "-10px" : 0, zIndex: 4 - i, backdropFilter: "blur(6px)" }}
                  >
                    {name}
                  </div>
                ))}
              </div>
              <span className="text-white/80 text-sm">
                <strong className="text-white font-bold">50k+</strong> Registrations
              </span>
            </div>

            <div className="w-px h-8 bg-white/20 hidden sm:block" />

            {/* Stars */}
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFE600" />
                  </svg>
                ))}
                <span className="text-white font-bold text-sm ml-1">4.5</span>
              </div>
              <span className="text-white/55 text-xs">From 1,000+ Reviews</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
