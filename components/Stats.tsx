"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "25K+",  label: "Satisfied Students",  sub: "Across 40+ countries" },
  { value: "1000+", label: "Students Placed",      sub: "At top tech companies" },
  { value: "4.5★",  label: "Average Rating",       sub: "From 1,000+ reviews" },
  { value: "60",    label: "Days to Job-Ready",    sub: "Structured curriculum" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Container card */}
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-3xl overflow-hidden border border-[#EFB9FF] bg-[#FAEAFF]/30">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22,1,0.36,1] }}
              className={`flex flex-col items-center justify-center text-center py-10 px-6 ${
                i < stats.length - 1 ? "border-r border-[#EFB9FF]" : ""
              } ${i >= 2 ? "border-t border-[#EFB9FF] md:border-t-0" : ""}`}
            >
              <div
                className="font-black leading-none mb-2"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
                  background: "linear-gradient(135deg, #D447FF, #9519FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <p className="text-[#1a0030] font-bold text-sm md:text-base leading-tight mb-1">{s.label}</p>
              <p className="text-[#9370b3] text-xs">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
