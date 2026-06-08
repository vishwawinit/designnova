"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    tag: "Case Study",
    category: "Education Tech",
    title: "LMS — Learning Management System",
    desc: "Designed a Learning Management System (LMS) focused on delivering a seamless and engaging user experience for both learners and instructors. Created end-to-end UX workflows, including user research, personas, user journeys, wireframes, and high-fidelity UI designs using tools like Figma.",
    tools: ["Figma", "User Research", "Wireframing", "Hi-Fi Prototype"],
    color: "#D447FF",
    bg: "#FAEAFF",
    metrics: [
      { val: "40%", label: "Engagement Increase" },
      { val: "3×",  label: "Faster Onboarding" },
      { val: "4.9", label: "Usability Score" },
    ],
  },
  {
    tag: "Case Study",
    category: "FinTech",
    title: "Payment App — UX Redesign",
    desc: "Redesigned the core payment flow for a fintech app serving 500K+ users. Focused on reducing friction in the checkout experience through iterative user testing, card sorting sessions, and data-driven design decisions.",
    tools: ["Figma", "Maze", "Hotjar", "Zeplin"],
    color: "#0055FF",
    bg: "#E8F0FF",
    metrics: [
      { val: "28%", label: "Drop-off Reduction" },
      { val: "5×",  label: "Task Completion" },
      { val: "4.7", label: "CSAT Score" },
    ],
  },
  {
    tag: "Case Study",
    category: "E-Commerce",
    title: "Shopping App — Mobile UI",
    desc: "Built a mobile-first shopping experience from ground up. Conducted competitive analysis, created component-level design systems, and delivered production-ready Figma files with developer handoff documentation.",
    tools: ["Figma", "Principle", "Adobe XD", "Notion"],
    color: "#9519FF",
    bg: "#F0E8FF",
    metrics: [
      { val: "55%", label: "Add-to-Cart Rate" },
      { val: "2×",  label: "Session Duration" },
      { val: "4.8", label: "App Store Rating" },
    ],
  },
];

function MockScreen({ color }: { color: string }) {
  return (
    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative"
      style={{ background: `linear-gradient(135deg, ${color}15, ${color}08)`, border: `1.5px solid ${color}25` }}
    >
      {/* Mock UI skeleton */}
      <div className="absolute inset-4 flex flex-col gap-3">
        <div className="h-8 rounded-xl" style={{ background: `${color}20`, width: "60%" }} />
        <div className="flex gap-2">
          <div className="h-5 rounded-lg flex-1" style={{ background: `${color}12` }} />
          <div className="h-5 rounded-lg w-16" style={{ background: `${color}20` }} />
        </div>
        <div className="flex gap-3 mt-1">
          {[1, 2, 3].map(n => (
            <div key={n} className="flex-1 aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 p-3"
              style={{ background: `${color}10`, border: `1px solid ${color}20` }}
            >
              <div className="w-6 h-6 rounded-full" style={{ background: `${color}30` }} />
              <div className="h-1.5 w-10 rounded-full" style={{ background: `${color}20` }} />
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-2xl mt-1" style={{ background: `${color}08`, border: `1px solid ${color}15` }} />
        <div className="h-10 rounded-xl" style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}>
          <div className="h-full flex items-center justify-center">
            <div className="h-2 w-20 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
      {/* Corner badge */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: `${color}20`, border: `1px solid ${color}30` }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M7 10L12 15L17 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  const p = projects[active];

  return (
    <section id="projects" ref={ref} className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> Student Projects
          </div>
          <h2
            className="font-black text-[#1a0030] leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
          >
            Students work on real<br />
            <span className="grad-text">industry-level projects</span>
          </h2>
          <p className="mt-4 text-[#7a5899] text-base max-w-xl mx-auto leading-relaxed">
            Real case studies used in modern IT companies — not toy examples.
            Every project builds your portfolio from day one.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex justify-center gap-3 mb-10">
          {projects.map((proj, i) => (
            <button
              key={proj.title}
              onClick={() => setActive(i)}
              className="text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200"
              style={
                active === i
                  ? { background: "linear-gradient(135deg,#D447FF,#9519FF)", color: "#fff", boxShadow: "0 4px 18px rgba(212,71,255,.35)" }
                  : { background: "#FAEAFF", color: "#D447FF", border: "1px solid #EFB9FF" }
              }
            >
              {proj.category}
            </button>
          ))}
        </div>

        {/* Main card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-10 items-center card-white rounded-3xl p-8 md:p-10"
        >
          {/* Visual */}
          <div>
            <MockScreen color={p.color} />
            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              {p.metrics.map(m => (
                <div key={m.label} className="card-pale rounded-2xl p-4 text-center">
                  <p className="font-black text-xl leading-none mb-1"
                    style={{
                      background: `linear-gradient(135deg, ${p.color}, ${p.color}99)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {m.val}
                  </p>
                  <p className="text-[#9370b3] text-[10px] font-semibold leading-tight">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="section-tag">{p.tag}</span>
              <span
                className="text-[10px] font-bold px-3 py-1 rounded-full"
                style={{ background: `${p.color}15`, color: p.color }}
              >
                {p.category}
              </span>
            </div>

            <h3 className="text-[#1a0030] font-black text-2xl leading-tight mb-4">{p.title}</h3>

            <p className="text-[#4b2d70] text-sm leading-relaxed mb-7">{p.desc}</p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-7">
              {p.tools.map(t => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25` }}
                >
                  {t}
                </span>
              ))}
            </div>

            <a href="#contact"
              className="btn-purple inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white text-sm"
            >
              Build Projects Like This
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
