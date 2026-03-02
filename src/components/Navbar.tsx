"use client";

import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
      ? "glass-panel border-b border-white/5 shadow-lg shadow-black/20"
      : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group cursor-pointer transition-transform hover:scale-105">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-brand-400/10 bg-brand-950">
              <Image src="/icon.png" alt="CraftMVP Logo" fill className="object-contain p-1" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Craft<span className="gradient-text">MVP</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-brand-400 transition-colors text-sm font-medium tracking-tight relative group animate-fade-in-down"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:flex px-6 py-2.5 rounded-full bg-brand-400 hover:bg-brand-300 text-brand-950 text-sm font-semibold tracking-tight transition-all items-center gap-2 shadow-lg shadow-brand-400/25 hover:shadow-brand-400/40 hover:-translate-y-0.5"
          >
            <span>Get Started</span>
            <Globe className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/60 hover:text-brand-400 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-panel rounded-2xl mt-2 mb-4 border border-white/5 animate-fade-in-down">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 hover:text-brand-400 transition-colors py-2 font-medium tracking-tight animate-fade-in-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full px-6 py-4 rounded-full bg-brand-400 text-brand-950 font-semibold mt-4 text-center hover:bg-brand-300 tracking-tight transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
