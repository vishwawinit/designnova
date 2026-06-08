"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Foundation",
    price: "₹19,999",
    emi: "₹3,333/mo",
    badge: null,
    desc: "Everything you need to start your UI/UX journey.",
    color: "#9370b3",
    features: [
      "60-day live programme",
      "Figma + AI tools curriculum",
      "5 live project assignments",
      "Community access (Slack)",
      "Session recordings access",
      "Master Certificate",
    ],
    cta: "Get Started",
    style: "outline",
  },
  {
    name: "Pro",
    price: "₹29,999",
    emi: "₹5,000/mo",
    badge: "Most Popular",
    desc: "The complete career launch package — our bestseller.",
    color: "#D447FF",
    features: [
      "Everything in Foundation",
      "5 × 1-on-1 mentor sessions",
      "Portfolio deep review",
      "Placement assistance",
      "LinkedIn profile optimisation",
      "3 mock interviews",
      "Salary negotiation coaching",
    ],
    cta: "Enroll in Pro",
    style: "filled",
  },
  {
    name: "Elite",
    price: "₹49,999",
    emi: "₹8,333/mo",
    badge: "Money-Back Guarantee",
    desc: "Dedicated career support until you land the job.",
    color: "#6B0ECC",
    features: [
      "Everything in Pro",
      "10 × 1-on-1 sessions",
      "Dedicated career manager",
      "Priority job referrals",
      "Personalised learning path",
      "Alumni network lifetime access",
      "100% placement guarantee *",
    ],
    cta: "Go Elite",
    style: "dark",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="pricing" ref={ref} className="bg-[#faf5ff] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> Pricing
          </div>
          <h2
            className="font-black text-[#1a0030] leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
          >
            Invest in your future,<br />
            <span className="grad-text">not just a course</span>
          </h2>
          <p className="mt-4 text-[#7a5899] text-base max-w-lg mx-auto">
            No-cost EMI available · One-time payment · Lifetime access to recordings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-3xl overflow-hidden ${
                p.style === "filled"
                  ? "shadow-[0_20px_60px_rgba(212,71,255,.25)]"
                  : ""
              }`}
            >
              {/* Popular card gets the gradient border treatment */}
              {p.style === "filled" && (
                <>
                  <div className="absolute inset-0 rounded-3xl card-grad-border" />
                  <div className="absolute inset-[1.5px] rounded-[22px] bg-white z-0" />
                </>
              )}

              <div className={`relative z-10 p-7 ${
                p.style === "outline" ? "bg-white border border-[#EFB9FF] rounded-3xl" :
                p.style === "filled" ? "bg-white rounded-[22px]" :
                "bg-[#0D0015] rounded-3xl"
              }`}>

                {/* Badge */}
                {p.badge && (
                  <div
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                    style={
                      p.style === "filled"
                        ? { background: "linear-gradient(135deg,#D447FF,#9519FF)", color: "#fff" }
                        : { background: "rgba(212,71,255,.1)", color: "#D447FF", border: "1px solid rgba(212,71,255,.3)" }
                    }
                  >
                    {p.style === "filled" ? "⭐ " : "🛡 "}{p.badge}
                  </div>
                )}

                {/* Plan name + price */}
                <h3 className={`font-bold text-lg mb-1 ${p.style === "dark" ? "text-white" : "text-[#1a0030]"}`}>
                  {p.name}
                </h3>
                <p className={`text-xs mb-4 leading-relaxed ${p.style === "dark" ? "text-white/50" : "text-[#7a5899]"}`}>
                  {p.desc}
                </p>

                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="font-black leading-none"
                    style={{
                      fontSize: "clamp(2rem,4vw,2.8rem)",
                      ...(p.style === "dark" ? { color: "#fff" } : {
                        background: "linear-gradient(135deg,#D447FF,#9519FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }),
                    }}
                  >
                    {p.price}
                  </span>
                  <span className={`text-sm ${p.style === "dark" ? "text-white/40" : "text-[#c0a0d8]"}`}>one-time</span>
                </div>
                <p className={`text-xs mb-7 ${p.style === "dark" ? "text-white/40" : "text-[#c0a0d8]"}`}>
                  or {p.emi} — no-cost EMI
                </p>

                {/* CTA */}
                <a
                  href="#enroll"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm mb-7 transition-all duration-200 ${
                    p.style === "filled"
                      ? "btn-purple"
                      : p.style === "dark"
                      ? "bg-white text-[#D447FF] hover:shadow-[0_6px_24px_rgba(255,255,255,.25)] hover:-translate-y-0.5"
                      : "btn-outline-purple"
                  }`}
                >
                  {p.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </a>

                {/* Feature list */}
                <ul className="flex flex-col gap-2.5">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={
                          p.style === "dark"
                            ? { background: "rgba(212,71,255,.25)" }
                            : { background: "#FAEAFF" }
                        }
                      >
                        <Check size={10} style={{ color: p.style === "dark" ? "#EFB9FF" : "#D447FF" }} />
                      </div>
                      <span className={`text-xs leading-snug ${p.style === "dark" ? "text-white/65" : "text-[#4b2d70]"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-[#c0a0d8] text-xs mt-8 max-w-xl mx-auto"
        >
          * Placement guarantee applies on completion of all assignments, mock interviews, and profile submission. Full details in T&C.
          All plans include lifetime access to recordings and community.
        </motion.p>
      </div>
    </section>
  );
}
