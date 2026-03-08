"use client";

import { projects } from "@/lib/data";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Projects() {
  const project = projects[0];
  if (!project) return null;

  return (
    <section id="projects" className="section-pad bg-ink-50 px-5 relative overflow-hidden">
      <div className="absolute top-0 left-8 right-8 h-px bg-ink-200" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16" data-reveal>
          <p className="eyebrow mb-3">Case Study</p>
          <h2 className="heading-lg text-ink-950 max-w-lg">
            Real Work.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
        </div>

        {/* Big card */}
        <div
          className="card overflow-hidden rounded-2xl"
          data-reveal
          data-delay="1"
        >
          <div className="flex flex-col lg:flex-row">

            {/* Visual side */}
            <div className="lg:w-2/5 bg-brand-600 min-h-[280px] lg:min-h-0 flex items-center justify-center p-12 relative overflow-hidden">
              {/* Decorative circles */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-white/10"
                  style={{
                    width: `${(i + 1) * 120}px`,
                    height: `${(i + 1) * 120}px`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
              <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-[2rem] bg-white/15 border border-white/20 flex items-center justify-center text-6xl sm:text-7xl backdrop-blur-sm shadow-2xl">
                {project.image}
              </div>
            </div>

            {/* Info side */}
            <div className="lg:w-3/5 p-8 sm:p-12 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-brand-600 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                {project.category}
              </span>

              <h3 className="heading-md text-ink-950 mb-4">{project.title}</h3>
              <p className="text-ink-500 text-base leading-relaxed mb-8 max-w-md">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-ink-100 text-ink-600 text-xs font-semibold rounded-full border border-ink-200">
                    {t}
                  </span>
                ))}
              </div>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brand w-max text-sm"
                >
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-ink-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-ink-300 animate-pulse" />
                  In Development
                </span>
              )}
            </div>
          </div>
        </div>

        {/* More projects hint */}
        <div className="mt-8 text-center" data-reveal data-delay="2">
          <p className="text-ink-400 text-sm">
            More projects on the way.{" "}
            <a href="#contact" className="text-brand-600 font-semibold hover:underline">
              Work with us →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
