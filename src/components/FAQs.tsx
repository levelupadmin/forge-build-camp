import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X as XIcon } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

const faqs = [
  { q: "Who is this for?", a: "Founders, operators, and business leaders who want to build with AI. No coding background needed." },
  { q: "How is this different from the 10 AI cohorts I have already paid for?", a: "You stop watching. You sit in a room with 19 other builders for 7 days. You do not leave until two real things are shipped. No replay tab. No catching up next week. Just the room, the mentors, and the work." },
  { q: "I keep starting AI projects and abandoning them. How do I know I will finish here?", a: "Because the room will not let you. Mentor ratio is 1 to 5. Daily build standups. Outdoor hackathon on Day 6. Demo Day on Day 7 where you present a working build to the cohort. The structure exists so you cannot slip." },
  { q: "Do I need to know how to code?", a: "No. None of the tracks require coding. If you can write a brief, you can build with these tools." },
  { q: "What is included in the program fee?", a: "Residential stay, all meals, both tracks (Operations + Product), expert faculty, curated experiences, community access, and the Forge AI Goodie Bag. Everything except your travel to the venue." },
  { q: "How many people are in each cohort?", a: "20. Hard limit. This is what allows faculty to actually work with you and not just present to you." },
  { q: "What is the application fee for?", a: "It books your interview slot and signals intent to our selection team. It is separate from the program fee." },
  { q: "What do I actually leave with?", a: "A working product, a live automation that runs your business, a 90-day roadmap, and a network of 20 serious builders." },
  { q: "I have a full-time job. Can I attend?", a: "Yes. Most participants are working professionals. You take a fixed block of time off and come back with something done." },
  { q: "What if I have never used AI tools before?", a: "The pre-program sessions bring you up to speed before Day 1. You arrive ready to build, not to catch up." },
  { q: "Why pay for this when free AI content exists everywhere?", a: "You have probably already found the free content. The question is whether it has actually moved anything forward for you. Forge is for people who are done watching and ready to build." },
];

const FAQs = () => {
  const [open, setOpen] = useState<number | null>(null);

  // Split into two columns on desktop (left = even indices, right = odd)
  const leftCol = faqs.filter((_, i) => i % 2 === 0);
  const rightCol = faqs.filter((_, i) => i % 2 === 1);

  const renderQ = (f: typeof faqs[number], i: number) => (
    <div key={f.q} className="border-b border-foreground/12 last:border-b-0">
      <button
        onClick={() => setOpen(open === i ? null : i)}
        className="w-full text-left py-5 md:py-6 flex items-start justify-between gap-4 group"
      >
        <span className="text-foreground font-semibold text-[15px] md:text-[16px] leading-snug group-hover:text-primary transition-colors">
          {f.q}
        </span>
        <span className="shrink-0 text-foreground/40 group-hover:text-primary transition-colors mt-0.5">
          {open === i ? <XIcon size={18} strokeWidth={1.8} /> : <Plus size={18} strokeWidth={1.8} />}
        </span>
      </button>
      <AnimatePresence>
        {open === i && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-foreground/65 text-[14px] md:text-[15px] leading-[1.65] pb-5 md:pb-6 pr-10 max-w-[640px]">
              {f.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <SectionWrapper id="faqs">
      <SectionHeading label="FAQS">
        Questions we get <Accent>asked a lot.</Accent>
      </SectionHeading>

      <div className="max-w-[1100px] mx-auto">
        {/* Mobile: single column with all FAQs. Desktop: 2 columns split by index. */}
        <div className="md:hidden">
          {faqs.map((f, i) => renderQ(f, i))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
          <div>
            {leftCol.map((f) => {
              const realIdx = faqs.indexOf(f);
              return renderQ(f, realIdx);
            })}
          </div>
          <div>
            {rightCol.map((f) => {
              const realIdx = faqs.indexOf(f);
              return renderQ(f, realIdx);
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FAQs;
