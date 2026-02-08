import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import aivida from "@/assets/works/aivida.jpeg";
import shreemadam from "@/assets/works/shreemadam.jpeg";
import zenchat from "@/assets/works/zenchat.jpeg";
import zenoneCredit from "@/assets/works/zenone_credit.jpeg";
import zenvoice from "@/assets/works/zenvoice.jpeg";
import zenxai from "@/assets/works/zenxai.jpeg";
import zxlearn from "@/assets/works/zxlearn.png";
import { useTextAnimation } from "@/hooks/useTextAnimation";

const projects = [
    {
        title: "ZXLearn",
        category: "Project",
        image: zxlearn,
    },
    {
        title: "ShreeMadam",
        category: "Project",
        image: shreemadam,
    },
    {
        title: "ZenChat",
        category: "Project",
        image: zenchat,
    },
    {
        title: "ZenOne Credit",
        category: "Project",
        image: zenoneCredit,
    },
    {
        title: "ZenVoice",
        category: "Project",
        image: zenvoice,
    },
    {
        title: "ZenXai",
        category: "Project",
        image: zenxai,
    },
    {
        title: "Aivida",
        category: "Project",
        image: aivida,
    },
];

const ProjectCard = ({ project, isActive, onClick }) => {
    return (
        <motion.div
            initial={false}
            animate={{
                scale: isActive ? 1.1 : 0.85,
                opacity: isActive ? 1 : 0.6,
                zIndex: isActive ? 10 : 1,
            }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
            onClick={onClick}
            className="relative cursor-pointer px-2 py-8 flex items-center justify-center h-full"
        >
            <div className={`relative overflow-hidden rounded-2xl border border-border/50 shadow-xl bg-muted/20 transition-all duration-500 ${isActive ? 'ring-2 ring-primary/20 shadow-primary/10' : ''}`}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[500px] object-cover"
                />

                {/* Overlay for Active Status */}
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-8 transition-opacity duration-500 
                    ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                    <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        className="text-white text-3xl font-bold"
                    >
                        {project.title}
                    </motion.h3>
                </div>
            </div>
        </motion.div>
    );
};

const Work = () => {
    const headingRef = useRef(null);
    const subRef = useRef(null);
    const labelRef = useRef(null);

    useTextAnimation(headingRef);
    useTextAnimation(subRef, { type: "words", delay: 0.2 });
    useTextAnimation(labelRef, { type: "words", delay: 0.1 });

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false,
        dragFree: false,
    }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    return (
        <section id="work" className="py-12 bg-background overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-2xl text-center mx-auto">
                    <h2
                        ref={headingRef}
                        className="text-4xl md:text-5xl font-bold text-foreground"
                    >
                        Previous Works
                    </h2>
                </div>
            </div>

            <div className="relative group max-w-[1400px] mx-auto px-4">
                <div
                    className="overflow-visible cursor-grab active:cursor-grabbing select-none"
                    style={{ touchAction: 'pan-y' }}
                    ref={emblaRef}
                >
                    <div className="flex -ml-4">
                        {projects.map((project, index) => (
                            <div key={index} className="flex-[0_0_80%] md:flex-[0_0_45%] lg:flex-[0_0_35%] pl-4 min-w-0">
                                <ProjectCard
                                    project={project}
                                    isActive={selectedIndex === index}
                                    onClick={() => scrollTo(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </section>
    );
};

export default Work;
