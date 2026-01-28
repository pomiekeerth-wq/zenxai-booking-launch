import { Mail, MessageCircle, Bell, CreditCard, RefreshCw, Clock } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Automated Confirmations",
    description: "Instant booking confirmations sent automatically to customers upon scheduling."
  },
  {
    icon: MessageCircle,
    title: "Multi-Channel Reminders",
    description: "WhatsApp, Email, and SMS notifications to reduce no-shows and keep customers informed."
  },
  {
    icon: RefreshCw,
    title: "Rescheduling Workflows",
    description: "Easy cancellation and rescheduling options with automated slot management."
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Optional payment gateways for deposits, full payments, or subscription billing."
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "AI-powered time slot suggestions based on business rules and availability."
  },
  {
    icon: Mail,
    title: "Follow-up Automation",
    description: "Post-appointment emails for reviews, rebooking, and customer engagement."
  }
];

const Automation = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Smart Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Automation & Smart Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let technology handle the repetitive tasks so you can focus on what matters most—your customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 group"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automation;
