"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, Users } from "lucide-react";

// Exact content from Frame 105.svg
const batches = [
  {
    icon: Calendar,
    title: "Weekday Batches",
    schedule: "Mon – Fri",
    time: "7:00 PM – 9:00 PM",
    badge: "Most Popular",
    badgeColor: "#D447FF",
    desc: "Ideal for working professionals. Evening sessions that fit around your job.",
    spots: "12 spots left",
  },
  {
    icon: Clock,
    title: "New Batch on Monday",
    schedule: "Starting Every Monday",
    time: "Flexible Timing",
    badge: "Rolling Admission",
    badgeColor: "#9519FF",
    desc: "New batches start every Monday — join any week without waiting.",
    spots: "Open enrollment",
  },
  {
    icon: Users,
    title: "Weekend Batch",
    schedule: "Sat & Sun",
    time: "10:00 AM – 1:00 PM",
    badge: "New Batch Saturday",
    badgeColor: "#0055FF",
    desc: "Designed for students and working professionals who prefer weekend learning.",
    spots: "8 spots left",
  },
];

export default function BatchSchedule() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="schedule" ref={ref} className="bg-[#faf5ff] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> Batch Schedule
          </div>
          <h2
            className="font-black text-[#1a0030] leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
          >
            New Batches Starting<br />
            <span className="grad-text">Every Monday</span>
          </h2>
          <p className="mt-4 text-[#7a5899] text-base max-w-lg mx-auto leading-relaxed">
            Flexible schedules designed for students, working professionals, and beginners.
            Never wait months for the next cohort.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {batches.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="card-white rounded-3xl p-7 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${b.badgeColor}15` }}
                  >
                    <Icon size={26} style={{ color: b.badgeColor }} />
                  </div>
                  <span
                    className="text-[10px] font-bold px-3 py-1.5 rounded-full"
                    style={{ background: `${b.badgeColor}12`, color: b.badgeColor, border: `1px solid ${b.badgeColor}25` }}
                  >
                    {b.badge}
                  </span>
                </div>

                <h3 className="text-[#1a0030] font-bold text-lg mb-1">{b.title}</h3>

                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[#D447FF] font-bold text-sm">{b.schedule}</span>
                  <span className="text-[#c0a0d8] text-sm">·</span>
                  <span className="text-[#7a5899] text-sm">{b.time}</span>
                </div>

                <p className="text-[#4b2d70] text-sm leading-relaxed mt-3 mb-5">{b.desc}</p>

                <div className="flex items-center justify-between pt-4 border-t border-[#EFB9FF]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-[#9370b3] text-xs font-semibold">{b.spots}</span>
                  </div>
                  <a
                    href="#contact"
                    className="text-xs font-bold text-[#D447FF] hover:text-[#9519FF] transition-colors flex items-center gap-1"
                  >
                    Reserve Seat
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #D447FF, #9519FF)" }}
        >
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-8">
            <div>
              <p className="text-white/65 text-sm font-semibold mb-1">Limited Seats Available</p>
              <h3 className="text-white font-black text-2xl leading-tight">
                Secure your spot in the<br />next Monday batch →
              </h3>
            </div>
            <a
              href="#contact"
              className="btn-white shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold"
            >
              Get Free Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" fill="#D447FF" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
