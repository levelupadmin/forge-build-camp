import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import WhatIsForge from "@/components/WhatIsForge";
import VennDiagram from "@/components/VennDiagram";
import WhyAINow from "@/components/WhyAINow";
import WhoIsFor from "@/components/WhoIsFor";
import Pillars from "@/components/Pillars";
import Tribe from "@/components/Tribe";
import Outcomes from "@/components/Outcomes";
// Temporarily hidden, uncomment to restore:
// import PerksVault from "@/components/PerksVault";
// import ValueMath from "@/components/ValueMath";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import BuilderCaseStudies from "@/components/BuilderCaseStudies";
import Mentors from "@/components/Mentors";
import AaryaQuote from "@/components/AaryaQuote";
import Community from "@/components/Community";
import SocialProof from "@/components/SocialProof";
import FAQs from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const TALLY_URL = "https://tally.so/r/kdWEXR";

/** Read a cookie value by name. Returns undefined if missing. */
const readCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${encodeURIComponent(name)}=`) || row.startsWith(`${name}=`));
  if (!match) return undefined;
  const eq = match.indexOf("=");
  if (eq === -1) return undefined;
  return decodeURIComponent(match.slice(eq + 1));
};

/**
 * Build the Tally URL with attribution context attached:
 *   - All UTM / click-ID query params from the current page URL (utm_*, gclid, fbclid, etc.)
 *   - Meta browser/click cookies (_fbp, _fbc) so server-side CAPI can match conversions
 *
 * Tally fills hidden fields whose names match these keys.
 */
const buildTallyUrl = (): string => {
  const url = new URL(TALLY_URL);

  // Forward all query params from the landing page.
  if (typeof window !== "undefined" && window.location.search) {
    const incoming = new URLSearchParams(window.location.search);
    incoming.forEach((value, key) => {
      if (value) url.searchParams.set(key, value);
    });
  }

  // Forward Meta cookies if present (these carry click attribution server-side).
  const fbp = readCookie("_fbp");
  if (fbp) url.searchParams.set("_fbp", fbp);
  const fbc = readCookie("_fbc");
  if (fbc) url.searchParams.set("_fbc", fbc);

  return url.toString();
};

const Index = () => {
  const openTally = () => {
    window.open(buildTallyUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar onOpenModal={openTally} />
      <Hero onOpenModal={openTally} />
      {/* Temporarily hidden: <LogoStrip /> (text-only names without logos, removed) */}
      <WhatIsForge onOpenModal={openTally} />
      <WhyAINow />
      <VennDiagram />
      <Tribe onOpenModal={openTally} />
      {/* Temporarily hidden: <WhoIsFor onOpenModal={openTally} /> */}
      <Pillars onOpenModal={openTally} />
      <AaryaQuote onOpenModal={openTally} />
      <BuilderCaseStudies />
      {/* Temporarily hidden: <Outcomes onOpenModal={openTally} /> (duplicates Pillars outcome story) */}
      <Mentors onOpenModal={openTally} />
      <Schedule onOpenModal={openTally} />
      {/* Temporarily hidden, restore: <PerksVault onOpenModal={openTally} /> */}
      <Community onOpenModal={openTally} />
      <SocialProof />
      {/* Temporarily hidden, restore: <ValueMath onOpenModal={openTally} /> */}
      <Pricing onOpenModal={openTally} />
      <FAQs />
      <FinalCTA onOpenModal={openTally} />
      <Footer />
      <StickyMobileCTA onOpenModal={openTally} />
    </div>
  );
};

export default Index;
