"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useCounter(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return count;
}

const stats = [
  { num: 25000, suffix: "+",  label: "Satisfied Students",  sub: "Across India & abroad",         icon: "👨‍🎓" },
  { num: 10000, suffix: "+",  label: "Students Placed",      sub: "TCS · TATA · Uber · Infosys",   icon: "💼" },
  { num: 4.8,   suffix: "★",  label: "Average Rating",       sub: "From 1,200+ verified reviews",  icon: "⭐", isFloat: true },
  { num: 60,    suffix: "",   label: "Days to Job-Ready",    sub: "Structured fast-track program",  icon: "🚀" },
];

// Real company logos shown as text badges (from SVG)
const companies = ["TCS", "TATA", "Uber", "Infosys", "Wipro", "HCL", "Cognizant", "Accenture"];

function StatCard({ s, inView, idx }: { s: typeof stats[0]; inView: boolean; idx: number }) {
  const count = useCounter(s.isFloat ? s.num * 10 : s.num, inView, 1800 + idx * 120);
  const display = s.isFloat ? (count / 10).toFixed(1) : count.toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center text-center py-10 px-6 group"
    >
      <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
      <div
        className="font-black leading-none mb-2"
        style={{
          fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
          background: "linear-gradient(135deg, #D447FF, #9519FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {display}{s.suffix}
      </div>
      <p className="text-[#1a0030] font-bold text-sm md:text-base leading-tight mb-1">{s.label}</p>
      <p className="text-[#9370b3] text-xs">{s.sub}</p>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-3xl overflow-hidden border border-[#EFB9FF] bg-gradient-to-br from-[#FAEAFF]/40 to-white relative mb-10">
          <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse at center, rgba(212,71,255,.04) 0%, transparent 70%)" }} />
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative ${i < stats.length - 1 ? "border-r border-[#EFB9FF]" : ""} ${i >= 2 ? "border-t border-[#EFB9FF] md:border-t-0" : ""}`}
            >
              <StatCard s={s} inView={inView} idx={i} />
            </div>
          ))}
        </div>

        {/* Companies strip — exact from SVG */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-[#c0a0d8] text-xs font-bold uppercase tracking-widest">Our students work at:</span>
          {companies.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.06 }}
              className="text-[#3d1f5c] text-sm font-bold px-4 py-2 rounded-full border border-[#EFB9FF] bg-[#FAEAFF]/50 hover:bg-[#FAEAFF] hover:border-[#D447FF]/40 transition-colors cursor-default"
            >
              {c}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
