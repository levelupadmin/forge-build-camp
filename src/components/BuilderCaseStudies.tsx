import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";
import { motion } from "framer-motion";

interface Builder {
  name: string;
  initials: string;
  role: string;
  company: string;
  walkedIn: string;
  building: string;
  dashboard: React.ReactNode;
}

/* ─── Dashboard mockups (custom, on-brand, no images) ────────────────────────── */

const PharmaDash = () => (
  <div className="bg-card border border-border p-5 md:p-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold">Compliance Assist</span>
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
    <div className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold mb-2">RFQ queue · 4 pending</div>
    {[
      { co: "MNC pharma client", p: "high", c: "text-red-500" },
      { co: "Mid-East distributor", p: "med", c: "text-orange-500" },
      { co: "Generic API enquiry", p: "low", c: "text-foreground/40" },
    ].map((r, i) => (
      <div key={i} className="flex items-center justify-between border-b border-border last:border-0 py-2">
        <span className="text-[11px] text-foreground">{r.co}</span>
        <span className={`text-[9px] uppercase font-semibold ${r.c}`}>{r.p}</span>
      </div>
    ))}
  </div>
);

const MinarDash = () => (
  <div className="bg-card border border-border p-5 md:p-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold">Group Operations Layer</span>
      <span className="text-[10px] text-primary font-semibold">3 systems</span>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-4">
      {[
        { l: "Travel", v: "₹4.2L", d: "+12% wow" },
        { l: "Aviation", v: "284", d: "bookings" },
        { l: "Tourism", v: "92%", d: "occupancy" },
      ].map((t, i) => (
        <div key={i} className="border border-border p-2.5">
          <div className="text-[9px] uppercase tracking-wider text-foreground/55 font-semibold mb-1">{t.l}</div>
          <div className="text-[16px] md:text-[18px] font-bold text-foreground leading-tight">{t.v}</div>
          <div className="text-[9px] text-foreground/55 mt-0.5">{t.d}</div>
        </div>
      ))}
    </div>
    <div className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold mb-2">Cross-vertical agent activity</div>
    {[
      "Routed 3 enquiries from Aviation to Tourism upsell",
      "Flagged margin drop in 2 Travel itineraries",
      "Synced inventory across all 3 verticals",
    ].map((a, i) => (
      <div key={i} className="flex items-start gap-2 py-1.5 border-b border-border last:border-0">
        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
        <span className="text-[11px] text-foreground">{a}</span>
      </div>
    ))}
  </div>
);

