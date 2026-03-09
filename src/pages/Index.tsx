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
import Contrast from "@/components/Contrast";
import Community from "@/components/Community";
import SocialProof from "@/components/SocialProof";
...
      <Schedule />
      <Mentors />
      <Contrast />
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
