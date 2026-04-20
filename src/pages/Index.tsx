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
import PerksVault from "@/components/PerksVault";
import PerksDirectory from "@/components/PerksDirectory";
import ValueMath from "@/components/ValueMath";
import Schedule from "@/components/Schedule";
import Mentors from "@/components/Mentors";
import Community from "@/components/Community";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQs from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PerkUnlockModal, { type ModalPerk } from "@/components/PerkUnlockModal";

const TALLY_URL = "https://tally.so/r/kdWEXR";

const Index = () => {
  const openTally = () => window.open(TALLY_URL, "_blank", "noopener,noreferrer");
  const [unlockPerk, setUnlockPerk] = useState<ModalPerk | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar onOpenModal={openTally} />
      <Hero onOpenModal={openTally} />
      <LogoStrip />
      <WhatIsForge />
      <WhyAINow />
      <WhoIsFor onOpenModal={openTally} />
      <Pillars onOpenModal={openTally} />
      <Outcomes onOpenModal={openTally} />
      <PerksVault onOpenModal={openTally} onUnlock={setUnlockPerk} />
      <PerksDirectory onUnlock={setUnlockPerk} />
      <VennDiagram />
      <Schedule />
      <Mentors />
      <Community onOpenModal={openTally} />
      <SocialProof />
      <ValueMath onOpenModal={openTally} />
      <Pricing onOpenModal={openTally} />
      <FAQs />
      <FinalCTA onOpenModal={openTally} />
      <Footer />
      <PerkUnlockModal
        perk={unlockPerk}
        onClose={() => setUnlockPerk(null)}
        onRequestInvite={openTally}
      />
    </div>
  );
};

export default Index;
