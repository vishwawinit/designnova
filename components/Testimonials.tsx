"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const reviews = [
  {
    name: "Ananya Kulkarni",
    role: "UI Designer @ Swiggy",
    initials: "AK",
    rating: 5,
    review:
      "DesignNova completely transformed my career. I went from zero design knowledge to landing a UI Designer role at Swiggy — all in under 3 months. The AI tools module was a total game-changer!",
  },
  {
    name: "Siddharth Rao",
    role: "Product Designer @ Razorpay",
    initials: "SR",
    rating: 5,
    review:
      "The curriculum is incredibly structured. The live projects gave me a portfolio that actually impressed hiring managers. Got placed at Razorpay with a 40% salary hike. Worth every rupee!",
  },
  {
    name: "Vidya Murthy",
    role: "UX Researcher @ Flipkart",
    initials: "VM",
    rating: 5,
    review:
      "The mentors here are world-class. They gave me personalized feedback on every project. The mock interview prep was exactly what I needed to crack my dream company.",
  },
  {
    name: "Priya Reddy",
    role: "Freelance UI/UX Designer",
    initials: "PR",
    rating: 5,
    review:
      "As someone who wanted to freelance, the business of design module was gold. I'm now earning 3x my previous salary working with international clients. Highly recommend!",
  },
  {
    name: "Nikhil Kapoor",
    role: "UX Designer @ Amazon",
    initials: "NK",
    rating: 5,
    review:
      "The Figma + AI combo in this curriculum is unmatched anywhere else. Real projects, real mentors, real results. I'm now a UX designer at Amazon India. DesignNova delivered!",
  },
  {
    name: "Meera Joshi",
    role: "Design Lead @ Zomato",
    initials: "MJ",
    rating: 5,
    review:
      "Best investment I've ever made. The 60-day format forces you to be disciplined and move fast. The community of fellow designers is also incredibly supportive and motivating.",
  },
];

function StarRating({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(n)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFF707" />
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
    <section id="reviews" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0012] via-[#100020] to-[#0A0012]" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#D447FF]/06 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#D447FF] text-sm font-semibold uppercase tracking-widest mb-4 bg-[#D447FF]/10 px-4 py-2 rounded-full border border-[#D447FF]/20">
            Student Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            What our students
            <br />
            <span className="gradient-text">are saying</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <StarRating n={5} />
            <span className="text-white font-bold">4.5</span>
            <span className="text-white/40 text-sm">· 1000+ reviews</span>
          </div>
        </motion.div>

        {/* Featured review */}
        <div className="mb-8">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-3xl p-8 md:p-10 max-w-3xl mx-auto text-center"
          >
            <div className="text-4xl text-[#D447FF] font-black mb-4 leading-none">"</div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {reviews[active].review}
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D447FF] to-[#9519FF] flex items-center justify-center font-bold text-white text-sm">
                {reviews[active].initials}
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">{reviews[active].name}</div>
                <div className="text-white/45 text-xs">{reviews[active].role}</div>
              </div>
              <div className="ml-2">
                <StarRating n={reviews[active].rating} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Avatar selectors */}
        <div className="flex flex-wrap justify-center gap-3">
          {reviews.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                active === i
                  ? "bg-gradient-to-br from-[#D447FF] to-[#9519FF] scale-110 shadow-[0_0_20px_rgba(212,71,255,0.5)]"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              } text-white`}
            >
              {r.initials}
            </button>
          ))}
        </div>

        {/* Grid of mini cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {reviews.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-5"
            >
              <StarRating n={r.rating} />
              <p className="text-white/65 text-sm mt-3 mb-4 leading-relaxed line-clamp-3">{r.review}</p>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D447FF] to-[#9519FF] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {r.initials}
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{r.name}</div>
                  <div className="text-white/40 text-xs">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
