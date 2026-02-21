"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import { ArrowRight, ChevronRight, Check } from "lucide-react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="services" className="py-32 px-4 relative bg-zinc-50/50">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Apple-style minimalist Section Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tighter text-zinc-900">
            Smart Solutions for Local Growth.
          </h2>
          <p className="text-xl text-zinc-500 font-medium tracking-tight">
            We provide specialized digital tools to automate your operations, increase your visibility, and bring your business into the modern era.
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Side: Interactive Navigation List */}
          <div className="lg:w-5/12 flex flex-col space-y-3">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${isActive
                    ? "bg-white shadow-md border border-zinc-200 ring-1 ring-brand-950/5 translate-x-2 lg:translate-x-4"
                    : "bg-transparent hover:bg-zinc-100 border border-transparent text-zinc-500 hover:text-brand-900"
                    }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`text-2xl transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110 opacity-70 group-hover:opacity-100"}`}>
                      {service.icon}
                    </span>
                    <span className={`font-semibold tracking-tight text-lg transition-colors ${isActive ? "text-zinc-900" : ""}`}>
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-brand-600 opacity-100 translate-x-0" : "text-zinc-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Side: Dynamic Content Display */}
          <div className="lg:w-7/12">
            <div
              // React keys force component remount for clean CSS animations
              key={activeService.id}
              className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-zinc-100 animate-fade-in-up h-full flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-50 text-brand-600 rounded-2xl text-3xl mb-8 border border-zinc-100 shadow-sm">
                {activeService.icon}
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 tracking-tighter">
                {activeService.title}
              </h3>

              <p className="text-lg sm:text-xl text-zinc-500 mb-10 leading-relaxed font-light tracking-tight">
                {activeService.description}
              </p>

              <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 border border-zinc-100 flex-grow mb-10">
                <h4 className="font-semibold text-zinc-900 mb-6 uppercase tracking-wider text-xs">Core Features</h4>
                <ul className="grid sm:grid-cols-1 gap-y-4">
                  {activeService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-zinc-700 font-medium tracking-tight">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-brand-600" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4">
                <button className="flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-medium transition-all group shadow-lg hover:shadow-xl hover:-translate-y-0.5 tracking-tight w-full sm:w-auto justify-center">
                  Discuss this service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
