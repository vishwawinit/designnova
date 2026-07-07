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

          {/* LMS platform mockup matching Frame 105 */}
          <motion.div
            initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:0.2,duration:0.7}}
            className="relative flex items-center justify-center"
            style={{ minHeight:"340px" }}
          >
            {/* Main laptop screen */}
            <div className="relative z-10 w-full max-w-[440px] drop-shadow-2xl">
              <div className="rounded-2xl overflow-hidden border-2 border-white/30" style={{background:"#fff"}}>
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 border-b border-gray-200">
                  {["#FF5F57","#FFBD2E","#28C840"].map((c,i)=>(
                    <div key={i} className="w-2.5 h-2.5 rounded-full" style={{background:c}}/>
                  ))}
                  <div className="flex-1 mx-2 bg-white rounded h-4 flex items-center px-2">
                    <span className="text-[8px] text-gray-400">designnova.app/courses</span>
                  </div>
                </div>
                {/* LMS UI */}
                <div className="flex" style={{height:"200px"}}>
                  {/* Left nav */}
                  <div className="w-14 bg-[#F8F0FF] border-r border-gray-100 flex flex-col items-center py-2 gap-2">
                    {[
                      {bg:"#D447FF",icon:"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"},
                      {bg:"transparent",icon:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},
                      {bg:"transparent",icon:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"},
                      {bg:"transparent",icon:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},
                    ].map((n,i)=>(
                      <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:n.bg==="transparent"?"transparent":n.bg}}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={n.bg==="transparent"?"#aaa":"white"} strokeWidth="2" strokeLinecap="round"><path d={n.icon}/></svg>
                      </div>
                    ))}
                  </div>
                  {/* Main content */}
                  <div className="flex-1 p-2.5 overflow-hidden bg-white">
                    {/* Hero banner */}
                    <div className="rounded-xl p-3 mb-2 flex items-center justify-between" style={{background:"linear-gradient(120deg,#D447FF,#9519FF)"}}>
                      <div>
                        <p className="text-white font-black text-[9px] leading-tight">Unlock 1,000+</p>
                        <p className="text-white font-black text-[9px] leading-tight">Premium Courses Today</p>
                        <div className="mt-1 bg-white rounded px-1.5 py-0.5 inline-block">
                          <p className="text-[7px] font-bold" style={{color:"#D447FF"}}>Explore Now →</p>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                      </div>
                    </div>
                    {/* Course thumbnails row */}
                    <div className="flex gap-1.5 mb-2">
                      {[
                        {color:"#D447FF",label:"UI/UX"},
                        {color:"#0ACF83",label:"Figma"},
                        {color:"#FFB800",label:"Design"},
                      ].map((c,i)=>(
                        <div key={i} className="flex-1 rounded-lg overflow-hidden border border-gray-100">
                          <div className="h-7" style={{background:`linear-gradient(135deg,${c.color}30,${c.color}60)`}}/>
                          <div className="px-1.5 py-1">
                            <p className="text-[7px] font-bold text-gray-700">{c.label}</p>
                            <div className="h-1 rounded-full bg-gray-100 mt-0.5"><div className="h-1 rounded-full" style={{width:`${60+i*10}%`,background:c.color}}/></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Stats row */}
                    <div className="flex gap-1.5">
                      {[{v:"1,250",l:"Students",c:"#D447FF"},{v:"94%",l:"Completion",c:"#0ACF83"},{v:"32",l:"Modules",c:"#FFB800"}].map((s,i)=>(
                        <div key={i} className="flex-1 rounded-lg p-1.5 text-center" style={{background:`${s.c}12`}}>
                          <p className="font-black text-[9px]" style={{color:s.c}}>{s.v}</p>
                          <p className="text-[6px] text-gray-400">{s.l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div className="w-full h-2.5 rounded-b" style={{background:"rgba(255,255,255,0.3)"}}/>
              <div className="w-[112%] -ml-[6%] h-1.5 rounded-b-xl" style={{background:"rgba(255,255,255,0.18)"}}/>
            </div>

            {/* Floating schedule card — top right */}
            <motion.div
              animate={{ y:[0,-10,0] }}
              transition={{ duration:4, repeat:Infinity, ease:"easeInOut", delay:1 }}
              className="absolute -top-4 -right-2 z-20 w-36 rounded-2xl overflow-hidden shadow-2xl border border-white/40"
              style={{background:"#fff"}}
            >
              <div className="px-3 py-2" style={{background:"linear-gradient(135deg,#9519FF,#D447FF)"}}>
                <p className="text-white text-[8px] font-bold">Daily Quest</p>
              </div>
              <div className="p-2.5">
                {["Wireframing","Prototyping","User Research"].map((t,i)=>(
                  <div key={i} className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-3 h-3 rounded flex items-center justify-center flex-shrink-0" style={{background:i===0?"#D447FF":"#EFB9FF"}}>
                      {i===0&&<svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17L4 12"/></svg>}
                    </div>
                    <p className={`text-[7px] font-medium ${i===0?"line-through text-gray-300":"text-gray-600"}`}>{t}</p>
                  </div>
                ))}
                <div className="mt-2 h-1 rounded-full bg-gray-100"><div className="h-1 rounded-full" style={{width:"65%",background:"#D447FF"}}/></div>
                <p className="text-[6px] text-gray-400 mt-0.5">65% Complete</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
