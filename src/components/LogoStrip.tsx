import { motion } from "framer-motion";

const row1 = [
  { name: "Google", url: "/images/learners/google.png" },
  { name: "McKinsey & Co", url: "/images/learners/mckinsey.png" },
  { name: "Amazon", url: "/images/learners/amazon.png" },
  { name: "Netflix", url: "/images/learners/netflix.png" },
  { name: "Meta", url: "/images/learners/meta.png" },
  { name: "Microsoft", url: "/images/learners/microsoft.png" },
  { name: "Swiggy", url: "/images/learners/swiggy.png" },
  { name: "Zomato", url: "/images/learners/zomato.png" },
  { name: "CRED", url: "/images/learners/cred.png" },
];

const row2 = [
  { name: "IIM Ahmedabad", url: "/images/learners/iim.png" },
  { name: "NIFT", url: "/images/learners/nift.png" },
  { name: "Ashoka University", url: "/images/learners/ashoka.png" },
  { name: "Christ University", url: "/images/learners/christ.png" },
  { name: "Symbiosis", url: "/images/learners/symbiosis.png" },
  { name: "Loyola College", url: "/images/learners/loyola.png" },
  { name: "Govt. of India", url: "/images/learners/govt-india.png" },
  { name: "American Express", url: "/images/learners/amex.png" },
];

const MarqueeRow = ({ logos, reverse = false }: { logos: typeof row1; reverse?: boolean }) => {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
      <div
        className="flex w-max"
        style={{
          animation: `marquee${reverse ? "-reverse" : ""} 35s linear infinite`,
        }}
      >
        {doubled.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex items-center gap-2 mx-5 flex-shrink-0">
            <img
              src={logo.url}
              alt={logo.name}
              className="h-5 w-auto object-contain opacity-80"
            />
            <span className="text-[12px] font-medium text-foreground/50 whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const LogoStrip = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 bg-background overflow-hidden"
    >
      <p className="text-center text-[11px] md:text-[12px] uppercase tracking-[0.12em] mb-5 text-secondary-foreground font-extrabold">
        Join 600+ dreamers from
      </p>

      <div className="flex flex-col gap-3">
        <MarqueeRow logos={row1} />
        <MarqueeRow logos={row2} reverse />
      </div>
    </motion.section>
  );
};

export default LogoStrip;
