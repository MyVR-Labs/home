"use client";

import { testimonials } from "@/lib/data";

export default function Testimonials() {
  if (!testimonials?.length) return null;

  return (
    <section id="testimonials" className="w-full py-24 px-[5%] bg-ink-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          what our customers says
        </h2>

        {/* Testimonials Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id || i}
              className="flex flex-col justify-between h-full"
            >
              {/* Quote */}
              <p className="text-white text-base leading-relaxed mb-8 font-light">
                &ldquo;{t.message}&rdquo;
              </p>

              {/* Author section */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-lg bg-brand-500 text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-white/60">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
