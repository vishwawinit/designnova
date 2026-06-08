"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["Product Designer", "UX Researcher", "UI Specialist", "Design Lead"];
const companies = ["Google", "Amazon", "Swiggy", "Razorpay", "Flipkart", "Zomato", "Microsoft", "Uber"];
const avatarNames = ["AK", "SR", "VM", "PR"];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const chips = [
  { emoji: "✓",  title: "Figma Mastered",  sub: "Industry certified", pos: "top-2 right-2 md:top-4 md:right-0",    delay: 0.9  },
  { emoji: "🚀", title: "Portfolio Ready", sub: "5 projects built",   pos: "bottom-16 right-2 md:bottom-20 md:right-0", delay: 1.2 },
  { emoji: "💼", title: "92% Placed",      sub: "Within 90 days",    pos: "bottom-2 left-2 md:bottom-4 md:left-0",    delay: 1.5 },
  { emoji: "⭐", title: "4.8 / 5 Rating",  sub: "1,200+ reviews",    pos: "top-16 left-2 md:top-20 md:left-0",        delay: 1.8 },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative bg-white px-4 md:px-7 pt-4 pb-0 overflow-hidden">
      {/* ── Main gradient card ── */}
      <div
        className="relative w-full rounded-[40px] overflow-hidden min-h-[93vh] flex flex-col"
        style={{ background: "linear-gradient(135deg, #D447FF 0%, #B848FF 25%, #C060FF 50%, #D98FFF 75%, #EFB9FF 100%)" }}
      >
        {/* Orbs */}
        <div className="absolute top-[4%]  right-[10%]  w-96 h-96  rounded-full bg-white/10 blur-[90px] float" />
        <div className="absolute top-[50%] left-[2%]   w-56 h-56  rounded-full bg-white/10 blur-[70px] float2" style={{ animationDelay:"2.5s" }} />
        <div className="absolute bottom-[8%]  right-[6%]  w-48 h-48  rounded-full bg-white/12 blur-3xl  float"  style={{ animationDelay:"4s" }} />
        <div className="absolute bottom-[30%] left-[30%]  w-64 h-64  rounded-full bg-[#C060FF]/20 blur-[80px] pulse-orb" style={{ animationDelay:"1.2s" }} />

        {/* Orbit rings */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none spin-slow" width="1000" height="1000" viewBox="0 0 1000 1000">
          <circle cx="500" cy="500" r="470" stroke="white" strokeWidth="1" strokeDasharray="22 22" fill="none" />
        </svg>
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none spin-rev" width="680" height="680" viewBox="0 0 680 680">
          <circle cx="340" cy="340" r="320" stroke="white" strokeWidth="1" strokeDasharray="7 26" fill="none" />
        </svg>

        {/* ── Content grid ── */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 px-6 md:px-14 lg:px-16 pt-28 lg:pt-20 pb-10 flex-1">

          {/* ── LEFT: text ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Live badge */}
            <motion.div variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2.5 bg-white/18 backdrop-blur-md border border-white/32 rounded-full px-5 py-2.5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-white/80" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <span className="text-white text-xs font-semibold tracking-[0.12em] uppercase">
                India's #1 UI/UX Bootcamp · Next Batch Soon
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="mb-8 w-full">
              <p className="text-white/65 text-base md:text-lg font-semibold uppercase tracking-[0.24em] mb-1.5">
                Become a
              </p>

              {/* Rotating role word */}
              <div
                className="relative overflow-hidden mb-2"
                style={{ height: "1.1em", fontSize: "clamp(2.6rem, 7.5vw, 6.5rem)", fontWeight: 900, lineHeight: 1.1 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIdx]}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 text-white whitespace-nowrap"
                  >
                    {roles[roleIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start flex-wrap">
                <p className="text-white/80 font-black uppercase tracking-[0.08em]"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}>
                  In Just
                </p>
                <span
                  className="px-4 py-1 rounded-2xl font-black uppercase tracking-wider"
                  style={{
                    fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
                    background: "rgba(255,255,255,0.22)",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    color: "#fff",
                  }}
                >
                  60 Days
                </span>
              </div>
            </motion.div>

            <motion.p variants={fadeUp}
              className="max-w-[480px] text-white/60 text-base md:text-lg leading-relaxed mb-10"
            >
              Master industry-ready UI&nbsp;/&nbsp;UX with AI tools, live projects
              &amp; world-class mentors. Land your dream design job —{" "}
              <strong className="text-white/90 font-semibold">or your money back.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
              <a href="#pricing"
                className="btn-white flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold w-full sm:w-auto justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="#D447FF" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                Enroll Now — Free Counseling
              </a>
              <a href="#curriculum"
                className="btn-ghost-white flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold w-full sm:w-auto justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M5 3L19 12L5 21V3Z" />
                </svg>
                Watch Free Demo
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex">
                  {avatarNames.map((n, i) => (
                    <div key={i}
                      className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center text-[10px] font-black text-white"
                      style={{ background: "rgba(255,255,255,0.22)", marginLeft: i > 0 ? "-8px" : 0, zIndex: 4 - i }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <span className="text-white/80 text-sm"><strong className="text-white font-bold">50K+</strong> Students</span>
              </div>
              <div className="h-5 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFE600" />
                  </svg>
                ))}
                <span className="text-white font-bold text-sm ml-1">4.8</span>
                <span className="text-white/50 text-xs">/ 5</span>
              </div>
              <div className="h-5 w-px bg-white/20 hidden sm:block" />
              <span className="text-white/80 text-sm"><strong className="text-white">92%</strong> Placement Rate</span>
            </motion.div>

            {/* Placed at */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest mr-1">Placed at:</span>
              {companies.map(c => (
                <span key={c}
                  className="text-white/70 text-xs font-semibold bg-white/10 border border-white/15 rounded-full px-3 py-1 hover:bg-white/18 transition-colors"
                >
                  {c}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Visual mockup ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[300px] h-[360px] md:w-[380px] md:h-[440px] flex-shrink-0 hidden lg:block"
          >
            {/* Center circle display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <svg className="absolute inset-0 w-full h-full spin-slow opacity-20" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="92" stroke="white" strokeWidth="1.5" strokeDasharray="14 10" fill="none" />
                </svg>
                <svg className="absolute inset-0 w-full h-full spin-rev opacity-15" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="76" stroke="white" strokeWidth="1" strokeDasharray="5 18" fill="none" />
                </svg>
                <div className="absolute inset-6 rounded-full bg-white/22 backdrop-blur-xl border border-white/38 flex flex-col items-center justify-center">
                  <p className="text-white/55 text-[10px] font-bold uppercase tracking-widest">Duration</p>
                  <p className="text-white font-black leading-none mt-0.5" style={{ fontSize: "clamp(3rem,9vw,4.5rem)" }}>60</p>
                  <p className="text-white/80 text-sm font-bold uppercase tracking-wider">Days</p>
                </div>
              </div>
            </div>

            {/* Achievement chips */}
            {chips.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: c.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute ${c.pos} bg-white/22 backdrop-blur-xl border border-white/38 rounded-2xl px-4 py-3 float`}
                style={{ animationDelay: `${i * 1.75}s` }}
              >
                <p className="text-white text-xs font-bold flex items-center gap-1.5">
                  <span>{c.emoji}</span>{c.title}
                </p>
                <p className="text-white/55 text-[10px] mt-0.5">{c.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="relative z-10 flex justify-center pb-8"
        >
          <div className="flex flex-col items-center gap-1.5 text-white/35 scroll-caret">
            <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll to explore</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
