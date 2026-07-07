"use client";

const FacebookIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const TwitterXIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const LinkedinIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;

const quickLinks = ["Course","Testimonials","About Us","Blog"];
const socials = [
  { icon:<FacebookIcon />,  label:"Facebook" },
  { icon:<TwitterXIcon />,  label:"X" },
  { icon:<LinkedinIcon />,  label:"LinkedIn" },
  { icon:<InstagramIcon />, label:"Instagram" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">

      {/* DESIGN NOVA watermark above footer */}
      <div className="relative bg-white overflow-hidden" style={{ lineHeight:1 }}>
        <div className="pointer-events-none select-none text-center font-black uppercase leading-none"
          style={{
            fontSize:"clamp(4rem,14vw,14vw)",
            color:"#D447FF",
            letterSpacing:"0.03em",
            opacity:0.15,
            padding:"0.05em 0",
            whiteSpace:"nowrap",
          }}
        >
          DESIGN NOVA
        </div>
      </div>

      {/* Main footer */}
      <div className="relative" style={{ background:"#D447FF" }}>
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand */}
            <div className="flex flex-col gap-6">
              <a href="#hero" className="flex items-center gap-2.5 w-fit">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20">
                  <svg width="22" height="22" viewBox="0 0 42 42" fill="none">
                    <circle cx="14" cy="22" r="8" stroke="white" strokeWidth="3"/>
                    <line x1="22" y1="22" x2="38" y2="22" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    <rect x="11" y="11" width="3.2" height="10" rx="1.6" fill="white"/>
                    <rect x="19" y="8" width="10" height="3.2" rx="1.6" fill="white"/>
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-white font-black text-sm">Design</p>
                  <p className="text-white font-black text-sm">Nova</p>
                </div>
              </a>

              <div className="w-px h-16 bg-white/30 hidden md:block self-start"/>

              {/* Social icons */}
              <div className="mt-auto">
                <p className="text-white/70 text-xs font-semibold mb-3">Follow us on</p>
                <div className="flex items-center gap-2">
                  {socials.map(({ icon, label }) => (
                    <a key={label} href="#" aria-label={label}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      style={{ border:"1.5px solid rgba(255,255,255,0.4)" }}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Access */}
            <div className="border-l border-white/20 pl-8">
              <h4 className="text-white font-bold text-base mb-5">Quick Access</h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map(l => (
                  <li key={l}>
                    <a href="#" className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors font-medium">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reach Us */}
            <div>
              <h4 className="text-white font-bold text-base mb-5">Reach Us</h4>
              <div className="flex flex-col gap-4">
                <a href="mailto:designnova@gmail.com"
                  className="flex items-center gap-3 text-white/85 text-sm hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/20 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 7 10-7"/>
                    </svg>
                  </div>
                  designnova@gmail.com
                </a>
                <a href="tel:+917467367477"
                  className="flex items-center gap-3 text-white/85 text-sm hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/20 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  +91 7467367477
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* WhatsApp floating */}
      <a href="https://wa.me/917467367477?text=Hi%2C%20I%27m%20interested%20in%20the%20DesignNova%20UI%2FUX%20bootcamp!"
        target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
        style={{ background:"linear-gradient(135deg,#25D366,#128C7E)", boxShadow:"0 8px 32px rgba(37,211,102,.45)" }}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}
