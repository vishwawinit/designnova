"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { num: "8+",   label: "Years Experience",       icon: "🏆" },
  { num: "25K+", label: "Students Mentored",       icon: "👨‍🎓" },
  { num: "10K+", label: "Students Placed",         icon: "💼" },
  { num: "4.9",  label: "Student Rating",          icon: "⭐" },
];

const expertise = [
  "Product Design", "Design Systems", "Interaction Design",
  "Figma Expert",   "UI/UX Research", "AI Design Tools",
  "Prototyping",    "Design Thinking",
];

export default function Mentor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> Your Mentor
          </div>
          <h2
            className="font-black text-[#1a0030] leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
          >
            Learn directly from an<br />
            <span className="grad-text">industry expert</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — mentor profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden" style={{ background: "linear-gradient(145deg, #FAEAFF, #F5D6FF)" }}>
              {/* Top purple strip */}
              <div
                className="h-28 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #D447FF, #9519FF)" }}
              >
                <div className="absolute inset-0 dot-grid opacity-20" />
                {/* Orbit ring */}
                <svg className="absolute top-1/2 right-12 -translate-y-1/2 opacity-15 spin-slow" width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="55" stroke="white" strokeWidth="1" strokeDasharray="8 8" fill="none" />
                </svg>
              </div>

              {/* Avatar */}
              <div className="px-8 pb-8">
                <div className="relative -mt-12 mb-5 w-fit">
                  <div
                    className="w-24 h-24 rounded-2xl border-4 border-white flex items-center justify-center text-3xl font-black text-white shadow-xl"
                    style={{ background: "linear-gradient(135deg, #D447FF, #9519FF)" }}
                  >
                    B
                  </div>
                  {/* Online dot */}
                  <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white" />
                </div>

                <h3 className="text-[#1a0030] font-black text-2xl mb-0.5">Bharath</h3>
                <p className="text-[#D447FF] font-bold text-sm mb-4">Senior UI/UX Designer & Lead Mentor</p>

                <p className="text-[#4b2d70] text-sm leading-relaxed mb-6">
                  With 8+ years designing products for top companies, Bharath brings real industry experience
                  into every session. His simple, practical teaching style has helped 25,000+ students
                  land jobs at TCS, TATA, Uber, Infosys and more.
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2">
                  {expertise.map(e => (
                    <span
                      key={e}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(212,71,255,0.08)", color: "#9519FF", border: "1px solid #EFB9FF" }}
                    >
                      {e}
                    </span>
                  ))}
                </div>

                {/* Social bar */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[#EFB9FF]">
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0077B5]/10 flex items-center justify-center hover:bg-[#0077B5]/20 transition-colors">
                    <svg viewBox="0 0 24 24" fill="#0077B5" width="16" height="16">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <span className="text-[#9370b3] text-xs">Connect on LinkedIn</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — stats + quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Quote */}
            <blockquote className="mb-10 relative">
              <div className="text-7xl leading-none font-black mb-3 opacity-10" style={{ color: "#D447FF" }}>"</div>
              <p className="text-[#3d1f5c] text-xl leading-relaxed font-medium -mt-10">
                I've been in the industry for 8 years and I've seen how companies hire designers.
                My goal at DesignNova is simple — <strong className="text-[#D447FF]">teach you exactly what gets you hired, not just design theory.</strong>
              </p>
              <footer className="mt-4 text-[#9370b3] text-sm font-semibold">
                — Bharath, Lead Mentor &amp; Founder
              </footer>
            </blockquote>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="card-pale rounded-2xl p-5 text-center"
                >
                  <div className="text-2xl mb-1">{h.icon}</div>
                  <div
                    className="font-black text-2xl leading-none mb-1"
                    style={{
                      background: "linear-gradient(135deg, #D447FF, #9519FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {h.num}
                  </div>
                  <p className="text-[#7a5899] text-xs font-semibold">{h.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Student testimonial callout */}
            <div className="rounded-2xl p-5 flex items-start gap-4" style={{ background: "#FAEAFF", border: "1.5px solid #EFB9FF" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-black text-sm" style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)" }}>
                ST
              </div>
              <div>
                <p className="text-[#4b2d70] text-sm leading-relaxed italic">
                  "Bharath sir explained UI/UX concepts in a very simple and practical way. Thank You Sir, I placed in TCS."
                </p>
                <p className="text-[#D447FF] font-bold text-xs mt-2">Sai Teja — Placed @ TCS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
