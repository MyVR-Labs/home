import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer transition-transform hover:scale-105">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-brand-400/5 bg-brand-950">
                <Image src="/icon.png" alt="CraftMVP Logo" fill className="object-contain p-1" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Craft<span className="gradient-text">MVP</span>
              </h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-light mt-2">
              Turning ideas into production-ready MVPs. Mobile apps, websites, and smart automation for growing businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white/80 mb-6 tracking-wide uppercase text-xs">Services</h4>
            <ul className="space-y-3">
              {["Mobile Apps", "Web Development", "Business Automation", "Ongoing Support"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/30 hover:text-brand-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white/80 mb-6 tracking-wide uppercase text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Projects", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/50 hover:text-brand-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white/80 mb-6 tracking-wide uppercase text-xs">Get In Touch</h4>
            <ul className="space-y-3 text-white/50 text-sm font-light">
              <li className="hover:text-brand-400 transition-colors font-medium">
                Email: hello@craftmvp.in
              </li>
              <li className="hover:text-brand-400 transition-colors font-medium">
                Phone: +91 9059790014
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm font-light">
              &copy; 2026 CraftMVP. All rights reserved.
            </p>
            <div className="flex gap-8 flex-wrap justify-center md:justify-end">
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-sm font-light">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-sm font-light">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="mt-8 flex justify-center">
          <a
            href="#home"
            className="p-3 rounded-full glass-card hover:bg-brand-400/15 text-white/30 hover:text-brand-400 transition-all hover:-translate-y-1 hover:border-brand-400/20"
          >
            <ArrowRight className="w-4 h-4 -rotate-90" />
          </a>
        </div>
      </div>
    </footer>
  );
}
