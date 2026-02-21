"use client";

import { Globe, Mail, MapPin, Phone, Linkedin, Twitter, Github, Send } from "lucide-react";
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
    <section id="contact" className="py-32 px-4 relative bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up delay-100 font-light">
            Ready to transform your business? Let's talk about your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-zinc-900">Contact Information</h3>
            </div>

            {/* Address */}
            <div className="group flex gap-6 p-6 rounded bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all">
              <div className="p-4 rounded bg-zinc-900 h-fit text-zinc-400 group-hover:text-blue-500 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-zinc-800">
                  Office Location
                </h4>
                <p className="text-zinc-400 font-light text-sm">India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex gap-6 p-6 rounded bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all">
              <div className="p-4 rounded bg-zinc-900 h-fit text-zinc-400 group-hover:text-blue-500 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-zinc-800">
                  Phone
                </h4>
                <p className="text-zinc-400 font-light text-sm">+91 (Your Number)</p>
              </div>
            </div>

            {/* Email */}
            <div className="group flex gap-6 p-6 rounded bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all">
              <div className="p-4 rounded bg-zinc-900 h-fit text-zinc-400 group-hover:text-blue-500 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-zinc-800">
                  Email
                </h4>
                <p className="text-zinc-400 font-light text-sm">hello@myvr-labs.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 text-zinc-800">
              <h4 className="font-semibold text-lg mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded border border-zinc-200 bg-zinc-50 hover:bg-zinc-200 transition-colors text-zinc-400 hover:text-zinc-900"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded border border-zinc-200 bg-zinc-50 hover:bg-zinc-200 transition-colors text-zinc-400 hover:text-zinc-900"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded border border-zinc-200 bg-zinc-50 hover:bg-zinc-200 transition-colors text-zinc-400 hover:text-zinc-900"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-zinc-600">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-zinc-50 border border-zinc-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-800 placeholder-zinc-600 outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-zinc-600">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-zinc-50 border border-zinc-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-800 placeholder-zinc-600 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-zinc-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-zinc-50 border border-zinc-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-800 placeholder-zinc-600 outline-none"
                  placeholder="+91 (Your number)"
                />
              </div>

              {/* Company */}
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-zinc-600">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-zinc-50 border border-zinc-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-800 placeholder-zinc-600 outline-none"
                  placeholder="Your company"
                />
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-zinc-600">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded bg-zinc-50 border border-zinc-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-800 placeholder-zinc-600 outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-3.5 rounded bg-zinc-900 hover:bg-zinc-800 text-white font-semibold transition-all flex items-center justify-center gap-2 mt-6 shadow-sm"
              >
                <span>{submitted ? "Message Sent! ✓" : "Send Message"}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
