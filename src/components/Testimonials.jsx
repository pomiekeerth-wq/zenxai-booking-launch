import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { useTextAnimation } from "@/hooks/useTextAnimation";
import YouTube from "react-youtube";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        name: "Client Success Story",
        role: "Business Owner",
        videoId: "dlu9UM3-8TE",
    },
    {
        name: "Client Success Story",
        role: "Business Owner",
        videoId: "Nip4Umm1LLY",
    },
    {
        name: "Client Success Story",
        role: "Business Owner",
        videoId: "_QV7Yzw7O34",
    },
    // Placeholder items to make it 10
    {
        name: "Client Success Story",
        role: "Business Owner",
        videoId: "dlu9UM3-8TE",
    },
    {
        name: "Client Success Story",
        role: "Business Owner",
        videoId: "Nip4Umm1LLY",
    },
    {
        name: "Client Success Story",
        role: "Business Owner",
        videoId: "_QV7Yzw7O34",
    },
    {
        name: "Client Success Story",
        role: "Business Owner",
        videoId: "dlu9UM3-8TE",
    },
    {
        name: "Client Success Story",
        role: "Business Owner",
        videoId: "Nip4Umm1LLY",
    },
    {
        name: "Client Success Story",
        role: "Business Owner",
        videoId: "_QV7Yzw7O34",
    },
    {
        name: "Client Success Story",
        role: "Business Owner",
        videoId: "dlu9UM3-8TE",
    },
];

const TestimonialCard = ({ testimonial }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const onPlayerEnd = () => {
        setIsPlaying(false);
    };

    const videoOptions = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            modestbranding: 1,
            showinfo: 0,
            iv_load_policy: 3,
        },
    };

    return (
        <div className="flex flex-col items-center px-2">
            <div
                className="w-full aspect-[9/16] rounded-2xl shadow-lg mb-6 overflow-hidden relative group bg-black border border-white/5 cursor-pointer"
                onClick={() => !isPlaying && setIsPlaying(true)}
            >
                {!isPlaying ? (
                    <div className="absolute inset-0 z-20 flex items-end justify-center pb-12">
                        <img
                            src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                            alt={testimonial.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="relative z-30 w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 transform transition-transform duration-300 group-hover:scale-110 shadow-2xl">
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                    </div>
                ) : (
                    <div className="absolute inset-0 w-[110%] h-[125%] -top-[12%] -left-[5%]">
                        <YouTube
                            videoId={testimonial.videoId}
                            opts={videoOptions}
                            onEnd={onPlayerEnd}
                            className="w-full h-full"
                            containerClassName="w-full h-full"
                        />
                    </div>
                )}
                {/* Interaction blocker for when playing */}
                {isPlaying && (
                    <div className="absolute inset-0 bg-transparent z-10 pointer-events-none" />
                )}
            </div>
        </div>
    );
};

const Testimonials = () => {
    const headingRef = useRef(null);
    const subRef = useRef(null);
    const labelRef = useRef(null);

    useTextAnimation(headingRef);
    useTextAnimation(subRef, { type: "words", delay: 0.2 });
    useTextAnimation(labelRef, { type: "words", delay: 0.1 });

    return (
        <section id="testimonials" className="pt-0 pb-24 bg-background">
            <div className="container mx-auto px-4">

                {/* TESTIMONIALS SECTION */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        ref={headingRef}
                        className="text-3xl md:text-5xl font-extrabold text-foreground mt-2 mb-6"
                    >
                        Hear From Our <span className="text-primary">Clients</span>
                    </h2>
                    <p
                        ref={subRef}
                        className="text-muted-foreground text-lg md:text-xl"
                    >
                        Real feedback from business owners who transformed their operations with ZenXai.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto relative px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                                stopOnInteraction: false,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="flex justify-center">
                                        <div className="w-full max-w-[260px]">
                                            <TestimonialCard testimonial={testimonial} />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12" />
                        <CarouselNext className="hidden md:flex -right-12" />
                    </Carousel>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
