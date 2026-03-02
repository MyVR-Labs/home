"use client";

import { services } from "@/lib/data";
import { Check, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 relative">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-400/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tighter animate-fade-in-up">
            <span className="text-white">Everything You Need to </span>
            <span className="gradient-text">Launch.</span>
          </h2>
          <p className="text-lg text-white/60 font-medium tracking-tight animate-fade-in-up delay-100">
            From idea to live product — we handle the full stack so you can focus on growing your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-full p-8 sm:p-10 rounded-[2rem] glass-card gradient-border hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 flex flex-col">

                {/* Icon & Title */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-400/10 border border-brand-400/20 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-brand-400/5">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base font-medium tracking-tight leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-white/[0.03] rounded-xl p-5 sm:p-6 border border-white/[0.05] flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white/80 font-medium tracking-tight text-sm sm:text-base">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-400/15 flex items-center justify-center">
                          <Check className="w-3 h-3 text-brand-400" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-brand-400 font-medium text-sm tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
