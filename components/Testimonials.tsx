"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { initials:"AK", name:"Ananya Kulkarni",  role:"UI Designer @ Swiggy",         company:"Swiggy",     rating:5, color:"#FC8019",
    text:"DesignNova completely transformed my career. From zero knowledge to a UI Designer role at Swiggy in under 3 months. The AI tools module was a total game-changer for my portfolio!" },
  { initials:"SR", name:"Siddharth Rao",    role:"Product Designer @ Razorpay",   company:"Razorpay",   rating:5, color:"#3395FF",
    text:"The live projects gave me a portfolio that impressed hiring managers. Got placed at Razorpay with a 40% salary hike. Structured curriculum + great mentors = real, tangible results." },
  { initials:"VM", name:"Vidya Murthy",     role:"UX Researcher @ Flipkart",      company:"Flipkart",   rating:5, color:"#F7C04A",
    text:"World-class mentors with personalised feedback on every project. The mock interview prep was exactly what I needed to crack my dream company's process." },
  { initials:"PR", name:"Priya Reddy",      role:"Freelance UI/UX Designer",      company:"Freelance",  rating:5, color:"#D447FF",
    text:"The business-of-design module was pure gold. I'm now earning 3× my previous salary working with international clients. DesignNova pays for itself many times over." },
  { initials:"NK", name:"Nikhil Kapoor",    role:"UX Designer @ Amazon",          company:"Amazon",     rating:5, color:"#FF9900",
    text:"Figma + AI combo in this curriculum is unmatched anywhere else. Real projects, real mentors, real results. I'm now a UX designer at Amazon India — couldn't be happier." },
  { initials:"MJ", name:"Meera Joshi",      role:"Design Lead @ Zomato",          company:"Zomato",     rating:5, color:"#E23744",
    text:"Best investment I've ever made. The 60-day format forces discipline and fast movement. The alumni community is incredibly supportive even after graduating." },
];

function Stars({ n, size = 13 }: { n: number; size?: number }) {
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
            What our graduates<br />
            <span className="grad-text">are saying</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Stars n={5} />
            <span className="text-[#1a0030] font-bold text-sm">4.8</span>
            <span className="text-[#9370b3] text-sm">· 1,200+ verified reviews</span>
          </div>
        </motion.div>

        {/* Main review card */}
        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="card-white rounded-3xl p-8 md:p-10 text-center relative"
            >
              {/* Quote mark */}
              <div className="text-6xl leading-none font-black mb-5" style={{ color: "#D447FF", opacity: 0.25 }}>"</div>

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
                  <Stars n={r.rating} />
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ background: r.color }}
                  >
                    {r.company}
                  </span>
                </div>
              </div>

              {/* Prev / next */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-5 hidden md:block">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white border border-[#EFB9FF] flex items-center justify-center text-[#D447FF] hover:bg-[#FAEAFF] hover:shadow-md transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-5 hidden md:block">
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white border border-[#EFB9FF] flex items-center justify-center text-[#D447FF] hover:bg-[#FAEAFF] hover:shadow-md transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mb-14">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAuto(false); setActive(i); }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === i ? 24 : 8,
                height: 8,
                background: active === i ? "linear-gradient(90deg,#D447FF,#9519FF)" : "#EFB9FF",
              }}
            />
          ))}
        </div>

        {/* Mini card grid */}
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
              <Stars n={rv.rating} />
              <p className="text-[#4b2d70] text-sm mt-3 mb-4 leading-relaxed line-clamp-3">{rv.text}</p>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0"
                  style={{ background: `linear-gradient(135deg,${rv.color},${rv.color}88)` }}
                >
                  {rv.initials}
                </div>
                <div>
                  <p className="text-[#1a0030] font-semibold text-xs">{rv.name}</p>
                  <p className="text-[#9370b3] text-[11px]">{rv.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
