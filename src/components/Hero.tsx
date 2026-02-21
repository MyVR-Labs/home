"use client";

import { ArrowRight, Globe, Monitor, Building } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight animate-fade-in-up">
          <span className="block text-zinc-800 mb-2">Elevate Your Business</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-400 font-black animate-gradient">
            with Virtual Presence
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-100 font-light">
          Transforming local businesses into digital leaders. We build scalable mobile apps, modern websites, and business automation tools for restaurants, clinics, retailers, and more.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up delay-200">
          <button className="group w-full sm:w-auto px-8 py-3.5 rounded bg-zinc-900 hover:bg-zinc-800 text-white font-semibold transition-all flex items-center justify-center gap-3 shadow-sm">
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group w-full sm:w-auto px-8 py-3.5 rounded border border-zinc-200 bg-zinc-50/80 hover:bg-zinc-200 text-zinc-800 font-semibold transition-all flex items-center justify-center gap-2">
            <span>Explore Solutions</span>
            <Globe className="w-4 h-4 group-hover:rotate-6 transition-transform text-zinc-400" />
          </button>
        </div>

        {/* Stats with Animated Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 pt-16 border-t border-zinc-800/80 animate-fade-in-up delay-300">
          {[
            { value: "50+", label: "Successful Projects", icon: <Monitor className="w-8 h-8 text-zinc-400" /> },
            { value: "30+", label: "Local Businesses", icon: <Building className="w-8 h-8 text-zinc-400" /> },
            { value: "24/7", label: "Reliable Support", icon: <Globe className="w-8 h-8 text-zinc-400" /> }
          ].map((stat, i) => (
            <div key={i} className="text-center group flex flex-col items-center">
              <div className="mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-light text-zinc-800 mb-2">
                {stat.value}
              </div>
              <div className="text-zinc-400 text-sm tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border border-zinc-300 rounded-full flex items-start justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1 h-2 bg-zinc-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
