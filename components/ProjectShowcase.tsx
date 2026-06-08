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

          <motion.div
            initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:0.2,duration:0.7}}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{background:"rgba(255,255,255,0.14)",border:"1.5px solid rgba(255,255,255,0.25)"}}
          >
            <div className="bg-white/20 px-5 py-3 flex items-center gap-2 border-b border-white/15">
              {["#F24E1E","#FFB800","#0ACF83"].map((c,i)=>(
                <div key={i} className="w-2.5 h-2.5 rounded-full" style={{background:c}}/>
              ))}
              <div className="flex-1 mx-3 h-4 rounded-full bg-white/20"/>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["Dashboard","Users","Reports","Settings"].map(l=>(
                  <div key={l} className="rounded-xl py-2 px-2 text-center" style={{background:"rgba(255,255,255,0.18)"}}>
                    <div className="w-5 h-5 rounded-full bg-white/40 mx-auto mb-1.5"/>
                    <p className="text-white text-[9px] font-semibold">{l}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-4" style={{background:"rgba(255,255,255,0.12)"}}>
                <p className="text-white/80 text-xs font-bold mb-3">{content[active].title}</p>
                <div className="space-y-1.5">
                  {[80,60,90,45].map((w,i)=>(
                    <div key={i} className="h-2 rounded-full bg-white/25" style={{width:`${w}%`}}/>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
