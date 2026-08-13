import { useEffect } from "react";

export default function useRevealOnScroll(containerRef, selector, revealAsGroup = false, refreshKey = null) {
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        const elements = Array.from(container.querySelectorAll(selector));
        if (!elements.length) return undefined;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion || !("IntersectionObserver" in window)) {
            elements.forEach(element => element.classList.add("reveal"));
            return undefined;
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                if (revealAsGroup) {
                    elements.forEach(element => element.classList.add("reveal"));
                    observer.disconnect();
                } else {
                    entry.target.classList.add("reveal");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: "0px 0px -8% 0px",
            threshold: 0.08
        });

        if (revealAsGroup) {
            observer.observe(container);
        } else {
            elements.forEach(element => observer.observe(element));
        }

        return () => observer.disconnect();
    }, [containerRef, selector, revealAsGroup, refreshKey]);
}
