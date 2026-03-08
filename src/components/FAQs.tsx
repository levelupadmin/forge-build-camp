import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X as XIcon } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    q: "Do I need coding experience?",
    a: "None at all. Every tool we use across all three pillars is no-code or low-code. If you can use a laptop and a browser, you can build here.",
  },
  {
    q: "What is included in the price?",
    a: "Everything. 9-day residential stay, all accommodation, all meals, full access to all three pillar sessions, daily mentor feedback, online prep access, tool credits, Demo Day, and lifetime community access. You arrive with your laptop. We handle the rest.",
  },
  {
    q: "Where is the residency?",
    a: "Full location details, accommodation info, and travel guidance are shared with accepted participants. The residency takes place at a carefully selected location away from city distractions.",
  },
  {
    q: "What do I actually build in 9 days?",
    a: "Three things. An AI creative output, which could be an ad, short film, or a full content workflow. A working automation that runs in your business from Day 1 back home. And a product or MVP with a landing page and basic funnel. You pitch all three on Demo Day.",
  },
  {
    q: "Is this only for people in tech?",
    a: "Not at all. It is built for founders, marketers, creators, and operators. The tools are designed for non-technical people. If you can use Google Docs, you can build here.",
  },
  {
    q: "When is Cohort 01?",
    a: "Dates are confirmed with accepted participants. Fill in the invite request and our team will reach out within 48 hours with full details.",
  },
  {
    q: "How does the invite process work?",
    a: "Tap Request an Invite, fill in a short form, and our team reviews within 48 hours. We select based on fit and intent, not just whoever applies first.",
  },
  {
    q: "Why pay for this when there is so much free AI content out there?",
    a: "Free content teaches. Forge makes you build. What you get here that YouTube cannot give you: 9 focused days with zero distractions, accountability partners in the same room, mentors who sit with your actual work, and a finished product at the end. You are compressing 6 months of solo learning into 9 days. That is what you are paying for.",
  },
];

const FAQs = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionWrapper id="faqs" label="FAQS">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        Still thinking?<br />Here are the answers.
      </h2>

      <div className="max-w-[680px] mx-auto">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-[rgba(255,255,255,0.06)]">
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
                  <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
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
