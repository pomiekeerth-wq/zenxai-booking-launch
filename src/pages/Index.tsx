import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyZenxai from "@/components/WhyZenxai";
import Automation from "@/components/Automation";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyZenxai />
        <Automation />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
