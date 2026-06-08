"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const avatarLabels = ["AK", "SR", "VM", "PR", "NK"];

export default function Certificate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-20 px-4 md:px-8">

      {/* Top banner — "GLOBALLY RECOGNIZED CERTIFICATIONS" matches Frame 83 */}
      <div className="w-full mb-14">
        <div
          className="max-w-3xl mx-auto text-center text-white font-black text-lg md:text-2xl uppercase tracking-[0.12em] py-4 px-8 rounded-2xl"
          style={{ background: "linear-gradient(90deg, #B060FF, #D447FF, #B060FF)" }}
        >
          Globally Recognized Certifications
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — text content matching Frame 83 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="font-black leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#1a0030" }}
            >
              Master Certification in{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#D447FF,#9519FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                UI/UX Design With AI
              </span>
            </h2>

            <p className="text-[#6b5080] text-base leading-relaxed mb-6 max-w-md">
              Not just that, along with the Master Certification in UI/UX Design With AI Course you shall
              be given a 9-course module completion certificate, each validating your skills across
              the full design stack.
            </p>

            {/* Avatars + count — matches Frame 83 exactly */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex">
                {avatarLabels.map((l, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white text-white flex items-center justify-center text-[10px] font-black shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${"#D447FF,#9519FF,#1ABCFE,#0ACF83,#F24E1E".split(",")[i % 5]}, #7B3FF5)`,
                      marginLeft: i > 0 ? "-8px" : 0,
                      zIndex: 6 - i,
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-black text-[#1a0030] text-sm">25,000+</p>
                <p className="text-[#9370b3] text-xs">Get certified</p>
              </div>
            </div>

            {/* CTAs — matches Frame 83 */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)", boxShadow: "0 8px 24px rgba(212,71,255,.35)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                Enroll Now
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full border-2 text-[#7B3FF5] hover:bg-[#FAEAFF] transition-all"
                style={{ borderColor: "#D447FF" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#D447FF">
                  <path d="M5 3L19 12L5 21V3Z" />
                </svg>
                Free Demo
              </a>
            </div>
          </motion.div>

          {/* RIGHT — certificate card mockup (matches Frame 83 style) */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.92 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center relative"
          >
            {/* Award badge icon — top left of certificate area */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
              style={{ background: "linear-gradient(135deg,#C8A0FF,#9519FF)" }}
            >
              {/* ribbon/badge icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="12" r="8" stroke="white" strokeWidth="2" />
                <path d="M10 18L8 28L16 24L24 28L22 18" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M16 8L17.5 11H20.5L18 13L19 16L16 14.5L13 16L14 13L11.5 11H14.5L16 8Z" fill="white" />
              </svg>
            </motion.div>

            {/* Trophy — bottom right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -right-4 z-20 w-14 h-14 rounded-xl flex items-center justify-center shadow-xl"
              style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)" }}
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M8 4H24V18C24 22.4 20.4 26 16 26C11.6 26 8 22.4 8 18V4Z" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.2)" />
                <path d="M4 6H8V14C8 14 6 12 4 10V6Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)" />
                <path d="M24 6H28V10C26 12 24 14 24 14V6Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)" />
                <path d="M12 26H20M16 26V29M10 29H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Certificate card */}
            <div
              className="relative w-full max-w-[420px] float"
              style={{ animationDuration: "5s" }}
            >
              {/* Soft glow */}
              <div className="absolute inset-[-20px] bg-[#D447FF]/12 rounded-[56px] blur-3xl" />

              <div className="relative bg-white rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(148,83,255,.18)]"
                style={{ border: "1px solid rgba(212,71,255,0.15)" }}
              >
                {/* Purple header */}
                <div
                  className="px-7 py-5 flex items-center justify-between"
                  style={{ background: "linear-gradient(135deg,#8B5CF6,#7B3FF5)" }}
                >
                  <div>
                    <p className="text-white/60 text-[11px] font-semibold uppercase tracking-widest mb-0.5">DesignNova</p>
                    <p className="text-white font-black text-base">UI/UX Layout Certified</p>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 42 42" fill="none">
                      <circle cx="14" cy="22" r="8" stroke="white" strokeWidth="3" />
                      <line x1="22" y1="22" x2="38" y2="22" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      <rect x="11" y="11" width="3.2" height="10" rx="1.6" fill="white" />
                      <rect x="19" y="8" width="10" height="3.2" rx="1.6" fill="white" />
                    </svg>
                  </div>
                </div>

                {/* Body */}
                <div className="px-7 py-7">
                  <p className="text-[#9370b3] text-xs mb-1.5">This certifies that</p>
                  <p className="text-[#1a0030] font-black text-2xl mb-1">Your Name Here</p>
                  <div className="w-20 h-0.5 mb-3" style={{ background: "linear-gradient(90deg,#D447FF,#EFB9FF)" }} />
                  <p className="text-[#7a5899] text-xs mb-4">has successfully completed the 60-day programme</p>

                  <div className="bg-[#FAEAFF] border border-[#EFB9FF] rounded-2xl px-5 py-3.5 mb-6">
                    <p className="text-[#9519FF] font-black text-sm leading-snug">
                      Master Certification in UI/UX Design With AI
                    </p>
                    <p className="text-[#B080D0] text-xs mt-1">9-course module completion · Industry recognised</p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-[#EFB9FF]/60">
                    <div>
                      <p className="text-[#D447FF] font-bold text-sm">DesignNova</p>
                      <p className="text-[#c0a0d8] text-[10px]">Issued 2025</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="11" height="11" viewBox="0 0 24 24">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-[#c0a0d8] text-[10px]">Credential ID</p>
                      <p className="text-[#D447FF] font-mono text-[10px]">DN-2025-XXXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
