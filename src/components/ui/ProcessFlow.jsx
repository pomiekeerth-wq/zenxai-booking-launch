import { useEffect, useRef } from "react";
import { MessageSquare, Code, Rocket, BarChart, ChevronLeft } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultSteps = [
    {
        icon: MessageSquare,
        title: "Consultation",
        description: "We understand your educational goals, curriculum requirements, and learning objectives.",
    },
    {
        icon: Code,
        title: "Development",
        description: "Our team builds your custom LMS with course management, assessments, and collaboration tools.",
    },
    {
        icon: Rocket,
        title: "Launch",
        description: "We deploy your LMS and provide comprehensive onboarding for educators and administrators.",
    },
    {
        icon: BarChart,
        title: "Growth",
        description: "Scale your educational platform with analytics, insights, and continuous feature enhancements.",
    },
];

const ProcessFlow = ({ steps = defaultSteps }) => {
    const containerRef = useRef(null);
    const stepsRefs = useRef([]);
    const linesRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate steps
            stepsRefs.current.forEach((step, index) => {
                gsap.from(step, {
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    x: 40,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "power3.out",
                });
            });

            // Animate lines (Desktop only)
            if (window.innerWidth >= 1024) {
                linesRefs.current.forEach((line, index) => {
                    gsap.fromTo(line,
                        { strokeDashoffset: 100, strokeDasharray: 100 },
                        {
                            strokeDashoffset: 0,
                            duration: 1,
                            delay: (index * 0.2) + 0.4,
                            ease: "power2.inOut",
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 70%",
                            }
                        }
                    );
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, [steps]);

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden py-12">
            {/* Desktop View: Horizontal Right-to-Left */}
            <div className="hidden lg:flex flex-row-reverse items-start justify-between relative px-12 gap-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        ref={(el) => (stepsRefs.current[index] = el)}
                        className="flex flex-col items-center text-center relative z-10 w-1/4"
                    >
                        {/* Step Icon */}
                        <div className="w-20 h-20 bg-white border-4 border-primary/20 rounded-2xl flex items-center justify-center mb-6 shadow-md hover:border-primary/50 transition-colors duration-300">
                            <step.icon className="w-10 h-10 text-primary" />
                        </div>

                        {/* Step Content */}
                        <h3 className="font-bold text-xl text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{step.description}</p>

                        {/* Connecting Line & Arrow (Except for the last one in R-to-L flow) */}
                        {index < steps.length - 1 && (
                            <div className="absolute top-10 -left-[60%] w-[120%] -z-10 h-10 hidden lg:block">
                                <svg className="w-full h-full" viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
                                    <path
                                        ref={(el) => (linesRefs.current[index] = el)}
                                        d="M190 20 L10 20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeDasharray="6 6"
                                        className="text-primary/30"
                                    />
                                    <path d="M15 15 L5 20 L15 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile View: Vertical Stack */}
            <div className="lg:hidden flex flex-col items-center gap-12 px-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        ref={(el) => (stepsRefs.current[index + steps.length] = el)}
                        className="flex flex-col items-center text-center relative"
                    >
                        <div className="w-20 h-20 bg-white border-4 border-primary/20 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                            <step.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="font-bold text-xl text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{step.description}</p>

                        {index < steps.length - 1 && (
                            <div className="h-12 w-0.5 bg-gradient-to-b from-primary/30 to-transparent mt-6" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessFlow;
