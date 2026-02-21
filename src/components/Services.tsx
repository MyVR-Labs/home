"use client";

import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 relative bg-white">
      {/* Subtle Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up delay-100 font-light">
            Comprehensive digital solutions tailored to transform your business and enhance your professional presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group relative animate-fade-in-up hover-lift"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-sky-500/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card */}
              <div className="relative p-8 rounded-lg bg-zinc-50 border border-zinc-200 group-hover:border-zinc-400 transition-all duration-300 flex flex-col h-full">
                {/* Icon */}
                <div className="text-5xl mb-6 text-zinc-800 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-zinc-800 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mb-8 font-light leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-zinc-400 flex items-start gap-3">
                      <span className="text-blue-500 mt-0.5 mt-[2px] opacity-80">✓</span>
                      <span className="group-hover:text-zinc-600 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="text-blue-500 font-medium text-sm flex items-center gap-2 cursor-pointer group/link mt-auto">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
