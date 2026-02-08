import { useRef, useEffect } from "react";
import { useTextAnimation } from "@/hooks/useTextAnimation";
import workflowVideo from "../assets/LMS WORKFLOW.mp4";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    const headingRef = useRef(null);
    const subRef = useRef(null);
    const videoRef = useRef(null);

    useTextAnimation(headingRef);
    useTextAnimation(subRef, { type: "words", delay: 0.1 });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text reveal
            gsap.from([headingRef.current, subRef.current], {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 90%",
                    once: true
                }
            });

            // Video reveal
            gsap.from(videoRef.current, {
                scale: 0.98,
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: "top 85%",
                    once: true
                }
            });
        }, sectionRef);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && videoRef.current) {
                        videoRef.current.play().catch(error => {
                            console.log("Autoplay prevented:", error);
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
            ctx.revert();
        };
    }, []);

    const handleVideoClick = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} id="process" className="relative py-12 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-white/20 -z-20"></div>
            <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply opacity-50"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply opacity-50"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-sky-500/10 rounded-full mix-blend-multiply opacity-50"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Column */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2
                            ref={headingRef}
                            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
                        >
                            You can start selling within <span className="text-primary">30 days</span>.
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                            Our streamlined process ensures you spend less time setting up and more time earning. Watch how easy it is to get your academy up and running.
                        </p>

                        <a
                            href="https://harivikash-b.dayschedule.com/1-on-1-for-booking-system"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 h-auto text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                Book a Call
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                    </div>

                    {/* Video Column */}
                    <div className="w-full lg:w-1/2 relative group cursor-pointer" onClick={handleVideoClick}>
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] bg-black max-w-lg mx-auto border-2 border-primary">
                            <video
                                ref={videoRef}
                                src={workflowVideo}
                                className="w-full h-[550px] object-cover"
                                playsInline
                                muted
                            // No loop attribute as requested
                            />
                        </div>
                        {/* Decorative elements behind video */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
