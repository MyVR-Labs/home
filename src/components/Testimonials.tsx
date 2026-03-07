"use client";

import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  if (!testimonials?.length) return null;

  return (
    <section id="testimonials" className="section-pad bg-ink-50 px-5 relative overflow-hidden">
      <div className="absolute top-0 left-8 right-8 h-px bg-ink-200" />

      {/* Decorative large quote mark */}
      <div className="absolute right-8 top-16 text-ink-100 select-none pointer-events-none">
        <Quote className="w-40 h-40" strokeWidth={0.5} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16" data-reveal>
          <p className="eyebrow mb-3">Social Proof</p>
          <h2 className="heading-lg text-ink-950 max-w-md">
            Words From Our{" "}
            <span className="gradient-text">Clients.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id || i}
              className="card p-7 flex flex-col h-full relative"
              data-reveal
              data-delay={String(i + 1)}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating || 0 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-ink-600 text-[15px] leading-relaxed flex-grow mb-6">
                &ldquo;{t.message}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-ink-100">
                <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-700 font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-ink-900 text-sm">{t.name}</p>
                  <p className="text-xs text-ink-400">
                    {t.role} ·{" "}
                    <span className="text-brand-600 font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="mt-12 flex justify-center" data-reveal data-delay="4">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-white border border-ink-200 rounded-2xl shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-ink-800">5.0</span>
            <span className="text-ink-200">|</span>
            <span className="text-sm text-ink-500">From 30+ real clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
