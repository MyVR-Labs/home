"use client";

import { Mail, Phone, Linkedin, Twitter, Github, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 px-4 relative">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-brand-400/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tighter animate-fade-in-up">
            <span className="text-white">Let&apos;s </span>
            <span className="gradient-text">Connect.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto animate-fade-in-up delay-100 font-light">
            Ready to transform your business? Let&apos;s talk about your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold mb-8 text-white tracking-tight">Contact Information</h3>

            {/* Phone */}
            <div className="group flex gap-5 p-6 rounded-2xl glass-card gradient-border hover:bg-white/[0.06] transition-all">
              <div className="p-4 rounded-xl bg-brand-400/15 h-fit text-brand-400 group-hover:bg-brand-400/25 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 text-white">Phone</h4>
                <p className="text-white/60 font-light text-sm">+91 9059790014</p>
              </div>
            </div>

            {/* Email */}
            <div className="group flex gap-5 p-6 rounded-2xl glass-card gradient-border hover:bg-white/[0.06] transition-all">
              <div className="p-4 rounded-xl bg-brand-400/15 h-fit text-brand-400 group-hover:bg-brand-400/25 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 text-white">Email</h4>
                <p className="text-white/60 font-light text-sm">hello@craftmvp.in</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold text-lg mb-6 text-white">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-3 rounded-xl glass-card hover:bg-brand-400/15 transition-all text-white/40 hover:text-brand-400 hover:border-brand-400/20"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-xl glass-card hover:bg-brand-400/15 transition-all text-white/40 hover:text-brand-400 hover:border-brand-400/20"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-xl glass-card hover:bg-brand-400/15 transition-all text-white/40 hover:text-brand-400 hover:border-brand-400/20"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white/70 tracking-tight">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/30 transition-all text-white placeholder-white/35 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white/70 tracking-tight">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/30 transition-all text-white placeholder-white/35 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white/60 tracking-tight">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/30 transition-all text-white placeholder-white/35 outline-none"
                    placeholder="+91 (Your number)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-white/60 tracking-tight">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/30 transition-all text-white placeholder-white/35 outline-none"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white/60 tracking-tight">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/30 transition-all text-white placeholder-white/25 outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className={`w-full px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 mt-6 tracking-tight ${submitted
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                  : "bg-brand-400 hover:bg-brand-300 text-brand-950 shadow-xl shadow-brand-400/20 hover:shadow-brand-400/40 hover:-translate-y-0.5"
                  }`}
              >
                <span>{submitted ? "Message Sent! ✓" : "Send Message"}</span>
                {!submitted && <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
