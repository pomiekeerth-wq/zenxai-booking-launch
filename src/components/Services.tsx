import { Globe, Smartphone, LayoutDashboard, Users } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Booking Websites",
    description: "Fully responsive booking websites designed to match your brand and streamline customer appointments."
  },
  {
    icon: Smartphone,
    title: "Booking Mobile Apps",
    description: "Native and cross-platform mobile applications for on-the-go booking management and customer access."
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description: "Powerful management panels with analytics, staff scheduling, and comprehensive booking oversight."
  },
  {
    icon: Users,
    title: "Customer Self-Service Portals",
    description: "Intuitive portals where customers can book, reschedule, and manage their appointments independently."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What ZENXAI Builds
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end booking system development tailored to your unique business requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-background p-6 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
