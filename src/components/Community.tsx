import SectionWrapper from "./SectionWrapper";

import imgCollab from "@/assets/community-collab.jpg";
import imgMeetup from "@/assets/community-meetup.jpg";
import imgNetwork from "@/assets/community-network.jpg";
import imgDemoday from "@/assets/community-demoday.jpg";
import imgDinner from "@/assets/community-dinner.jpg";
import imgTravel from "@/assets/community-travel.jpg";

const cards = [
  { image: imgCollab, label: "Build\nWorkshops" },
  { image: imgMeetup, label: "Offline\nCommunity Meet-ups" },
  { image: imgNetwork, label: "Networking\nEvents" },
  { image: imgDemoday, label: "Demo Day\nPresentations" },
  { image: imgDinner, label: "Batch\nDinners" },
  { image: imgTravel, label: "Group\nAdventures" },
];

const Community = () => {
  return (
    <SectionWrapper label="THE COMMUNITY" variant="dark">
      <h2 className="font-bold md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-4 text-3xl">
        Come for the learning. <br />
        <span className="relative inline-block">
          Stay for the community.
          <span className="absolute bottom-0 left-0 w-full h-[6px] bg-primary/40 rounded-full -z-10 translate-y-[-4px]" />
        </span>
      </h2>

      <div className="max-w-[560px] mx-auto mb-12">
        <p className="text-[16px] leading-[1.8] text-muted-foreground mt-4 text-center">
          Your network is your net worth. The people in this room will go on to build companies, launch products, and do interesting things. You will want to know them.
        </p>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative overflow-hidden w-screen -ml-[50vw] left-[50%]">
        <div className="flex community-marquee-track">
          {/* Duplicate cards 3x for seamless loop */}
          {[...cards, ...cards, ...cards].map((card, i) => (
            <div
              key={i}
              className="shrink-0 w-[220px] md:w-[280px] aspect-[3/4] rounded-2xl overflow-hidden relative group mx-2"
            >
              <img
                src={card.image}
                alt={card.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={280}
                height={373}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-[15px] md:text-[17px] leading-tight whitespace-pre-line">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Community;
