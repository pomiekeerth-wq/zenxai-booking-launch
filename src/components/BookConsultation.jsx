import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useTextAnimation } from "@/hooks/useTextAnimation";

const TickingWord = () => {
    const [index, setIndex] = useState(0);
    const words = ["community", "workshop", "course"];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const getCurrentWordData = () => {
        const word = words[index];
        const chars = word.split("");
        let oFound = false;
        return chars.map((char, i) => {
            // Anchor on the first 'o' found
            if (char === 'o' && !oFound) {
                oFound = true;
                return { char, id: "static-o" };
            }
            return { char, id: `${char}-${index}-${i}` };
        });
    };

    return (
        <span className="inline-flex items-center justify-center min-w-[10rem] md:min-w-[15rem] relative h-[1.2em] align-middle">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={index}
                    className="flex text-black font-extrabold"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                        visible: { transition: { staggerChildren: 0.05 } },
                        exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
                    }}
                >
                    {getCurrentWordData().map((item) => (
                        <motion.span
                            key={item.id}
                            layout={item.id === "static-o"}
                            variants={{
                                hidden: { opacity: 0, y: -25 },
                                visible: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 25 }
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                                layout: { duration: 0.4 }
                            }}
                            className="inline-block"
                        >
                            {item.char}
                        </motion.span>
                    ))}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const BookConsultation = () => {
    const headingRef = useRef(null);
    const subRef = useRef(null);

    useTextAnimation(headingRef);
    useTextAnimation(subRef, { type: "words", delay: 0.2 });

    return (
        <section id="contact" className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative gradient-primary rounded-[2rem] p-8 md:p-16 overflow-hidden text-center">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl opacity-50" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                            <Calendar className="w-8 h-8 text-white" />
                        </div>

                        <h2
                            className="text-3xl md:text-6xl font-extrabold text-primary-foreground mb-8 leading-tight tracking-tight"
                        >
                            Your <TickingWord /> <br className="md:hidden" /> is worth more on ZenxAI
                        </h2>

                        <p
                            ref={subRef}
                            className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto"
                        >
                            Schedule a 30-minute consultation to discuss your educational goals and see how ZenXai can build your perfect LMS.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://harivikash-b.dayschedule.com/1-on-1-for-booking-system" target="_blank" rel="noopener noreferrer">
                                <Button className="bg-white text-primary hover:bg-white/90 font-bold px-6 py-3 h-auto shadow-lg">
                                    Book a Call
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookConsultation;
