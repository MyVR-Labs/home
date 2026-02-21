"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [testimonyIndex, setTestimonyIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
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
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative bg-white overflow-hidden"
    >
      {/* Ultra-subtle ambient glow behind text to give a premium feel */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-50 rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">



        {/* Apple-style Typography: Tight tracking, highly legible, strong weight contrast */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-zinc-900 animate-fade-in-up leading-[1.1]">
          Elevate Your Business. <br />
          <span className="text-zinc-400">With Virtual Presence.</span>
        </h1>

        {/* Clean, focused subheading */}
        <p className="text-xl sm:text-2xl text-zinc-500 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-100 font-medium tracking-tight">
          Transforming local businesses into digital leaders. We build scalable mobile apps, modern websites, and business automation tools for restaurants, clinics, retailers, and more.
        </p>

        {/* Pill-shaped, high-contrast buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 animate-fade-in-up delay-200 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-medium transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 tracking-tight">
            <span>Start Your Journey</span>
          </button>
          <button className="group w-full sm:w-auto px-8 py-4 rounded-full bg-white border tracking-tight border-zinc-200 hover:border-brand-200 hover:bg-brand-50 text-zinc-900 font-medium transition-all flex items-center justify-center gap-2">
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Inline, borderless stats for a cleaner look */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 animate-fade-in-up delay-300">
          {[
            { value: "50+", label: "Successful Projects" },
            { value: "30+", label: "Local Businesses" },
            { value: "24/7", label: "Reliable Support" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-semibold tracking-tighter text-zinc-900 mb-1">
                {stat.value}
              </div>
              <div className="text-zinc-500 text-sm font-medium tracking-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Floating Testimonial Notification (Bottom Right) */}
      <div
        className={`fixed sm:absolute bottom-8 right-4 sm:right-8 z-50 w-2/3 sm:w-auto max-w-sm transition-all duration-700 pointer-events-none ${isScrolled ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
          }`}
      >
        <div
          key={testimonyIndex}
          className="bg-white/40 sm:bg-white/80 backdrop-blur-md sm:backdrop-blur-xl border border-zinc-200/50 shadow-lg sm:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-5 animate-fade-in-up"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-900 tracking-tight">{activeTestimonial.name}</span>
              <span className="text-xs text-zinc-500 font-medium">{activeTestimonial.role}, {activeTestimonial.company}</span>
            </div>
            <div className="flex gap-0.5">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-zinc-800 text-zinc-800" />
              ))}
            </div>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed italic pr-2">
            "{activeTestimonial.message}"
          </p>
        </div>
      </div>
    </section>
  );
}
