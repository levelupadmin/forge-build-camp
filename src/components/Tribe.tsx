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
  { name: "Saket Toshniwal", designation: "CEO, 2care AI", photo: "/images/community/saket-toshniwal.jpg", link: "https://instagram.com/Growwithsaket" },
  { name: "Tuhin Kalia", designation: "Ex-Creative Head, Coinbase", photo: "/images/community/tuhin-kalia.jpg", link: "https://instagram.com/tuhinkalyas" },
  { name: "Vishal Pandya", designation: "Co-Founder, REConnect Energy", photo: null, link: "https://www.linkedin.com/in/meetvishalpandya/" },
  { name: "Ruhani Duggal", designation: "Director, Minar Group · Founder, Vilasa", photo: null, link: "https://in.linkedin.com/in/ruhani-duggal-7b6a12146" },
  { name: "Aravind Suresh", designation: "Venture Capitalist", photo: "/images/community/aravind-suresh.jpg", link: "https://instagram.com/aravind_suresh" },
  { name: "Rahul Narvekar", designation: "Founder · TedX Speaker", photo: "/images/community/rahul-narvekar.jpg", link: "https://instagram.com/Rahulnarvekar" },
  { name: "Dr. Joginder Singh Bedi", designation: "CEO + Founder, LeadMagnet", photo: null, link: "https://www.linkedin.com/in/dr-joginder-singh-bedi-91a05259/" },
  { name: "Nischala Reddy", designation: "Founder, Nischala Reddy Label", photo: "/images/community/nischala-reddy.jpg", link: "https://instagram.com/nischala_reddyd" },
  { name: "Aarya Jain", designation: "Board Director, NaProd Life Sciences", photo: null, link: "https://www.linkedin.com/in/aarya-jain/" },
  { name: "Vanmathi Velmurugan", designation: "Founder, Coconut Sugar Co.", photo: "/images/community/vanmathi-velmurugan.jpg", link: "https://www.instagram.com/vanmathi_velmurugan/" },
  { name: "Siddhartha Bhowmik", designation: "Fashion Entrepreneur", photo: "/images/community/siddhartha-bhowmik.jpg", link: "https://www.instagram.com/sid_bhowmik" },
];

// Initials avatar fallback when a photo isn't uploaded yet
const getInitials = (name: string) =>
  name
    .replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const Tribe = () => {
  return (
    <SectionWrapper variant="light">
      <SectionHeading
        label="THE TRIBE"
        description="Founders, CEOs, investors, and operators already part of the Forge community. You're not joining a course — you're joining the room."
      >
        Look who's <Accent>in the room.</Accent>
      </SectionHeading>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-[1200px] mx-auto">
        {tribe.map((m) => {
          const Wrapper = m.link ? "a" : "div";
          const wrapperProps = m.link
            ? { href: m.link, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper key={m.name} {...wrapperProps} className="group block">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-sm">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 via-primary/5 to-foreground/5 transition-transform duration-500 group-hover:scale-[1.04]">
                    <span className="text-foreground/40 font-bold tracking-tight" style={{ fontSize: "clamp(40px, 8vw, 64px)" }}>
                      {getInitials(m.name)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-bold text-[14px] md:text-[15px] leading-tight">{m.name}</p>
                  <p className="text-[11px] md:text-[12px] text-white/85 mt-0.5 leading-snug">{m.designation}</p>
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>

      <p className="mt-10 text-center text-[13px] md:text-sm text-foreground/55 max-w-[640px] mx-auto leading-relaxed">
        These are the people you'll meet, build with, and stay in touch with — long after the residency ends.
        The room compounds. The relationships outlast the program.
      </p>
    </SectionWrapper>
  );
};

export default Tribe;
