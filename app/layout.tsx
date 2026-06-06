import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesignNova — Learn UI/UX Design in 60 Days",
  description:
    "Master UI/UX Design with AI in just 60 days. Industry-certified curriculum, expert mentors, and guaranteed placement assistance. Join 25K+ satisfied students.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0012] text-white">
        {children}
      </body>
    </html>
  );
}
