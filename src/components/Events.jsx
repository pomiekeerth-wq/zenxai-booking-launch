import { useRef } from "react";
import aifortn1 from "@/assets/aifortn/aifortn1.jpeg";
import aifortn2 from "@/assets/aifortn/aifortn2.jpeg";
import aifortn6 from "@/assets/aifortn/aifortn6.jpeg";
import aifortn3 from "@/assets/aifortn/f7hxcmqdsy5hqbjn8waw.jpeg";
import aifortn4 from "@/assets/aifortn/lvciezv4rjm9opeimmzr.jpeg";
import aifortn5 from "@/assets/aifortn/tplzdh94hocllpyd9pad.jpeg";
import { useTextAnimation } from "@/hooks/useTextAnimation";

const eventImages = [
    { src: aifortn1, alt: "Event photo 1" },
    { src: aifortn6, alt: "Event photo 6" },
    { src: aifortn3, alt: "Event photo 3" },
];

const Events = () => {
    const headingRef = useRef(null);
    const subRef = useRef(null);
    const labelRef = useRef(null);

    useTextAnimation(headingRef);
    useTextAnimation(subRef, { type: "words", delay: 0.2 });
    useTextAnimation(labelRef, { type: "words", delay: 0.1 });

    return (
        <section className="pt-12 pb-8 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2
                        ref={headingRef}
                        className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
                    >
                        Learning Experiences & Success Stories
                    </h2>
                    <p
                        ref={subRef}
                        className="text-muted-foreground text-lg"
                    >
                        Showcasing our LMS implementations and educational achievements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventImages.map((image, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/3] group relative">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
                {/* Horizontal line separator */}
                <hr className="mt-10 border-t border-black/10" />
            </div>
        </section>
    );
};

export default Events;
