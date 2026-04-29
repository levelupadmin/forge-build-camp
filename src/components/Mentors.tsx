import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Plus, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

import mentorVaibhav from "@/assets/mentor-vaibhav.png";
import mentorKevin from "@/assets/mentor-kevin.jpg";
import mentorSabilashan from "@/assets/mentor-sabilashan.png";
import mentorRahul from "@/assets/mentor-rahul.jpg";

const mentors = [
  {
    name: "Vaibhav Kejriwal",
    photo: mentorVaibhav,
    role: "n8n Bangalore Ambassador",
    sub: "IIM A · IIT D",
    bullets: [
      "Official n8n Ambassador, builds AI-powered automation workflows",
      "IIM Ahmedabad & IIT Delhi alumnus",
      "Runs YouTube channel (AI with VK) teaching AI agents & automation",
      "Leads \"Human AI Collab\" community of 280+ AI practitioners",
    ],
    linkedin: "https://www.linkedin.com/in/vaibhav-kejriwal",
  },
  {
    name: "Kevin Adams",
    photo: mentorKevin,
    role: "Artist · Founder · Creator",
    sub: "LinkedIn Design Top Voice",
    bullets: [
      "Founder of creative agency Millennial Labs (500+ brands served)",
      "LinkedIn Design Top Voice, AI-powered creative workflows",
      "Uses Midjourney, AI + Photoshop for commercial visual campaigns",
      "Redefining brand storytelling through AI-augmented design",
    ],
    linkedin: "https://www.linkedin.com/in/ikevinadams",
  },
  {
    name: "Sabilashan Ganeshan",
    photo: mentorSabilashan,
    role: "Country Lead @ Perplexity",
    sub: "Ambassador @ Lovable",
    bullets: [
      "Country Lead at Perplexity AI, frontier of AI search products",
      "Ambassador at Lovable, ships AI-built products rapidly",
      "Head of Product at STEM Link; AI strategy at Amor",
      "BASIS AI Fellow & Harvard-nominated innovator in AI education",
    ],
    linkedin: "https://www.linkedin.com/in/sabilashanganeshan",
  },
  {
    name: "Rahul Reddy",
    photo: mentorRahul,
    role: "Founder · Storyteller",
    sub: "LevelUp Learning",
    bullets: [
      "Founder of LevelUp Learning, India's largest creative education ecosystem",
      "Built & scaled residential programs across filmmaking, AI & creative tech",
      "Runs India's largest filmmaking community with 300,000+ members",
      "Producer of India's biggest short film Chapter Zero LCU",
    ],
    linkedin: "https://www.linkedin.com/in/rahulreddy97",
  },
];

const Mentors = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="mentors">
      <SectionHeading
        label="YOUR MENTORS"
        description="Every mentor at the Forge is a practitioner of their craft. A working builder, a published creator, a full-time operator. Not a professor."
      >
        Learn from builders who use AI for a <Accent>living.</Accent>
      </SectionHeading>

      {/* Editorial grid — 2 cols mobile, 4 cols desktop. Hover on desktop reveals bio inline; tap opens modal on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-[1100px] mx-auto">
        {mentors.map((m, i) => {
          return (
            <motion.button
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setOpenIndex(i)}
              className="group relative text-left rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-foreground/5 border border-foreground/[0.06] hover:border-primary/30 transition-colors"
            >
              <img
                src={m.photo}
                alt={m.name}
                loading="lazy"
                width={512}
                height={640}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Default gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 md:group-hover:opacity-0" />

              {/* Default: name + role */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-5 md:group-hover:opacity-0 transition-opacity duration-300">
                <p className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-primary-foreground/70 mb-1.5">
                  {m.sub}
                </p>
                <p className="font-bold text-white text-[15px] md:text-[20px] leading-tight">
                  {m.name}
                </p>
                <p className="text-white/75 text-[11px] md:text-[13px] leading-snug mt-1">
                  {m.role}
                </p>
              </div>

              {/* Hover (desktop): primary-blue curtain with bullet summary */}
              <div className="hidden md:flex absolute inset-0 flex-col justify-between p-5 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/75 mb-1.5">
                    {m.sub}
                  </p>
                  <p className="font-bold text-white text-[20px] leading-tight">{m.name}</p>
                  <p className="text-white/85 text-[12px] mt-1.5 font-semibold">{m.role}</p>
                  <ul className="mt-4 space-y-1.5">
                    {m.bullets.slice(0, 3).map((b, j) => (
                      <li
                        key={j}
                        className="text-white/90 text-[11.5px] leading-[1.45] flex items-start gap-1.5"
                      >
                        <span className="mt-[6px] w-1 h-1 rounded-full bg-white shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="inline-flex items-center gap-1.5 text-white text-[11px] font-semibold uppercase tracking-[0.14em]">
                  View full bio <Plus size={12} />
                </span>
              </div>

              {/* Plus icon — always visible on mobile, fades on desktop hover */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 md:group-hover:opacity-0 transition-opacity">
                <Plus size={16} className="text-white" />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Credentials rail — logo + name */}
      <div className="mt-12 md:mt-16 max-w-[1100px] mx-auto">
        <p className="text-center font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-6 md:mb-8">
          Built at · studied at · teaching at
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-6 items-start">
          {[
            { name: "Perplexity", domain: "perplexity.ai" },
            { name: "Lovable", domain: "lovable.dev" },
            { name: "n8n", domain: "n8n.io" },
            { name: "IIM Ahmedabad", domain: "iima.ac.in" },
            { name: "IIT Delhi", domain: "iitd.ac.in" },
            { name: "Millennial Labs", domain: "millenniallabs.in" },
            { name: "LevelUp Learning", domain: "levelup.in" },
            { name: "STEM Link", domain: "stemlink.app" },
          ].map((org) => (
            <div
              key={org.name}
              className="flex flex-col items-center gap-2.5 text-center"
            >
              <div className="h-9 md:h-10 flex items-center justify-center">
                <img
                  src={`https://logo.clearbit.com/${org.domain}?size=80`}
                  alt={org.name}
                  loading="lazy"
                  className="max-h-9 md:max-h-10 max-w-[88px] object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <span className="font-semibold text-[11px] md:text-[12px] text-foreground/65 tracking-tight leading-tight">
                {org.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal-like expansion */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-3xl w-full max-w-[640px] max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="grid md:grid-cols-[240px_1fr]">
                <div className="aspect-[3/4] md:aspect-auto md:min-h-[360px] relative overflow-hidden md:rounded-l-3xl">
                  <img
                    src={mentors[openIndex].photo}
                    alt={mentors[openIndex].name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary/80 mb-2">
                    {mentors[openIndex].sub}
                  </p>
                  <h3 className="font-bold text-[24px] md:text-[28px] leading-tight text-foreground">
                    {mentors[openIndex].name}
                  </h3>
                  <p className="text-primary text-[13px] md:text-[14px] font-semibold mt-1">
                    {mentors[openIndex].role}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {mentors[openIndex].bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-muted-foreground leading-[1.55]"
                      >
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={mentors[openIndex].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[13px] text-primary hover:underline font-semibold"
                  >
                    <Linkedin size={15} />
                    View LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Mentors;
