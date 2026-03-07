"use client";

import { team } from "@/lib/data";
import { Linkedin, Github, Mail } from "lucide-react";

const avatarColors = [
  "bg-brand-100 text-brand-700",
  "bg-violet-100 text-violet-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
];

export default function Team() {
  return (
    <section id="team" className="section-pad bg-white px-5 relative">
      <div className="absolute top-0 left-8 right-8 h-px bg-ink-100" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center" data-reveal>
          <p className="eyebrow mb-3">The People</p>
          <h2 className="heading-lg text-ink-950">
            Built by Developers,{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">for Builders.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={member.id}
              className="card p-8 text-center group"
              data-reveal
              data-delay={String(i + 1)}
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-2xl ${avatarColors[i]} flex items-center justify-center text-2xl font-bold mx-auto mb-5 transition-transform duration-300 group-hover:scale-110`}>
                {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>

              {/* Info */}
              <h3 className="font-bold text-ink-900 text-lg mb-1">{member.name}</h3>
              <p className="text-brand-600 text-sm font-semibold mb-3">{member.role}</p>
              <p className="text-ink-400 text-sm leading-relaxed mb-6">{member.expertise}</p>

              {/* Social */}
              <div className="flex justify-center gap-2 pt-5 border-t border-ink-100">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-sm w-8 h-8 flex items-center justify-center text-ink-400 hover:text-brand-600 rounded-lg cursor-pointer"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                {[Github, Mail].map((Icon, j) => (
                  <a
                    key={j}
                    href="#"
                    className="card-sm w-8 h-8 flex items-center justify-center text-ink-400 hover:text-brand-600 rounded-lg cursor-pointer"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
