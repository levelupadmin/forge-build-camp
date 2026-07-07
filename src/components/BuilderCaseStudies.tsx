import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";
import { motion } from "framer-motion";
import aaryaPhoto from "@/assets/community/student-aarya.jpg";
import ruhaniPhoto from "@/assets/community/student-ruhani.jpg";
import smiteshPhoto from "@/assets/community/student-smitesh.jpg";

interface Builder {
  name: string;
  initials: string;
  photo?: string;
  role: string;
  company: string;
  walkedIn: string;
  shipped: string;
  dashboard: React.ReactNode;
}

/* ─── Dashboard mockups ────────────────────────────────────────────── */

const PharmaDash = () => (
  <div className="bg-card border border-border p-5 md:p-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold">Naprod OS · Compliance</span>
      <span className="text-[10px] text-primary font-semibold">● live</span>
    </div>
    <div className="bg-background border-l-2 border-primary p-3 md:p-4 mb-4">
      <p className="text-[12px] md:text-[13px] text-foreground leading-relaxed mb-2">
        Per SOP-038 §4.2, the impurity threshold for Compound X in finished product is 0.15% w/w under current GMP guidelines.
      </p>
      <div className="flex flex-wrap gap-1.5">
        <span className="text-[9px] uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5">SOP-038 §4.2</span>
        <span className="text-[9px] uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5">ICH Q3D</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { l: "RFQ queue", v: "4" },
        { l: "Audit-safe", v: "100%" },
        { l: "Modules live", v: "3/3" },
      ].map((m, i) => (
        <div key={i} className="border border-border p-2.5">
          <div className="text-[9px] uppercase tracking-wider text-foreground/55 font-semibold mb-1">{m.l}</div>
          <div className="text-[18px] font-bold text-foreground leading-tight">{m.v}</div>
        </div>
      ))}
    </div>
  </div>
);

