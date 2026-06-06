"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Globe, Share2, BadgeCheck } from "lucide-react";

const perks = [
  { icon: ShieldCheck, text: "Industry-recognised globally" },
  { icon: Globe,       text: "Accepted by 500+ companies" },
  { icon: Share2,      text: "Shareable on LinkedIn" },
  { icon: BadgeCheck,  text: "Lifetime certificate validity" },
];

const avatarLabels = ["AK","SR","VM","PR","NK"];

export default function Certificate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-24 px-4 md:px-8">
      {/* Purple gradient background — matching SVG paint3_linear */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(145deg, #D447FF 0%, #C060FF 40%, #EFB9FF 100%)",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-[-60px] right-[-60px] w-80 h-80 rounded-full bg-white/10 blur-3xl float" />
      <div className="absolute bottom-[-40px] left-[-40px] w-64 h-64 rounded-full bg-white/10 blur-3xl float" style={{ animationDelay: "3s" }} />
      <svg className="absolute inset-0 m-auto opacity-10 spin-slow pointer-events-none w-[700px] h-[700px]" viewBox="0 0 700 700">
        <circle cx="350" cy="350" r="320" stroke="white" strokeWidth="1" strokeDasharray="15 15" fill="none" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Text side ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/35 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Certification</span>
            </div>

            <h2
              className="font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
            >
              Master Certification<br />
              in UI/UX Design<br />
              <span className="text-white/80">With AI</span>
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
              Complete the 60-day programme and earn a globally recognised
              certificate that opens doors to top companies and freelance
              opportunities worldwide.
            </p>

            {/* Perk pills */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {perks.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl px-4 py-3"
                >
                  <Icon size={16} className="text-white shrink-0" />
                  <span className="text-white/85 text-xs font-medium leading-snug">{text}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#curriculum"
              className="btn-white inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold"
            >
              Get Certified — Enroll Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M12 5L19 12L12 19" stroke="#D447FF" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </a>
          </motion.div>

          {/* ── Certificate card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22,1,0.36,1] }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[440px]">
              {/* Glow shadow */}
              <div className="absolute inset-[-12px] bg-white/20 rounded-[48px] blur-2xl" />

              {/* Card */}
              <div className="relative bg-white rounded-[36px] overflow-hidden shadow-2xl">

                {/* Purple header band */}
                <div
                  className="px-8 py-6 text-center"
                  style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)" }}
                >
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
                    DesignNova Academy
                  </p>
                  <p className="text-white font-black text-xl">Certificate of Excellence</p>
                </div>

                {/* Body */}
                <div className="px-8 py-7 text-center">
                  <p className="text-[#9370b3] text-xs mb-2">This certifies that</p>
                  <p className="text-[#1a0030] font-black text-2xl mb-1">Your Name Here</p>
                  <div className="w-20 h-0.5 mx-auto mb-3" style={{ background: "linear-gradient(90deg,#D447FF,#EFB9FF)" }} />
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
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)" }}>
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

              {/* Avatar row below card */}
              <div className="mt-4 flex items-center justify-center gap-1">
                <div className="flex">
                  {avatarLabels.map((l, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center text-[10px] font-black"
                      style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)", marginLeft: i > 0 ? "-8px" : 0, zIndex: 5 - i }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <span className="text-white/70 text-xs ml-2">+25K graduates</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
