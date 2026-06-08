"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Briefcase, Globe, Gift } from "lucide-react";

// Content directly from Frame 108 (1).svg
const features = [
  {
    num: "01", icon: BookOpen, color: "#D447FF", bg: "#FAEAFF",
    title: "Hands-On Project Training",
    desc: "Learn UI/UX Design with hands-on projects and industry-focused training. Work on real case studies used by modern IT companies.",
  },
  {
    num: "02", icon: Briefcase, color: "#9519FF", bg: "#F0E8FF",
    title: "Job-Ready Skills",
    desc: "Get job-ready with industry-focused UI/UX training and practical skills. We prepare you for real interviews at top companies.",
  },
  {
    num: "03", icon: Globe, color: "#D447FF", bg: "#FAEAFF",
    title: "Global Certification",
    desc: "Earn globally recognised certifications that validate your expertise and enhance your professional credibility across industries.",
  },
  {
    num: "04", icon: Gift, color: "#9519FF", bg: "#F0E8FF",
    title: "Free Internship",
    desc: "Complete the UI/UX Design course and unlock a free internship opportunity at DesignNova. Build your real-world experience from day one.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const rx = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -10;
    const ry = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 10;
    el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
    el.style.boxShadow = "0 28px 60px rgba(212,71,255,.18)";
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = "";
  };

  return (
    <section ref={ref} className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> Learn UI/UX
          </div>
          <h2
            className="font-black text-[#1a0030] leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Turn Your Learning Into a Career<br />
            <span className="grad-text">That You're Proud Of</span>
          </h2>
          <p className="mt-4 text-[#7a5899] text-base max-w-xl mx-auto leading-relaxed">
            From zero to job-ready in 60 days. A complete system — not just a course.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="card-pale rounded-3xl p-7 cursor-default"
                style={{ transition: "transform .25s cubic-bezier(0.22,1,0.36,1), box-shadow .25s" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: f.bg }}>
                    <Icon size={26} style={{ color: f.color }} />
                  </div>
                  <span className="text-3xl font-black leading-none"
                    style={{
                      background: "linear-gradient(135deg,#EFB9FF,#FAEAFF)",
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
          })}
        </div>
      </div>
    </section>
  );
}
