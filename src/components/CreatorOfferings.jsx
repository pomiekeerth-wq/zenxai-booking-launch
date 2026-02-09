import { useRef, useEffect } from "react";
import { BookOpen, Users, Video, Trophy, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTextAnimation } from "@/hooks/useTextAnimation";

// Import images from src/assets/creators
import creatorImg1 from "../assets/creators/zxlearning1.jpg";
import creatorImg2 from "../assets/creators/learn2.jpg";
import creatorImg3 from "../assets/creators/learn3.jpg";
import creatorImg4 from "../assets/creators/learn4.jpg";
import creatorImg5 from "../assets/creators/learn5.jpg";

gsap.registerPlugin(ScrollTrigger);

const CreatorOfferings = () => {
    const headingRef = useRef(null);
    const containerRef = useRef(null);
    useTextAnimation(headingRef);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Grid animation - Faster sequential drawing
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true
                }
            });

            tl.from(".grid-line-h", {
                scaleX: 0,
                transformOrigin: "left",
                opacity: 0,
                duration: 0.4,
                stagger: 0.04,
                ease: "power4.out"
            })
                .from(".grid-line-v", {
                    scaleY: 0,
                    transformOrigin: "top",
                    opacity: 0,
                    duration: 0.4,
                    stagger: 0.04,
                    ease: "power4.out"
                }, "-=0.2");

            // Instant card reveal with micro-motion
            gsap.fromTo(".offering-card",
                { y: 40, opacity: 0, scale: 0.96 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power4.out",
                    force3D: true,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        once: true
                    },
                    onComplete: () => {
                        // Subtle floating polish after reveal
                        const floatingTween = gsap.to(".offering-card", {
                            y: -4,
                            duration: 2,
                            ease: "sine.inOut",
                            yoyo: true,
                            repeat: -1,
                            force3D: true,
                            stagger: {
                                each: 0.3,
                                from: "start"
                            }
                        });

                        // PERFORMANCE: Only run animation when in view
                        ScrollTrigger.create({
                            trigger: containerRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            onEnter: () => floatingTween.play(),
                            onLeave: () => floatingTween.pause(),
                            onEnterBack: () => floatingTween.play(),
                            onLeaveBack: () => floatingTween.pause()
                        });
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const verticalOfferings = [
        {
            title: "Courses",
            icon: BookOpen,
            image: creatorImg1,
            description: "Offer interactive and engaging courses on various topics to a wide audience through our platform. Use assignments and forums to engage your learners.",
            color: "from-blue-500/10 to-purple-500/10"
        },
        {
            title: "Workshops",
            icon: Video,
            image: creatorImg2,
            description: "Host Zoom webinars and meetings seamlessly integrated in the platform. Increase show up rate, mark attendance live and impart the best live learning experience.",
            color: "from-purple-500/10 to-pink-500/10"
        },
        {
            title: "Memberships",
            icon: Users,
            image: creatorImg3,
            description: "Create exclusive, recurring revenue streams by offering members-only access to your content, resources, and community.",
            color: "from-orange-500/10 to-red-500/10"
        }
    ];

    const horizontalOfferings = [
        {
            title: "Gamified Communities",
            icon: Trophy,
            image: creatorImg4,
            description: "Build a game, let learning be the by product. Allocate points on interaction and participation, give badges, track leaderboards and watch your engagement skyrocket.",
            color: "from-green-500/10 to-emerald-500/10"
        },
        {
            title: "1:1 Consultations",
            icon: Calendar,
            image: creatorImg5,
            description: "Seamlessly host 1 to 1 consultations by easily creating, cancelling and rescheduling calls.",
            color: "from-cyan-500/10 to-blue-500/10"
        }
    ];

    return (
        <section ref={containerRef} className="py-12 bg-primary relative min-h-[600px] overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Horizontal Lines */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="grid-line-h absolute w-full h-[1px] bg-white/20"
                        style={{ top: `${(i + 1) * 8}%` }}
                    />
                ))}
                {/* Vertical Lines */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="grid-line-v absolute h-full w-[1px] bg-white/20"
                        style={{ left: `${(i + 1) * 10}%` }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2
                        ref={headingRef}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
                    >
                        What creators do on <span className="text-black">ZenxAI</span>
                    </h2>
                </div>

                {/* Top Row: 3 Vertical Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {verticalOfferings.map((offering, index) => (
                        <div
                            key={index}
                            className="offering-card group gradient-hero border border-primary/10 rounded-3xl p-4 flex flex-col h-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:-translate-y-2 opacity-0"
                        >
                            <div className="w-[85%] mx-auto aspect-[4/3] rounded-2xl flex flex-col items-center justify-center mb-3 relative overflow-hidden">
                                {offering.image ? (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <img
                                            src={offering.image}
                                            alt={offering.title}
                                            className={`${(index === 0 || index === 1 || index === 2) ? "w-full h-full object-cover" : "max-w-full max-h-full object-contain"} transform group-hover:scale-105 transition-transform duration-500`}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                                        <offering.icon className="w-16 h-16 text-primary relative z-10 mb-2" />
                                        <span className="text-primary/40 font-bold text-xs uppercase tracking-tighter relative z-10">{offering.title} PREVIEW</span>
                                    </>
                                )}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{offering.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                                {offering.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row: 2 Horizontal Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {horizontalOfferings.map((offering, index) => (
                        <div
                            key={index}
                            className="offering-card group gradient-hero border border-primary/10 rounded-3xl p-4 flex flex-col md:flex-row gap-4 items-center hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:-translate-y-1 opacity-0"
                        >
                            <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl flex flex-col items-center justify-center shrink-0 relative overflow-hidden">
                                {offering.image ? (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <img
                                            src={offering.image}
                                            alt={offering.title}
                                            className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                                        <offering.icon className="w-16 h-16 text-primary relative z-10 mb-2" />
                                        <span className="text-primary/40 font-bold text-xs uppercase tracking-tighter relative z-10">{offering.title} PREVIEW</span>
                                    </>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-bold mb-3 text-foreground">{offering.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {offering.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreatorOfferings;
