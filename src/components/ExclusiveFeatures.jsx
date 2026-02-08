import { useRef, useEffect } from "react";
import { useTextAnimation } from "@/hooks/useTextAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Drive More Revenue with Live Workshops",
        description: "Run live workshops, webinars, Q&A sessions, and exclusive broadcasts using a powerful built-in video experience designed for creators and communities.",
        points: [
            "In-session product selling",
            "Simple and secure payment setup",
            "Instant sales alerts in real time",
            "Auto-generated participation certificates",
            "Smart email & WhatsApp reminders"
        ],
        bgColor: "bg-[#FFF4D2]", // Pastel Yellow
        accentColor: "text-amber-600",
    },
    {
        title: "Build Courses That Generate Revenue 24/7",
        description: "Create, manage, and sell online courses with ease using a powerful learning management system designed for scale. Deliver a seamless learning experience while your courses continue to convert—day and night.",
        points: [
            "Intuitive drag-and-drop course creator",
            "Fully customizable quizzes and assignments",
            "Interactive learner discussion spaces",
            "Automatic certificate generation",
            "In-depth analytics to monitor learner progress"
        ],
        bgColor: "bg-[#FFE4E9]", // Pastel Pink
        accentColor: "text-rose-600",
    },
    {
        title: "Strengthen Your Brand with Custom Android & iOS Apps",
        description: "Launch fully branded Android and iOS apps that reflect your identity and go live under your name on the App Store and Play Store. Designed to match your aesthetic, your apps help build trust, visibility, and long-term authority.",
        points: [
            "Custom-branded Android and iOS apps plus a matching website",
            "Fully customizable design aligned with your brand’s look and feel",
            "Broader reach with seamless access across both mobile platforms"
        ],
        bgColor: "bg-[#E2F5FF]", // Pastel Blue
        accentColor: "text-blue-600",
    },
    {
        title: "Expand Your Reach with Email & WhatsApp Campaigns",
        description: "Connect with your audience faster and more effectively through the channels they use every day. Create personalized email and WhatsApp campaigns, automate follow-ups, and boost engagement for your courses and workshops—all while saving time.",
        points: [
            "Drag-and-drop campaign builders for easy customization",
            "Automated workflows and smart triggers",
            "Official WhatsApp business verification support",
            "Detailed analytics to measure reach and conversions"
        ],
        bgColor: "bg-[#E6FADF]", // Pastel Green
        accentColor: "text-emerald-600",
    },
    {
        title: "Feed and Community Rooms",
        description: "Build an active, thriving community around your courses with a social-style feed and dedicated community rooms. Give your learners a space to connect, ask questions, and share experiences—strengthening relationships and boosting engagement.",
        points: [
            "Enable or restrict peer-to-peer chats for better control",
            "Run challenges, giveaways, and interactive activities",
            "Schedule posts to keep conversations flowing",
            "Fully manageable community rooms with flexible settings"
        ],
        bgColor: "bg-[#F3E8FF]", // Pastel Purple
        accentColor: "text-purple-600",
    },
    {
        title: "Automate Certificates to Build Trust & Credibility",
        description: "Recognize learner achievements with professionally designed certificates that reinforce your brand and boost social proof. Customize templates with your logo, colors, and signature, then automate delivery—no manual effort required.",
        points: [
            "Issue certificates instantly to a selected audience list",
            "Automatically send certificates to verified workshop attendees",
            "Trigger certificate delivery on course completion"
        ],
        bgColor: "bg-[#FFF2E2]", // Pastel Orange
        accentColor: "text-orange-600",
    },
    {
        title: "High-Performance Landing Pages That Convert",
        description: "Launch fast-loading landing pages designed to capture attention and drive action. Choose from proven, conversion-focused templates and enhance them with no-code popups to turn visitors into customers—quickly and effortlessly.",
        points: [
            "Conversion-optimized templates for instant launch",
            "No-code popup builder to capture leads",
            "Fast-loading pages for better SEO",
            "Easy A/B testing to improve results"
        ],
        bgColor: "bg-[#E0FFF4]", // Pastel Teal
        accentColor: "text-teal-600",
    },
];

