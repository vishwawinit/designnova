"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const reviews = [
  { company: "TCS",     logo: "TCS",     color:"#1E4DB7" },
  { company: "Uber",    logo: "Uber",    color:"#000000" },
  { company: "Infosys", logo: "Infosys", color:"#007CC3" },
  { company: "TATA",    logo: "TATA",    color:"#1E4DB7" },
];
const text = "The overall learning experience was really well-structured and insightful. Bharath sir explained UI/UX concepts in a very simple and practical way. Thank You Sir, i placed in";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i+1) % reviews.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" ref={ref} className="bg-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity:0, y:30 }}
          animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.7 }}
          className="font-black uppercase text-center mb-12"
          style={{
            fontSize:"clamp(2.5rem,6vw,5rem)",
            color:"#D447FF",
            letterSpacing:"-0.01em",
          }}
        >
          Students Got Placed
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 items-start mb-10">
          {/* Testimonial cards */}
          {reviews.slice(0,2).map((r,i) => (
            <motion.div
              key={r.company}
              initial={{ opacity:0, y:24 }}
              animate={inView?{opacity:1,y:0}:{}}
              transition={{ delay:0.1+i*0.12, duration:0.6 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black"
                    style={{ background:"linear-gradient(135deg,#D447FF,#9519FF)" }}
                  >B</div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-gray-900 font-bold text-sm">Bharath</p>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#D447FF"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <p className="text-gray-400 text-xs">UI Designer</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="#0077B5" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {text} <strong>{r.company}</strong>
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="font-black text-base tracking-tight" style={{ color:r.color }}>{r.logo}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_,j)=>(
                    <svg key={j} width="11" height="11" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700"/></svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Center CTA */}
          <motion.div
            initial={{ opacity:0, scale:0.9 }}
            animate={inView?{opacity:1,scale:1}:{}}
            transition={{ delay:0.3 }}
            className="flex flex-col items-center justify-center gap-4 py-8"
          >
            <div className="text-center rounded-3xl px-8 py-6" style={{ background:"#FAEAFF", border:"2px solid #EFB9FF" }}>
              <p className="font-black text-4xl" style={{ color:"#D447FF" }}>10K+</p>
              <p className="font-black text-lg text-gray-900 uppercase leading-tight mt-1">Students Got<br/>Placed</p>
              <a href="#contact"
                className="inline-flex items-center gap-2 mt-4 text-white font-bold text-sm px-6 py-3 rounded-full"
                style={{ background:"linear-gradient(135deg,#D447FF,#9519FF)", boxShadow:"0 6px 20px rgba(212,71,255,.4)" }}
              >
                Enroll Now
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M5 3L19 12L5 21V3Z"/></svg>
              </a>
            </div>

            {/* Prev/next dots */}
            <div className="flex gap-2 mt-2">
              {reviews.map((_,i)=>(
                <button key={i} onClick={()=>setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width:active===i?24:8, height:8, background:active===i?"#D447FF":"#EFB9FF" }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Third card - active */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity:0, x:20 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0, x:-20 }}
            className="max-w-sm md:hidden"
          >
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black"
                  style={{ background:"linear-gradient(135deg,#D447FF,#9519FF)" }}
                >B</div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">Bharath</p>
                  <p className="text-gray-400 text-xs">UI Designer</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {text} <strong>{reviews[active].company}</strong>
              </p>
              <p className="font-black text-base mt-3" style={{ color:reviews[active].color }}>{reviews[active].logo}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom row — remaining cards on desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mt-6">
          {reviews.slice(2).map((r,i)=>(
            <motion.div
              key={r.company}
              initial={{ opacity:0, y:24 }}
              animate={inView?{opacity:1,y:0}:{}}
              transition={{ delay:0.4+i*0.12 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black"
                    style={{ background:"linear-gradient(135deg,#D447FF,#9519FF)" }}
                  >B</div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-gray-900 font-bold text-sm">Bharath</p>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#D447FF"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <p className="text-gray-400 text-xs">UI Designer</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="#0077B5" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {text} <strong>{r.company}</strong>
              </p>
              <span className="font-black text-base" style={{ color:r.color }}>{r.logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
