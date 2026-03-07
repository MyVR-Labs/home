"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Send, Linkedin, Twitter, Github } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          subject: `New inquiry from ${form.name} — CraftMVP`,
          from_name: "CraftMVP Website",
          ...form,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) {
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
    }
  };

  const field = "w-full px-4 py-3 rounded-xl border border-ink-200 bg-white text-ink-900 text-sm font-medium placeholder:text-ink-300 focus:outline-none focus:border-brand-400 focus:ring-3 focus:ring-brand-100 transition-all";

  return (
    <section id="contact" className="section-pad bg-white px-5 relative">
      <div className="absolute top-0 left-8 right-8 h-px bg-ink-100" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: info */}
          <div data-reveal>
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="heading-lg text-ink-950 mb-5">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something.</span>
            </h2>
            <p className="text-ink-400 text-base leading-relaxed mb-10 max-w-sm">
              Got an idea? We&apos;d love to hear about it. Drop us a message
              and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact links */}
            <div className="space-y-4 mb-10">
              {[
                { Icon: Phone, label: "Phone", value: "+91 9059790014", href: "tel:+919059790014" },
                { Icon: Mail, label: "Email", value: "craftmvp.in@gmail.com", href: "mailto:craftmvp.in@gmail.com" },
                { Icon: MapPin, label: "Location", value: "India — Remote friendly", href: "#" },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-ink-50 border border-ink-200 flex items-center justify-center text-ink-400 group-hover:bg-brand-50 group-hover:border-brand-200 group-hover:text-brand-600 transition-all flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-ink-900 group-hover:text-brand-600 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="card-sm w-9 h-9 flex items-center justify-center text-ink-400 hover:text-brand-600"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="card p-8 sm:p-10" data-reveal data-delay="2">
            <h3 className="font-bold text-ink-900 text-lg mb-7 tracking-tight">
              Send a message
            </h3>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink-500 mb-1.5 tracking-wide uppercase">Full Name *</label>
                  <input required name="name" value={form.name} onChange={handle} className={field} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-500 mb-1.5 tracking-wide uppercase">Email *</label>
                  <input required type="email" name="email" value={form.email} onChange={handle} className={field} placeholder="you@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink-500 mb-1.5 tracking-wide uppercase">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handle} className={field} placeholder="+91 ..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-500 mb-1.5 tracking-wide uppercase">Company</label>
                  <input name="company" value={form.company} onChange={handle} className={field} placeholder="Your company" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink-500 mb-1.5 tracking-wide uppercase">Message *</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handle}
                  rows={5}
                  className={`${field} resize-none`}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "sent"}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${status === "sent"
                    ? "bg-emerald-500 text-white"
                    : status === "loading"
                      ? "bg-ink-800 text-white opacity-70 cursor-wait"
                      : "btn-primary justify-center"
                  }`}
              >
                {status === "sent" ? (
                  "Message Sent! ✓"
                ) : status === "loading" ? (
                  "Sending..."
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-xs text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
