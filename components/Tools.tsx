"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "Figma", color: "#F24E1E", abbr: "Fig" },
  { name: "Adobe XD", color: "#FF61F6", abbr: "XD" },
  { name: "Principle", color: "#5B64EE", abbr: "Pr" },
  { name: "Zeplin", color: "#FDBD39", abbr: "Zep" },
  { name: "InVision", color: "#FF3366", abbr: "Inv" },
  { name: "Framer", color: "#0055FF", abbr: "Fr" },
  { name: "Midjourney", color: "#000000", abbr: "MJ" },
  { name: "Notion", color: "#E8E8E8", abbr: "Not" },
  { name: "Miro", color: "#FFD02F", abbr: "Mir" },
  { name: "Hotjar", color: "#F03C41", abbr: "HJ" },
  { name: "Maze", color: "#7B39F5", abbr: "Mze" },
  { name: "Lottie", color: "#00DDB3", abbr: "Lot" },
];

export default function Tools() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="tools" ref={ref} className="relative py-24 overflow-hidden bg-black">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#D447FF]/05 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#D447FF] text-sm font-semibold uppercase tracking-widest mb-4 bg-[#D447FF]/10 px-4 py-2 rounded-full border border-[#D447FF]/20">
            Industry Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Master the tools
            <br />
            <span className="gradient-text">designers actually use</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 group cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{ background: `${tool.color}25`, border: `1px solid ${tool.color}40` }}
              >
                <span style={{ color: tool.color }}>{tool.abbr}</span>
              </div>
              <span className="text-white/60 text-xs text-center group-hover:text-white/90 transition-colors">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
