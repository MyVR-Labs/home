"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

/* --- floating review card that cycles ---------------------------------- */
function FloatingReview() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((p) => (p + 1) % testimonials.length);
        setVisible(true);
      }, 350);
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  const t = testimonials[idx];
  if (!t) return null;

  return (
    <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-20 w-72">
      <div
        className={`bg-white rounded-2xl border border-ink-200 p-5 shadow-xl shadow-ink-900/8 transition-all duration-350 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
      >
        <div className="flex gap-0.5 mb-3">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-[13px] text-ink-600 leading-relaxed mb-4 italic">
          &ldquo;{t.message}&rdquo;
        </p>
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
            {t.name.charAt(0)}
          </div>
          <div>
            <p className="text-[12px] font-semibold text-ink-900 leading-none mb-0.5">{t.name}</p>
            <p className="text-[11px] text-ink-400">{t.role} · {t.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- animated number counter ------------------------------------------ */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}{suffix}
    </span>
  );
}

/* --- hero --------------------------------------------------------------- */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 pb-16 overflow-hidden"
    >
      {/* Soft background blobs */}
      <div
        className="hero-blob absolute w-[560px] h-[560px] bg-brand-100/40 -top-20 -left-20 z-0"
      />
      <div
        className="hero-blob absolute w-[400px] h-[400px] bg-violet-100/30 bottom-10 -right-10 z-0"
        style={{ animationDelay: "-5s", animationDuration: "15s" }}
      />

      {/* Floating review */}
      <FloatingReview />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-7">
          <span className="eyebrow">MVP Studio · India</span>
          <span className="h-1 w-1 rounded-full bg-brand-400 animate-ping" />
        </div>

        {/* Heading */}
        <h1 className="heading-xl text-ink-950 mb-6">
          We Build{" "}
          <span className="relative inline-block">
            <span className="gradient-text">Digital Products</span>
            {/* underline squiggle */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-brand-200"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M1 6 C50 1, 100 11, 150 6 S250 1, 299 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>{" "}
          <br />
          That Actually Launch.
        </h1>

        {/* Sub */}
        <p className="text-lg text-ink-500 mb-10 max-w-xl mx-auto leading-relaxed">
          From idea to a live, working product — we design and build mobile apps,
          websites &amp; automation tools for growing businesses.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <a href="#contact" className="btn-primary w-full sm:w-auto justify-center">
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#projects" className="btn-secondary w-full sm:w-auto justify-center">
            See Our Work
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Social proof + stats */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Avatar stack + stars */}
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2.5">
              {["RC", "AF", "SK"].map((init, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-brand-600 border-2 border-white text-white text-[10px] font-bold flex items-center justify-center"
                >
                  {init}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-ink-400 font-medium">30+ happy clients</p>
            </div>
          </div>

          <div className="h-8 w-px bg-ink-200 hidden sm:block" />

          {/* Stats */}
          {[
            { value: 50, suffix: "+", label: "Projects shipped" },
            { value: 4, suffix: " wks", label: "Avg. time to launch" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-ink-900 leading-none mb-0.5">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-ink-400 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-[10px] font-medium text-ink-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ink-400 to-transparent" />
      </div>
    </section>
  );
}
