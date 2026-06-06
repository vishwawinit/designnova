"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Users, Award, Briefcase, Brain, Clock } from "lucide-react";

const features = [
  {
    icon: <Brain size={28} className="text-[#D447FF]" />,
    title: "AI-Powered Learning",
    desc: "Learn design with cutting-edge AI tools like Midjourney, Copilot & more. Stay ahead of the industry curve.",
  },
  {
    icon: <Users size={28} className="text-[#D447FF]" />,
    title: "Expert Mentors",
    desc: "Get guided by industry professionals from top product companies with real-world experience.",
  },
  {
    icon: <Briefcase size={28} className="text-[#D447FF]" />,
    title: "Placement Assistance",
    desc: "Dedicated placement cell, resume review, mock interviews & direct referrals to 500+ hiring partners.",
  },
  {
    icon: <Award size={28} className="text-[#D447FF]" />,
    title: "Master Certification",
    desc: "Earn a globally recognized certificate in UI/UX Design With AI — valued by top tech companies.",
  },
  {
    icon: <Clock size={28} className="text-[#D447FF]" />,
    title: "60-Day Fast Track",
    desc: "Structured curriculum designed to go from zero to job-ready in just 60 intense, focused days.",
  },
  {
    icon: <CheckCircle size={28} className="text-[#D447FF]" />,
    title: "Live Projects",
    desc: "Build 5+ real-world projects for your portfolio — the kind that actually impress hiring managers.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0012] via-[#100020] to-[#0A0012]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D447FF]/04 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D447FF] text-sm font-semibold uppercase tracking-widest mb-4 bg-[#D447FF]/10 px-4 py-2 rounded-full border border-[#D447FF]/20">
            Why DesignNova
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Everything you need to <br />
            <span className="gradient-text">launch your design career</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="glass-card rounded-3xl p-7 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D447FF]/10 border border-[#D447FF]/20 flex items-center justify-center mb-5 group-hover:bg-[#D447FF]/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
