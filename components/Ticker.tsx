"use client";

const items = [
  "UI/UX Design",
  "Figma",
  "Prototyping",
  "User Research",
  "AI Tools",
  "Design Systems",
  "Wireframing",
  "Visual Design",
  "Interaction Design",
  "Portfolio Building",
];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" fillOpacity="0.6" />
  </svg>
);

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="relative py-5 overflow-hidden bg-black border-y border-white/5">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="ticker-inner gap-8">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-white/60 text-sm font-medium uppercase tracking-widest whitespace-nowrap shrink-0">
            <StarIcon />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
