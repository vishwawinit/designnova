"use client";

const items = [
  "UI/UX Design", "Figma", "Prototyping", "User Research",
  "AI Tools", "Design Systems", "Wireframing", "Visual Design",
  "Interaction Design", "Portfolio Building", "Accessibility", "Motion Design",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-black py-4 border-y-0" style={{ transform: "rotate(-1.8deg)", margin: "0 -40px" }}>
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="ticker-inner items-center gap-10">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 shrink-0">
            <svg width="5" height="5" viewBox="0 0 5 5"><circle cx="2.5" cy="2.5" r="2.5" fill="white" opacity="0.5"/></svg>
            <span className="text-white/70 text-sm font-semibold uppercase tracking-[0.18em] whitespace-nowrap">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
