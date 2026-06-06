"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Tools",      href: "#tools" },
  { label: "Reviews",    href: "#reviews" },
  { label: "FAQ",        href: "#faq" },
];

/* Logo mark – mirrors the DesignNova icon from the SVG */
function Logo({ light = false }: { light?: boolean }) {
  const s = light ? "#fff" : "#1a0030";
  return (
    <a href="#hero" className="flex items-center gap-2.5 shrink-0">
      <svg width="34" height="34" viewBox="0 0 42 42" fill="none">
        <circle cx="14" cy="22" r="8" stroke={s} strokeWidth="3.2" />
        <line x1="22" y1="22" x2="38" y2="22" stroke={s} strokeWidth="3.2" strokeLinecap="round" />
        <rect x="11" y="11" width="3.2" height="10" rx="1.6" fill={s} />
        <rect x="19" y="8" width="10" height="3.2" rx="1.6" fill={s} />
      </svg>
      <span
        className="font-black text-[17px] tracking-tight"
        style={{ color: light ? "#fff" : "#1a0030" }}
      >
        Design<span style={{ color: "#D447FF" }}>Nova</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const light = !scrolled; // white text over purple hero

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`mx-4 md:mx-8 mt-4 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_32px_rgba(212,71,255,0.12)] border border-[#EFB9FF]/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <Logo light={light} />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 nav-link ${
                  light
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-[#3d1f5c] hover:text-[#D447FF] hover:bg-[#FAEAFF]"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {light ? (
              <>
                <a href="#curriculum" className="btn-ghost-white text-sm font-semibold px-5 py-2 rounded-full">
                  Free Demo
                </a>
                <a href="#curriculum" className="btn-white text-sm px-5 py-2 rounded-full">
                  Enroll Now
                </a>
              </>
            ) : (
              <>
                <a href="#curriculum" className={`text-sm font-semibold px-5 py-2 rounded-full border border-[#EFB9FF] text-[#D447FF] hover:bg-[#FAEAFF] transition-colors`}>
                  Free Demo
                </a>
                <a href="#curriculum" className="btn-purple text-sm font-bold px-5 py-2.5 rounded-full">
                  Enroll Now
                </a>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${light ? "text-white" : "text-[#1a0030]"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden bg-white border-t border-[#EFB9FF]/40 px-5 pb-5 pt-3 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-[#3d1f5c] hover:text-[#D447FF] text-sm font-medium py-2.5 px-3 rounded-xl hover:bg-[#FAEAFF] transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="flex gap-3 mt-3 pt-3 border-t border-[#EFB9FF]/40">
              <a href="#curriculum" className="border border-[#EFB9FF] text-[#D447FF] text-sm font-semibold px-4 py-2.5 rounded-full flex-1 text-center hover:bg-[#FAEAFF] transition-colors">
                Free Demo
              </a>
              <a href="#curriculum" className="btn-purple text-sm font-bold px-4 py-2.5 rounded-full flex-1 text-center">
                Enroll Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
