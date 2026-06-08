"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BatchSchedule() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });

  return (
    <section id="schedule" ref={ref} className="bg-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{ opacity:0, y:28 }}
          animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6 }}
          className="flex flex-col md:flex-row md:items-end gap-4 mb-8"
        >
          <h2 className="font-black uppercase text-gray-900 leading-none"
            style={{ fontSize:"clamp(2.8rem,7vw,5rem)" }}
          >
            New<br/>Batches
          </h2>
          <p className="text-gray-500 text-sm max-w-xs md:pb-2 leading-relaxed">
            Flexible Schedules Designed For Students, Working Professionals, And Beginners
          </p>
        </motion.div>

        {/* Big card */}
        <motion.div
          initial={{ opacity:0, y:32 }}
          animate={inView?{opacity:1,y:0}:{}}
          transition={{ delay:0.15, duration:0.65, ease:[0.22,1,0.36,1] }}
          className="relative rounded-3xl overflow-visible"
          style={{ background:"#FAEAFF", padding:"2px" }}
        >
          <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row" style={{ background:"#F0D6FF" }}>

            {/* Left: hero text */}
            <div className="flex-shrink-0 flex items-center justify-center px-8 py-10 md:py-14"
              style={{ background:"linear-gradient(135deg,#C82EFF 0%,#D447FF 100%)", minWidth:"200px" }}
            >
              <h3 className="font-black uppercase text-white text-center leading-tight"
                style={{ fontSize:"clamp(1.4rem,3.5vw,2.2rem)" }}
              >
                Batches<br/>Starting<br/>Every<br/>Monday
              </h3>
            </div>

            {/* Middle: weekday */}
            <div className="flex-1 bg-white rounded-2xl m-3 p-6 flex flex-col justify-between">
              <div>
                <p className="font-bold text-gray-900 text-base mb-0.5">Week Day Batches</p>
                <p className="text-xs font-semibold mb-4" style={{ color:"#D447FF" }}>(Mon-Fri)</p>
                <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:"#FAEAFF" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D447FF" strokeWidth="2" strokeLinecap="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">New Batch on Monday</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:"#FAEAFF" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D447FF" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">1hr-1:30hr / Per Section</span>
                </div>
              </div>
              <button className="mt-6 w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold text-sm py-2.5 rounded-xl hover:bg-black transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                Get Free Demo
              </button>
            </div>

            {/* Right: weekend */}
            <div className="flex-1 bg-white rounded-2xl m-3 ml-0 p-6 flex flex-col justify-between">
              <div>
                <p className="font-bold text-gray-900 text-base mb-0.5">Weekend Batches</p>
                <p className="text-xs font-semibold mb-4" style={{ color:"#D447FF" }}>(Sat &amp; Sun)</p>
                <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:"#FAEAFF" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D447FF" strokeWidth="2" strokeLinecap="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">New Batch On Saturday</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:"#FAEAFF" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D447FF" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">2hr-2:30hr / Per Section</span>
                </div>
              </div>
              <button className="mt-6 w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold text-sm py-2.5 rounded-xl hover:bg-black transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                Get Free Demo
              </button>
            </div>

            {/* LIMITED SLOTS badge */}
            <div className="hidden md:flex flex-shrink-0 items-center justify-center px-5">
              <div className="w-20 h-20 rounded-full border-2 flex flex-col items-center justify-center text-center"
                style={{ borderColor:"#D447FF", borderStyle:"dashed" }}
              >
                <span className="font-black text-[10px] uppercase leading-tight" style={{ color:"#D447FF" }}>Limited<br/>Slots</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
