import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

interface TribeMember {
  name: string;
  designation: string;
  photo: string | null;
  link?: string;
}

// Founder/CEO/VC-leaning subset of the Forge community + handpicked applicants.
// Photos served from forge-main-website /images/community/* when available;
// otherwise a styled initials avatar renders until a photo is uploaded.
const tribe: TribeMember[] = [
  { name: "Saket", designation: "CEO - 2care AI", photo: "/images/community/saket-toshniwal.jpg", link: "https://instagram.com/Growwithsaket" },
  { name: "Tuhin", designation: "Ex-Creative Head - Coinbase", photo: "/images/community/tuhin-kalia.jpg", link: "https://instagram.com/tuhinkalyas" },
  { name: "Vishal", designation: "Co-Founder - REConnect Energy", photo: null, link: "https://www.linkedin.com/in/meetvishalpandya/" },
  { name: "Ruhani", designation: "Director - Minar Group", photo: null, link: "https://in.linkedin.com/in/ruhani-duggal-7b6a12146" },
  { name: "Aravind", designation: "Venture Capitalist", photo: "/images/community/aravind-suresh.jpg", link: "https://instagram.com/aravind_suresh" },
  { name: "Rahul", designation: "Founder + TedX Speaker", photo: "/images/community/rahul-narvekar.jpg", link: "https://instagram.com/Rahulnarvekar" },
  { name: "Joginder", designation: "Founder - LeadMagnet", photo: null, link: "https://www.linkedin.com/in/dr-joginder-singh-bedi-91a05259/" },
  { name: "Nischala", designation: "Founder - Nischala Reddy Label", photo: "/images/community/nischala-reddy.jpg", link: "https://instagram.com/nischala_reddyd" },
  { name: "Aarya", designation: "Director - Naprod Life Sciences", photo: null, link: "https://www.linkedin.com/in/aarya-jain/" },
  { name: "Vanmathi", designation: "Founder - Coconut Sugar Co.", photo: "/images/community/vanmathi-velmurugan.jpg", link: "https://www.instagram.com/vanmathi_velmurugan/" },
  { name: "Siddhartha", designation: "Fashion Entrepreneur", photo: "/images/community/siddhartha-bhowmik.jpg", link: "https://www.instagram.com/sid_bhowmik" },
];

const getInitials = (name: string) =>
  name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

const Tribe = () => {
  return (
    <SectionWrapper variant="dark">
      <SectionHeading
        label="THE TRIBE"
        variant="dark"
        description="Founders, CEOs, investors, and operators already part of the Forge community. You're not joining a course — you're joining the room."
      >
        Grow with <Accent>builders like you.</Accent>
      </SectionHeading>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 max-w-[1280px] mx-auto">
        {tribe.map((m) => {
          const Wrapper = m.link ? "a" : "div";
          const wrapperProps = m.link
            ? { href: m.link, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper key={m.name} {...wrapperProps} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.04]">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 via-white/[0.04] to-white/[0.02] transition-transform duration-500 group-hover:scale-[1.04]">
                    <span className="text-white/35 font-bold tracking-tight" style={{ fontSize: "clamp(36px, 7vw, 56px)" }}>
                      {getInitials(m.name)}
                    </span>
                  </div>
                )}
              </div>
              <p className="mt-3 text-white text-[13px] md:text-[14px] leading-snug">
                <span className="font-semibold">{m.name},</span>{" "}
                <span className="text-white/65">{m.designation}</span>
              </p>
            </Wrapper>
          );
        })}
      </div>

      <p className="mt-14 text-center text-[13px] md:text-sm text-white/45 max-w-[640px] mx-auto leading-relaxed">
        These are the people you'll meet, build with, and stay in touch with — long after the residency ends.
        The room compounds. The relationships outlast the program.
      </p>
    </SectionWrapper>
  );
};

export default Tribe;
