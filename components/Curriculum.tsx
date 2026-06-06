"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

const modules = [
  {
    week: "Week 1",
    title: "Design Foundations & Visual Principles",
    hours: "12 hrs",
    topics: [
      "Introduction to UI/UX — roles, tools & industry overview",
      "Design thinking & empathy mapping",
      "Typography, colour theory & visual hierarchy",
      "Grid systems, spacing & layout fundamentals",
    ],
  },
  {
    week: "Week 2",
    title: "Figma Mastery",
    hours: "15 hrs",
    topics: [
      "Figma workspace, shortcuts & layers",
      "Auto-layout, components, variants & tokens",
      "Building scalable design systems",
      "Collaborative design & handoff workflows",
    ],
  },
  {
    week: "Week 3",
    title: "UX Research & Wireframing",
    hours: "14 hrs",
    topics: [
      "User research methods & personas",
      "Wireframing — low-fi to high-fi",
      "Information architecture & card sorting",
      "Usability testing & iterative design",
    ],
  },
  {
    week: "Week 4",
    title: "Interaction Design & Prototyping",
    hours: "13 hrs",
    topics: [
      "Micro-interactions & motion design",
      "High-fidelity interactive prototypes",
      "Advanced animations & transitions",
      "WCAG accessibility guidelines",
    ],
  },
  {
    week: "Week 5",
    title: "AI Tools for Designers",
    hours: "16 hrs",
    topics: [
      "Midjourney & DALL-E for ideation",
      "Galileo, Uizard & AI-assisted UI generation",
      "Framer AI & GitHub Copilot for handoff",
      "Prompt engineering fundamentals for designers",
    ],
  },
  {
    week: "Week 6",
    title: "Portfolio, Branding & Placement",
    hours: "12 hrs",
    topics: [
      "Crafting a standout portfolio",
      "Behance, Dribbble & LinkedIn optimisation",
      "Resume building & mock interviews",
      "Salary negotiation & offer evaluation",
    ],
  },
  {
    week: "Bonus",
    title: "Freelancing & Business of Design",
    hours: "8 hrs",
    topics: [
      "Pricing your design services",
      "Client communication & contracts",
      "Building a personal brand",
      "Scaling from freelancer to studio",
    ],
  },
];

function Item({ mod, index, defaultOpen = false }: { mod: typeof modules[0]; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
        open ? "border-[#D447FF]/60 shadow-[0_6px_30px_rgba(212,71,255,0.1)]" : "border-[#EFB9FF] hover:border-[#D447FF]/40"
      } bg-white`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-5 py-5 text-left group"
      >
        {/* Week badge */}
        <div
          className="shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center text-center"
          style={{ background: open ? "linear-gradient(135deg,#D447FF,#9519FF)" : "#FAEAFF" }}
        >
          <span className={`text-[10px] font-bold uppercase tracking-wide ${open ? "text-white/70" : "text-[#D447FF]/70"}`}>
            {mod.week.includes("Bonus") ? "Bonus" : "Week"}
          </span>
          <span className={`text-lg font-black leading-none ${open ? "text-white" : "text-[#D447FF]"}`}>
            {mod.week.replace("Week ", "").replace("Bonus", "★")}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[#1a0030] font-bold text-base leading-snug group-hover:text-[#D447FF] transition-colors">
            {mod.title}
          </p>
          <p className="text-[#9370b3] text-xs mt-1">
            {mod.hours} · {mod.topics.length} lessons
          </p>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
            open ? "bg-[#D447FF] border-[#D447FF] text-white" : "border-[#EFB9FF] text-[#D447FF] bg-[#FAEAFF]"
          }`}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-[#EFB9FF] pt-4 grid sm:grid-cols-2 gap-2">
              {mod.topics.map((t, j) => (
                <div key={j} className="flex items-start gap-2.5">
                  <ChevronRight size={13} className="text-[#D447FF] mt-0.5 shrink-0" />
                  <span className="text-[#4b2d70] text-sm leading-snug">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Curriculum() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="curriculum" ref={ref} className="bg-[#faf5ff] py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> Course Content
          </div>
          <h2
            className="font-black text-[#1a0030] leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
          >
            UI/UX With AI<br />
            <span className="grad-text">Course Curriculum</span>
          </h2>
          <p className="mt-4 text-[#7a5899] text-base max-w-lg mx-auto leading-relaxed">
            60-day structured curriculum — from design fundamentals to AI workflows and job placement.
          </p>
        </motion.div>

        {/* Progress line + items */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[26px] top-0 bottom-0 w-px bg-gradient-to-b from-[#D447FF] via-[#EFB9FF] to-transparent hidden md:block" />

          <div className="flex flex-col gap-3 pl-0 md:pl-16">
            {modules.map((mod, i) => (
              <Item key={mod.week} mod={mod} index={i} defaultOpen={i === 0} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-[#9370b3] text-sm">
            90+ hours of live instruction · 5 real-world projects
          </p>
          <a href="#enroll" className="btn-purple text-white font-bold text-sm px-7 py-3 rounded-full">
            Download Full Syllabus →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
