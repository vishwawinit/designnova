"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Internship() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });

  return (
    <section id="internship" ref={ref} className="relative overflow-hidden py-16 px-4 md:px-8"
      style={{ background:"linear-gradient(120deg,#fff 55%,#F0D6FF 100%)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        <motion.h2
          initial={{ opacity:0, x:-30 }}
          animate={inView?{opacity:1,x:0}:{}}
          transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
          className="font-black leading-tight"
          style={{ fontSize:"clamp(1.8rem,4vw,3rem)" }}
        >
          <span style={{ color:"#D447FF" }}>Free Internship</span>{" "}
          <span className="text-gray-900">After the<br/>course Completion</span>
        </motion.h2>

        <motion.div
          initial={{ opacity:0, x:30 }}
          animate={inView?{opacity:1,x:0}:{}}
          transition={{ delay:0.15, duration:0.65, ease:[0.22,1,0.36,1] }}
          className="flex flex-col gap-3 w-full md:w-auto"
        >
          <a href="#contact"
            className="flex items-center justify-center gap-2 text-white font-bold text-base px-10 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all"
            style={{ background:"linear-gradient(135deg,#C82EFF,#9519FF)", boxShadow:"0 6px 20px rgba(212,71,255,.35)", minWidth:"220px" }}
          >
            Enroll Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M5 3L19 12L5 21V3Z"/></svg>
          </a>
          <a href="#contact"
            className="flex items-center justify-center gap-2 font-semibold text-base px-10 py-3.5 rounded-full hover:-translate-y-0.5 transition-all border"
            style={{ borderColor:"#D447FF", color:"#D447FF", background:"transparent" }}
          >
            Free Demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D447FF" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z" fill="#D447FF"/></svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
