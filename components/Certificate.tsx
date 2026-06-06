"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Globe, Star } from "lucide-react";

const benefits = [
  { icon: <Shield size={20} className="text-[#D447FF]" />, text: "Industry-recognized certification" },
  { icon: <Globe size={20} className="text-[#D447FF]" />, text: "Globally accepted by 500+ companies" },
  { icon: <Star size={20} className="text-[#D447FF]" />, text: "Shareable on LinkedIn & Behance" },
  { icon: <Award size={20} className="text-[#D447FF]" />, text: "Lifetime certificate validity" },
];

export default function Certificate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F001A] via-[#180028] to-[#0A0012]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D447FF]/06 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#D447FF] text-sm font-semibold uppercase tracking-widest mb-5 bg-[#D447FF]/10 px-4 py-2 rounded-full border border-[#D447FF]/20">
              Certification
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Master Certification
              <br />
              <span className="gradient-text">in UI/UX Design</span>
              <br />
              With AI
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
              Complete the program and earn a globally recognized certification that opens doors
              to top companies and freelance opportunities worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3"
                >
                  {b.icon}
                  <span className="text-white/70 text-sm">{b.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#enroll"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="btn-primary inline-flex items-center gap-3 text-white font-bold text-base px-8 py-4 rounded-full"
            >
              Get Certified — Enroll Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.a>
          </motion.div>

          {/* Certificate visual */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[480px]">
              {/* Glow behind cert */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D447FF]/30 to-[#9519FF]/20 rounded-3xl blur-2xl -m-4" />

              {/* Certificate card */}
              <div className="relative bg-gradient-to-br from-[#FAEAFF] to-white rounded-3xl p-8 shadow-2xl">
                {/* Header band */}
                <div className="bg-gradient-to-r from-[#D447FF] to-[#9519FF] rounded-2xl p-4 mb-6 text-center">
                  <div className="text-white text-xs font-semibold uppercase tracking-widest opacity-80 mb-1">
                    DesignNova Academy
                  </div>
                  <div className="text-white font-black text-xl">Certificate of Excellence</div>
                </div>

                {/* Body */}
                <div className="text-center">
                  <p className="text-[#6B21A8] text-sm mb-2">This is to certify that</p>
                  <div className="text-[#1A0030] font-black text-2xl mb-1">Your Name Here</div>
                  <div className="w-24 h-0.5 bg-[#D447FF]/30 mx-auto mb-4" />
                  <p className="text-[#6B21A8]/70 text-sm mb-4">
                    has successfully completed the
                  </p>
                  <div className="bg-[#D447FF]/10 rounded-xl px-5 py-3 mb-6">
                    <p className="text-[#9519FF] font-black text-base leading-tight">
                      Master Certification in<br />
                      UI/UX Design With AI
                    </p>
                  </div>

                  <div className="flex justify-between items-end pt-4 border-t border-[#D447FF]/20">
                    <div className="text-left">
                      <div className="text-[#D447FF] font-bold text-sm">DesignNova</div>
                      <div className="text-[#6B21A8]/50 text-xs">Issued 2025</div>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D447FF] to-[#9519FF] flex items-center justify-center">
                      <Award size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-[#6B21A8]/50 text-xs">Credential ID</div>
                      <div className="text-[#D447FF] font-mono text-xs">DN-2025-XXXX</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social proof below cert */}
              <div className="mt-4 flex justify-center gap-2">
                {[0,1,2,3,4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#2D0050] bg-gradient-to-br from-[#D447FF] to-[#9519FF] flex items-center justify-center text-white text-[10px] font-bold -ml-2 first:ml-0"
                    style={{ zIndex: 5 - i }}
                  >
                    {["AK","SR","VM","PR","NK"][i]}
                  </div>
                ))}
                <span className="text-white/50 text-xs self-center ml-2">+25K graduates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
