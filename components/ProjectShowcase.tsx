"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const tabs = ["LMS","CRM","RMS","HRMS"] as const;
type Tab = typeof tabs[number];

const content: Record<Tab,{ title:string; desc:string }> = {
  LMS: {
    title:"Learning Management System",
    desc:"Designed a Learning Management System (LMS) focused on delivering a seamless and engaging user experience for both learners and instructors. Created end-to-end UX workflows, including user research, personas, user journeys, wireframes, and high-fidelity UI designs using tools like Figma.",
  },
  CRM: {
    title:"Customer Relationship Management",
    desc:"Designed a CRM platform with intuitive dashboards, contact management, and sales pipeline views. Focused on reducing cognitive load for sales teams through clear information hierarchy and streamlined interaction patterns.",
  },
  RMS: {
    title:"Restaurant Management System",
    desc:"Created a full-stack UX solution for restaurant operations — from table booking flows to kitchen order management. Emphasis on speed, clarity and real-time status updates for front-of-house staff.",
  },
  HRMS: {
    title:"HR Management System",
    desc:"Designed an HRMS covering employee onboarding, leave management, payroll dashboards and performance reviews. Prioritised accessibility and role-based navigation to serve HR teams of all sizes.",
  },
};

export default function ProjectShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  const [active, setActive] = useState<Tab>("LMS");

  return (
    <>
    {/* WHY STUDENTS TRUST US — white heading section (matches PDF) */}
    <section className="bg-white py-12 px-4 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity:0, y:24 }}
        animate={inView?{opacity:1,y:0}:{}}
        transition={{ duration:0.7 }}
        className="font-black uppercase"
        style={{ fontSize:"clamp(2.5rem,7vw,5.5rem)", color:"#D447FF", letterSpacing:"-0.01em" }}
      >
        Why Students Trust Us
      </motion.h2>
      <motion.div
        initial={{ scaleX:0 }} animate={inView?{scaleX:1}:{}} transition={{ delay:0.3, duration:0.5 }}
        className="mx-auto mt-2 h-1 rounded-full" style={{ width:"180px", background:"#D447FF" }}
      />
    </section>

    <section id="projects" ref={ref} className="relative overflow-hidden py-20 px-4 md:px-8"
      style={{ background:"linear-gradient(135deg,#C82EFF 0%,#D447FF 60%,#9519FF 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.65 }}
          className="text-center mb-10"
        >
          <h2 className="font-black text-white leading-tight mb-6"
            style={{ fontSize:"clamp(1.6rem,3.5vw,2.6rem)" }}
          >
            Students Work On Real Industry-Level Projects<br/>
            <span className="text-white/70 font-bold">Used In Modern IT Companies</span>
          </h2>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {tabs.map(t=>(
              <button key={t} onClick={()=>setActive(t)}
                className="px-6 py-2 rounded-full font-bold text-sm transition-all duration-200"
                style={active===t
                  ?{background:"#fff",color:"#D447FF"}
                  :{background:"rgba(255,255,255,0.18)",color:"rgba(255,255,255,0.85)",border:"1.5px solid rgba(255,255,255,0.3)"}
                }
              >{t}</button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div key={active} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.4}}>
            <h3 className="text-white font-black text-xl md:text-2xl mb-4">{content[active].title}</h3>
            <p className="text-white/75 text-base leading-relaxed mb-8">{content[active].desc}</p>
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-white font-bold text-sm px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all"
              style={{color:"#D447FF"}}
            >
              Enroll Now
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#D447FF"><path d="M5 3L19 12L5 21V3Z"/></svg>
            </a>
          </motion.div>

          {/* Device mockup — laptop + floating tablet */}
          <motion.div
            initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:0.2,duration:0.7}}
            className="relative flex items-end justify-center"
            style={{ minHeight:"320px" }}
          >
            {/* Laptop frame */}
            <div className="relative z-10 w-full max-w-[420px]">
              {/* Screen */}
              <div className="rounded-t-2xl overflow-hidden shadow-2xl border-[3px] border-white/40"
                style={{ background:"#fff", aspectRatio:"16/10" }}
              >
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-100 bg-gray-50">
                  {["#F24E1E","#FFB800","#0ACF83"].map((c,i)=>(
                    <div key={i} className="w-2 h-2 rounded-full" style={{background:c}}/>
                  ))}
                  <div className="flex-1 ml-2 h-3 rounded bg-gray-200 text-[7px] text-gray-400 flex items-center px-2">designnova.app</div>
                </div>
                {/* App UI */}
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div className="w-16 bg-[#FAEAFF] border-r border-[#EFB9FF] p-2 flex flex-col gap-2">
                    {["🏠","📚","📊","⚙️"].map((ic,i)=>(
                      <div key={i} className={`w-full aspect-square rounded-lg flex items-center justify-center text-base ${i===0?"bg-[#D447FF]":""}`}>
                        <span style={{filter:i===0?"brightness(10)":""}}>{ic}</span>
                      </div>
                    ))}
                  </div>
                  {/* Main content */}
                  <div className="flex-1 p-2.5 overflow-hidden">
                    <div className="flex gap-1.5 mb-2">
                      {[{c:"#D447FF",v:"1,250"},{c:"#0ACF83",v:"94%"},{c:"#FFB800",v:"32"}].map((s,i)=>(
                        <div key={i} className="flex-1 rounded-lg p-1.5" style={{background:`${s.c}15`}}>
                          <p className="font-black text-xs" style={{color:s.c}}>{s.v}</p>
                          <p className="text-[7px] text-gray-400">stat {i+1}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg overflow-hidden border border-gray-100">
                      <div className="bg-[#D447FF] py-1.5 px-2">
                        <p className="text-white text-[8px] font-bold">{content[active].title}</p>
                      </div>
                      {[...Array(3)].map((_,i)=>(
                        <div key={i} className="flex items-center gap-2 px-2 py-1.5 border-b border-gray-50">
                          <div className="w-4 h-4 rounded" style={{background:`#EFB9FF`}}/>
                          <div className="flex-1">
                            <div className="h-1.5 rounded bg-gray-200 mb-0.5" style={{width:`${75-i*15}%`}}/>
                            <div className="h-1 rounded bg-gray-100" style={{width:`${50-i*10}%`}}/>
                          </div>
                          <div className="w-5 h-2 rounded-full" style={{background:"#D447FF20"}}/>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div className="w-full h-3 rounded-b-sm" style={{background:"rgba(255,255,255,0.35)"}}/>
              <div className="w-[110%] -ml-[5%] h-1.5 rounded-b-2xl" style={{background:"rgba(255,255,255,0.2)"}}/>
            </div>

            {/* Floating tablet (top-right) */}
            <motion.div
              animate={{ y:[0,-8,0] }}
              transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
              className="absolute top-0 right-0 z-20 w-[130px] rounded-2xl overflow-hidden shadow-xl border-2 border-white/50"
              style={{ background:"#fff" }}
            >
              <div className="bg-[#9519FF] py-1.5 px-2.5 flex items-center justify-between">
                <p className="text-white text-[7px] font-bold">Dashboard</p>
                <div className="w-3 h-3 rounded-full bg-white/30"/>
              </div>
              <div className="p-2">
                <div className="w-full h-10 rounded-lg mb-1.5" style={{background:"linear-gradient(135deg,#FAEAFF,#EFB9FF)"}}/>
                {[65,80,45].map((w,i)=>(
                  <div key={i} className="h-1.5 rounded-full bg-gray-100 mb-1" style={{width:`${w}%`}}/>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
