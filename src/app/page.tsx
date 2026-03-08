import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <RevealOnScroll />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        {/* <Projects /> */}
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
