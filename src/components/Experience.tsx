import { Home, Users, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useParallax } from "@/hooks/use-parallax";

const features = [
  { icon: Home, title: "Fully Residential", desc: "Stay, meals, and internet included for the entire program." },
  { icon: Users, title: "Curated Cohort", desc: "Handpicked founders, creators, and builders. Lifetime community access." },
  { icon: Wifi, title: "Zero Distractions", desc: "No Zoom calls. No commute. Just building, every single day." },
];

const Experience = () => {
  const scrollY = useParallax();

  return (
    <SectionWrapper id="experience" label="THE RESIDENCY">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        9 days away from everything.<br />Nothing but building.
      </h2>

      <div className="grid md:grid-cols-[55%_45%] gap-10 items-start">
        <div>
          <p className="text-[17px] leading-[1.75] text-muted-foreground">
            You pack a bag. You leave the city behind.<br />
            For 9 days, you have one job: build with AI.
          </p>
          <p className="text-[17px] leading-[1.75] text-muted-foreground mt-4">
            No Zoom calls. No commute. No distractions.<br />
            Just you, a room full of serious builders,<br className="hidden md:block" />
            expert mentors, and complete focus.
          </p>
          <p className="text-[17px] leading-[1.75] text-muted-foreground mt-4">
            This is what learning feels like when<br className="hidden md:block" />
            you actually commit.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <f.icon className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-foreground text-[15px]">{f.title}</p>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image with parallax */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[4/5]">
          <div
            className="absolute inset-[-10%] will-change-transform"
            style={{ transform: `translateY(${scrollY * -0.08}px)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80"
              alt="Mountain retreat for AI residency"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(240,165,0,0.15)]" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
