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
import ValueMath from "@/components/ValueMath";
import Schedule from "@/components/Schedule";
import Mentors from "@/components/Mentors";
import Community from "@/components/Community";
import SocialProof from "@/components/SocialProof";
import FAQs from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { fireLeadFormOpen } from "@/lib/gtag";

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
 *   - cta_source = the CTA the user clicked, so we can attribute completes to surface
 *
 * Tally fills hidden fields whose names match these keys.
 */
const buildTallyUrl = (ctaSource: string): string => {
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

  // Tag which on-page CTA fired this open — Tally has a hidden field "cta_source"
  if (ctaSource) url.searchParams.set("cta_source", ctaSource);

  return url.toString();
};

const Index = () => {
  /** Determine which CTA fired by reading data-cta off the activeElement. */
  const resolveSource = (): string => {
    if (typeof document === "undefined") return "unknown";
    const el = document.activeElement as HTMLElement | null;
    return el?.getAttribute("data-cta") || "page";
  };

  const openTally = () => {
    const source = resolveSource();
    fireLeadFormOpen(source);
    window.open(buildTallyUrl(source), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar onOpenModal={openTally} />
      <Hero onOpenModal={openTally} />
      <LogoStrip />
      <WhatIsForge />
      <WhyAINow />
      <WhoIsFor onOpenModal={openTally} />
      <VennDiagram />
      <Pillars onOpenModal={openTally} />
      <Outcomes onOpenModal={openTally} />
      <Mentors />
      <Schedule />
      <PerksVault onOpenModal={openTally} />
      <Community onOpenModal={openTally} />
      <SocialProof />
      <ValueMath onOpenModal={openTally} />
      <FAQs />
      <FinalCTA onOpenModal={openTally} />
      <Footer />
    </div>
  );
};

export default Index;
