import { ArrowRight, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white relative overflow-hidden">

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-brand-500" />

      {/* BG blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-900/20 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        {/* CTA row */}
        <div className="py-16 sm:py-20 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3">Ready when you are</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Got an idea? <br />
              <span className="gradient-text">Let&apos;s ship it.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="btn-brand flex-shrink-0 text-base !px-8 !py-4"
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Main grid */}
        <div className="py-14 grid grid-cols-2 sm:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                <Image src="/logo.svg" alt="CraftMVP Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-bold text-[17px] tracking-tight">
                Craft<span className="gradient-text">MVP</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Turning ideas into production-ready digital products for growing businesses.
            </p>
            <div className="space-y-2">
              <a href="tel:+919059790014" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm">
                <Phone className="w-3.5 h-3.5" /> +91 9059790014
              </a>
              <a href="mailto:craftmvp.in@gmail.com" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm">
                <Mail className="w-3.5 h-3.5" /> craftmvp.in@gmail.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/30 mb-5">Services</h4>
            <ul className="space-y-3">
              {["Mobile Apps", "Web Development", "Automation", "Support"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/30 mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Work", href: "#projects" },
                { label: "Team", href: "#team" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/30 mb-5">Let&apos;s Talk</h4>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              We reply within 24 hours. No spam, ever.
            </p>
            <a href="#contact" className="text-sm text-brand-400 font-semibold hover:text-brand-300 transition-colors flex items-center gap-1 group">
              Contact us
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.07] py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© 2026 CraftMVP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
