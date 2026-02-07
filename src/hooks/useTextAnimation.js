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
        start = "top 85%"
    } = options;

    useEffect(() => {
        if (!ref.current) return;

        let split;
        let tl;
        let isMounted = true;

        const initAnimation = () => {
            if (!isMounted || !ref.current) return;

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
                duration: duration,
                stagger: stagger,
                delay: delay,
                ease: "power3.out",
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
