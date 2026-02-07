import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InteractiveProcessFlow = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "+=3000",
                    pin: true,
                    scrub: 1,
                },
            });

            const stepX = 220; // Distance between boxes

            // Initial State: Start Box appears on the right
            tl.from(".box-start", { scale: 0, opacity: 0, duration: 1, x: stepX * 2 });

            // 1. Start Box moves left, Create Account pops up
            tl.to(".box-start", { x: stepX, duration: 1.5, ease: "power2.inOut" });
            tl.from(".box-account", { scale: 0, opacity: 0, duration: 1, x: stepX * 2 }, "-=1");
            tl.from(".line-1", { scaleX: 0, transformOrigin: "right center", duration: 1 }, "-=1");

            // 2. Move left, First Offering pops up
            tl.to([".box-start", ".box-account", ".line-1"], { x: `-=${stepX}`, duration: 1.5, ease: "power2.inOut" });
            tl.from(".box-offering", { scale: 0, opacity: 0, duration: 1, x: stepX }, "-=1");
            tl.from(".line-2", { scaleX: 0, transformOrigin: "right center", duration: 1 }, "-=1");

            // 3. Move left, Digital Product pops up
            tl.to([".box-start", ".box-account", ".line-1", ".box-offering", ".line-2"], { x: `-=${stepX}`, duration: 1.5, ease: "power2.inOut" });
            tl.from(".box-product", { scale: 0, opacity: 0, duration: 1, x: 0 }, "-=1");
            tl.from(".line-3", { scaleX: 0, transformOrigin: "right center", duration: 1 }, "-=1");

            // 4. Branching (Stay centered more)
            tl.from(".box-workshops", { x: stepX, y: -80, scale: 0, opacity: 0, duration: 1 }, "-=0.5");
            tl.from(".box-videos", { x: stepX, y: 80, scale: 0, opacity: 0, duration: 1 }, "-=1");
            tl.from([".line-split-top", ".line-split-bottom"], { scaleX: 0, transformOrigin: "left center", duration: 1 }, "-=1");

            // 5. Merge to Final
            tl.from(".box-final", { x: stepX * 2, scale: 0, opacity: 0, duration: 1 }, "-=0.5");
            tl.from([".line-merge-top", ".line-merge-bottom"], { scaleX: 0, transformOrigin: "left center", duration: 1 }, "-=1");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const Box = ({ className, children, small }) => (
        <div className={`${className} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${small ? 'w-28 py-2 text-xs' : 'w-48 py-5 text-sm'} px-3 rounded-xl gradient-hero shadow-lg border border-white/20 text-center flex items-center justify-center font-bold text-foreground z-10 box-border`}>
            {children}
        </div>
    );

    const Line = ({ className }) => (
        <div className={`${className} absolute left-1/2 top-1/2 -translate-y-1/2 h-0.5 bg-primary/30 w-[220px] z-0`} />
    );

    return (
        <div ref={containerRef} className="h-screen w-full flex items-center justify-center bg-transparent overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center scale-[0.85] md:scale-95 lg:scale-100 max-w-6xl mx-auto">
                {/* Lines */}
                <Line className="line-1 -translate-x-[110px]" />
                <Line className="line-2 -translate-x-[330px]" />
                <Line className="line-3 -translate-x-[550px]" />

                {/* Splitting Lines */}
                <div className="line-split-top absolute left-1/2 top-1/2 -translate-y-[40px] -translate-x-[110px] h-0.5 bg-primary/30 w-[220px] rotate-[15deg] origin-left" />
                <div className="line-split-bottom absolute left-1/2 top-1/2 translate-y-[40px] -translate-x-[110px] h-0.5 bg-primary/30 w-[220px] -rotate-[15deg] origin-left" />

                {/* Merging Lines */}
                <div className="line-merge-top absolute left-1/2 top-1/2 -translate-y-[40px] translate-x-[110px] h-0.5 bg-primary/30 w-[220px] -rotate-[15deg] origin-left" />
                <div className="line-merge-bottom absolute left-1/2 top-1/2 translate-y-[40px] translate-x-[110px] h-0.5 bg-primary/30 w-[220px] rotate-[15deg] origin-left" />

                {/* Boxes */}
                {/* Initial positions (before GSAP) are centered or offset */}
                <Box className="box-start" small>Start</Box>
                <Box className="box-account">Create an Account</Box>
                <Box className="box-offering">Create your first offering</Box>
                <Box className="box-product">Link and create your digital product</Box>

                <Box className="box-workshops -translate-y-[80px] translate-x-[220px]">Live Workshops</Box>
                <Box className="box-videos translate-y-[80px] translate-x-[220px]">Pre-recorded Videos</Box>

                <Box className="box-final translate-x-[440px]">Share the link and start learning</Box>
            </div>
        </div>
    );
};

export default InteractiveProcessFlow;
