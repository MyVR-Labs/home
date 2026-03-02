"use client";

import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const project = projects.length > 0 ? projects[0] : null;

  if (!project) return null;

  return (
    <section id="projects" className="py-32 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-400/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tighter animate-fade-in-up">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Case Study.</span>
          </h2>
          <p className="text-lg text-white/60 font-medium tracking-tight animate-fade-in-up delay-100">
            See how we transform complex requirements into seamless, high-performance digital products.
          </p>
        </div>

        {/* Feature Card */}
        <div className="max-w-6xl mx-auto animate-fade-in-up delay-200">
          <div className="group relative rounded-[2.5rem] glass-card gradient-border overflow-hidden hover:bg-white/[0.06] transition-all duration-500 flex flex-col lg:flex-row items-stretch">

            {/* Left: Visual */}
            <div className="w-full lg:w-1/2 h-80 lg:h-auto lg:self-stretch bg-gradient-to-br from-brand-400/10 to-brand-600/5 relative overflow-hidden flex items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-white/[0.05]">
              <div className="absolute inset-0 grid-pattern opacity-50" />
              <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-105">
                <div className="w-48 h-48 bg-brand-400/10 rounded-[2rem] shadow-2xl shadow-brand-400/10 border border-brand-400/20 flex items-center justify-center">
                  <span className="text-8xl drop-shadow-lg">{project.image}</span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-400/10 border border-brand-400/20 mb-8 w-max">
                <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse-glow" />
                <span className="text-brand-300 text-xs font-semibold tracking-wide uppercase">
                  {project.category}
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl font-bold mb-6 text-white tracking-tighter leading-tight">
                {project.title}
              </h3>

              <p className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed font-light tracking-tight">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm font-medium bg-white/[0.05] text-white/80 px-4 py-2 rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-400 hover:bg-brand-300 text-brand-950 rounded-full font-semibold transition-all group/btn shadow-xl shadow-brand-400/20 hover:shadow-brand-400/40 hover:-translate-y-0.5 tracking-tight w-full sm:w-max"
                >
                  <span>Explore {project.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white/30 rounded-full font-medium tracking-tight w-full sm:w-max cursor-not-allowed border border-white/5">
                  <span>In Development</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
