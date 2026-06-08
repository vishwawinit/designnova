"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need any design experience to join?",
    a: "None at all. DesignNova is built for absolute beginners. We start from the very basics of design principles and progressively take you to advanced AI-powered UI/UX workflows.",
    cat: "General",
  },
  {
    q: "Is this a live course or self-paced?",
    a: "It's a live programme with weekly sessions, daily design challenges, and 1-on-1 mentor check-ins. Recordings are available after each session so you never miss anything.",
    cat: "General",
  },
  {
    q: "What tools will I learn?",
    a: "Figma (primary), Adobe XD, Framer, Principle for prototyping, plus AI tools like Midjourney, Galileo, Uizard, and more. You'll leave with a complete industry toolkit.",
    cat: "Curriculum",
  },
  {
    q: "Will I get a job after completing the programme?",
    a: "Our placement cell actively connects you with 500+ hiring partners. We offer resume reviews, mock interviews, and direct referrals. Our placement rate is 92% within 90 days of graduation.",
    cat: "Placement",
  },
  {
    q: "How much time should I commit each week?",
    a: "Expect 2-3 hours of live learning per day plus project work. The 60-day format is designed to be intense but achievable alongside a day job if you manage your schedule.",
    cat: "Curriculum",
  },
  {
    q: "Is there an EMI or instalment option?",
    a: "Yes — we offer 3-month, 6-month, and 12-month no-cost EMI options on all major cards. You can also pay in two instalments with a small admin fee.",
    cat: "Pricing",
  },
  {
    q: "What is the refund policy?",
    a: "If you complete the programme and don't land a job within 6 months, we offer a full refund — no questions asked. Your success is our success.",
    cat: "Pricing",
  },
  {
    q: "How does placement assistance work?",
    a: "After graduation you're assigned a dedicated career manager who reviews your portfolio, runs mock interviews, and submits your profile to our network of 500+ hiring companies. Most students receive their first offer within 60 days.",
    cat: "Placement",
  },
];

const cats = ["All", "General", "Curriculum", "Placement", "Pricing"];

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-[#D447FF]/50 shadow-[0_4px_24px_rgba(212,71,255,.1)] bg-white"
          : "border-[#EFB9FF] bg-white hover:border-[#D447FF]/40 hover:shadow-[0_2px_12px_rgba(212,71,255,.06)]"
      }`}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left group"
      >
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={
            open
              ? { background: "linear-gradient(135deg,#D447FF,#9519FF)", color: "#fff" }
              : { background: "#FAEAFF", color: "#D447FF", border: "1px solid #EFB9FF" }
          }
        >
          {open ? <Minus size={13} /> : <Plus size={13} style={{ color: "#D447FF" }} />}
        </div>

        <span className={`flex-1 font-semibold text-sm md:text-[0.95rem] leading-snug transition-colors ${
          open ? "text-[#D447FF]" : "text-[#1a0030] group-hover:text-[#D447FF]"
        }`}>
          {q}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-3 border-t border-[#FAEAFF]">
              <p className="text-[#4b2d70] text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [activeCat, setActiveCat] = useState("All");

  const filtered = activeCat === "All" ? faqs : faqs.filter(f => f.cat === activeCat);

  return (
    <section id="faq" ref={ref} className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="section-tag mb-5 mx-auto w-fit">
            <span className="divider-dot" /> FAQs
          </div>
          <h2
            className="font-black text-[#1a0030] leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
          >
            Frequently asked<br />
            <span className="grad-text">questions</span>
          </h2>
          <p className="mt-4 text-[#7a5899] text-base max-w-md mx-auto">
            Can't find what you're looking for? Chat with us on WhatsApp — we reply in minutes.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className="text-xs font-bold px-4 py-2 rounded-full transition-all duration-200"
              style={
                activeCat === c
                  ? { background: "linear-gradient(135deg,#D447FF,#9519FF)", color: "#fff", boxShadow: "0 4px 16px rgba(212,71,255,.35)" }
                  : { background: "#FAEAFF", color: "#D447FF", border: "1px solid #EFB9FF" }
              }
            >
              {c}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-3"
          >
            {filtered.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-[#9370b3] text-sm mb-4">Still have questions?</p>
          <a
            href="#enroll"
            className="btn-purple inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white text-sm"
          >
            Talk to an advisor
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
