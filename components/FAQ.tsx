"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need prior design experience to join?",
    a: "No prior experience required! The course starts from absolute basics and takes you to professional-level design. All you need is a computer and a willingness to learn.",
  },
  {
    q: "What software do I need?",
    a: "Figma (free), which is the industry-standard tool. We also cover Adobe XD and various AI tools. Everything you need is either free or included in the course.",
  },
  {
    q: "How is the course structured?",
    a: "60 days of structured learning with 3-4 hours of daily live sessions, practical assignments, and weekly mentor reviews. You'll build 5+ projects for your portfolio.",
  },
  {
    q: "Do you guarantee placement?",
    a: "We provide dedicated placement assistance — resume review, mock interviews, and direct referrals to 500+ hiring partners. Most students get placed within 30-60 days of completion.",
  },
  {
    q: "Is the certificate globally recognized?",
    a: "Yes, DesignNova's certification is recognized by 500+ companies including startups, MNCs, and agencies globally. It's a strong signal on your LinkedIn profile.",
  },
  {
    q: "What happens if I miss a live session?",
    a: "All sessions are recorded and available for 12 months. You can watch recordings anytime and still get your doubts resolved in the next live session.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes! We offer EMI options with 0% interest through various payment providers. Reach out to our counseling team for a personalized payment plan.",
  },
];

function FAQItem({ item, i }: { item: typeof faqs[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.06, duration: 0.45 }}
      className="border border-white/10 rounded-2xl overflow-hidden hover:border-[#D447FF]/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-white font-semibold text-base pr-4">{item.q}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? "bg-[#D447FF] text-white" : "bg-white/10 text-white/60"}`}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" ref={ref} className="relative py-24 overflow-hidden bg-black">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#D447FF] text-sm font-semibold uppercase tracking-widest mb-4 bg-[#D447FF]/10 px-4 py-2 rounded-full border border-[#D447FF]/20">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Got questions?
            <br />
            <span className="gradient-text">We have answers</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} item={faq} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
