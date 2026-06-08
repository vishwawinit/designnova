"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Building2, FileCheck, Rocket } from "lucide-react";

const perks = [
  { icon: Award,     title: "Real Work Experience",    desc: "Work on live DesignNova projects — the same products real users interact with every day." },
  { icon: Building2, title: "Company Letter",          desc: "Receive an official internship completion letter from DesignNova to strengthen your resume." },
  { icon: FileCheck, title: "Portfolio Boost",         desc: "Add a verified internship to your Behance, Dribbble & LinkedIn profile with our endorsement." },
  { icon: Rocket,    title: "Fast-Track Placement",    desc: "Interns get priority referrals to our network of 500+ hiring companies — straight to the top of the list." },
];

export default function Internship() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="internship" ref={ref} className="relative overflow-hidden py-28 px-4 md:px-8">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(145deg, #D447FF 0%, #B840FF 30%, #9519FF 65%, #6B0ECC 100%)" }}
      />
      <div className="absolute inset-0 dot-grid opacity-25" />

      {/* Orbs */}
      <div className="absolute top-[-60px] right-[-60px] w-96 h-96 rounded-full bg-white/8 blur-[90px] float" />
      <div className="absolute bottom-[-40px] left-[-40px] w-72 h-72 rounded-full bg-white/8 blur-[80px] float2" style={{ animationDelay: "3s" }} />

      {/* Orbit */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] spin-slow pointer-events-none w-[860px] h-[860px]" viewBox="0 0 860 860">
        <circle cx="430" cy="430" r="400" stroke="white" strokeWidth="1" strokeDasharray="20 20" fill="none" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/18 border border-white/28 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-white/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">Exclusive Offer</span>
            </div>

            <h2
              className="font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Free Internship After<br />
              <span style={{
                background: "linear-gradient(90deg,#fff,#FFD6FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Course Completion
              </span>
            </h2>

            <p className="text-white/65 text-base leading-relaxed mb-8 max-w-lg">
              Complete the UI/UX Design course and unlock a <strong className="text-white">free internship opportunity at DesignNova.</strong>{" "}
              Get hands-on real-world experience, an official letter, and a fast-track to your first design job.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div
                className="px-4 py-2 rounded-full text-sm font-bold text-white"
                style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.28)" }}
              >
                🎓 Course Complete
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
              </svg>
              <div
                className="px-4 py-2 rounded-full text-sm font-bold text-white"
                style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.28)" }}
              >
                🚀 Internship Unlocked
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
              </svg>
              <div
                className="px-4 py-2 rounded-full text-sm font-bold text-white"
                style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.28)" }}
              >
                💼 Job Ready
              </div>
            </div>

            <a
              href="#contact"
              className="btn-white inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold"
            >
              Claim Your Free Internship
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M12 5L19 12L12 19" stroke="#D447FF" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Right perks */}
          <div className="grid sm:grid-cols-2 gap-4">
            {perks.map((pk, i) => {
              const Icon = pk.icon;
              return (
                <motion.div
                  key={pk.title}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/14 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1.5">{pk.title}</h4>
                  <p className="text-white/55 text-xs leading-relaxed">{pk.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
