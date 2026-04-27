import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

import imgMentors from "@/assets/community-mentors.jpg";
import imgLectures from "@/assets/community-lectures.jpg";
import imgExperiences from "@/assets/community-experiences.jpg";
import imgCelebrates from "@/assets/community-celebrates.jpg";
import imgMeetups from "@/assets/community-meetups.jpg";

const cards = [
  { image: imgMentors, label: "Work with\nour Mentors" },
  { image: imgLectures, label: "Online\nGuest Lectures" },
  { image: imgExperiences, label: "Offline Learning\nExperiences" },
  { image: imgCelebrates, label: "A Community that\nCelebrates You" },
  { image: imgMeetups, label: "Offline Community\nMeet-ups" },
];

interface CommunityProps {
  onOpenModal: () => void;
}

const Community = ({ onOpenModal }: CommunityProps) => {
  return (
    <SectionWrapper variant="dark">
      <SectionHeading
        label="THE COMMUNITY"
        variant="dark"
        description="The people in this room will go on to build companies, launch products, and do interesting things."
      >
        Come for the learning. <br />
        Stay for the <Accent>community.</Accent>
      </SectionHeading>

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

      <div className="text-center mt-12">
        <button
          onClick={onOpenModal}
          className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-sm uppercase tracking-wider btn-glow"
        >
          REQUEST AN INVITE
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Community;
