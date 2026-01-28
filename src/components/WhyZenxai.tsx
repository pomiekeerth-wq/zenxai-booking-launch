import { Check, Zap, Shield, Palette } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Built or Upgraded",
    description: "Whether you need a new system from scratch or want to modernize your existing booking platform, we deliver."
  },
  {
    icon: Check,
    title: "Fully Customizable",
    description: "Custom booking rules, workflows, and integrations tailored exactly to how your business operates."
  },
  {
    icon: Shield,
    title: "Scalable & Secure",
    description: "Enterprise-grade security with infrastructure that grows seamlessly with your business."
  },
  {
    icon: Palette,
    title: "Clean UI/UX",
    description: "Modern, intuitive interfaces that provide a seamless experience for both staff and customers."
  }
];

const WhyZenxai = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Why Businesses Trust ZENXAI
            </h2>
            <p className="text-muted-foreground mb-8">
              We don't just build booking systems—we create digital experiences that transform how 
              businesses manage appointments and engage with customers.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="bg-card rounded-xl shadow-card p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-secondary rounded w-3/4" />
                    <div className="h-4 bg-secondary rounded w-1/2" />
                    <div className="h-4 bg-secondary rounded w-2/3" />
                  </div>
                </div>
                <div className="bg-card rounded-xl shadow-card p-4 ml-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Booking Confirmed</p>
                      <p className="text-xs text-muted-foreground">Tomorrow at 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZenxai;
