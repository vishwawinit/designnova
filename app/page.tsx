import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Testimonials from "@/components/Testimonials";
import ProjectShowcase from "@/components/ProjectShowcase";
import Certificate from "@/components/Certificate";
import BatchSchedule from "@/components/BatchSchedule";
import Internship from "@/components/Internship";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Ticker />
      <Testimonials />
      <ProjectShowcase />
      <Certificate />
      <BatchSchedule />
      <Internship />
      <Footer />
    </main>
  );
}
