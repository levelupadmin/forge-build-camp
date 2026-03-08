import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { toolLogos } from "@/lib/toolLogos";

interface PillarData {
  num: string;
  tag: string;
  days: string;
  title: string;
  body: string;
  builds: string[];
  tools: string[];
}

const pillars: PillarData[] = [
  {
    num: "01",
    tag: "01 · AI CREATIVITY",
    days: "Days 2 + 3",
    title: "Create content, visuals and videos with AI",
    body: "Master prompt engineering, AI image generation, and AI video creation. Build a complete content workflow for ads, reels, and brand assets using the same tools professionals use today.",
    builds: [
      "An AI-generated short film or ad campaign",
      "A repeatable AI content workflow",
      "Brand visuals generated from scratch",
    ],
    tools: ["Runway", "Midjourney", "HeyGen", "ElevenLabs", "Kling"],
  },
  {
    num: "02",
    tag: "02 · AI AUTOMATIONS",
    days: "Days 4 + 5",
    title: "Automate your work with AI agents",
    body: "Build no-code automations that save real time. Connect apps, trigger AI agents, create pipelines without writing a single line of code. Leave with one live automation running from the moment you get back.",
    builds: [
      "One working multi-step automation",
      "An AI agent pipeline connected to your tools",
      "A system that saves you hours every week",
    ],
    tools: ["n8n", "Make", "Zapier", "Claude", "OpenAI API", "Airtable"],
  },
  {
    num: "03",
    tag: "03 · AI PRODUCT BUILDING",
    days: "Days 6, 7 + 8",
    title: "Build and launch your first AI product",
    body: "Go from idea to shipped product in days, no coding required. Build an MVP, create a landing page, set up a launch funnel, and pitch it on Demo Day.",
    builds: [
      "A live product or working MVP",
      "A landing page and launch funnel",
      "A pitch-ready demo for Demo Day",
    ],
    tools: ["Lovable", "Replit", "Supabase", "Claude API", "Stripe"],
  },
];

interface PillarsProps {
  onOpenModal: () => void;
}

const Pillars = ({ onOpenModal }: PillarsProps) => {
  return (
    <SectionWrapper id="pillars" label="THREE PILLARS">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        Three skills.<br />One residency.
      </h2>

      <div className="max-w-[840px] mx-auto flex flex-col gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card backdrop-blur-sm p-6 md:p-8 relative overflow-hidden hover:-translate-y-[2px] transition-transform duration-300"
          >
            <span className="absolute top-4 right-6 font-bold text-[72px] text-primary/[0.12] leading-none select-none">
              {p.num}
            </span>

            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className="text-[11px] text-primary border border-primary/30 rounded-full px-3 py-1 font-semibold uppercase tracking-wider">
                {p.tag}
              </span>
              <span className="text-[13px] text-muted-foreground/50">{p.days}</span>
            </div>

            <h3 className="font-bold text-[22px] md:text-[26px] text-foreground mb-3 relative z-10">
              {p.title}
            </h3>

            <p className="text-[15px] text-muted-foreground leading-[1.7] mb-6 relative z-10">{p.body}</p>

            <div className="bg-[rgba(0,0,0,0.4)] border-l-2 border-primary rounded-[10px] p-4 mb-6 relative z-10">
              <p className="text-[13px] text-muted-foreground/50 font-semibold mb-2">You'll build:</p>
              {p.builds.map((b) => (
                <p key={b} className="text-sm text-foreground leading-relaxed">
                  <span className="text-primary mr-2">✦</span>{b}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 relative z-10 items-center">
              {p.tools.map((t) => (
                <div key={t} className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center overflow-hidden p-1.5" title={t}>
                  <img src={toolLogos[t] || ""} alt={t} className="w-full h-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">Ready to build all three?</p>
        <button onClick={onOpenModal} className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold rounded-full px-8 py-4 sm:py-3.5 text-base cta-pulse">
          Request an Invite
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Pillars;
