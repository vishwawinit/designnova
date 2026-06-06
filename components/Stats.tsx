"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "25K+", label: "Satisfied Students", sublabel: "Across 40+ countries" },
  { number: "1000+", label: "Students Placed", sublabel: "At top companies" },
  { number: "4.5/5", label: "Average Rating", sublabel: "From 1000+ reviews" },
  { number: "60", label: "Days to Mastery", sublabel: "Industry-ready curriculum" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-16 overflow-hidden">
      {/* Angled dark band */}
      <div className="absolute inset-0 bg-black -skew-y-1 origin-top-left" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black gradient-text mb-1">
                {s.number}
              </div>
              <div className="text-white font-semibold text-sm md:text-base">{s.label}</div>
              <div className="text-white/40 text-xs mt-0.5">{s.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
