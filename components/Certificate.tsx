"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Globe, Share2, BadgeCheck } from "lucide-react";

const perks = [
  { icon: ShieldCheck, text: "Industry-recognised globally" },
  { icon: Globe,       text: "Accepted by 500+ companies" },
  { icon: Share2,      text: "Shareable on LinkedIn" },
  { icon: BadgeCheck,  text: "Lifetime certificate validity" },
];

const avatarLabels = ["AK", "SR", "VM", "PR", "NK"];

export default function Certificate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-28 px-4 md:px-8">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(145deg, #D447FF 0%, #C060FF 35%, #9519FF 70%, #6B0ECC 100%)" }}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Orbs */}
      <div className="absolute top-[-80px] right-[-60px] w-96 h-96 rounded-full bg-white/8 blur-[90px] float"  />
      <div className="absolute bottom-[-60px] left-[-40px] w-72 h-72 rounded-full bg-white/8 blur-[80px] float2" style={{ animationDelay: "3s" }} />

      {/* Orbit rings */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] spin-slow pointer-events-none w-[800px] h-[800px]" viewBox="0 0 800 800">
        <circle cx="400" cy="400" r="370" stroke="white" strokeWidth="1" strokeDasharray="18 18" fill="none" />
      </svg>
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] spin-rev pointer-events-none w-[540px] h-[540px]" viewBox="0 0 540 540">
        <circle cx="270" cy="270" r="255" stroke="white" strokeWidth="1" strokeDasharray="6 22" fill="none" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/35 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-white/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">Certification</span>
            </div>

            <h2
              className="font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
            >
              Master Certification<br />
              in UI/UX Design<br />
              <span
                style={{
                  background: "linear-gradient(90deg,#fff,#FFD6FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                With AI
              </span>
            </h2>

            <p className="text-white/65 text-base leading-relaxed mb-8 max-w-md">
              Complete the 60-day programme and earn a globally recognised
              certificate that opens doors to top companies and freelance
              opportunities worldwide.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {perks.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.09 }}
                  className="flex items-center gap-2.5 bg-white/14 backdrop-blur-sm border border-white/22 rounded-xl px-4 py-3 hover:bg-white/20 transition-colors"
                >
                  <Icon size={15} className="text-white shrink-0" />
                  <span className="text-white/85 text-xs font-medium leading-snug">{text}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#pricing"
              className="btn-white inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold"
            >
              Get Certified — Enroll Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M12 5L19 12L12 19" stroke="#D447FF" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Certificate card — floating */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.92 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[440px] float" style={{ animationDuration: "5s" }}>
              {/* Glow */}
              <div className="absolute inset-[-16px] bg-white/18 rounded-[52px] blur-3xl" />

              {/* Card */}
              <div className="relative bg-white rounded-[36px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,.3)]">

                {/* Header band */}
                <div
                  className="px-8 py-6 text-center relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)" }}
                >
                  <div className="absolute inset-0 dot-grid opacity-30" />
                  <p className="relative text-white/65 text-[11px] font-bold uppercase tracking-[0.18em] mb-1">
                    DesignNova Academy
                  </p>
                  <p className="relative text-white font-black text-xl">Certificate of Excellence</p>
                </div>

                {/* Body */}
                <div className="px-8 py-7 text-center">
                  <p className="text-[#9370b3] text-xs mb-2">This certifies that</p>
                  <p className="text-[#1a0030] font-black text-2xl mb-1">Your Name Here</p>
                  <div className="w-24 h-0.5 mx-auto mb-3" style={{ background: "linear-gradient(90deg,#D447FF,#EFB9FF)" }} />
                  <p className="text-[#7a5899] text-xs mb-4">has successfully completed</p>

                  <div className="bg-[#FAEAFF] border border-[#EFB9FF] rounded-2xl px-5 py-3.5 mb-6">
                    <p className="text-[#9519FF] font-black text-base leading-snug">
                      Master Certification in<br />UI/UX Design With AI
                    </p>
                  </div>

                  <div className="flex justify-between items-end pt-4 border-t border-[#EFB9FF]">
                    <div className="text-left">
                      <p className="text-[#D447FF] font-bold text-sm">DesignNova</p>
                      <p className="text-[#c0a0d8] text-[10px]">Issued 2025</p>
                    </div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)" }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15l-4.5 2.7 1.2-5.1L4 9.3l5.3-.5L12 4l2.7 4.8 5.3.5-4.7 3.3 1.2 5.1z" fill="white"/>
                      </svg>
                    </div>
                    <div className="text-right">
                      <p className="text-[#c0a0d8] text-[10px]">Credential ID</p>
                      <p className="text-[#D447FF] font-mono text-[10px]">DN-2025-XXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avatars below */}
              <div className="mt-5 flex items-center justify-center gap-1.5">
                <div className="flex">
                  {avatarLabels.map((l, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white/40 text-white flex items-center justify-center text-[10px] font-black"
                      style={{
                        background: "linear-gradient(135deg,#D447FF,#9519FF)",
                        marginLeft: i > 0 ? "-8px" : 0,
                        zIndex: 5 - i,
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <span className="text-white/65 text-xs ml-2">+25K graduates</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