const SariAIDash = () => (
  <div className="bg-card border border-border p-5 md:p-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold">Product-to-shoot · one image in</span>
      <span className="text-[10px] text-primary font-semibold">1m 42s</span>
    </div>
    <div className="bg-background border border-border p-3 mb-3">
      <div className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold mb-2">Input</div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-14 bg-gradient-to-br from-red-300 to-red-600 border border-border" />
        <span className="text-[11px] text-foreground/70">product-1247.jpg · flat lay</span>
      </div>
    </div>
    <div className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold mb-2">Generated</div>
    <div className="grid grid-cols-3 gap-1.5 mb-3">
      {[1,2,3].map((i) => (
        <div key={i} className="border border-border bg-background p-2">
          <div className="w-full aspect-[3/4] bg-gradient-to-br from-amber-100 to-amber-300 mb-1.5" />
          <div className="text-[9px] uppercase tracking-wider text-foreground/55 font-semibold">Model {i}</div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-1.5">
      {["Reel · 9:16", "Product · 1:1"].map((v, i) => (
        <div key={i} className="border border-primary/40 bg-primary/5 p-2 flex items-center gap-2">
          <div className="w-6 h-6 border border-primary flex items-center justify-center">
            <div className="w-0 h-0 border-l-4 border-l-primary border-y-4 border-y-transparent ml-0.5" />
          </div>
          <span className="text-[10px] text-foreground font-semibold">{v}</span>
        </div>
      ))}
    </div>
  </div>
);

const IdeaValidatorDash = () => (
  <div className="bg-card border border-border p-5 md:p-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold">Idea Validator · 3-lane engine</span>
      <span className="text-[10px] text-primary font-semibold">● scanning</span>
    </div>
    <div className="bg-background border border-border p-2.5 mb-3">
      <div className="text-[9px] uppercase tracking-wider text-foreground/55 mb-1">Input</div>
      <p className="text-[11px] text-foreground font-semibold">"Smart home platform for renters in metro India"</p>
    </div>
    {[
      { l: "What you know", c: "border-foreground/20 text-foreground/60", n: "12 items" },
      { l: "Known gaps", c: "border-foreground/20 text-foreground/60", n: "7 items" },
      { l: "Unknown unknowns", c: "border-primary/50 bg-primary/[0.04]", n: "5 insights", accent: true },
    ].map((lane, i) => (
      <div key={i} className={`border p-2.5 mb-2 ${lane.c}`}>
        <div className="flex items-center justify-between">
          <span className={`text-[10px] uppercase tracking-wider font-semibold ${lane.accent ? "text-primary" : "text-foreground/60"}`}>{lane.l}</span>
          <span className="text-[10px] text-foreground/50">{lane.n}</span>
        </div>
        {lane.accent && (
          <p className="text-[11px] text-foreground/85 mt-1 leading-snug">
            Property managers in Tier-2 cities buy hardware in bulk. Sales cycle: 3 quarters, not 3 weeks.
          </p>
        )}
      </div>
    ))}
  </div>
);

const NewsroomDash = () => (
  <div className="bg-card border border-border p-5 md:p-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold">Newsroom Ops · today</span>
      <span className="text-[10px] text-primary font-semibold">42 stories in</span>
    </div>
    <div className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold mb-2">Live feed</div>
    {[
      { src: "Reuters", head: "RBI holds repo rate at 6.5%", score: 94 },
      { src: "Twitter · PTI", head: "Karnataka floods: 3 districts on alert", score: 88 },
      { src: "RSS · Bloomberg", head: "Rupee opens at 83.14 vs USD", score: 72 },
    ].map((r, i) => (
      <div key={i} className="flex items-center justify-between border-b border-border last:border-0 py-1.5">
        <div className="flex-1 pr-2">
          <div className="text-[9px] uppercase tracking-wider text-foreground/45 font-semibold">{r.src}</div>
          <div className="text-[11px] text-foreground leading-tight mt-0.5">{r.head}</div>
        </div>
        <span className="text-[10px] text-primary font-mono font-bold">{r.score}</span>
      </div>
    ))}
    <div className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold mt-4 mb-2">One-click copy for</div>
    <div className="flex flex-wrap gap-1.5">
      {["Print","TV","Digital","Social","Broadcast"].map((ch, i) => (
        <span key={i} className="text-[10px] text-primary bg-primary/10 border border-primary/30 px-2 py-1 font-semibold">{ch}</span>
      ))}
    </div>
  </div>
);

const EmailAssistantDash = () => (
  <div className="bg-card border border-border p-5 md:p-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold">Inbox Assistant · today</span>
      <span className="text-[10px] text-primary font-semibold">387 processed</span>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-4">
      {[
        { l: "Action", v: "23", c: "text-primary" },
        { l: "FYI", v: "148", c: "text-foreground/70" },
        { l: "Ignore", v: "216", c: "text-foreground/40" },
      ].map((s, i) => (
        <div key={i} className="border border-border p-2.5">
          <div className="text-[9px] uppercase tracking-wider text-foreground/55 font-semibold mb-1">{s.l}</div>
          <div className={`text-[20px] font-bold leading-tight ${s.c}`}>{s.v}</div>
        </div>
      ))}
    </div>
    <div className="bg-background border-l-2 border-primary p-3">
      <div className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-1">Suggested reply</div>
      <p className="text-[11px] text-foreground leading-snug mb-2">
        "Confirming receipt of invoice OB-2287. Payment will be processed by Friday per our net-30 terms. Thanks."
      </p>
      <div className="flex items-center gap-2">
        <span className="text-[9px] uppercase tracking-wider text-foreground/55">Template: AP · net-30 ack</span>
      </div>
    </div>
  </div>
);

const builders: Builder[] = [
  {
    name: "Aarya Jain",
    initials: "AJ",
    photo: aaryaPhoto,
    role: "Director",
    company: "Naprod Life Sciences",
    walkedIn: "AI-assisted workflow design across pharma operations, but unable to deploy anything without breaking under regulatory pressure.",
    shipped: "An AI-native operating system for the entire company. Compliance assistant grounded in SOPs, RFQ triage against the product catalog, regulatory submission drafts traceable to source documents, and a governance layer tying it all together.",
    dashboard: <PharmaDash />,
  },
  {
    name: "Ankur Jain",
    initials: "AJ",
    role: "Founder",
    company: "Saree manufacturing business",
    walkedIn: "A family saree business bleeding hours and lakhs every month on model shoots, photography, and video production for every new collection.",
    shipped: "An AI product that takes a single flat saree image and generates a full set of model-wearing photos plus ready-to-run ad videos, in under two minutes at a fraction of the cost. Launching soon, to be sold across his network and beyond.",
    dashboard: <SariAIDash />,
  },
  {
    name: "Ruhani Duggal",
    initials: "RD",
    photo: ruhaniPhoto,
    role: "Director",
    company: "Minar Group",
    walkedIn: "15 years in tech and 5-7 years actively building with AI, watching the same gap founders hit at idea-stage: the things they do not even know they do not know.",
    shipped: "A neural network engine for idea validation. It surfaces what a founder already knows, flags the known gaps, and mines the wider internet beyond their industry for the unknown unknowns that would otherwise sink the idea.",
    dashboard: <IdeaValidatorDash />,
  },
  {
    name: "Gautam Shankar",
    initials: "GS",
    role: "Journalist",
    company: "Indian newsroom",
    walkedIn: "A journalist watching newsrooms drown in incoming feeds, ranking systems, and copy production spread across five different channels.",
    shipped: "A full newsroom dashboard that pulls from Twitter, RSS, and news wires, ranks stories by editorial criteria, and one-click generates finished copy for print, TV, digital, social, and broadcast. In use at his newsroom, being pitched to others across the country.",
    dashboard: <NewsroomDash />,
  },
  {
    name: "Smitesh Panchal",
    initials: "SP",
    photo: smiteshPhoto,
    role: "Director of Global Implementation",
    company: "Office Beacon",
    walkedIn: "500 emails a day, 5-7 hours lost every day to triage, and half the messages irrelevant.",
    shipped: "An AI email assistant that reads every incoming email, classifies whether it needs action, and where it does, drops the exact response into a pre-built template ready to send. Hours of email time back every day. Deployed at Office Beacon.",
    dashboard: <EmailAssistantDash />,
  },
];

const BuilderCaseStudies = () => {
  return (
    <SectionWrapper variant="dark">
      <SectionHeading
        align="center"
        description="Real products, from real operators and founders, using AI to run real functions in real businesses."
      >
        What our <Accent>alumni built.</Accent>
      </SectionHeading>

      <div className="space-y-8 md:space-y-10 mt-2">
        {builders.map((b, i) => {
          const reverse = i % 2 === 1;
          return (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Dashboard mockup */}
              <div>{b.dashboard}</div>

              {/* Builder narrative */}
              <div className="flex flex-col justify-center">
                {/* Identity */}
                <div className="flex items-center gap-3 mb-5">
                  {b.photo ? (
                    <img src={b.photo} alt={b.name} className="w-12 h-12 md:w-14 md:h-14 object-cover shrink-0" />
                  ) : (
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary text-primary-foreground flex items-center justify-center font-bold text-[14px] md:text-[16px] shrink-0">
                      {b.initials}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-white text-[16px] md:text-[18px] leading-tight">{b.name}</p>
                    <p className="text-white/55 text-[12px] md:text-[13px] mt-0.5">{b.role} · {b.company}</p>
                  </div>
                </div>

                {/* Walked in / Shipped */}
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/45 font-semibold mb-1.5">Walked in with</p>
                    <p className="text-white/75 text-[14px] md:text-[15px] leading-relaxed">{b.walkedIn}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-1.5">Shipped</p>
                    <p className="text-white text-[14px] md:text-[15px] leading-relaxed">{b.shipped}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default BuilderCaseStudies;
