"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BatchSchedule() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });

  return (
    <section id="schedule" ref={ref} className="bg-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Heading row matches PDF: "NEW BATCHES" left + subtitle right */}
        <motion.div
          initial={{ opacity:0, y:24 }}
          animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6 }}
          className="flex flex-col md:flex-row md:items-end gap-3 mb-6"
        >
          <h2 className="font-black uppercase text-gray-900 leading-none shrink-0"
            style={{ fontSize:"clamp(3rem,7vw,5.5rem)" }}
          >
            New Batches
          </h2>
          <p className="text-gray-500 text-sm max-w-xs md:pb-1.5 leading-relaxed">
            Flexible Schedules Designed For Students, Working Professionals, And Beginners
          </p>
        </motion.div>

        {/* Main schedule card */}
        <motion.div
          initial={{ opacity:0, y:28 }}
          animate={inView?{opacity:1,y:0}:{}}
          transition={{ delay:0.12, duration:0.65, ease:[0.22,1,0.36,1] }}
          className="rounded-3xl overflow-hidden flex flex-col md:flex-row"
          style={{ background:"#F0D6FF" }}
        >
          {/* Left: "BATCHES STARTING EVERY MONDAY" purple section */}
          <div className="flex-shrink-0 flex flex-col items-start justify-center px-8 py-10 md:py-12"
            style={{ background:"linear-gradient(145deg,#C82EFF 0%,#D447FF 100%)", minWidth:"190px", maxWidth:"190px" }}
          >
            <h3 className="font-black uppercase text-white leading-tight"
              style={{ fontSize:"clamp(1.5rem,3vw,2rem)" }}
            >
              Batches<br/>Starting<br/>Every<br/>Monday
            </h3>
          </div>

          {/* Weekday */}
          <div className="flex-1 bg-white m-3 md:ml-3 md:mr-1.5 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <p className="font-bold text-gray-900 text-sm mb-0.5">Week Day Batches</p>
              <p className="text-xs font-semibold mb-4" style={{ color:"#D447FF" }}>(Mon-Fri)</p>
              <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:"#FAEAFF" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D447FF" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                </div>
                <span className="text-gray-700 text-xs font-medium">New Batch on Monday</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:"#FAEAFF" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D447FF" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
                  </svg>
                </div>
                <span className="text-gray-700 text-xs font-medium">1hr-1:30hr / Per Section</span>
              </div>
            </div>
            <button className="mt-5 w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold text-xs py-2.5 rounded-xl hover:bg-black transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              Get Free Demo
            </button>
          </div>

          {/* Weekend */}
          <div className="flex-1 bg-white m-3 md:ml-1.5 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <p className="font-bold text-gray-900 text-sm mb-0.5">Weekend Batches</p>
              <p className="text-xs font-semibold mb-4" style={{ color:"#D447FF" }}>(Sat &amp; Sun)</p>
              <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:"#FAEAFF" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D447FF" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                </div>
                <span className="text-gray-700 text-xs font-medium">New Batch On Saturday</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:"#FAEAFF" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D447FF" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
                  </svg>
                </div>
                <span className="text-gray-700 text-xs font-medium">2hr-2:30hr / Per Section</span>
              </div>
            </div>
            <button className="mt-5 w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold text-xs py-2.5 rounded-xl hover:bg-black transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              Get Free Demo
            </button>
          </div>

          {/* LIMITED SLOTS circle badge */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-center px-4 mr-2">
            <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center text-center"
              style={{ border:"2px dashed #D447FF" }}
            >
              <span className="font-black text-[10px] uppercase leading-tight" style={{ color:"#D447FF" }}>Limited<br/>Slots</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
