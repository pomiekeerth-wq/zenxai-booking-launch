import { Heart, Sparkles, GraduationCap, Briefcase } from "lucide-react";

const industries = [
  {
    icon: Heart,
    title: "Healthcare & Clinics",
    description: "Medical practices, dental offices, therapy clinics, and wellness centers.",
    color: "bg-rose-100 text-rose-600"
  },
  {
    icon: Sparkles,
    title: "Beauty & Wellness",
    description: "Salons, spas, barbershops, and personal care service providers.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching",
    description: "Tutors, consultants, coaches, and training professionals.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Briefcase,
    title: "Service Businesses",
    description: "Consultants, photographers, repair services, and professional firms.",
    color: "bg-emerald-100 text-emerald-600"
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Industries</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our booking solutions adapt to the unique requirements of diverse business sectors
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-background shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <industry.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{industry.title}</h3>
              <p className="text-muted-foreground text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
