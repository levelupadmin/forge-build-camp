import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Plus, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Plus, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

import mentorVaibhav from "@/assets/mentor-vaibhav.jpg";
import mentorKevin from "@/assets/mentor-kevin.jpg";
import mentorSabilashan from "@/assets/mentor-sabilashan.jpg";
import mentorRahul from "@/assets/mentor-rahul.jpg";
import mentorAnkur from "@/assets/mentor-ankur.jpeg";
import mentorParth from "@/assets/mentor-parth-opt.jpg";
import mentorAkhil from "@/assets/mentor-akhil.jpg";
import mentorAshwin from "@/assets/mentor-ashwin.jpg";


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
    name: "Ankur Upadhyay",
    photo: mentorAnkur,
    role: "Senior Product Manager",
    sub: "AB InBev · o9 Solutions",
    bullets: [
      "Platform & AI Product Leader, building AI before GenAI",
      "ML systems for 3M+ merchants at AB InBev",
      "Agentic AI for 15,000+ enterprise users at o9 Solutions",
      "Leads the Product pillar of Forge AI Edition 1",
    ],
    linkedin: "https://www.linkedin.com/in/ankurupadhyay",
  },
  {
    name: "Parth Bansal",
    photo: mentorParth,
    role: "AI Product Manager",
    sub: "AI Staff PM · Healthcare AI",
    bullets: [
      "AI Staff Product Manager at the AI healthcare frontier",
      "Builds operational AI for multi-billion-dollar hospital systems",
      "Has mentored 500+ professionals across tech, law, CA, IAS",
      "Leads the Operations pillar of Forge AI Edition 1",
    ],
    linkedin: "https://www.linkedin.com/in/parthbansal",
  },
  {
    name: "Akhil Kumar Alampally",
    photo: mentorAkhil,
    role: "AI Instructor + Builder",
    sub: "10,000+ builders taught",
    bullets: [
      "AI Instructor + Mentor at the intersection of AI, product, and execution",
      "Previously at Outskill, Credera, BuildSchool, ADP, BYJUS",
      "Built one of India's largest AI learning communities (10K+ builders)",
      "Specializes in turning AI fluency into shipped product outcomes",
    ],
    linkedin: "https://www.linkedin.com/in/akhil-kumar-alampally/",
  },
  {
    name: "Ashwin Goyal",
    photo: mentorAshwin,
    role: "AI Product Manager",
    sub: "IIT Ropar",
    bullets: [
      "AI Product Manager building agentic AI systems",
      "IIT Ropar alumnus, deep technical product background",
      "Works at the frontier of agentic + generative AI in production",
      "Mentors operators on shipping AI features end-to-end",
    ],
    linkedin: "https://www.linkedin.com/in/ashwin-goyal1/",
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

interface MentorsProps {
  onOpenModal: () => void;
}

const Mentors = ({ onOpenModal }: MentorsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="mentors" variant="dark">
      <SectionHeading
        variant="dark"
        description="Every mentor at the Forge is a practitioner of their craft. A working builder, a published creator, a full-time operator. Not a professor."
      >
        Learn from builders who use AI for a <Accent>living.</Accent>
      </SectionHeading>

      {/* Editorial 2-col mobile, 4-col desktop. Tap reveals inline bio below the card. */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-[1200px] mx-auto">
        {mentors.map((m, i) => (
          <div key={m.name} className="flex flex-col">
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="group relative text-left aspect-[4/5] overflow-hidden bg-white/[0.04] border border-white/[0.08] hover:border-primary/40 transition-colors"
            >
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 via-white/[0.04] to-white/[0.02]">
                  <span className="text-white/35 font-bold tracking-tight" style={{ fontSize: "clamp(36px, 7vw, 56px)" }}>
                    {m.name.replace(/^(Dr\.|Mr\.|Ms\.)\s+/i, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase()}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute top-2.5 right-2.5 w-7 h-7 flex items-center justify-center bg-black/45 backdrop-blur-sm border border-white/20 text-white">
                {openIndex === i ? <X size={12} strokeWidth={2} /> : <Plus size={12} strokeWidth={2} />}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                <p className="text-[8.5px] md:text-[9.5px] tracking-[0.22em] uppercase text-white/65 mb-1">
                  {m.sub}
                </p>
                <p className="font-bold text-[14px] md:text-[16px] leading-tight">
                  {m.name}
                </p>
                <p className="text-white/72 text-[10.5px] md:text-[11.5px] mt-0.5 leading-snug">
                  {m.role}
                </p>
              </div>
            </motion.button>

            {/* Inline expanded bio (sits below the card it belongs to in the same flex column) */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 md:mt-3 bg-white/[0.05] border border-white/[0.1] p-4 md:p-5">
                    <ul className="space-y-2">
                      {m.bullets.map((b, j) => (
                        <li key={j} className="text-white text-[12px] md:text-[13px] leading-[1.55] flex gap-2">
                          <span className="text-primary mt-0.5 shrink-0">·</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-primary text-[11px] md:text-[12px] font-mono tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"
                    >
                      <Linkedin size={11} strokeWidth={2} /> View Profile
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Mentors;
