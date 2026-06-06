"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "Figma",      abbr: "Fi",  hex: "#F24E1E" },
  { name: "Adobe XD",   abbr: "XD",  hex: "#FF61F6" },
  { name: "Framer",     abbr: "Fr",  hex: "#0055FF" },
  { name: "Principle",  abbr: "Pr",  hex: "#5B64EE" },
  { name: "InVision",   abbr: "Inv", hex: "#FF3366" },
  { name: "Zeplin",     abbr: "Ze",  hex: "#FDBD39" },
  { name: "Midjourney", abbr: "MJ",  hex: "#8A3FFC" },
  { name: "Notion",     abbr: "No",  hex: "#374151" },
  { name: "Miro",       abbr: "Mi",  hex: "#FFD02F" },
  { name: "Hotjar",     abbr: "HJ",  hex: "#F03C41" },
  { name: "Maze",       abbr: "Mz",  hex: "#7B39F5" },
  { name: "Lottie",     abbr: "Lo",  hex: "#00C7B7" },
];

export default function Tools() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="tools" ref={ref} className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
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
        </motion.div>

        {/* Tool grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22,1,0.36,1] }}
              className="card-pale rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default group"
            >
              <div
                className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black"
                style={{
                  background: `${t.hex}18`,
                  color: t.hex,
                  border: `1.5px solid ${t.hex}30`,
                }}
              >
                {t.abbr}
              </div>
              <span className="text-[#7a5899] text-xs text-center font-medium group-hover:text-[#D447FF] transition-colors leading-tight">
                {t.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-[#c0a0d8] text-sm mt-8"
        >
          + several more AI tools covered throughout the programme
        </motion.p>
      </div>
    </section>
  );
}
