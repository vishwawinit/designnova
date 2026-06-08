"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Real testimonials from Frame 105.svg — exact text preserved
const reviews = [
  {
    initials: "ST", name: "Sai Teja",     role: "UI Designer",               company: "TCS",      color: "#1E4DB7",
    text: "The overall learning experience was really well-structured and insightful. Bharath sir explained UI/UX concepts in a very simple and practical way. Thank You Sir, I placed in TCS.",
  },
  {
    initials: "PL", name: "Priya Laxmi",  role: "UX Designer",               company: "Infosys",  color: "#007CC3",
    text: "The overall learning experience was really well-structured and insightful. Bharath sir explained UI/UX concepts in a very simple and practical way. I got placed at Infosys. Highly recommend DesignNova to anyone who wants to get into UI/UX.",
  },
  {
    initials: "RK", name: "Rahul Kumar",  role: "Product Designer",          company: "Wipro",    color: "#341572",
    text: "The overall learning experience was really well-structured and insightful. Bharath sir explained UI/UX concepts in a very simple and practical way. Got my first design job at Wipro within 2 months of completing the course.",
  },
  {
    initials: "AP", name: "Anitha P.",    role: "UI/UX Designer",            company: "TATA",     color: "#1E4DB7",
    text: "DesignNova completely changed my career path. The free internship after the course gave me hands-on experience that made my resume stand out. Now working as a designer at TATA. Forever grateful to Bharath sir.",
  },
  {
    initials: "MN", name: "Manoj N.",     role: "Interaction Designer",      company: "Uber",     color: "#000000",
    text: "The practical approach is what sets DesignNova apart. Real industry-level projects, mentorship from Bharath sir, and a supportive batch community. Landed an offer at Uber within 45 days of graduation.",
  },
  {
    initials: "SR", name: "Sunita Rao",   role: "Visual Designer",           company: "HCL",      color: "#00629B",
    text: "As a working professional switching careers, the weekend batch fit perfectly into my schedule. The structured 60-day curriculum and placement support helped me transition smoothly. Now at HCL as a Visual Designer.",
  },
];

function Stars({ n = 5, size = 13 }: { n?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(n)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFE600"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setActive(i => (i + 1) % reviews.length), 4500);
    return () => clearInterval(t);
  }, [auto]);

  const prev = () => { setAuto(false); setActive(i => (i - 1 + reviews.length) % reviews.length); };
  const next = () => { setAuto(false); setActive(i => (i + 1) % reviews.length); };

  const r = reviews[active];

  return (
    <section id="reviews" ref={ref} className="bg-[#faf5ff] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> Student Reviews
          </div>
          <h2
            className="font-black text-[#1a0030] leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
          >
            Our graduates got placed at<br />
            <span className="grad-text">TCS, TATA, Uber & more</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Stars n={5} />
            <span className="text-[#1a0030] font-bold text-sm">4.8</span>
            <span className="text-[#9370b3] text-sm">· 1,200+ verified reviews</span>
          </div>
        </motion.div>

        {/* Main rotating review */}
        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="card-white rounded-3xl p-8 md:p-10 text-center relative"
            >
              <div className="text-6xl leading-none font-black mb-5 opacity-[0.18]" style={{ color: "#D447FF" }}>"</div>
              <p className="text-[#3d1f5c] text-lg leading-relaxed mb-8">{r.text}</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}99)` }}
                >
                  {r.initials}
                </div>
                <div className="text-left">
                  <p className="text-[#1a0030] font-bold text-sm">{r.name}</p>
                  <p className="text-[#9370b3] text-xs">{r.role}</p>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Stars n={5} />
                  <span
                    className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white"
                    style={{ background: r.color }}
                  >
                    Placed @ {r.company}
                  </span>
                </div>
              </div>

              {/* Prev / Next */}
              <button onClick={prev} className="absolute top-1/2 -translate-y-1/2 -left-5 hidden md:flex w-10 h-10 rounded-full bg-white border border-[#EFB9FF] items-center justify-center text-[#D447FF] hover:bg-[#FAEAFF] hover:shadow-md transition-all">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute top-1/2 -translate-y-1/2 -right-5 hidden md:flex w-10 h-10 rounded-full bg-white border border-[#EFB9FF] items-center justify-center text-[#D447FF] hover:bg-[#FAEAFF] hover:shadow-md transition-all">
                <ChevronRight size={18} />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mb-14">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAuto(false); setActive(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? 24 : 8,
                height: 8,
                background: active === i ? "linear-gradient(90deg,#D447FF,#9519FF)" : "#EFB9FF",
              }}
            />
          ))}
        </div>

        {/* Mini cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.slice(0, 3).map((rv, i) => (
            <motion.div
              key={rv.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="card-pale rounded-2xl p-6 cursor-pointer"
              onClick={() => { setAuto(false); setActive(i); }}
            >
              <Stars n={5} />
              <p className="text-[#4b2d70] text-sm mt-3 mb-4 leading-relaxed line-clamp-3">{rv.text}</p>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0"
                  style={{ background: `linear-gradient(135deg, ${rv.color}, ${rv.color}88)` }}
                >
                  {rv.initials}
                </div>
                <div>
                  <p className="text-[#1a0030] font-semibold text-xs">{rv.name}</p>
                  <p className="text-[#9370b3] text-[11px]">{rv.role} · {rv.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
