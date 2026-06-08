"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Mentors",    href: "#mentors" },
  { label: "Pricing",    href: "#pricing" },
  { label: "Reviews",    href: "#reviews" },
];

function Logo({ light = false }: { light?: boolean }) {
  const c = light ? "#fff" : "#1a0030";
  return (
    <a href="#hero" className="flex items-center gap-2.5 shrink-0 group">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ background: "linear-gradient(135deg, #D447FF, #9519FF)" }}
      >
        <svg width="20" height="20" viewBox="0 0 42 42" fill="none">
          <circle cx="14" cy="22" r="8" stroke="white" strokeWidth="3" />
          <line x1="22" y1="22" x2="38" y2="22" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <rect x="11" y="11" width="3.2" height="10" rx="1.6" fill="white" />
          <rect x="19" y="8" width="10" height="3.2" rx="1.6" fill="white" />
        </svg>
      </div>
      <span className="font-black text-[17px] tracking-tight" style={{ color: c }}>
        Design<span className="text-[#D447FF]">Nova</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (y / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const light = !scrolled;

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div
          className="h-full origin-left transition-transform duration-100"
          style={{
            background: "linear-gradient(90deg,#D447FF,#EFB9FF)",
            transform: `scaleX(${scrollProgress / 100})`,
          }}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div
          className={`mx-4 md:mx-8 mt-4 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/96 backdrop-blur-xl shadow-[0_4px_40px_rgba(212,71,255,.12)] border border-[#EFB9FF]/60"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
            <Logo light={light} />

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                    light
                      ? "text-white/80 hover:text-white hover:bg-white/12"
                      : "text-[#3d1f5c] hover:text-[#D447FF] hover:bg-[#FAEAFF]"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              {light ? (
                <>
                  <a href="#curriculum" className="btn-ghost-white text-sm font-semibold px-5 py-2.5 rounded-full">
                    Free Demo
                  </a>
                  <a href="#pricing" className="btn-white text-sm px-5 py-2.5 rounded-full">
                    Enroll Now
                  </a>
                </>
              ) : (
                <>
                  <a href="#curriculum" className="text-sm font-semibold px-5 py-2.5 rounded-full border border-[#EFB9FF] text-[#D447FF] hover:bg-[#FAEAFF] transition-colors">
                    Free Demo
                  </a>
                  <a href="#pricing" className="btn-purple text-sm font-bold px-5 py-2.5 rounded-full">
                    Enroll Now
                  </a>
                </>
              )}
            </div>

            {/* Mobile toggle */}
            <button
              className={`md:hidden p-2 rounded-xl transition-colors ${
                light ? "text-white hover:bg-white/10" : "text-[#1a0030] hover:bg-[#FAEAFF]"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile drawer */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden"
              >
                <div className="bg-white/98 backdrop-blur-xl border-t border-[#EFB9FF]/40 px-5 pb-5 pt-3 flex flex-col gap-1">
                  {navLinks.map(({ label, href }, i) => (
                    <motion.a
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-[#3d1f5c] hover:text-[#D447FF] text-sm font-medium py-2.5 px-3 rounded-xl hover:bg-[#FAEAFF] transition-colors"
                    >
                      {label}
                    </motion.a>
                  ))}
                  <div className="flex gap-3 mt-3 pt-3 border-t border-[#EFB9FF]/40">
                    <a href="#curriculum" className="border border-[#EFB9FF] text-[#D447FF] text-sm font-semibold px-4 py-2.5 rounded-full flex-1 text-center hover:bg-[#FAEAFF] transition-colors">
                      Free Demo
                    </a>
                    <a href="#pricing" className="btn-purple text-sm font-bold px-4 py-2.5 rounded-full flex-1 text-center">
                      Enroll Now
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
