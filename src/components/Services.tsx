"use client";

import { services } from "@/lib/data";
import { useRef, useState, useEffect } from "react";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const colors = [
    { bg: "bg-sky-100", text: "text-slate-900", titleText: "text-slate-900", icon: "bg-sky-500" },
    { bg: "bg-yellow-300", text: "text-slate-900", titleText: "text-slate-900", icon: "bg-yellow-500" },
    { bg: "bg-purple-100", text: "text-purple-900", titleText: "text-purple-900", icon: "bg-purple-500" },
    { bg: "bg-green-100", text: "text-green-900", titleText: "text-green-900", icon: "bg-green-500" },
    { bg: "bg-pink-100", text: "text-pink-900", titleText: "text-pink-900", icon: "bg-pink-500" },
    { bg: "bg-orange-100", text: "text-orange-900", titleText: "text-orange-900", icon: "bg-orange-500" },
  ];

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    scrollToSlide(newIndex);
  };

  // Keep index updated on manual scroll
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const itemWidth = carouselRef.current.clientWidth;
        const newIndex = Math.round(carouselRef.current.scrollLeft / itemWidth);
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    };

    const ref = carouselRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentIndex]);

  return (
    <section id="services" className="w-full bg-white px-5 py-24 relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-950 mb-4 leading-tight">
            Our Services
          </h2>
          <p className="text-base text-ink-500 leading-relaxed">
            Building solutions that matter. Transform your vision into reality.
          </p>
        </div>

        {/* Services Slider */}
        <div className="w-full overflow-hidden">
          <style>{`
            #services-carousel {
              scroll-snap-type: x mandatory;
              scroll-behavior: smooth;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            #services-carousel::-webkit-scrollbar {
              display: none;
            }
            .carousel-item {
              scroll-snap-align: start;
              scroll-snap-stop: always;
              animation: slideInUp 0.6s ease-out forwards;
              opacity: 0;
            }
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          <div
            ref={carouselRef}
            id="services-carousel"
            className="flex overflow-x-scroll scrollbar-hide"
          >
            {services.map((service, index) => {
              const color = colors[index % colors.length];

              return (
                <div
                  key={service.id}
                  className="carousel-item flex-shrink-0 w-full"
                >
                  <div className="w-full flex flex-col md:flex-row gap-6 mx-auto min-h-[400px]">
                    {/* Left Side 65% text */}
                    <div className={`${color.bg} md:w-[65%] flex flex-col justify-between p-8 md:p-14 rounded-3xl shadow-sm h-full`}>
                      <div className="flex-1">
                        <div className={`${color.icon} w-16 h-16 rounded-2xl text-white font-bold text-3xl flex items-center justify-center mb-8 shadow-sm`}>
                          {service.icon}
                        </div>
                        <p className={`text-sm font-bold ${color.text} uppercase tracking-widest mb-4 opacity-70`}>
                          0{index + 1}
                        </p>
                        <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${color.text} mb-6 leading-tight`}>
                          {service.title}
                        </h3>
                        <p className={`${color.text} text-base md:text-lg lg:text-xl font-light leading-relaxed opacity-90 mb-8`}>
                          {service.description}
                        </p>
                        <a
                          href="#contact"
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-current font-semibold transition-all hover:bg-white/20 ${color.text}`}
                        >
                          Learn More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Right Side 35% image */}
                    <div className="md:w-[35%] h-64 md:h-auto rounded-3xl overflow-hidden relative shadow-sm">
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                          <span className="text-8xl opacity-20">{service.icon}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 gap-4 px-4">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-ink-950 text-white flex items-center justify-center hover:bg-ink-800 transition-colors duration-300 shadow-lg"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2 flex-1 justify-center">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "bg-ink-950 w-8"
                      : "bg-ink-300 w-2 hover:bg-ink-500"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-ink-950 text-white flex items-center justify-center hover:bg-ink-800 transition-colors duration-300 shadow-lg"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide counter */}
          <div className="text-center mt-6 text-ink-600 text-sm font-medium">
            {currentIndex + 1} / {services.length}
          </div>
        </div>
      </div>
    </section>
  );
}
