import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PoweredBy from "@/components/PoweredBy";
import WhyAINow from "@/components/WhyAINow";
import WhatIsForge from "@/components/WhatIsForge";
import Trailer from "@/components/Trailer";
import WhoIsFor from "@/components/WhoIsFor";
import Pillars from "@/components/Pillars";
import Outcomes from "@/components/Outcomes";
import ToolsOrbit from "@/components/ToolsOrbit";
import Schedule from "@/components/Schedule";
import Mentors from "@/components/Mentors";
import Experience from "@/components/Experience";
import Contrast from "@/components/Contrast";
import OnlinePrep from "@/components/OnlinePrep";
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
      <PoweredBy />
      <WhyAINow />
      <WhatIsForge />
      <Trailer />
      <WhoIsFor />
      <Pillars onOpenModal={openModal} />
      <Outcomes />
      <ToolsOrbit />
      <Schedule />
      <Mentors />
      <Experience />
      <Contrast />
      <OnlinePrep />
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
