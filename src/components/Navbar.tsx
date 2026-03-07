"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-ink-200/60 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-ink-200 bg-white flex items-center justify-center transition-transform group-hover:scale-105">
            <Image src="/icon.png" alt="CraftMVP" width={28} height={28} className="object-contain p-0.5" />
          </div>
          <span className="text-[17px] font-bold tracking-tight text-ink-900">
            Craft<span className="gradient-text">MVP</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-ink-500 hover:text-ink-900 rounded-lg hover:bg-ink-100/60 transition-all duration-150"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary text-sm !py-2.5 !px-5">
            Let&apos;s Talk
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-ink-100 transition-colors"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-[1.5px] bg-ink-700 rounded-full transition-all duration-300 ${open
                  ? i === 0 ? "w-5 translate-y-[6.5px] rotate-45"
                    : i === 1 ? "w-5 opacity-0"
                      : "w-5 -translate-y-[6.5px] -rotate-45"
                  : "w-5"
                }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          } bg-white border-b border-ink-200`}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-ink-700 hover:text-ink-900 hover:bg-ink-50 rounded-lg transition-all"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center text-sm !py-3"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
