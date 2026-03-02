"use client";

import { team } from "@/lib/data";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-32 px-4 relative">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tighter animate-fade-in-up">
            <span className="text-white">Meet Our </span>
            <span className="gradient-text">Leadership.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto animate-fade-in-up delay-100 font-light">
            A dedicated team of experts delivering innovative, high-quality digital solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={member.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative p-8 text-center rounded-[2rem] glass-card gradient-border hover:bg-white/[0.06] transition-all duration-300">
                {/* Avatar */}
                <div className="mb-6 relative inline-block">
                  <div className="relative w-24 h-24 rounded-[2rem] bg-gradient-to-br from-brand-400/20 to-brand-600/10 flex items-center justify-center text-4xl border border-brand-400/20 shadow-lg shadow-brand-400/5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-brand-400/15">
                    {member.image}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-brand-300 transition-colors tracking-tight">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-brand-400 font-medium mb-4 text-sm tracking-wide">
                  {member.role}
                </p>

                {/* Expertise */}
                <p className="text-white/60 text-sm mb-6 leading-relaxed font-light">
                  {member.expertise}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-6 border-t border-white/[0.06]">
                  <a
                    href="#"
                    className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-brand-400/15 text-white/40 hover:text-brand-400 transition-all border border-white/[0.05] hover:border-brand-400/20"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-brand-400/15 text-white/40 hover:text-brand-400 transition-all border border-white/[0.05] hover:border-brand-400/20"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-brand-400/15 text-white/40 hover:text-brand-400 transition-all border border-white/[0.05] hover:border-brand-400/20"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
