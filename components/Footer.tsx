"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const TwitterIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
const YoutubeIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>;

const links = {
  Course:    ["Curriculum", "Certification", "AI Tools", "Mentors", "Pricing", "Free Demo"],
  Company:   ["About Us", "Blog", "Careers", "Press Kit", "Partners", "Contact"],
  Resources: ["Free Resources", "Design Glossary", "Community", "Events", "Webinars", "Help Center"],
};

const socials = [
  { icon: <TwitterIcon />,   label: "Twitter" },
  { icon: <LinkedinIcon />,  label: "LinkedIn" },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <YoutubeIcon />,   label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <footer className="relative bg-[#0D0015] overflow-hidden">

      {/* Newsletter band */}
      <div className="relative border-b border-white/6">
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #D447FF08, #9519FF15, #D447FF08)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Stay in the loop</h3>
              <p className="text-white/40 text-sm">Free design tips, industry news & early batch access — weekly.</p>
            </div>
            {submitted ? (
              <div className="flex items-center gap-2 text-[#D447FF] font-semibold text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#D447FF" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                You're in! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-64 bg-white/8 border border-white/12 text-white text-sm px-4 py-2.5 rounded-full placeholder-white/30 focus:outline-none focus:border-[#D447FF]/60 focus:bg-white/12 transition-all"
                />
                <button
                  type="submit"
                  className="btn-purple text-sm font-bold px-5 py-2.5 rounded-full"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px"
        style={{ background: "linear-gradient(90deg,transparent,#D447FF50,transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2.5 mb-5 w-fit">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#D447FF,#9519FF)" }}>
                <svg width="20" height="20" viewBox="0 0 42 42" fill="none">
                  <circle cx="14" cy="22" r="8" stroke="white" strokeWidth="3" />
                  <line x1="22" y1="22" x2="38" y2="22" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <rect x="11" y="11" width="3.2" height="10" rx="1.6" fill="white" />
                  <rect x="19" y="8" width="10" height="3.2" rx="1.6" fill="white" />
                </svg>
              </div>
              <span className="text-white font-black text-base tracking-tight">
                Design<span style={{ color: "#D447FF" }}>Nova</span>
              </span>
            </a>

            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              India's leading UI/UX design bootcamp. Learn industry-ready skills
              with AI tools and land your dream design job in 60 days.
            </p>

            <div className="flex flex-col gap-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-white/35 text-xs">
                <Mail size={12} style={{ color: "#D447FF" }} />
                hello@designnova.in
              </div>
              <div className="flex items-center gap-2.5 text-white/35 text-xs">
                <Phone size={12} style={{ color: "#D447FF" }} />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2.5 text-white/35 text-xs">
                <MapPin size={12} style={{ color: "#D447FF" }} />
                Bengaluru, Karnataka, India
              </div>
            </div>

            <div className="flex items-center gap-2">
              {socials.map(({ icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-[#D447FF] transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/30 text-sm hover:text-white/65 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/18 text-xs">© 2025 DesignNova. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-white/18">
            <a href="#" className="hover:text-white/45 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/45 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/45 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
