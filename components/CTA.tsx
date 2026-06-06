"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="enroll" ref={ref} className="relative py-28 overflow-hidden">
      {/* Purple gradient bg — matches SVG CTA section */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(145deg, #D447FF 0%, #C060FF 40%, #9519FF 80%, #0D0015 100%)" }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-[100px] float" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-white/10 blur-[100px] float" style={{ animationDelay: "3s" }} />

      {/* Dashed ring */}
      <svg
        className="absolute inset-0 m-auto opacity-10 spin-slow pointer-events-none w-[640px] h-[640px]"
        viewBox="0 0 640 640"
      >
        <circle cx="320" cy="320" r="300" stroke="white" strokeWidth="1" strokeDasharray="16 16" fill="none" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 text-sm text-white font-semibold mb-8">
            <Zap size={14} className="text-yellow-300" fill="currentColor" />
            Limited seats — next batch starting soon
          </div>

          {/* Headline */}
          <h2
            className="font-black text-white leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Your design career<br />
            <span className="text-white/80">starts in</span>{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(90deg,#fff 0%,#FFE6FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              60 days
            </span>
          </h2>

          <p className="text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join 25,000+ designers who transformed their careers with DesignNova.
            No prior experience needed — just your ambition.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#hero"
              className="btn-white inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-base font-bold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="#D447FF" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              Enroll Now — Free Counseling
            </a>
            <a
              href="#curriculum"
              className="btn-ghost-white inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.2" />
              </svg>
              Watch Free Demo
            </a>
          </div>

          <p className="mt-8 text-white/35 text-sm">
            No credit card required · 100% free counseling · Flexible EMI options
          </p>

          {/* Social proof strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { label: "25K+", sub: "Students Enrolled" },
              { label: "92%", sub: "Placement Rate" },
              { label: "4.5★", sub: "Average Rating" },
              { label: "60", sub: "Days to Job-Ready" },
            ].map(({ label, sub }) => (
              <div key={label} className="text-center">
                <p className="text-white font-black text-2xl leading-none">{label}</p>
                <p className="text-white/50 text-xs mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
