"use client";

import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 relative bg-white">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up delay-100 font-light">
            Showcasing our best work across  AI, web development, and digital solutions.
          </p>
        </div>

        {/* Projects Single Feature */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative border border-zinc-200 bg-zinc-50 rounded overflow-hidden transition-all duration-300 hover:border-zinc-400 group">
                {/* Project Image/Icon Section */}
                <div className="h-64 bg-zinc-900 flex items-center justify-center text-6xl text-zinc-600 group-hover:bg-zinc-700 transition-colors duration-300">
                  {project.image}
                </div>

                {/* Project Info */}
                <div className="p-8 relative">
                  {/* Category */}
                  <div className="text-blue-500 text-xs font-semibold tracking-wider uppercase mb-3">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-zinc-800">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-zinc-900 text-zinc-600 px-3 py-1 rounded-full border border-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-zinc-800 font-medium text-sm flex items-center gap-2 group/link hover:text-blue-500 transition-colors">
                      View Live Project
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover/link:text-blue-500 transition-colors" />
                    </a>
                  ) : (
                    <div className="text-zinc-800 font-medium text-sm flex items-center gap-2 group/link">
                      View Project
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover/link:text-zinc-800 transition-colors" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
