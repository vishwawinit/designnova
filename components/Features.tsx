"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Users, Briefcase, Award, Clock, Layers } from "lucide-react";

const features = [
  {
    icon: Brain,
    color: "#D447FF",
    bg: "#FAEAFF",
    title: "AI-Powered Learning",
    desc: "Learn with cutting-edge AI tools — Midjourney, Copilot, Galileo & more. Stay ahead of every hiring curve.",
  },
  {
    icon: Users,
    color: "#9519FF",
    bg: "#F0E8FF",
    title: "Expert Industry Mentors",
    desc: "1-on-1 guidance from designers at top product companies. Real-world feedback on every project.",
  },
  {
    icon: Briefcase,
    color: "#D447FF",
    bg: "#FAEAFF",
    title: "Placement Assistance",
    desc: "Dedicated placement cell, resume review, mock interviews & direct referrals to 500+ hiring partners.",
  },
  {
    icon: Award,
    color: "#9519FF",
    bg: "#F0E8FF",
    title: "Master Certification",
    desc: "Globally recognised certificate in UI/UX Design With AI — valued by top tech companies worldwide.",
  },
  {
    icon: Clock,
    color: "#D447FF",
    bg: "#FAEAFF",
    title: "60-Day Fast Track",
    desc: "Structured, intense curriculum that takes you from absolute zero to job-ready in just 60 days.",
  },
  {
    icon: Layers,
    color: "#9519FF",
    bg: "#F0E8FF",
    title: "5+ Live Projects",
    desc: "Build a portfolio with real-world projects that hiring managers actually want to see.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> Why DesignNova
          </div>
          <h2
            className="font-black text-[#1a0030] leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Everything you need to<br />
            <span className="grad-text">launch your design career</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.55, ease: [0.22,1,0.36,1] }}
                className="card-pale rounded-3xl p-7 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: f.bg }}
                >
                  <Icon size={26} style={{ color: f.color }} />
                </div>
                <h3 className="text-[#1a0030] font-bold text-[1.05rem] mb-2.5">{f.title}</h3>
                <p className="text-[#7a5899] text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
