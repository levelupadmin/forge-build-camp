import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PoweredBy from "@/components/PoweredBy";
import ToolsOrbit from "@/components/ToolsOrbit";
import WhyAINow from "@/components/WhyAINow";
import Contrast from "@/components/Contrast";
import Experience from "@/components/Experience";
import Pillars from "@/components/Pillars";
import Trailer from "@/components/Trailer";
import OnlinePrep from "@/components/OnlinePrep";
import Schedule from "@/components/Schedule";
import Outcomes from "@/components/Outcomes";
import Mentors from "@/components/Mentors";
import Community from "@/components/Community";
import SocialProof from "@/components/SocialProof";
import WhoIsFor from "@/components/WhoIsFor";
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
    <div className="min-h-screen bg-forge-bg">
      <div className="noise-overlay" />
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <PoweredBy />
      <ToolsMarquee />
      <WhyAINow />
      <Contrast />
      <Experience />
      <Trailer />
      <Pillars onOpenModal={openModal} />
      <OnlinePrep />
      <Schedule />
      <Outcomes />
      <Mentors />
      <Community />
      <SocialProof />
      <WhoIsFor />
      <Pricing onOpenModal={openModal} />
      <FAQs />
      <FinalCTA onOpenModal={openModal} />
      <Footer />
      <InviteModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
