import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import WhatIsForge from "@/components/WhatIsForge";
import VennDiagram from "@/components/VennDiagram";
import WhyAINow from "@/components/WhyAINow";
import WhoIsFor from "@/components/WhoIsFor";
import Pillars from "@/components/Pillars";
import Outcomes from "@/components/Outcomes";
import Schedule from "@/components/Schedule";
import Mentors from "@/components/Mentors";
import Community from "@/components/Community";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQs from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import InviteModal from "@/components/InviteModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <LogoStrip />
      <WhatIsForge />
      <VennDiagram />
      <WhyAINow />
      <WhoIsFor />
      <Pillars onOpenModal={openModal} />
      <Outcomes />
      <Schedule />
      <Mentors />
      <Community />
      <SocialProof />
      <Pricing onOpenModal={openModal} />
      <FAQs />
      <FinalCTA onOpenModal={openModal} />
      <Footer />
      <InviteModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
