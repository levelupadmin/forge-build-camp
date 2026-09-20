import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";
import tile1 from "@/assets/venue-tile-1.jpg";
import tile2 from "@/assets/venue-tile-2.jpg";
import tile3 from "@/assets/venue-tile-3.jpg";
import tile4 from "@/assets/venue-tile-4.jpg";
import tile5 from "@/assets/venue-tile-5.jpg";
import tile6 from "@/assets/venue-tile-6.jpg";

const tiles = [tile1, tile2, tile3, tile4, tile5, tile6];

// Uniform 3x2 grid (2 across on phones). Every cell has a photo, so the grid never leaves gaps.
const Venue = () => (
  <SectionWrapper id="venue">
    <SectionHeading
      label="The venue"
      description="A beautiful property nestled in the hills above McLeod Ganj, with misty mornings and snow-capped peaks for company. For seven days you do not need to worry about your work back home. Your only job here is to focus completely on building for the future and learning something new."
    >
      Asia Spa Resort, <Accent>McLeod Ganj.</Accent>
    </SectionHeading>
    <div className="fv-grid max-w-[1100px] mx-auto">
      {tiles.map((src, i) => (
        <div key={i} className="fv-tile">
          <img src={src} alt="Asia Spa Resort, McLeod Ganj" loading="lazy" />
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Venue;
