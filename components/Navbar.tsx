"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",           href: "#hero" },
  { label: "Course",         href: "#curriculum" },
  { label: "Free Internship", href: "#internship" },
  { label: "About Us",       href: "#about" },
  { label: "Blog",           href: "#blog" },
  { label: "Contact Us",     href: "#contact" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#hero" className="flex items-center gap-2.5 shrink-0 group">
      {/* "dn" badge — white pill on hero, purple on scrolled */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 font-black text-lg"
        style={
          light
            ? { background: "rgba(255,255,255,0.9)", color: "#7B3FF5" }
            : { background: "linear-gradient(135deg, #D447FF, #9519FF)", color: "#fff" }
        }
      >
        dn
      </div>
      <div className="flex flex-col leading-none">
        <span
          className="font-black text-[15px] tracking-tight"
          style={{ color: light ? "#fff" : "#1a0030" }}
        >
          Design<span style={{ color: light ? "rgba(255,255,255,0.7)" : "#D447FF" }}>Nova</span>
        </span>
      </div>
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
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60]">
        <div
          className="h-full origin-left"
          style={{
            background: "linear-gradient(90deg,#D447FF,#EFB9FF)",
            transform: `scaleX(${scrollProgress / 100})`,
            transition: "transform 0.1s linear",
          }}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`mx-4 md:mx-8 mt-4 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/96 backdrop-blur-xl shadow-[0_4px_40px_rgba(212,71,255,.12)] border border-[#EFB9FF]/60"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
            <Logo light={light} />

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`text-sm font-medium px-3.5 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                    light
                      ? "text-white/85 hover:text-white hover:bg-white/15"
                      : "text-[#3d1f5c] hover:text-[#D447FF] hover:bg-[#FAEAFF]"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTAs — Log In / Sign Up (matches Variant4.png) */}
            <div className="hidden md:flex items-center gap-2.5">
              {light ? (
                <>
                  <a href="#login" className="text-white/85 hover:text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/15 transition-all">
                    Log In
                  </a>
                  <a href="#contact" className="bg-white text-[#7B3FF5] font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-[0_4px_20px_rgba(255,255,255,.3)] hover:-translate-y-0.5 transition-all duration-200">
                    Sign Up
                  </a>
                </>
              ) : (
                <>
                  <a href="#login" className="text-[#3d1f5c] hover:text-[#D447FF] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#FAEAFF] transition-all">
                    Log In
                  </a>
                  <a href="#contact" className="btn-purple font-bold text-sm px-5 py-2.5 rounded-full">
                    Sign Up
                  </a>
                </>
              )}
            </div>

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

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden"
              >
                <div className="bg-white/98 backdrop-blur-xl border-t border-[#EFB9FF]/40 px-5 pb-5 pt-3 flex flex-col gap-1">
                  {navLinks.map(({ label, href }, i) => (
                    <motion.a
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="text-[#3d1f5c] hover:text-[#D447FF] text-sm font-medium py-2.5 px-3 rounded-xl hover:bg-[#FAEAFF] transition-colors"
                    >
                      {label}
                    </motion.a>
                  ))}
                  <div className="flex gap-3 mt-3 pt-3 border-t border-[#EFB9FF]/40">
                    <a href="#login" className="border border-[#EFB9FF] text-[#D447FF] text-sm font-semibold px-4 py-2.5 rounded-full flex-1 text-center hover:bg-[#FAEAFF] transition-colors">
                      Log In
                    </a>
                    <a href="#contact" className="btn-purple text-sm font-bold px-4 py-2.5 rounded-full flex-1 text-center">
                      Sign Up
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
