import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, CreditCard, Zap, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import compname from "@/assets/new_logo.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headingRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);
  const videoRef = useRef(null);
  const iframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => {
    if (iframeRef.current) {
      const command = isMuted ? "unMute" : "mute";
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: [] }),
        "*"
      );
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (!headingRef.current || !subheadlineRef.current || !ctaRef.current || !videoRef.current) return;

    let ctx;
    let headingSplit;
    let subheadlineSplit;

    const initHero = () => {
      // Split text into lines/words/chars
      headingSplit = new SplitType(headingRef.current, {
        types: "lines,words,chars",
        tagName: "span",
      });

      subheadlineSplit = new SplitType(subheadlineRef.current, {
        types: "lines,words",
        tagName: "span",
      });

      ctx = gsap.context(() => {
        // Create timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Animate heading chars
        tl.from(headingSplit.chars, {
          y: 60,
          opacity: 0,
          duration: 0.5, // Faster
          stagger: 0.015, // Faster
          ease: "power3.out",
          force3D: true
        });

        // Animate Video Container (Start simultaneously with heading)
        tl.from(videoRef.current, {
          scale: 0.95,
          y: 40,
          opacity: 0,
          duration: 0.8, // Faster
          ease: "power3.out",
          force3D: true
        }, 0);

        // Animate subheadline words
        tl.from(subheadlineSplit.words, {
          y: 40,
          opacity: 0,
          duration: 0.5, // Faster
          stagger: 0.01,
          ease: "power3.out",
          force3D: true
        }, "-=0.6");

        // Animate CTA buttons
        tl.from(ctaRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6, // Faster
          ease: "power3.out",
          force3D: true
        }, "-=0.3");
      });

      // Recalculate ScrollTrigger positions after text splitting
      ScrollTrigger.refresh();
    };

    // Wait for fonts to be ready to avoid layout shifts and misalignments
    if (document.fonts) {
      document.fonts.ready.then(initHero);
    } else {
      // Fallback for browsers without document.fonts
      setTimeout(initHero, 500);
    }

    // Cleanup
    return () => {
      if (headingSplit) headingSplit.revert();
      if (subheadlineSplit) subheadlineSplit.revert();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section className="relative min-h-[76vh] bg-primary pt-24 pb-12 px-0 md:px-2 lg:px-4 flex items-center overflow-hidden">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      {/* LOGO IN BACKGROUND */}
      <div className="absolute top-2 left-8 md:top-3 md:left-12 z-50">
        <img
          src={compname}
          alt="ZENXAI"
          className="h-20 md:h-32 w-auto object-contain"
        />
      </div>

      {/* MAIN HERO CARD */}
      <div
        className="relative w-full max-w-[90%] mx-auto min-h-[70vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col items-center justify-start p-6 md:p-10 lg:p-14 lg:pt-20"
        style={{
          backgroundImage: `url('/hero-bg-v2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        {/* BACKGROUND BLURS (Inside the card) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT COLUMN: Heading, Bullets, CTA */}
            <div className="text-left flex flex-col gap-8">
              <div>
                <h1
                  ref={headingRef}
                  className="text-4xl md:text-6xl font-bold leading-tight text-gray-900"
                >
                  Create Your Own
                  <span className="block text-6xl md:text-7xl font-extrabold text-primary">
                    Learning
                  </span>
                  <span className="block text-5xl md:text-6xl font-semibold">
                    Social Network
                  </span>
                </h1>

              </div>

              {/* SUB-HEADLINE */}
              <p
                ref={subheadlineRef}
                className="text-lg md:text-xl font-medium text-foreground/80 max-w-2xl leading-relaxed"
              >
                Launch Courses, Workshops, and Memberships, Engage Communities, and Gamify Learning - all under your Own Brand, <span className="highlight-primary">With Zero Commission</span>.
              </p>

              {/* CTA BUTTONS */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-start">
                <a href="https://harivikash-b.dayschedule.com/1-on-1-for-booking-system" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-lg text-primary-foreground text-lg px-8 py-6 rounded-full"
                  >
                    Book a Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Vertical Video (Reel Ratio) */}
            <div ref={videoRef} className="flex justify-center lg:justify-center">
              <div className="relative w-full max-w-[280px] aspect-[9/16] lightning-border shadow-2xl group">
                <div className="lightning-border-inner">
                  <iframe
                    ref={iframeRef}
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/e6zF4mD-HYA?autoplay=1&mute=1&controls=0&loop=1&playlist=e6zF4mD-HYA&rel=0&enablejsapi=1"
                    title="ZenXai Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Custom Audio Toggle Button */}
                <button
                  onClick={toggleAudio}
                  className="absolute bottom-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all shadow-lg border border-white/20 group-hover:scale-110"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