const CoachingDash = () => (
  <div className="bg-card border border-border p-5 md:p-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold">Student Pipeline · 28 active</span>
      <span className="text-[10px] text-primary font-semibold">auto-nurturing</span>
    </div>
    <div className="grid grid-cols-4 gap-1.5 mb-4">
      {[
        { l: "New", c: 12, h: 28 },
        { l: "Nurturing", c: 8, h: 22 },
        { l: "Qualified", c: 5, h: 14 },
        { l: "Booked", c: 3, h: 10 },
      ].map((s, i) => (
        <div key={i} className="border border-border p-2">
          <div className="text-[8.5px] uppercase tracking-wider text-foreground/55 font-semibold mb-1">{s.l}</div>
          <div className="text-[16px] font-bold text-foreground">{s.c}</div>
          <div className="h-1 bg-border mt-1.5">
            <div className="h-full bg-primary" style={{ width: `${(s.c / s.h) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
    <div className="bg-background border border-border p-3">
      <div className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold mb-2">Student Knowledge Assistant</div>
      <p className="text-[11px] md:text-[12px] text-foreground leading-relaxed">
        "How do I solve the JEE Main 2024 P&C question 47?" The assistant pulled the solution from your Oct 12 session and explained it back in your style.
      </p>
    </div>
  </div>
);

const HotelDash = () => (
  <div className="bg-card border border-border p-5 md:p-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold">Three Businesses · One Layer</span>
      <span className="text-[10px] text-primary font-semibold">● live</span>
    </div>
    {[
      { biz: "Hotelo", agent: "Hiring agent", action: "Screened 14 chef applications · 3 shortlisted", c: "border-primary/40" },
      { biz: "Mika's Bistro", agent: "Reservation agent", action: "Confirmed 22 covers for tonight · 2 VIPs flagged", c: "border-primary/40" },
      { biz: "Project 3", agent: "Marketing agent", action: "Posted 5 reels · 1 ad set live · ROAS 3.4x", c: "border-primary/40" },
    ].map((lane, i) => (
      <div key={i} className={`border ${lane.c} bg-background p-3 mb-2`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[12px] font-bold text-foreground">{lane.biz}</span>
          <span className="text-[9px] uppercase tracking-wider text-primary font-semibold">{lane.agent}</span>
        </div>
        <p className="text-[11px] text-foreground/70 leading-snug">{lane.action}</p>
      </div>
    ))}
  </div>
);

const AgencyDash = () => (
  <div className="bg-card border border-border p-5 md:p-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold">Agency Operations</span>
      <span className="text-[10px] text-primary font-semibold">7 client accounts</span>
    </div>
    {/* Flow diagram */}
    <div className="bg-background border border-border p-3 mb-4">
      <div className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold mb-2">Lead automation</div>
      <div className="flex items-center gap-1.5 text-[10px]">
        {["Webhook", "Classify", "Score", "Reply"].map((s, i, arr) => (
          <div key={i} className="flex items-center gap-1.5 flex-1">
            <div className="bg-primary/10 border border-primary/30 px-2 py-1 text-foreground flex-1 text-center">{s}</div>
            {i < arr.length - 1 && <span className="text-primary">→</span>}
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { l: "Leads scored", v: "47" },
        { l: "Posts shipped", v: "23" },
        { l: "Reports sent", v: "7/7" },
      ].map((m, i) => (
        <div key={i} className="border border-border p-2.5">
          <div className="text-[9px] uppercase tracking-wider text-foreground/55 font-semibold mb-1">{m.l}</div>
          <div className="text-[18px] font-bold text-foreground leading-tight">{m.v}</div>
          <div className="text-[9px] text-foreground/55 mt-0.5">today</div>
        </div>
      ))}
    </div>
  </div>
);

const builders: Builder[] = [
  {
    name: "Aarya Jain",
    initials: "AJ",
    role: "Director",
    company: "Naprod Life Sciences",
    walkedIn: "AI-assisted workflow design across pharma operations, but unable to deploy without breaking under regulatory pressure.",
    building: "The foundation of an AI-native operating system for the company. A compliance assistant grounded in SOPs, RFQ triage against the product catalog, and regulatory submission drafts traceable to source documents.",
    dashboard: <PharmaDash />,
  },
  {
    name: "Ruhani Duggal",
    initials: "RD",
    role: "Director",
    company: "Minar Group (Travel, Aviation, Tourism)",
    walkedIn: "An early AI-powered ops backend with individual wins that did not add up to anything organization-wide.",
    building: "Three interconnected AI-powered systems across the Group. Moving from individual wins to one operating layer that runs across all three verticals.",
    dashboard: <MinarDash />,
  },
  {
    name: "Sagarikka Sivakumar",
    initials: "SS",
    role: "Founder",
    company: "Trichy Plus (28-year coaching institute)",
    walkedIn: "A Lovable-built CRM and team tool. Unable to integrate the pieces into a single agent or n8n workflow.",
    building: "Agents that run the whole institute. Lead pipeline, student knowledge assistant trained on past sessions, and team ops automated end-to-end.",
    dashboard: <CoachingDash />,
  },
  {
    name: "Riyas Hasan",
    initials: "RH",
    role: "Founder",
    company: "Hotelo + Mika's Bistro + a third venture",
    walkedIn: "Basic GPT and Claude for marketing copy. No time to learn deeper, and three businesses pulling in three directions.",
    building: "AI systems across all three ventures. A hospitality hiring agent for Hotelo, a reservations and ops agent for Mika's, and a marketing engine for the third.",
    dashboard: <HotelDash />,
  },
  {
    name: "Naveen Mitikiri",
    initials: "NM",
    role: "Head of Operations",
    company: "B2B Marketing Agency",
    walkedIn: "Years of marketing automation experience but no real AI ownership. Team buried under client deliverables.",
    building: "A content engine that turns one client brief into a week of creatives, a lead-qualification agent that scores and replies, and Monday reporting that runs itself.",
    dashboard: <AgencyDash />,
  },
];

const BuilderCaseStudies = () => {
  return (
    <SectionWrapper id="builds" variant="light">
      <SectionHeading
        align="center"
        description="Five operators. Five real businesses. Live builds shipping at the residency."
      >
        Builds in flight at <Accent>Edition 1.</Accent>
      </SectionHeading>

      <div className="space-y-12 md:space-y-16 mt-2">
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
              <div className="min-h-[280px] md:min-h-[360px]">
                {b.dashboard}
              </div>

              {/* Builder narrative */}
              <div className="flex flex-col justify-center">
                {/* Identity */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary text-primary-foreground flex items-center justify-center font-bold text-[14px] md:text-[16px] shrink-0">
                    {b.initials}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-[16px] md:text-[18px] leading-tight">{b.name}</p>
                    <p className="text-foreground/55 text-[12px] md:text-[13px] mt-0.5">{b.role} · {b.company}</p>
                  </div>
                </div>

                {/* Walked in / Building blocks */}
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-foreground/45 font-semibold mb-1.5">Walked in with</p>
                    <p className="text-foreground/75 text-[14px] md:text-[15px] leading-relaxed">{b.walkedIn}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-1.5">Building this week</p>
                    <p className="text-foreground text-[14px] md:text-[15px] leading-relaxed">{b.building}</p>
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
