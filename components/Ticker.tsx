"use client";

const row1 = [
  "UI Design", "★", "UX Research", "★", "Figma Mastery", "★",
  "AI Tools", "★", "Prototyping", "★", "Design Systems", "★",
  "Interaction Design", "★", "Portfolio Building", "★", "Job Placement", "★",
  "Motion Design", "★", "User Testing", "★", "Visual Hierarchy", "★",
];

const row2 = [
  "Product Design", "◆", "Design Thinking", "◆", "Accessibility", "◆",
  "Typography", "◆", "Colour Theory", "◆", "Midjourney", "◆",
  "Framer", "◆", "Adobe XD", "◆", "Wireframing", "◆",
  "User Personas", "◆", "Competitor Analysis", "◆", "Design Ops", "◆",
];

function Strip({ words, reverse = false, bg = "#0D0015", rotate = 0 }: {
  words: string[];
  reverse?: boolean;
  bg?: string;
  rotate?: number;
}) {
  const doubled = [...words, ...words];
  return (
    <div
      className="overflow-hidden py-3 relative"
      style={{
        background: bg,
        transform: `rotate(${rotate}deg)`,
        marginBlock: "4px",
      }}
    >
      <div className="flex whitespace-nowrap">
        <div
          style={{
            display: "inline-flex",
            animation: `${reverse ? "ticker-rev" : "ticker"} 36s linear infinite`,
          }}
        >
          {doubled.map((w, i) => {
            const isDot = w === "★" || w === "◆";
            return (
              <span
                key={i}
                className="inline-flex items-center shrink-0 px-4"
                style={{
                  color: isDot ? "#D447FF" : "rgba(255,255,255,0.75)",
                  fontWeight: isDot ? 700 : 600,
                  fontSize: isDot ? "0.65rem" : "0.78rem",
                  letterSpacing: isDot ? 0 : "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {w}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="relative overflow-hidden" style={{ background: "#fff", paddingBlock: "12px" }}>
      <Strip words={row1} bg="#0D0015"  rotate={-1.8} />
      <Strip words={row2} bg="#150020" rotate={1.4}  reverse />
    </div>
  );
}
