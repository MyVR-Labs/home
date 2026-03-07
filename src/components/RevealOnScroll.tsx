"use client";

import { useEffect } from "react";

/**
 * Activates scroll-reveal on all elements with data-reveal attribute.
 * Usage: add <RevealOnScroll /> once near the top of your page.
 */
export default function RevealOnScroll() {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
}
