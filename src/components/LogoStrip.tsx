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

const LogoStrip = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full py-12 md:py-16 bg-background border-b border-border"
    >
      <p className="text-center font-mono text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-muted-foreground mb-8">
        Join 600+ dreamers from
      </p>

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 md:gap-y-8">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2.5">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-6 md:h-7 w-auto object-contain grayscale opacity-70"
              />
              <span className="text-[13px] md:text-[14px] font-medium text-foreground/70">
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
