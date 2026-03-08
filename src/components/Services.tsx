"use client";

import { services } from "@/lib/data";
import { useRef } from "react";

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const colors = [
    { bg: "bg-sky-100", text: "text-slate-900", titleText: "text-slate-900", icon: "bg-sky-500" },
    { bg: "bg-yellow-300", text: "text-slate-900", titleText: "text-slate-900", icon: "bg-yellow-500" },
    { bg: "bg-purple-100", text: "text-purple-900", titleText: "text-purple-900", icon: "bg-purple-500" },
    { bg: "bg-green-100", text: "text-green-900", titleText: "text-green-900", icon: "bg-green-500" },
    { bg: "bg-pink-100", text: "text-pink-900", titleText: "text-pink-900", icon: "bg-pink-500" },
    { bg: "bg-orange-100", text: "text-orange-900", titleText: "text-orange-900", icon: "bg-orange-500" },
  ];

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
                          <p className={`${color.text} text-base md:text-lg lg:text-xl font-light leading-relaxed opacity-90`}>
                            {service.description}
                          </p>
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
          </div>
      </div>
    </section>
  );
}
