"use client";

import { team } from "@/lib/data";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-32 px-4 relative bg-white">
      {/* Subtle Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-brand-100" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up tracking-tight text-zinc-900">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up delay-100 font-light">
            A meticulous team of experts dedicated to delivering innovative, enterprise-grade digital solutions.
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
              {/* Card */}
              <div className="relative p-8 text-center rounded bg-zinc-50 border border-zinc-200 group-hover:border-zinc-400 transition-all duration-300">
                {/* Avatar */}
                <div className="mb-6 relative inline-block">
                  <div className="relative w-24 h-24 rounded-[2rem] bg-brand-950 flex items-center justify-center text-4xl border border-brand-100 shadow-sm transition-all duration-300 group-hover:scale-105">
                    {member.image}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold mb-1 text-zinc-900 group-hover:text-brand-950 transition-colors tracking-tight">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-brand-600 font-medium mb-4 text-sm tracking-wide">
                  {member.role}
                </p>

                {/* Expertise */}
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-light">
                  {member.expertise}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-6 border-t border-zinc-200">
                  <a
                    href="#"
                    className="p-2 rounded bg-brand-950 hover:bg-brand-900 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded bg-brand-950 hover:bg-brand-900 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded bg-brand-950 hover:bg-brand-900 text-zinc-400 hover:text-white transition-colors"
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
