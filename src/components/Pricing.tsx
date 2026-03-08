import SectionWrapper from "./SectionWrapper";

interface PricingProps {
  onOpenModal: () => void;
}

const inclusions = [
  "9-day residential stay, fully immersive",
  "All accommodation included",
  "All meals included",
  "Full access to all 3 pillar sessions",
  "Daily mentor feedback sessions",
  "Online prep program before arrival",
  "Tool credits and resource kit",
  "Demo Day participation",
  "Lifetime alumni community access",
];

const Pricing = ({ onOpenModal }: PricingProps) => {
  return (
    <SectionWrapper label="THE INVESTMENT">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        Everything included.<br />One price.
      </h2>

      <div className="max-w-[520px] mx-auto glass-card p-8 border-[rgba(240,165,0,0.35)] shadow-[0_0_48px_rgba(240,165,0,0.07)]">
        <div className="text-center mb-6">
          <span className="text-[11px] text-primary tracking-wider font-semibold uppercase">COHORT 01 · ALL INCLUSIVE</span>
          <p className="font-bold text-[60px] md:text-[68px] text-foreground mt-2 leading-none">₹1,20,000</p>
          <p className="text-sm text-forge-muted mt-2">per person, everything included</p>
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

        <p className="text-[13px] text-amber-dim text-center italic mb-4">
          Early invite requests may receive priority pricing. Seats are reviewed. Not first come, first served.
        </p>

        <button
          onClick={onOpenModal}
          className="w-full bg-primary text-primary-foreground font-semibold rounded-xl py-4 text-base cta-pulse"
        >
          Request an Invite →
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Pricing;
