"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const mentors = [
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Senior UX Designer",
    company: "Google",
    exp: "8 years",
    color: "#D447FF",
    bg: "#FAEAFF",
    tags: ["UX Research", "Design Systems", "Figma"],
    bio: "Ex-Swiggy design lead. Helped build Google's design language for South Asia. Specialises in large-scale UX and accessibility.",
  },
  {
    initials: "AM",
    name: "Arjun Mehta",
    role: "Product Design Lead",
    company: "Swiggy",
    exp: "6 years",
    color: "#FF6B35",
    bg: "#FFF0E8",
    tags: ["Interaction Design", "Prototyping", "AI Tools"],
    bio: "Built Swiggy's core consumer app design from 0 to 100M+ users. Teaches interaction design and motion principles.",
  },
  {
    initials: "KR",
    name: "Kavya Reddy",
    role: "UI/UX Director",
    company: "Razorpay",
    exp: "9 years",
    color: "#0066FF",
    bg: "#E8F0FF",
    tags: ["Product Strategy", "Fintech UX", "Design Ops"],
    bio: "Leads design for Razorpay's merchant suite. Expert in complex B2B product design and design operations at scale.",
  },
  {
    initials: "RG",
    name: "Rohan Gupta",
    role: "Design Principal",
    company: "Microsoft",
    exp: "11 years",
    color: "#9519FF",
    bg: "#F0E8FF",
    tags: ["Brand Design", "AI/ML UX", "Leadership"],
    bio: "Microsoft India design lead. Pioneer in AI-integrated UX workflows. Taught at IIT Delhi and NID Ahmedabad.",
  },
];

export default function Mentors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="mentors" ref={ref} className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> Your Mentors
          </div>
          <h2
            className="font-black text-[#1a0030] leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
          >
            Learn from designers at<br />
            <span className="grad-text">world-class companies</span>
          </h2>
          <p className="mt-4 text-[#7a5899] text-base max-w-lg mx-auto leading-relaxed">
            Real practitioners — not just teachers. Get mentored by people who actively ship products at top companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="card-white rounded-3xl p-6 group"
            >
              {/* Avatar + company badge */}
              <div className="relative w-fit mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-lg"
                  style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}88)` }}
                >
                  {m.initials}
                </div>
                <div
                  className="absolute -bottom-2 -right-2 text-[10px] font-bold text-white px-2 py-0.5 rounded-full"
                  style={{ background: m.color }}
                >
                  {m.company}
                </div>
              </div>

              <h3 className="text-[#1a0030] font-bold text-base mb-0.5">{m.name}</h3>
              <p className="text-[#9370b3] text-xs mb-1">{m.role}</p>
              <p className="text-[#D447FF] text-xs font-semibold mb-4">{m.exp} experience</p>

              <p className="text-[#4b2d70] text-xs leading-relaxed mb-5">{m.bio}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {m.tags.map(t => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: m.bg, color: m.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mt-4 pt-4 border-t border-[#EFB9FF]">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="11" height="11" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFE600" />
                  </svg>
                ))}
                <span className="text-[#9370b3] text-[10px] ml-1">Top Rated</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-[#c0a0d8] text-sm mt-10"
        >
          + 12 more industry mentors across specialisations — branding, motion, research & more
        </motion.p>
      </div>
    </section>
  );
}
