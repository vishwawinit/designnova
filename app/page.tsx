import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Curriculum from "@/components/Curriculum";
import Certificate from "@/components/Certificate";
import Tools from "@/components/Tools";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0012]">
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <Features />
      <Curriculum />
      <Certificate />
      <Tools />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
