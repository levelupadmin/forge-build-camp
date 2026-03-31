import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handleApi = useCallback((emblaApi: CarouselApi) => {
    setApi(emblaApi);
    if (emblaApi) {
      emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()));
      setCurrent(emblaApi.selectedScrollSnap());
    }
  }, []);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <SectionWrapper id="mentors" label="LEARN FROM">
      <h2 className="font-bold md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-4 text-3xl">
        the{" "}
        <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>
          Best
        </span>
      </h2>

      <p className="text-[16px] text-muted-foreground max-w-[520px] mx-auto text-center mb-12 leading-relaxed">
        Every mentor at the Forge is a practitioner of their craft. A working builder, a published creator, a full-time operator. Not a professor.
      </p>

      <div className="max-w-[900px] mx-auto">
        <Carousel
          opts={{ align: "center", loop: true, skipSnaps: false }}
          setApi={handleApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {mentors.map((m, i) => {
              const isActive = i === current;
              return (
                <CarouselItem
                  key={m.name}
                  className="pl-2 md:pl-4 basis-[85%] md:basis-[35%] lg:basis-[30%]"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col cursor-pointer"
                    onClick={() => api?.scrollTo(i)}
                  >
                    <div
                      className={`w-full aspect-[3/4] bg-gradient-to-br ${m.gradient} flex items-center justify-center`}
                    >
                      <span className="text-white text-5xl font-bold tracking-wide opacity-90">
                        {m.initials}
                      </span>
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-5 flex flex-col"
                      >
                        <p className="font-bold text-[17px] text-foreground leading-tight text-center">
                          {m.name}
                        </p>
                        <p className="text-[11px] text-primary font-semibold uppercase tracking-wider mt-1 text-center">
                          {m.role}
                        </p>

                        <ul className="mt-4 space-y-2">
                          {m.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-[13px] text-muted-foreground leading-snug"
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>

                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-primary hover:underline font-medium justify-center"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          LinkedIn
                        </a>
                      </motion.div>
                    )}
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-10" />
          <CarouselNext className="-right-4 md:-right-10" />
        </Carousel>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {mentors.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to mentor ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Mentors;
