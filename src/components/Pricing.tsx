import SectionWrapper from "./SectionWrapper";

interface PricingProps {
  onOpenModal: () => void;
}

const inclusions = [
  "Residential stay on double occupancy",
  "All meals throughout the program",
  "All three tracks: Generative AI, Automations, Product Building",
  "Expert faculty throughout the residency",
  "Curated experiences during the program",
  "Community access after the program",
  "Perks from partner brands",
  "The Forge AI Goodie Bag",
  "Demo Day on Day 9",
];

const exclusions = [
  "Travel to and from the venue",
  "Personal expenses",
  "Single occupancy room upgrade (available at additional cost)",
];

const Pricing = ({ onOpenModal }: PricingProps) => {
  return (
    <SectionWrapper label="THE INVESTMENT">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        The most focused nine days you will<br />spend on your business <span className="font-serif italic font-black">this year.</span>
      </h2>

      <div className="max-w-[520px] mx-auto glass-card backdrop-blur-sm p-8 pricing-card-glow">
        <div className="text-center mb-6">
          <span className="text-[11px] text-primary tracking-wider font-mono uppercase">ALL INCLUSIVE</span>
          <p className="font-bold text-[60px] md:text-[68px] text-foreground mt-2 leading-none">INR 1,20,000</p>
          <p className="text-sm text-muted-foreground mt-2">per person, inclusive of GST</p>
        </div>

        <div className="h-px bg-primary/15 my-6" />

        <div className="space-y-2">
          {inclusions.map((item) => (
            <p key={item} className="text-[15px] text-foreground leading-[2.1]">
              <span className="text-primary mr-2">✓</span>{item}
            </p>
          ))}
        </div>

        <div className="h-px bg-primary/15 my-6" />

        <div className="space-y-2">
          {exclusions.map((item) => (
            <p key={item} className="text-[15px] text-muted-foreground leading-[2.1]">
              <span className="text-destructive mr-2">✗</span>{item}
            </p>
          ))}
        </div>

        <div className="h-px bg-primary/15 my-6" />

        <button
          onClick={onOpenModal}
          className="w-full bg-primary text-primary-foreground font-semibold rounded-xl py-4 text-base cta-pulse"
        >
          REQUEST AN INVITE
        </button>

        <p className="text-[13px] text-muted-foreground/50 text-center mt-4">
          20 seats per cohort. Payment collected after acceptance only.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Pricing;
