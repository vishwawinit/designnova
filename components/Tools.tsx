"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "Figma",      abbr: "Fi",  hex: "#F24E1E", category: "Design" },
  { name: "Adobe XD",   abbr: "XD",  hex: "#FF61F6", category: "Design" },
  { name: "Framer",     abbr: "Fr",  hex: "#0055FF", category: "Prototype" },
  { name: "Principle",  abbr: "Pr",  hex: "#5B64EE", category: "Prototype" },
  { name: "InVision",   abbr: "Inv", hex: "#FF3366", category: "Collab" },
  { name: "Zeplin",     abbr: "Ze",  hex: "#FDBD39", category: "Handoff" },
  { name: "Midjourney", abbr: "MJ",  hex: "#8A3FFC", category: "AI" },
  { name: "Notion",     abbr: "No",  hex: "#374151", category: "Planning" },
  { name: "Miro",       abbr: "Mi",  hex: "#FFD02F", category: "Collab" },
  { name: "Hotjar",     abbr: "HJ",  hex: "#F03C41", category: "Research" },
  { name: "Maze",       abbr: "Mz",  hex: "#7B39F5", category: "Testing" },
  { name: "Lottie",     abbr: "Lo",  hex: "#00C7B7", category: "Motion" },
];

const categoryColors: Record<string, string> = {
  Design: "#D447FF", Prototype: "#0055FF", Collab: "#00C7B7",
  Handoff: "#FDBD39", AI: "#8A3FFC", Planning: "#374151",
  Research: "#F03C41", Testing: "#7B39F5", Motion: "#00C7B7",
};

export default function Tools() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="tools" ref={ref} className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> Industry Tools
          </div>
          <h2
            className="font-black text-[#1a0030] leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
          >
            Master the tools<br />
            <span className="grad-text">designers actually use</span>
          </h2>
          <p className="mt-4 text-[#7a5899] text-base max-w-lg mx-auto leading-relaxed">
            From industry staples to cutting-edge AI tools — you'll graduate with a complete, professional toolkit.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.055, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card-pale rounded-2xl p-4 flex flex-col items-center gap-2.5 group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${t.hex}18`,
                  color: t.hex,
                  border: `1.5px solid ${t.hex}30`,
                }}
              >
                {t.abbr}
              </div>

              <span className="text-[#1a0030] text-xs text-center font-semibold leading-tight group-hover:text-[#D447FF] transition-colors">
                {t.name}
              </span>

              {/* Category pill */}
              <span
                className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  background: `${categoryColors[t.category]}15`,
                  color: categoryColors[t.category],
                }}
              >
                {t.category}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center text-[#c0a0d8] text-sm mt-8"
        >
          + Galileo AI, Uizard, GitHub Copilot, ChatGPT & more AI tools covered throughout the programme
        </motion.p>
      </div>
    </section>
  );
}
