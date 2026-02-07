import { useRef } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useTextAnimation } from "@/hooks/useTextAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
    {
        question: "Do I own the source code?",
        answer: "Yes! With ZenXai, you have the option to own the full source code of your LMS, giving you complete control over your educational platform.",
    },
    {
        question: "How long does it take to build?",
        answer: "Timelines vary based on features and complexity, but most standard LMS platforms are live within 4-8 weeks.",
    },
    {
        question: "Can you integrate with existing educational tools?",
        answer: "Absolutely. We can integrate with existing platforms, student information systems, and third-party educational tools.",
    },
    {
        question: "What features does the LMS support?",
        answer: "Our LMS supports video hosting, interactive quizzes, assignments, certificates, progress tracking, discussion forums, and much more.",
    },
    {
        question: "What are the pricing options?",
        answer: "We offer flexible pricing including one-time development packages and ongoing support plans. Custom solutions are tailored to your budget.",
    },
];

const FAQ = () => {
    const headingRef = useRef(null);
    const subRef = useRef(null);
    const labelRef = useRef(null);

    useTextAnimation(headingRef);
    useTextAnimation(subRef, { type: "words", delay: 0.2 });
    useTextAnimation(labelRef, { type: "words", delay: 0.1 });

    return (
        <section id="faq" className="pt-8 pb-12 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        ref={headingRef}
                        className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
                    >
                        Still not convinced?
                    </h2>
                    <p
                        ref={subRef}
                        className="text-muted-foreground text-lg mb-8"
                    >
                        Talk to our specialist and find out why creators love us so much.
                    </p>

                    <a
                        href="https://harivikash-b.dayschedule.com/1-on-1-for-booking-system"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <Button
                            className="w-full max-w-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 h-auto text-lg rounded-xl shadow-lg relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Book a Call
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
                        </Button>
                    </a>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
