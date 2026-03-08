import { MapPin, Home, Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const features = [
  { icon: MapPin, title: "Dharamshala, Himachal Pradesh", desc: "Himalayan hill station. Away from city noise. Fully focused." },
  { icon: Home, title: "Fully Residential", desc: "Stay, meals, and internet included for all 9 days." },
  { icon: Users, title: "20-Person Cohort", desc: "Handpicked founders, creators, and builders. Lifetime community access." },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" label="THE RESIDENCY">
      <h2 className="font-syne font-[800] text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        9 days in the mountains.<br />Nothing but building.
      </h2>

      <div className="grid md:grid-cols-[55%_45%] gap-10 items-start">
        <div>
          <p className="text-[17px] leading-[1.75] text-forge-muted">
            You pack a bag. You head to Dharamshala.<br />
            For 9 days, you have one job: build with AI.
          </p>
          <p className="text-[17px] leading-[1.75] text-forge-muted mt-4">
            No Zoom calls. No commute. No distractions.<br />
            Just you, 20 other serious builders, expert mentors,<br className="hidden md:block" />
            and a view of the mountains.
          </p>
          <p className="text-[17px] leading-[1.75] text-forge-muted mt-4">
            This is what learning feels like when<br className="hidden md:block" />
            you actually commit.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <f.icon className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-foreground text-[15px]">{f.title}</p>
                  <p className="text-sm text-forge-muted">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[4/5]">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80"
            alt="Dharamshala mountains"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(240,165,0,0.15)]" />
        </div>
      </div>

      {/* Pull quote */}
      <div className="mt-16 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="hidden md:block h-px w-16 bg-primary/30" />
          <p className="font-syne font-[800] text-[28px] md:text-[38px] text-primary leading-tight">
            "Not a course. Not a bootcamp.<br />A 9-day AI build sprint."
          </p>
          <div className="hidden md:block h-px w-16 bg-primary/30" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
