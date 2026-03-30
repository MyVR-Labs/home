"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#projects" },
  { label: "Team", href: "/#team" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Blogs", href: "/blogs" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-ink-950 border-b border-ink-800 shadow-sm"
        : "bg-white border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0 group">
          <Image src="/logo.svg" alt="CraftMVP Logo" width={92} height={92} className="object-contain" />
          <span className={`text-[16px] font-bold tracking-tight hidden sm:inline ${scrolled ? 'text-white' : 'text-ink-950'}`}>
            CraftMVP
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-white/70 hover:text-white' : 'text-ink-600 hover:text-ink-950'}`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? 'bg-white' : 'bg-brand-600'} group-hover:w-full transition-all duration-300`} />
            </a>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <a href="#contact" className="bg-ink-950 text-white hover:bg-ink-800 transition-colors rounded-lg text-sm font-medium !py-2 !px-6">
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((p) => !p)}
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-white hover:text-white/80' : 'text-ink-600 hover:text-ink-950'}`}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`lg:hidden border-t ${scrolled ? 'bg-ink-900 border-ink-800' : 'bg-white border-ink-100'}`}>
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all ${scrolled ? 'text-white/70 hover:text-white hover:bg-ink-800' : 'text-ink-600 hover:text-ink-950 hover:bg-ink-50'}`}
              >
                {link.label}
              </a>
            ))}
            <div className={`pt-2 border-t ${scrolled ? 'border-ink-800' : 'border-ink-100'}`}>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex bg-ink-950 text-white hover:bg-ink-800 transition-colors rounded-lg w-full justify-center font-medium text-sm !py-2.5"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
