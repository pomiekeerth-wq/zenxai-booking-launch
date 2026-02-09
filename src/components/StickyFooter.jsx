import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyFooter = ({ onBookCall }) => {
    const footerRef = useRef(null);

    useEffect(() => {
        // We use the sticky-footer class to target this component from ExclusiveFeatures.jsx
        // This avoids conflicts between multiple ScrollTriggers targeting the same section.
    }, []);

    return (
        <div
            ref={footerRef}
            className="sticky-footer fixed bottom-0 left-0 right-0 z-50 bg-foreground border-t border-white/10 py-2.5 px-4 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.2)]"
        >
            <div className="container mx-auto flex items-center justify-between gap-2 max-w-6xl">

                <div className="flex flex-row items-center gap-3 text-left">
                    <div className="flex items-center gap-3 bg-white/5 px-3 py-1 rounded-full border border-white/10 scale-90 sm:scale-100">
                        <span className="text-white/40 line-through text-sm sm:text-lg font-medium">₹299</span>
                        <span className="text-primary font-black text-lg sm:text-2xl md:text-3xl">₹99</span>
                    </div>
                </div>

                <Button
                    onClick={onBookCall}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xs sm:text-sm md:text-lg rounded-lg shadow-lg hover:shadow-primary/25 transition-all px-4 sm:px-6 h-9 sm:h-11 flex-shrink-0"
                >
                    Book Now
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 sm:w-5 sm:h-5 animate-pulse" />
                </Button>
            </div>
        </div>
    );
};

export default StickyFooter;
