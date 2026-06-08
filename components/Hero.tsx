"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const avatarColors = ["#F24E1E","#A259FF","#1ABCFE","#0ACF83"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#C82EFF 0%,#D447FF 50%,#BB30F5 100%)" }}
    >
      {/* Subtle circle decorations */}
      <div className="absolute top-[10%] left-[8%]  w-40 h-40 rounded-full bg-white/5" />
      <div className="absolute top-[30%] left-[22%] w-28 h-28 rounded-full bg-white/5" />
      <div className="absolute bottom-[15%] left-[5%] w-56 h-56 rounded-full bg-white/5" />
      <div className="absolute top-[5%] right-[30%] w-20 h-20 rounded-full bg-white/5" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 pt-28 pb-12">
        <div className="flex items-center justify-between gap-8">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
            className="flex-1"
          >
            {/* FREE INTERNSHIP tag */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Free Internship</span>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 font-semibold uppercase tracking-[0.25em] text-sm mb-1"
            >
              Learn
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.22,1,0.36,1] }}
              className="font-black uppercase text-white leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(3.5rem,9vw,8rem)" }}
            >
              UI UX<br />Design
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.65 }}
              className="font-black uppercase text-white leading-tight mb-8"
              style={{ fontSize: "clamp(2rem,5vw,4.5rem)" }}
            >
              In 60 Days
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-4 mb-10"
            >
              <a href="#contact"
                className="inline-flex items-center gap-2 bg-white font-bold text-sm px-7 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,.3)] transition-all"
                style={{ color: "#C82EFF" }}
              >
                Enroll Now
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#C82EFF"><path d="M5 3L19 12L5 21V3Z"/></svg>
              </a>
              <a href="#projects"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/25 transition-all"
              >
                Free Demo
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M5 3L19 12L5 21V3Z"/></svg>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div>
                <p className="text-white font-black text-2xl leading-none">25K</p>
                <p className="text-white/60 text-[11px] font-bold uppercase tracking-wide mt-0.5">Satisfied<br/>Students</p>
              </div>
              <div className="h-10 w-px bg-white/25" />
              <div>
                <p className="text-white font-black text-2xl leading-none">10K</p>
                <p className="text-white/60 text-[11px] font-bold uppercase tracking-wide mt-0.5">Students<br/>Placed</p>
              </div>
              <div className="h-10 w-px bg-white/25" />
              <div className="flex items-center gap-2.5">
                <div className="flex">
                  {avatarColors.map((c,i) => (
                    <div key={i}
                      className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center text-white text-[9px] font-black"
                      style={{ background: c, marginLeft: i>0?"-8px":0, zIndex:4-i }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_,i)=>(
                      <svg key={i} width="11" height="11" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700"/>
                      </svg>
                    ))}
                    <span className="text-white font-bold text-xs ml-1">4.5</span>
                  </div>
                  <p className="text-white/55 text-[10px]">From 1000+ Reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22,1,0.36,1] }}
            className="hidden lg:block shrink-0"
            style={{ animation: "float 5s ease-in-out infinite" }}
          >
            <Image
              src="/mascot.png"
              alt="Figma Mascot"
              width={380}
              height={420}
              className="drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
