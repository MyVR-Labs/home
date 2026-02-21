"use client";

import { projects } from "@/lib/data";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Projects() {
  const project = projects.length > 0 ? projects[0] : null;

  if (!project) return null;

  return (
    <section id="projects" className="py-32 px-4 relative bg-white">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Sleek Minimalist Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tighter text-zinc-900">
            Featured Case Study.
          </h2>
          <p className="text-xl text-zinc-500 font-medium tracking-tight">
            See how we transform complex requirements into seamless, high-performance digital eco-systems.
          </p>
        </div>

        {/* Immersive Single Project Feature */}
        <div className="max-w-6xl mx-auto">
          <div className="group relative rounded-[2.5rem] bg-zinc-50 border border-zinc-100 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row items-stretch">

            {/* Left Side: Visual Showcase */}
            <div className="w-full lg:w-1/2 h-80 lg:h-auto lg:self-stretch bg-zinc-100/50 relative overflow-hidden flex items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-zinc-100">
              <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-105">
                <div className="w-48 h-48 bg-white rounded-[2rem] shadow-sm border border-zinc-200 flex items-center justify-center">
                  <span className="text-8xl drop-shadow-sm filter">{project.image}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Deep Content & Context */}
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-8 w-max">
                <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
                <span className="text-brand-700 text-xs font-semibold tracking-wide uppercase">
                  {project.category}
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl font-bold mb-6 text-zinc-900 tracking-tighter leading-tight">
                {project.title}
              </h3>

              <p className="text-lg sm:text-xl text-zinc-500 mb-10 leading-relaxed font-light tracking-tight">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm font-medium bg-white text-zinc-700 px-4 py-2 rounded-full border border-zinc-200 shadow-sm"
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
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-medium transition-all group/btn shadow-lg hover:shadow-xl hover:-translate-y-0.5 tracking-tight w-full sm:w-max"
                >
                  <span>Explore {project.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-100 text-zinc-400 rounded-full font-medium tracking-tight w-full sm:w-max cursor-not-allowed">
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
