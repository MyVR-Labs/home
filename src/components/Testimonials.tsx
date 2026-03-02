"use client";

import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-32 px-4 relative">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-brand-400/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tighter animate-fade-in-up">
            <span className="text-white">Client </span>
            <span className="gradient-text">Testimonials.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto animate-fade-in-up delay-100 font-light">
            Insights from partners and clients we&apos;ve helped succeed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id || i}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative p-8 rounded-[2rem] glass-card gradient-border hover:bg-white/[0.06] transition-all duration-300 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-brand-400/20 group-hover:text-brand-400/40 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating || 0 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-white/75 mb-8 text-lg leading-relaxed font-light flex-grow">
                  &ldquo;{testimonial.message}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-col">
                  <div className="font-semibold text-white mb-1 tracking-tight">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/60 font-light">
                    {testimonial.role}, <span className="text-brand-400/80 font-medium">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
