// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import CreatorOfferings from "@/components/CreatorOfferings";
import ExclusiveFeatures from "@/components/ExclusiveFeatures";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";

import FAQ from "@/components/FAQ";
import BookConsultation from "@/components/BookConsultation";
import Footer from "@/components/Footer";
import StickyFooter from "@/components/StickyFooter";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <main>
        <Hero />
        <TrustedBy />
        <CreatorOfferings />
        <ExclusiveFeatures />
        <Testimonials />
        <Process />
        <Work />
        <Events />

        <FAQ />
        <BookConsultation />
      </main>

      <StickyFooter />
      <Footer />
    </div>
  );
};

export default Index;
