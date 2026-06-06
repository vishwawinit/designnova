"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const reviews = [
  { initials:"AK", name:"Ananya Kulkarni",   role:"UI Designer @ Swiggy",             rating:5,
    text:"DesignNova completely transformed my career. I went from zero design knowledge to landing a UI Designer role at Swiggy in under 3 months. The AI tools module was a total game-changer!" },
  { initials:"SR", name:"Siddharth Rao",     role:"Product Designer @ Razorpay",       rating:5,
    text:"The live projects gave me a portfolio that impressed hiring managers. Got placed at Razorpay with a 40% salary hike. Structured curriculum + great mentors = real results." },
  { initials:"VM", name:"Vidya Murthy",      role:"UX Researcher @ Flipkart",          rating:5,
    text:"World-class mentors with personalised feedback on every project. The mock interview prep was exactly what I needed to crack my dream company." },
  { initials:"PR", name:"Priya Reddy",       role:"Freelance UI/UX Designer",          rating:5,
    text:"The business-of-design module was gold. I'm now earning 3× my previous salary working with international clients. DesignNova pays for itself many times over." },
  { initials:"NK", name:"Nikhil Kapoor",     role:"UX Designer @ Amazon",              rating:5,
    text:"Figma + AI combo in this curriculum is unmatched anywhere else. Real projects, real mentors, real results. I'm now a UX designer at Amazon India." },
  { initials:"MJ", name:"Meera Joshi",       role:"Design Lead @ Zomato",              rating:5,
    text:"Best investment I've ever made. The 60-day format forces discipline and fast movement. The community of fellow designers is also incredibly supportive." },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(n)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24">
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

  return (
    <section id="reviews" ref={ref} className="bg-[#faf5ff] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
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
            What our students<br />
            <span className="grad-text">are saying</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Stars n={5} />
            <span className="text-[#1a0030] font-bold text-sm">4.5</span>
            <span className="text-[#9370b3] text-sm">· 1,000+ reviews</span>
          </div>
        </motion.div>

        {/* Featured card */}
        <div className="max-w-3xl mx-auto mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.38 }}
              className="card-white rounded-3xl p-8 md:p-10 text-center"
            >
              <div className="text-5xl leading-none text-[#D447FF] font-black mb-5">"</div>
              <p className="text-[#3d1f5c] text-lg leading-relaxed mb-7">
                {reviews[active].text}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm text-white shrink-0"
                  style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)" }}
                >
                  {reviews[active].initials}
                </div>
                <div className="text-left">
                  <p className="text-[#1a0030] font-bold text-sm">{reviews[active].name}</p>
                  <p className="text-[#9370b3] text-xs">{reviews[active].role}</p>
                </div>
                <Stars n={reviews[active].rating} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Selector avatars */}
        <div className="flex justify-center gap-3 mb-16">
          {reviews.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-11 h-11 rounded-full text-sm font-black transition-all duration-300 ${
                active === i
                  ? "scale-110 shadow-[0_0_18px_rgba(212,71,255,0.4)] text-white"
                  : "bg-[#FAEAFF] text-[#D447FF] border border-[#EFB9FF] hover:scale-105"
              }`}
              style={active === i ? { background: "linear-gradient(135deg,#D447FF,#9519FF)" } : {}}
            >
              {r.initials}
            </button>
          ))}
        </div>

        {/* Mini card grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="card-pale rounded-2xl p-6 cursor-pointer"
              onClick={() => setActive(i)}
            >
              <Stars n={r.rating} />
              <p className="text-[#4b2d70] text-sm mt-3 mb-4 leading-relaxed line-clamp-3">{r.text}</p>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0"
                  style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)" }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-[#1a0030] font-semibold text-xs">{r.name}</p>
                  <p className="text-[#9370b3] text-[11px]">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
