"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Users, Briefcase, Award, Clock, Layers } from "lucide-react";

const features = [
  {
    num: "01", icon: Brain,     color: "#D447FF", bg: "#FAEAFF",
    title: "AI-Powered Learning",
    desc: "Learn with cutting-edge AI tools — Midjourney, Copilot, Galileo & more. Stay ahead of every hiring curve.",
  },
  {
    num: "02", icon: Users,     color: "#9519FF", bg: "#F0E8FF",
    title: "Expert Industry Mentors",
    desc: "1-on-1 guidance from designers at Google, Swiggy & Amazon. Real-world feedback on every single project.",
  },
  {
    num: "03", icon: Briefcase, color: "#D447FF", bg: "#FAEAFF",
    title: "Placement Assistance",
    desc: "Dedicated placement cell, resume review, mock interviews & direct referrals to 500+ hiring partners.",
  },
  {
    num: "04", icon: Award,     color: "#9519FF", bg: "#F0E8FF",
    title: "Master Certification",
    desc: "Globally recognised certificate in UI/UX Design With AI — valued by top tech companies worldwide.",
  },
  {
    num: "05", icon: Clock,     color: "#D447FF", bg: "#FAEAFF",
    title: "60-Day Fast Track",
    desc: "Structured, intense curriculum that takes you from absolute zero to job-ready in just 60 days.",
  },
  {
    num: "06", icon: Layers,    color: "#9519FF", bg: "#F0E8FF",
    title: "5+ Live Projects",
    desc: "Build a portfolio with real-world projects that hiring managers actually want to see.",
  },
];

function FeatureCard({ f, i, inView }: { f: typeof features[0]; i: number; inView: boolean }) {
  const Icon = f.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -10;
    const ry = ((x - rect.width / 2) / rect.width) * 10;
    el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
    el.style.boxShadow = `0 28px 60px rgba(212,71,255,.18)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="card-pale rounded-3xl p-7 cursor-default"
      style={{ transition: "transform .25s cubic-bezier(0.22,1,0.36,1), box-shadow .25s" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Number + icon row */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: f.bg }}
        >
          <Icon size={26} style={{ color: f.color }} />
        </div>
        <span
          className="text-3xl font-black leading-none"
          style={{
            background: "linear-gradient(135deg, #EFB9FF, #FAEAFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {f.num}
        </span>
      </div>

      <h3 className="text-[#1a0030] font-bold text-[1.05rem] mb-2.5 leading-snug">{f.title}</h3>
      <p className="text-[#7a5899] text-sm leading-relaxed">{f.desc}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
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
          <p className="mt-4 text-[#7a5899] text-base max-w-lg mx-auto leading-relaxed">
            Not just another online course. A complete career transformation system built for real results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
