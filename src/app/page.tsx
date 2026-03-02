import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-950 text-white overflow-x-hidden relative flex flex-col">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-brand-950" />
        <div className="absolute inset-0 grid-pattern" />
        {/* Animated gradient orbs */}
        <div className="gradient-orb absolute top-0 left-1/4 w-[800px] h-[800px] pointer-events-none" />
        <div className="gradient-orb-2 absolute bottom-1/4 right-1/4 w-[600px] h-[600px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <Services />
          <Projects />
          <Team />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
