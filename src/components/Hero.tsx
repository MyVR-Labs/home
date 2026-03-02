"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [testimonyIndex, setTestimonyIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonyIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[testimonyIndex];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-brand-400/5 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">

        {/* MVP Explainer Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8 animate-fade-in-down group hover:border-brand-400/20 transition-colors cursor-default">
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span className="text-brand-300 text-sm font-semibold tracking-tight">MVP = Minimum Viable Product</span>
          <span className="text-white/20">·</span>
          <span className="text-white/70 text-sm font-medium tracking-tight">Your first working version, built fast</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.05] animate-fade-in-up">
          <span className="text-white">Elevate Your Business.</span>
          <br />
          <span className="gradient-text">Ship Your MVP Fast.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/70 mb-14 max-w-3xl mx-auto animate-fade-in-up delay-100 font-medium tracking-tight leading-relaxed">
          We turn your ideas into production-ready MVPs. From mobile apps to websites and business automation — we build, you launch.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-28 animate-fade-in-up delay-200 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-400 hover:bg-brand-300 text-brand-950 font-semibold transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-400/20 hover:shadow-brand-400/40 hover:-translate-y-1 tracking-tight"
          >
            <span>Start Your Journey</span>
          </a>
          <a
            href="#services"
            className="group w-full sm:w-auto px-8 py-4 rounded-full glass-card hover:border-brand-400/20 text-white font-medium transition-all flex items-center justify-center gap-2 tracking-tight"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 animate-fade-in-up delay-300">
          {[
            { value: "50+", label: "Successful Projects" },
            { value: "30+", label: "Local Businesses" },
            { value: "24/7", label: "Reliable Support" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="text-4xl sm:text-5xl font-bold tracking-tighter gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-medium tracking-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Testimonial */}
      {activeTestimonial && (
        <div
          className={`fixed sm:absolute bottom-8 right-4 sm:right-8 z-50 w-2/3 sm:w-auto max-w-sm transition-all duration-700 pointer-events-none ${isScrolled ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
            }`}
        >
          <div
            key={testimonyIndex}
            className="glass-card rounded-2xl p-5 animate-fade-in-up shadow-2xl shadow-black/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white tracking-tight">{activeTestimonial.name}</span>
                <span className="text-xs text-white/60 font-medium">{activeTestimonial.role}, {activeTestimonial.company}</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic">
              &ldquo;{activeTestimonial.message}&rdquo;
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
