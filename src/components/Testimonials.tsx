"use client";

import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-4 relative bg-white">
      {/* Subtle Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-brand-100" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up tracking-tight text-zinc-900">
            Client Testimonials
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up delay-100 font-light">
            Insights from professional partners and enterprise clients we've helped succeed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Card */}
              <div className="relative p-8 rounded bg-zinc-50 border border-zinc-200 group-hover:border-zinc-400 transition-all duration-300 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-brand-200 group-hover:text-brand-300 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className="fill-zinc-400 text-zinc-400"
                      />
                    ))}
                </div>

                {/* Quote Text */}
                <p className="text-zinc-600 mb-8 text-lg leading-relaxed font-light flex-grow">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-zinc-200 flex flex-col">
                  <div className="font-semibold text-zinc-900 mb-1 tracking-tight">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-zinc-400 font-light">
                    {testimonial.role}, <span className="text-zinc-400 font-medium">{testimonial.company}</span>
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
