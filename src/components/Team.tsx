"use client";

import { team } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="w-full bg-white px-5 py-20 relative">
      <div className="max-w-7xl mx-auto">

        {/* Featured Story Section with Images and Bottom Content */}
        <div className="relative">
          {/* Main Heading */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-950 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-ink-500 max-w-2xl mx-auto">
              The creative minds and technical experts behind our cutting-edge solutions.
            </p>
          </div>

          {/* Left vertical "FEATURED STORY" text with line */}
          <div className="absolute left-0 top-32 h-48 hidden md:flex flex-col items-center gap-4">
            <div className="w-1 h-12 bg-brand-500 rounded-full" />
            <p className="text-xs font-bold text-ink-400 uppercase tracking-widest writing-mode" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
              Featured Story
            </p>
          </div>

          {/* Images Grid - 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-0 ml-12 md:ml-0">
            {team.slice(0, 4).map((member, i) => (
              <div key={member.id} className="aspect-square bg-gradient-to-br from-ink-200 to-ink-300 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-2">👤</div>
                  <p className="text-xs text-ink-500 font-medium">{member.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section with Gradient Background */}
          <div className="relative mt-0 pt-16 md:pt-20 px-6 md:px-12 pb-16 md:pb-20 bg-gradient-to-br from-teal-700 via-teal-600 to-blue-800 rounded-b-2xl overflow-hidden">

            {/* Decorative angular shapes */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900 transform rotate-45 -translate-y-1/2 -translate-x-1/4" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left side - Heading */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Meet real people making real impact
                </h3>

                {/* CTA Link */}
                <a href="#" className="inline-flex items-center gap-2 text-white font-bold uppercase text-sm tracking-wide hover:gap-4 transition-all">
                  See Series
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right side - Description */}
              <div className="flex flex-col justify-center">
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  We're a global community of individuals with a shared purpose. See how our people go above and beyond each day to help build innovative digital solutions for a more confident future for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
