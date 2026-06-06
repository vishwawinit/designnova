"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Tools", href: "#tools" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-4 md:mx-8 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0012]/90 backdrop-blur-xl border border-[#D447FF]/20 shadow-[0_4px_40px_rgba(212,71,255,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 relative">
              <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="7" stroke="white" strokeWidth="3" />
                <path d="M21 14 H36" stroke="white" strokeWidth="3" />
                <rect x="14" y="21" width="3" height="8" fill="white" />
                <rect x="21" y="7" width="8" height="3" fill="white" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-wide">
              Design<span className="text-[#D447FF]">Nova</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-white/5 rounded-full px-2 py-1.5 border border-white/10 gap-1">
              <div className="w-2 h-2 rounded-full bg-[#D447FF]" />
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm text-white/75 hover:text-white px-3 py-1 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#enroll"
              className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2"
            >
              Enroll Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#demo"
              className="btn-outline text-white/80 text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" fill="white" fillOpacity="0.8"/>
              </svg>
              Free Demo
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 px-4 pb-4 pt-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/75 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-all text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-3">
              <a href="#enroll" className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full flex-1 text-center">
                Enroll Now
              </a>
              <a href="#demo" className="btn-outline text-white/80 text-sm font-medium px-5 py-2.5 rounded-full flex-1 text-center">
                Free Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
