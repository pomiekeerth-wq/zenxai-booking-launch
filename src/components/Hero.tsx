import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">Custom Booking Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up">
            Smart Booking Systems,{" "}
            <span className="text-primary">Built for Your Business</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up-delay">
            ZENXAI builds and restructures booking websites & apps tailored to your workflow. 
            From custom development to system upgrades, we deliver solutions that scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
            <Button 
              size="lg" 
              className="gradient-accent shadow-accent text-accent-foreground font-semibold text-lg px-8 py-6 hover:opacity-90 transition-opacity"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary font-semibold text-lg px-8 py-6 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
