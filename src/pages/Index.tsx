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

const TALLY_URL = "https://tally.so/r/kdWEXR";

const Index = () => {
  const openTally = () => window.open(TALLY_URL, "_blank", "noopener,noreferrer");

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar onOpenModal={openTally} />
      <Hero onOpenModal={openTally} />
      <LogoStrip />
      <WhatIsForge />
      <WhyAINow />
      <WhoIsFor />
      <Pillars onOpenModal={openTally} />
      <Outcomes />
      <VennDiagram />
      <Schedule />
      <Mentors />
      <Community />
      <SocialProof />
      <Pricing onOpenModal={openTally} />
      <FAQs />
      <FinalCTA onOpenModal={openTally} />
      <Footer />
    </div>
  );
};

export default Index;
