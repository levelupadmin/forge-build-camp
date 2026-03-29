import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const mentors = [
  {
    name: "Vaibhav Kejriwal",
    initials: "VK",
    role: "n8n Bangalore Ambassador | IIM A | IIT D",
    gradient: "from-blue-400 to-indigo-600",
    bullets: [
      "Official n8n Ambassador — builds AI-powered automation workflows",
      "IIM Ahmedabad & IIT Delhi alumnus",
      "Runs YouTube channel (AI with VK) teaching AI agents & automation",
      "Leads \"Human AI Collab\" community of 280+ AI practitioners",
    ],
    linkedin: "https://www.linkedin.com/in/vaibhav-kejriwal",
  },
  {
    name: "Kevin Adams",
    initials: "KA",
    role: "Artist | Founder | Creator",
    gradient: "from-orange-400 to-rose-500",
    bullets: [
      "Founder of creative agency Millennial Labs (500+ brands served)",
      "LinkedIn Design Top Voice — AI-powered creative workflows",
      "Uses Midjourney, AI + Photoshop for commercial visual campaigns",
      "Redefining brand storytelling through AI-augmented design",
    ],
    linkedin: "https://www.linkedin.com/in/ikevinadams",
  },
  {
    name: "Sabilashan Ganeshan",
    initials: "SG",
    role: "Ambassador @ Lovable | Country Lead @ Perplexity",
    gradient: "from-emerald-400 to-teal-500",
    bullets: [
      "Country Lead at Perplexity AI — frontier of AI search products",
      "Ambassador at Lovable — ships AI-built products rapidly",
      "Head of Product at STEM Link; AI strategy at Amor",
      "BASIS AI Fellow & Harvard-nominated innovator in AI education",
    ],
    linkedin: "https://www.linkedin.com/in/sabilashanganeshan",
  },
  {
    name: "Rahul Reddy",
    initials: "RR",
    role: "Founder | Storyteller",
    gradient: "from-purple-400 to-pink-500",
    bullets: [
      "Founder of LevelUp Learning — India's largest creative education ecosystem",
      "Built & scaled residential programs across filmmaking, AI & creative tech",
      "Runs India's largest filmmaking community with 300,000+ members",
      "Producer of India's biggest short film Chapter Zero LCU",
    ],
    linkedin: "https://www.linkedin.com/in/rahulreddy97",
  },
];

const Mentors = () => {
  return (
    <SectionWrapper id="mentors" label="YOUR MENTORS">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-4">
        Learn from people who
        <br />
        <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>
          use AI for a living.
        </span>
      </h2>

      <p className="text-[16px] text-muted-foreground max-w-[520px] mx-auto text-center mb-12 leading-relaxed">
        Your mentors are not professors. They are builders, creators, and operators who use AI every single day in their work.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-[1080px] mx-auto">
        {mentors.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col"
          >
            {/* Avatar */}
            <div className={`w-full aspect-[4/3] bg-gradient-to-br ${m.gradient} flex items-center justify-center`}>
              <span className="text-white text-4xl font-bold tracking-wide opacity-90">
                {m.initials}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              {/* Name & Role */}
              <p className="font-bold text-[17px] text-foreground leading-tight">{m.name}</p>
              <p className="text-[12px] text-muted-foreground mt-1 leading-snug">{m.role}</p>

              {/* Bullets */}
              <ul className="mt-4 space-y-2 flex-1">
                {m.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-[13px] text-muted-foreground leading-snug">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* LinkedIn */}
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-primary hover:underline font-medium"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Mentors;