const ExclusiveFeatures = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const headingRef = useRef(null);
    const headingContainerRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const cards = gsap.utils.toArray(".feature-card");
        if (cards.length === 0) return;

        const ctx = gsap.context(() => {
            // Setup cards initial state: first cards on top
            gsap.set(cards, {
                zIndex: (i) => cards.length - i,
                scale: (i) => 1 - i * 0.05,
                y: (i) => -i * 15,
                force3D: true
            });

            // Cache footer reference
            footerRef.current = document.querySelector(".sticky-footer");
            const footer = footerRef.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current, // Use a non-pinned proxy trigger
                    start: "top top",
                    end: `+=${cards.length * 100}%`,
                    pin: sectionRef.current,
                    pinSpacing: true,
                    scrub: true,
                    anticipatePin: 1.5,
                    fastScrollEnd: false,
                    onEnter: () => {
                        const footer = document.querySelector(".sticky-footer");
                        if (footer) gsap.to(footer, { yPercent: 100, duration: 0.2, ease: "power2.inOut", force3D: true });
                    },
                    onLeave: () => {
                        const footer = document.querySelector(".sticky-footer");
                        if (footer) gsap.to(footer, { yPercent: 0, duration: 0.2, ease: "power2.inOut", force3D: true });
                    },
                    onEnterBack: () => {
                        const footer = document.querySelector(".sticky-footer");
                        if (footer) gsap.to(footer, { yPercent: 100, duration: 0.2, ease: "power2.inOut", force3D: true });
                    },
                    onLeaveBack: () => {
                        const footer = document.querySelector(".sticky-footer");
                        if (footer) gsap.to(footer, { yPercent: 0, duration: 0.2, ease: "power2.inOut", force3D: true });
                    }
                }
            });

            // HIDE TITLE ON MOBILE during pin to give full screen to cards
            if (window.innerWidth < 1024) {
                tl.to(headingContainerRef.current, {
                    autoAlpha: 0,
                    height: 0,
                    marginBottom: 0,
                    duration: 0.4,
                    ease: "power4.inOut"
                }, 0);
            }

            // Animate cards one by one
            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // Don't animate the last card out

                tl.to(card, {
                    xPercent: -120,
                    opacity: 0,
                    rotate: 0,
                    duration: 1,
                    ease: "none",
                    force3D: true,
                    lazy: true
                }, i); // Stagger by scroll position

                // Only animate the next card to reduce simultaneous transforms
                const nextCard = cards[i + 1];
                if (nextCard) {
                    tl.to(nextCard, {
                        scale: 1,
                        y: 0,
                        duration: 1,
                        ease: "none",
                        force3D: true,
                        lazy: true
                    }, i);
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="exclusive-features-container" className="relative">
            {/* Proxy trigger that stays in flow */}
            <div ref={triggerRef} className="absolute top-0 left-0 w-full h-1 pointer-events-none" />

            <section ref={sectionRef} id="exclusive-features" className="bg-[#FAFAFA] relative min-h-screen flex items-center pt-6 md:pt-24 pb-24 md:pb-8">
                <div className="container mx-auto px-4 z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">

                        {/* LEFT COLUMN: Heading */}
                        <div ref={headingContainerRef} className="max-w-xl overflow-hidden">
                            <h2
                                ref={headingRef}
                                className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-4 md:mb-8"
                            >
                                Exclusive features that <br />
                                <span className="text-primary">help you grow</span>
                            </h2>
                            <p className="text-slate-500 text-xl md:text-2xl leading-relaxed mb-5 md:mb-8">
                                Experience a seamless ecosystem designed to scale your knowledge business effortlessly.
                            </p>
                            <div className="hidden lg:flex items-center gap-4 text-slate-400 font-medium">
                                <span className="w-12 h-[1px] bg-slate-200"></span>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Stacked Cards */}
                        <div ref={cardsContainerRef} className="relative w-full aspect-[1/1.5] sm:aspect-[1/1.2] md:aspect-[16/7] lg:aspect-[1/0.85] max-w-xl mx-auto lg:mx-0">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className={`feature-card absolute inset-0 flex flex-col rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-8 shadow-xl border border-white/20 ${feature.bgColor} overflow-hidden`}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex flex-col gap-3 md:gap-6">
                                            <div>
                                                <h3 className="text-xl md:text-3xl font-black text-slate-900 leading-tight mb-2 md:mb-4">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-2 md:mb-4">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bulletins */}
                                        <div className="grid grid-cols-1 gap-2 md:gap-4">
                                            {feature.points.map((point, i) => (
                                                <div key={i} className="flex items-center gap-2 md:gap-3 group">
                                                    <div className={`p-1 rounded-full bg-white/50 shadow-sm transition-transform duration-300 group-hover:scale-110 ${feature.accentColor}`}>
                                                        <CheckCircle2 className="w-3.5 h-3.5 md:w-5 md:h-5" />
                                                    </div>
                                                    <span className="text-slate-800 font-semibold text-sm md:text-lg">
                                                        {point}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExclusiveFeatures;
