"use client";

import { services } from "@/lib/data";
import { Check } from "lucide-react";

const serviceIcons = [
  /* Mobile */
  <svg key="m" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><rect x="5" y="2" width="14" height="20" rx="3" /><circle cx="12" cy="17.5" r="0.75" fill="currentColor" /></svg>,
  /* Globe */
  <svg key="w" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  /* Automation */
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
  /* Support */
  <svg key="s" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white px-5 relative">
      {/* Faint top rule */}
      <div className="absolute top-0 left-8 right-8 h-px bg-ink-100" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16" data-reveal>
          <p className="eyebrow mb-3">What We Do</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="heading-lg text-ink-950 max-w-lg">
              Everything You Need{" "}
              <span className="gradient-text">to Launch.</span>
            </h2>
            <p className="text-ink-400 text-base max-w-xs leading-relaxed md:text-right">
              Full-stack delivery, from first wireframe to App Store approval.
            </p>
          </div>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="card p-8 flex flex-col"
              data-reveal
              data-delay={String(i + 1)}
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-4xl font-bold text-ink-100 leading-none tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center">
                  {serviceIcons[i]}
                </div>
              </div>

              {/* Text */}
              <h3 className="heading-md text-ink-900 mb-3">{s.title}</h3>
              <p className="text-ink-400 text-sm leading-relaxed mb-6">{s.description}</p>

              {/* Features */}
              <ul className="mt-auto space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-ink-600 font-medium">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-brand-600" strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
