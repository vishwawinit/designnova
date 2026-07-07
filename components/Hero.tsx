"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const avatarColors = ["#F24E1E","#A259FF","#1ABCFE","#0ACF83"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background:"linear-gradient(140deg,#D447FF 0%,#DC58FF 40%,#C940F5 100%)" }}
    >
      {/* Subtle blobs */}
      <div className="absolute top-[-80px] left-[-80px]  w-72 h-72 rounded-full bg-white/8 blur-[80px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 rounded-full bg-white/8 blur-[80px]" />
      <div className="absolute top-[20%] right-[35%] w-40 h-40 rounded-full bg-white/5" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 pt-24 pb-14">

        {/* LEARN (left) + FREE INTERNSHIP (right) top labels — matches PDF layout */}
        <div className="flex items-center justify-between mb-3">
          <motion.p
            initial={{ opacity:0, y:-12 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.2 }}
            className="text-white/80 font-bold uppercase tracking-[0.22em] text-sm"
          >
            Learn
          </motion.p>
          <motion.div
            initial={{ opacity:0, y:-12 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.25 }}
            className="inline-flex items-center gap-2 bg-white/20 border border-white/35 rounded-full px-4 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">Free Internship</span>
          </motion.div>
        </div>

        <div className="flex items-center justify-between gap-6">
          {/* LEFT */}
          <motion.div
            initial={{ opacity:0, x:-40 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
            className="flex-1"
          >
            {/* Main heading */}
            <motion.h1
              initial={{ opacity:0, y:30 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.15, duration:0.7, ease:[0.22,1,0.36,1] }}
              className="font-black uppercase text-white leading-[0.86] tracking-tight"
              style={{ fontSize:"clamp(4rem,9.5vw,8.5rem)" }}
            >
              UI UX<br />Design
            </motion.h1>
            <motion.p
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.28, duration:0.65 }}
              className="font-black uppercase text-white leading-tight mb-8"
              style={{ fontSize:"clamp(2.2rem,5.5vw,5rem)" }}
            >
              In 60 Days
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity:0, y:16 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.4 }}
              className="flex items-center gap-4 mb-10"
            >
              <a href="#contact"
                className="inline-flex items-center gap-2 bg-white font-bold text-sm px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,.35)] transition-all"
                style={{ color:"#C940F5" }}
              >
                Enroll Now
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#C940F5"><path d="M5 3L19 12L5 21V3Z"/></svg>
              </a>
              <a href="#projects"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white/25 transition-all"
              >
                Free Demo
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M5 3L19 12L5 21V3Z"/></svg>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity:0, y:12 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.52 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div>
                <p className="text-white font-black text-2xl leading-none">25K</p>
                <p className="text-white/55 text-[11px] font-bold uppercase tracking-wide mt-0.5">Satisfied<br/>Students</p>
              </div>
              <div className="h-10 w-px bg-white/25" />
              <div>
                <p className="text-white font-black text-2xl leading-none">10K</p>
                <p className="text-white/55 text-[11px] font-bold uppercase tracking-wide mt-0.5">Students<br/>Placed</p>
              </div>
              <div className="h-10 w-px bg-white/25" />
              <div className="flex items-center gap-2.5">
                <div className="flex">
                  {avatarColors.map((c,i)=>(
                    <div key={i}
                      className="w-8 h-8 rounded-full border-2 border-white/60"
                      style={{ background:c, marginLeft:i>0?"-8px":0, zIndex:4-i }}
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
            initial={{ opacity:0, scale:0.8, y:20 }}
            animate={{ opacity:1, scale:1, y:0 }}
            transition={{ duration:1, delay:0.3, ease:[0.22,1,0.36,1] }}
            className="hidden lg:block shrink-0"
            style={{ animation:"float 5s ease-in-out infinite" }}
          >
            <Image
              src="/mascot.png"
              alt="UI/UX Mascot"
              width={420}
              height={460}
              className="drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
