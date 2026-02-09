import { useRef } from "react";
import logo1 from "@/assets/Assets logo/1.png";
import logo2 from "@/assets/Assets logo/2.png";
import logo3 from "@/assets/Assets logo/3.png";
import logo4 from "@/assets/Assets logo/4.png";
import logo5 from "@/assets/Assets logo/5.png";
import logo6 from "@/assets/Assets logo/6.png";
import logo7 from "@/assets/Assets logo/7.png";
import logo8 from "@/assets/Assets logo/8.png";
import logo9 from "@/assets/Assets logo/9.png";
import logo10 from "@/assets/Assets logo/10.png";
import logo11 from "@/assets/Assets logo/11.png";
import logo12 from "@/assets/Assets logo/12.png";
import logo13 from "@/assets/Assets logo/13.png";
import logo14 from "@/assets/Assets logo/14.png";
import { useTextAnimation } from "@/hooks/useTextAnimation";

const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7,
    logo8, logo9, logo10, logo11, logo12, logo13, logo14
];

const TrustedBy = () => {
    const textRef = useRef(null);
    useTextAnimation(textRef, { type: "words" });

    return (
        <section className="py-12 bg-background border-b border-border/40">
            <div className="container mx-auto px-4 text-center mb-4">
                <p
                    ref={textRef}
                    className="text-sm font-semibold text-muted-foreground uppercase tracking-widest"
                >
                    Trusted by
                </p>
            </div>

            <div className="relative overflow-x-hidden group">
                <div
                    className="animate-marquee whitespace-nowrap flex items-center gap-0 w-max"
                    style={{ willChange: 'transform' }}
                >
                    {/* First set of logos */}
                    {logos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 flex items-center justify-center h-36 md:h-40 cursor-pointer px-3 md:px-6">
                            <img
                                src={logo}
                                alt={`Trusted Partner ${index + 1}`}
                                className="h-24 md:h-24 w-auto object-contain grayscale-0 hover:grayscale-0 opacity-100"
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless scrolling */}
                    {logos.map((logo, index) => (
                        <div key={`dup-${index}`} className="flex-shrink-0 flex items-center justify-center h-36 md:h-40 cursor-pointer px-3 md:px-6">
                            <img
                                src={logo}
                                alt={`Trusted Partner ${index + 1}`}
                                className="h-24 md:h-24 w-auto object-contain grayscale-0 hover:grayscale-0 opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
