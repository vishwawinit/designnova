"use client";

import { Mail, Phone } from "lucide-react";

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const links = {
  Course: ["Curriculum", "Certification", "Tools", "Mentors", "Pricing", "Reviews"],
  Company: ["About Us", "Blog", "Careers", "Press Kit", "Partners", "Contact"],
  Resources: ["Free Resources", "Design Glossary", "Community", "Events", "Webinars", "Help Center"],
};

const socials = [
  { icon: <TwitterIcon />,   label: "Twitter" },
  { icon: <LinkedinIcon />,  label: "LinkedIn" },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <YoutubeIcon />,   label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden bg-[#0D0015]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px"
        style={{ background: "linear-gradient(90deg,transparent,#D447FF60,transparent)" }} />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-[#D447FF]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-14 border-b border-white/5">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)" }}>
                <svg width="20" height="20" viewBox="0 0 42 42" fill="none">
                  <circle cx="14" cy="14" r="7" stroke="white" strokeWidth="3" />
                  <path d="M21 14 H36" stroke="white" strokeWidth="3" />
                  <rect x="14" y="21" width="3" height="8" fill="white" />
                  <rect x="21" y="7" width="8" height="3" fill="white" />
                </svg>
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                Design<span style={{ color: "#D447FF" }}>Nova</span>
              </span>
            </a>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              India's leading UI/UX design bootcamp. Learn industry-ready skills
              with AI tools and land your dream job in 60 days.
            </p>

            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Mail size={13} style={{ color: "#D447FF" }} />
                <span>hello@designnova.in</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Phone size={13} style={{ color: "#D447FF" }} />
                <span>+91 98765 43210</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 transition-all duration-200 hover:text-[#D447FF] hover:border-[#D447FF]/40"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/35 text-sm hover:text-white/70 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2025 DesignNova. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/20">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/50 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
