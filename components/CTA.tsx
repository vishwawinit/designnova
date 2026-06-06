"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointer2, Zap } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F001A] via-[#1C0035] to-[#0A0012]" />

      {/* Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#D447FF]/15 blur-[100px] floating-orb" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#9519FF]/15 blur-[100px] floating-orb" style={{ animationDelay: "3s" }} />

      {/* Dashed circle */}
      <svg className="absolute inset-0 m-auto w-[600px] h-[600px] opacity-10 dashed-circle pointer-events-none" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="280" stroke="#D447FF" strokeWidth="1" strokeDasharray="15 15" fill="none" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#D447FF]/15 border border-[#D447FF]/30 rounded-full px-4 py-2 text-sm text-[#E592FF] mb-8">
            <Zap size={14} fill="#D447FF" />
            Limited seats — next batch starting soon
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Your design career
            <br />
            <span className="gradient-text">starts in 60 days</span>
          </h2>

          <p className="text-white/55 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 25,000+ designers who transformed their careers with DesignNova.
            No prior experience needed — just your ambition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#hero"
              className="btn-primary text-white font-bold text-lg px-10 py-5 rounded-full flex items-center gap-3 min-w-[240px] justify-center"
            >
              <MousePointer2 size={20} />
              Enroll Now — Free Counseling
            </a>
            <a
              href="#curriculum"
              className="btn-outline text-white/80 font-semibold text-base px-8 py-5 rounded-full flex items-center gap-2 bg-white/5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" fill="white" fillOpacity="0.15" />
              </svg>
              Watch Free Demo
            </a>
          </div>

          <p className="mt-6 text-white/30 text-sm">
            No credit card required · 100% free counseling · Flexible EMI options
          </p>
        </motion.div>
      </div>
    </section>
  );
}
