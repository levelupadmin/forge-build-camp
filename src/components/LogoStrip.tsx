import { motion } from "framer-motion";

const logos = [
  { name: "CRED", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/CRED_%28fintech_company%29_logo.png/480px-CRED_%28fintech_company%29_logo.png" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png" },
  { name: "McKinsey & Co", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/McKinsey_and_Company_Logo_1.svg/480px-McKinsey_and_Company_Logo_1.svg.png" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/480px-Amazon_logo.svg.png" },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/480px-Netflix_2015_N_logo.svg.png" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/480px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png" },
  { name: "Swiggy", url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/480px-Swiggy_logo.svg.png" },
  { name: "IIM", url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/IIM_Ahmedabad_Logo.svg/480px-IIM_Ahmedabad_Logo.svg.png" },
  { name: "NIFT", url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/National_Institute_of_Fashion_Technology_logo.png/240px-National_Institute_of_Fashion_Technology_logo.png" },
];

// Double the logos for seamless infinite scroll
const marqueeLogos = [...logos, ...logos];

const LogoStrip = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full py-5 bg-background border-b border-border overflow-hidden"
    >
      <p className="text-center font-mono text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-4">
        Join 600+ dreamers from
      </p>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee w-max">
          {marqueeLogos.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex items-center gap-2 mx-6 flex-shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-5 w-auto object-contain grayscale opacity-60"
              />
              <span className="text-[12px] font-medium text-foreground/60 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LogoStrip;
