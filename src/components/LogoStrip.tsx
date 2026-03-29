import { motion } from "framer-motion";

const row1 = [
  { name: "Google", url: "https://logo.clearbit.com/google.com" },
  { name: "McKinsey & Co", url: "https://logo.clearbit.com/mckinsey.com" },
  { name: "Amazon", url: "https://logo.clearbit.com/amazon.com" },
  { name: "Netflix", url: "https://logo.clearbit.com/netflix.com" },
  { name: "Meta", url: "https://logo.clearbit.com/meta.com" },
  { name: "Microsoft", url: "https://logo.clearbit.com/microsoft.com" },
  { name: "Swiggy", url: "https://logo.clearbit.com/swiggy.com" },
  { name: "CRED", url: "https://logo.clearbit.com/cred.club" },
];

const row2 = [
  { name: "IIM Ahmedabad", url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/IIM_Ahmedabad_Logo.svg/480px-IIM_Ahmedabad_Logo.svg.png" },
  { name: "NIFT", url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/National_Institute_of_Fashion_Technology_logo.png/240px-National_Institute_of_Fashion_Technology_logo.png" },
  { name: "Ashoka University", url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Ashoka_University_logo.svg/480px-Ashoka_University_logo.svg.png" },
  { name: "Christ University", url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Christ_University_Logo.png/240px-Christ_University_Logo.png" },
  { name: "Symbiosis", url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Symbiosis_International_University_logo.png/240px-Symbiosis_International_University_logo.png" },
  { name: "Loyola College", url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Loyola_College_Chennai_logo.png/240px-Loyola_College_Chennai_logo.png" },
  { name: "Govt. of India", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/400px-Emblem_of_India.svg.png" },
  { name: "Deloitte", url: "https://logo.clearbit.com/deloitte.com" },
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
              className="h-5 w-auto object-contain grayscale opacity-50"
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
      <p className="text-center text-[11px] md:text-[12px] uppercase tracking-[0.12em] text-muted-foreground mb-5">
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
