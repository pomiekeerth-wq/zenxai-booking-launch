import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

/**
 * useTextAnimation Hook
 * Applies staggered kinetic typography to a given ref.
 */
export const useTextAnimation = (ref, options = {}) => {
    const {
        type = "chars", // "chars" or "words"
        stagger = 0.02,
        y = 50,
        duration = 0.8,
        delay = 0,
        start = "top 80%"
    } = options;

    useEffect(() => {
        if (!ref.current) return;

        let split;
        let tl;
        let isMounted = true;

        const initAnimation = () => {
            if (!isMounted || !ref.current) return;

            // PERFORMANCE GUARD: Disable animations if user prefers reduced motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) {
                gsap.set(ref.current, { opacity: 1, y: 0 });
                return;
            }

            // Split text
            split = new SplitType(ref.current, {
                types: "lines,words,chars",
                tagName: "span",
            });

            // GSAP Animation
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    start: start,
                    toggleActions: "play none none none",
                },
            });

            const target = type === "chars" ? split.chars : split.words;

            tl.from(target, {
                y: y,
                opacity: 0,
                duration: duration * 0.7, // Reduce duration globally
                stagger: stagger * 0.6, // Increase stagger speed globally
                delay: delay,
                ease: "power3.out",
                force3D: true, // Hardware acceleration
            });
        };

        // Wait for fonts to be ready to avoid layout shifts
        document.fonts.ready.then(initAnimation);

        // Cleanup
        return () => {
            isMounted = false;
            if (split) split.revert();
            if (tl && tl.scrollTrigger) tl.scrollTrigger.kill();
            if (tl) tl.kill();
        };
    }, [ref, type, stagger, y, duration, delay, start]);
};
