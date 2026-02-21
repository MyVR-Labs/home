import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-200 bg-white py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer transition-transform hover:scale-105">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-zinc-200 shadow-sm bg-white">
                <Image src="/icon.png" alt="MyVR-Labs Logo" fill className="object-contain p-1" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800">
                MyVR-Labs
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed font-light mt-2">
              Transforming local businesses into digital leaders with high-performance apps, websites, and smart automation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-zinc-800 mb-6 text-base tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-3">
              {["Mobile Apps", "Web Development", "Business Automation", "Ongoing Support"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-zinc-400 hover:text-blue-400 transition-colors text-sm font-light flex items-center gap-2 group"
                  >
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
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
            <h4 className="font-semibold text-zinc-800 mb-6 text-base tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Projects", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-zinc-400 hover:text-blue-400 transition-colors text-sm font-light flex items-center gap-2 group"
                  >
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
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
            <h4 className="font-semibold text-zinc-800 mb-6 text-base tracking-wide uppercase text-sm">Get In Touch</h4>
            <ul className="space-y-3 text-zinc-400 text-sm font-light">
              <li className="hover:text-blue-400 transition-colors">
                Email: hello@myvr-labs.com
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Phone: +91 (Your Number)
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Location: India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-400 text-sm font-light">
              &copy; 2024 MyVR-Labs. All rights reserved.
            </p>
            <div className="flex gap-8 flex-wrap justify-center md:justify-end">
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-600 transition-colors text-sm font-light"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-600 transition-colors text-sm font-light"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-zinc-600 transition-colors text-sm font-light"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="#home"
            className="p-3 rounded-full bg-zinc-50 border border-zinc-200 hover:border-zinc-300 text-zinc-400 hover:text-zinc-900 transition-all hover:-translate-y-1"
          >
            <ArrowRight className="w-4 h-4 -rotate-90" />
          </a>
        </div>
      </div>
    </footer>
  );
}
