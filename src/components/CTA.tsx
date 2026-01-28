import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative gradient-primary rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Ready to Transform Your Bookings?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Need a New Booking System or Want to Improve Your Existing One?
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let ZENXAI build a booking solution that streamlines your operations, 
              delights your customers, and scales with your business.
            </p>
            
            <Button 
              size="lg"
              className="gradient-accent shadow-accent text-accent-foreground font-semibold text-lg px-8 py-6 hover:opacity-90 transition-opacity"
            >
              Get Started with ZENXAI
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
