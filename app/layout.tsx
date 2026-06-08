import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DesignNova — Learn UI/UX Design in 60 Days",
  description:
    "India's #1 UI/UX Design bootcamp. Master Figma, AI tools & industry workflows with expert mentors. 92% placement rate. Join 25K+ graduates.",
  keywords: "UI UX design course, Figma bootcamp, product design, UX research, AI design tools, design career",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#1a0030] antialiased">
        {children}
      </body>
    </html>
  );
}
