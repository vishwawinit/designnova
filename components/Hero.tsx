"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

const avatarNames = ["AK", "SR", "VM", "PR"];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #B898F8 0%, #C4AAFF 40%, #CDB4FF 70%, #D4BCFF 100%)",
      }}
    >
      {/* Subtle background orbs */}
      <div className="absolute top-1/4 right-[5%]  w-[500px] h-[500px] rounded-full bg-white/8 blur-[100px] pulse-orb" />
      <div className="absolute top-[60%] left-[10%] w-[300px] h-[300px] rounded-full bg-white/8 blur-[80px] float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2  w-[400px] h-[400px] rounded-full bg-[#A87AF0]/15 blur-[120px] pulse-orb" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pt-24 pb-10">
        <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-end gap-0">

          {/* LEFT — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col items-start pt-12 lg:pt-20"
          >
            {/* LEARN label */}
            <motion.p
              variants={fadeUp}
              className="text-white/75 font-bold uppercase tracking-[0.3em] text-base md:text-lg mb-1"
            >
              Learn
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={fadeUp}
              className="font-black uppercase text-white leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3.8rem, 11vw, 9rem)" }}
            >
              UI UX<br />Design
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-black uppercase text-white leading-tight tracking-[-0.01em] mb-8"
              style={{ fontSize: "clamp(1.8rem, 5vw, 4.2rem)" }}
            >
              In 60 Days
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#7B3FF5] font-bold text-sm px-7 py-3.5 rounded-full hover:shadow-[0_8px_30px_rgba(255,255,255,.35)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#7B3FF5" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                Enroll Now
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 bg-white/18 border border-white/35 text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/28 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M5 3L19 12L5 21V3Z" fillOpacity=".9" />
                </svg>
                Free Demo
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 md:gap-8">
              <div>
                <p className="text-white font-black text-2xl md:text-3xl leading-none">25K</p>
                <p className="text-white/65 text-xs font-semibold uppercase tracking-wider mt-0.5">Satisfied<br />Students</p>
              </div>

              <div className="w-px h-10 bg-white/25" />

              <div>
                <p className="text-white font-black text-2xl md:text-3xl leading-none">10K</p>
                <p className="text-white/65 text-xs font-semibold uppercase tracking-wider mt-0.5">Students<br />Placed</p>
              </div>

              <div className="w-px h-10 bg-white/25 hidden sm:block" />

              {/* Avatar stack + rating */}
              <div className="flex items-center gap-3">
                <div className="flex">
                  {avatarNames.map((n, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white/50 flex items-center justify-center text-[10px] font-black text-white"
                      style={{
                        background: "rgba(255,255,255,0.25)",
                        backdropFilter: "blur(6px)",
                        marginLeft: i > 0 ? "-8px" : 0,
                        zIndex: 4 - i,
                      }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFE600" />
                      </svg>
                    ))}
                    <span className="text-white font-bold text-sm ml-1">4.5</span>
                  </div>
                  <p className="text-white/60 text-[11px]">1000+ Reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — real Figma mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-end justify-center relative shrink-0"
            style={{ width: "420px", height: "500px" }}
          >
            {/* Glow behind mascot */}
            <div
              className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[70px]"
              style={{ background: "rgba(255,255,255,0.18)" }}
            />

            <div
              className="relative"
              style={{ animation: "float 5s ease-in-out infinite" }}
            >
              <Image
                src="/mascot.png"
                alt="Figma Mascot"
                width={400}
                height={480}
                className="drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute top-8 right-0 bg-white/25 backdrop-blur-md border border-white/40 rounded-2xl px-4 py-2.5"
              style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1.5s" }}
            >
              <p className="text-white text-xs font-bold">🎓 Free Internship</p>
              <p className="text-white/70 text-[10px]">After completion</p>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-24 left-0 bg-white/25 backdrop-blur-md border border-white/40 rounded-2xl px-4 py-2.5"
              style={{ animation: "float 7s ease-in-out infinite", animationDelay: "3s" }}
            >
              <p className="text-white text-xs font-bold">💼 10K+ Placed</p>
              <p className="text-white/70 text-[10px]">TCS · TATA · Uber</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
