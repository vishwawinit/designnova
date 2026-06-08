"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";

const stats = [
  { val: "25K+", lbl: "Students" },
  { val: "10K+", lbl: "Placed" },
  { val: "4.8★", lbl: "Rating" },
  { val: "60",   lbl: "Days" },
];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="enroll" ref={ref} className="relative py-32 overflow-hidden">

      {/* Deep dark gradient + purple overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(145deg, #1a0030 0%, #0D0015 50%, #0a0010 100%)" }}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Purple glow pools */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#D447FF]/10 blur-[100px]" />
      <div className="absolute bottom-[-60px] right-[10%] w-[400px] h-[300px] rounded-full bg-[#9519FF]/12 blur-[80px] float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 left-[5%] w-[300px] h-[300px] rounded-full bg-[#D447FF]/08 blur-[80px] float2" />

      {/* Orbit ring */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] spin-slow pointer-events-none w-[800px] h-[800px]" viewBox="0 0 800 800">
        <circle cx="400" cy="400" r="370" stroke="#D447FF" strokeWidth="1" strokeDasharray="18 18" fill="none" />
      </svg>
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] spin-rev pointer-events-none w-[560px] h-[560px]" viewBox="0 0 560 560">
        <circle cx="280" cy="280" r="260" stroke="white" strokeWidth="1" strokeDasharray="6 22" fill="none" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D447FF]/15 border border-[#D447FF]/30 rounded-full px-5 py-2.5 text-sm text-[#E592FF] font-semibold mb-10">
            <Zap size={14} className="text-[#FFE600]" fill="currentColor" />
            Limited seats — next batch filling fast
          </div>

          {/* Headline */}
          <h2
            className="font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5.2rem)" }}
          >
            <span className="text-white">Your design career</span><br />
            <span className="shimmer-text">starts in 60 days</span>
          </h2>

          <p className="text-white/50 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Join 25,000+ designers who transformed their careers with DesignNova.
            No prior experience needed — <strong className="text-white/80">just your ambition.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
            <a
              href="#pricing"
              className="btn-purple inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-base font-bold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              Enroll Now — Free Counseling
            </a>
            <a
              href="#curriculum"
              className="btn-ghost-white inline-flex items-center gap-2 px-9 py-4 rounded-full text-base font-semibold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M5 3L19 12L5 21V3Z" fillOpacity=".8" />
              </svg>
              Watch Free Demo
            </a>
          </div>

          <p className="text-white/25 text-sm mb-14">
            No credit card required · 100% free counseling · Flexible no-cost EMI
          </p>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
            {stats.map(({ val, lbl }) => (
              <div key={lbl} className="bg-white/4 py-6 flex flex-col items-center gap-1">
                <span
                  className="font-black text-2xl leading-none"
                  style={{
                    background: "linear-gradient(135deg,#D447FF,#EFB9FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {val}
                </span>
                <span className="text-white/40 text-xs font-semibold">{lbl}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
