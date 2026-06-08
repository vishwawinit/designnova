"use client";

const WORDS = ["DESIGN & AI","DESIGN & AI","DESIGN & AI","DESIGN & AI","DESIGN & AI","DESIGN & AI","DESIGN & AI","DESIGN & AI"];

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-black py-3" style={{ transform: "rotate(-1.2deg)", margin: "0 -8px" }}>
      <div className="flex whitespace-nowrap">
        <div className="inline-flex" style={{ animation: "ticker 22s linear infinite" }}>
          {[...WORDS,...WORDS].map((w,i)=>(
            <span key={i} className="inline-flex items-center gap-4 px-4">
              <span className="text-white font-black text-sm uppercase tracking-widest">{w}</span>
              <span className="text-[#D447FF] text-base">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
