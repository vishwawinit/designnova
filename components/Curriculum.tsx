"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

const modules = [
  {
    week: "Week 1",
    title: "Design Foundations & UI Basics",
    topics: [
      "Introduction to UI/UX Design principles",
      "Understanding users — research & empathy mapping",
      "Typography, color theory & visual hierarchy",
      "Grid systems and spacing fundamentals",
    ],
    hours: "12 hrs",
  },
  {
    week: "Week 2",
    title: "Figma Mastery",
    topics: [
      "Figma workspace & components",
      "Auto-layout, variants & design tokens",
      "Creating reusable design systems",
      "Collaborative design workflows",
    ],
    hours: "15 hrs",
  },
  {
    week: "Week 3",
    title: "UX Research & Wireframing",
    topics: [
      "User journey mapping & personas",
      "Wireframing — lo-fi to hi-fi",
      "Information architecture & card sorting",
      "Usability testing techniques",
    ],
    hours: "14 hrs",
  },
  {
    week: "Week 4",
    title: "Interaction Design & Prototyping",
    topics: [
      "Micro-interactions & motion design",
      "Interactive prototypes in Figma",
      "Advanced animations & transitions",
      "Accessibility & WCAG guidelines",
    ],
    hours: "13 hrs",
  },
  {
    week: "Week 5",
    title: "AI Tools for Designers",
    topics: [
      "Midjourney & DALL-E for design ideation",
      "AI-assisted UI generation with Galileo & Uizard",
      "GitHub Copilot for design handoff",
      "Prompt engineering for designers",
    ],
    hours: "16 hrs",
  },
  {
    week: "Week 6",
    title: "Portfolio, Branding & Placement",
    topics: [
      "Building a standout portfolio",
      "Behance & Dribbble optimization",
      "LinkedIn for design jobs",
      "Mock interviews & resume review",
    ],
    hours: "12 hrs",
  },
  {
    week: "Bonus",
    title: "Freelancing & Business of Design",
    topics: [
      "Pricing your design services",
      "Client communication & contracts",
      "Building a personal brand",
      "Scaling from freelancer to studio",
    ],
    hours: "8 hrs",
  },
];

function CurriculumItem({ mod, index }: { mod: typeof modules[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="border border-[#D447FF]/15 rounded-2xl overflow-hidden bg-white/[0.02] hover:border-[#D447FF]/35 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left group"
      >
        <div className="w-10 h-10 rounded-xl bg-[#D447FF]/12 border border-[#D447FF]/25 flex items-center justify-center shrink-0">
          <span className="text-[#D447FF] text-xs font-bold">{mod.week.replace("Week ","W").replace("Bonus","B")}</span>
        </div>
        <div className="flex-1">
          <div className="text-white font-semibold text-base group-hover:text-[#E592FF] transition-colors">
            {mod.title}
          </div>
          <div className="text-white/40 text-xs mt-0.5">{mod.hours} · {mod.topics.length} lessons</div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[#D447FF]"
        >
          <ChevronDown size={20} />
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
            <div className="px-5 pb-5 pt-0 grid grid-cols-1 md:grid-cols-2 gap-2 border-t border-white/5">
              {mod.topics.map((topic, j) => (
                <div key={j} className="flex items-start gap-2.5 py-2">
                  <ChevronRight size={14} className="text-[#D447FF] mt-0.5 shrink-0" />
                  <span className="text-white/65 text-sm">{topic}</span>
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
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="curriculum" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0012] to-[#0F001A]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#D447FF]/30 via-[#D447FF]/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#D447FF] text-sm font-semibold uppercase tracking-widest mb-4 bg-[#D447FF]/10 px-4 py-2 rounded-full border border-[#D447FF]/20">
            Course Content
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            UI/UX With AI
            <br />
            <span className="gradient-text">Course Curriculum</span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            Structured 60-day curriculum covering everything from design fundamentals
            to AI-powered workflows and job placement.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {modules.map((mod, i) => (
            <CurriculumItem key={mod.week} mod={mod} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-white/40 text-sm mb-4">Total Duration: 90+ hours of live instruction & projects</p>
          <a
            href="#enroll"
            className="btn-primary inline-flex items-center gap-2 text-white font-bold text-base px-8 py-4 rounded-full"
          >
            Download Full Syllabus
          </a>
        </motion.div>
      </div>
    </section>
  );
}
