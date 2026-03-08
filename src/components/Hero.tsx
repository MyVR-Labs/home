"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-5 pt-20 overflow-hidden bg-white"
    >
      <div className="max-w-4xl mx-auto w-full text-center">

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink-950 mb-8 leading-tight tracking-tight">
          Built for the future.
          <br />
          Available today.
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-ink-950 hover:bg-ink-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Let&apos;s Talk
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-ink-50 text-ink-950 font-semibold py-3 px-8 rounded-lg border-2 border-ink-950 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-medium text-ink-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-6 bg-ink-300" />
      </div>
    </section>
  );
}
