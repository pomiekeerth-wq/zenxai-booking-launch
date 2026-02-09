import { useState } from "react";
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
import BookingModal from "@/components/BookingModal";


const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <main>
        <Hero onBookCall={openBookingModal} />
        <TrustedBy />
        <CreatorOfferings />
        <ExclusiveFeatures />
        <Testimonials />
        <Process onBookCall={openBookingModal} />
        <Work />
        <Events />

        <FAQ onBookCall={openBookingModal} />
        <BookConsultation onBookCall={openBookingModal} />
      </main>

      <StickyFooter onBookCall={openBookingModal} />
      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
      />
    </div>
  );
};

export default Index;
