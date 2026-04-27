import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X as XIcon } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

const faqs = [
  { q: "Who is this for?", a: "Founders, marketers, operators, and working professionals who want to build with AI. No coding background needed." },
  { q: "Do I need to know how to code?", a: "No. None of the three tracks require coding. If you can write a brief, you can build with these tools." },
  { q: "What is included in the program fee?", a: "Residential stay, all meals, all three tracks, expert faculty, curated experiences, community access, the AI Perks Vault, and the Forge AI Goodie Bag. Everything except your travel to the venue." },
  { q: "How many people are in each cohort?", a: "20. Hard limit. This is what allows faculty to actually work with you and not just present to you." },
  { q: "What is the AI Perks Vault — are the credits really free?", a: "Yes. 210 real perks across AWS, Claude, OpenAI, Vercel, Gemini, ElevenLabs and more — total face value of $7.63M+. The list is curated for Indian founders, so US-only perks like Mercury, Brex, Ramp, and Carta are intentionally excluded. You apply through the Forge dashboard; each perk has its own eligibility, which we've graded with an approval index so you know what's realistic. We don't pool or resell — every credit stays on your account." },
  { q: "Do I keep the perks access after the program ends?", a: "Yes. Vault access is lifetime. We add new perks weekly as partners onboard." },
  { q: "What happens if a perk provider rejects my application?", a: "Approval isn't guaranteed on every single perk — most high-value providers do their own review. That's why we publish an approval index per perk. Even claiming 2–3% of the vault pays for the program multiple times over." },
  { q: "What is the application fee for?", a: "It books your interview slot and signals intent to our selection team. It is separate from the program fee." },
  { q: "What do I actually leave with?", a: "A working product, a live automation, an AI content system, a network of 20 serious builders, and lifetime access to the Perks Vault." },
  { q: "I have a full-time job. Can I attend?", a: "Yes. Most participants are working professionals. You take a fixed block of time off and come back with something done." },
  { q: "What if I have never used AI tools before?", a: "The pre-program sessions bring you up to speed before Day 1. You arrive ready to build, not to catch up." },
  { q: "Why pay for this when free AI content exists everywhere?", a: "You have probably already found the free content. The question is whether it has actually moved anything forward for you. Forge is for people who are done watching and ready to build." },
];

const FAQs = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionWrapper id="faqs">
      <SectionHeading label="FAQS">
        Questions we get <Accent>asked a lot.</Accent>
      </SectionHeading>

      <div className="max-w-[680px] mx-auto">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-border">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-5 flex items-center justify-between gap-4"
            >
              <span className="text-foreground font-semibold text-[16px]">{f.q}</span>
              <span className="shrink-0 text-primary transition-transform duration-200">
                {open === i ? <XIcon size={18} /> : <Plus size={18} />}
              </span>
            </button>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-[14px] text-muted-foreground leading-relaxed">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FAQs;
