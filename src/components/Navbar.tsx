"use client";

import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 glass-panel border-b border-zinc-200 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Animation */}
          <a href="#home" className="flex items-center gap-3 group cursor-pointer transition-transform hover:scale-105">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-zinc-200 shadow-sm bg-white">
              <Image src="/icon.png" alt="MyVR-Labs Logo" fill className="object-contain p-1" />
            </div>
            <span className="text-xl font-bold text-zinc-800 tracking-tight">
              MyVR-Labs
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-blue-500 transition-colors text-sm font-medium relative group animate-fade-in-down"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:flex px-5 py-2 rounded bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold transition-all items-center gap-2">
            <span>Get Started</span>
            <Globe className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-400 hover:text-zinc-900 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-zinc-200 animate-fade-in-down">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-zinc-400 hover:text-zinc-900 transition-colors py-2 font-medium animate-fade-in-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full px-6 py-3 rounded bg-zinc-900 text-white font-semibold mt-4 hover:bg-zinc-800 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
