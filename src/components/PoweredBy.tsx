import { motion } from "framer-motion";

const logos = [
  { name: "Claude", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/480px-Claude_AI_logo.svg.png" },
  { name: "ChatGPT", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/480px-ChatGPT_logo.svg.png" },
  { name: "Lovable", src: "https://pbs.twimg.com/profile_images/1881719805498089472/LMn6MMGN_400x400.jpg" },
  { name: "Cursor", src: "https://www.cursor.com/brand/icon.svg" },
  { name: "Midjourney", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/480px-Midjourney_Emblem.png" },
  { name: "Figma", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png" },
];

const LogoItem = ({ name, src }: { name: string; src: string }) => (
  <div className="flex items-center gap-2.5 mx-8 shrink-0">
    <img src={src} alt={name} className="w-6 h-6 object-contain rounded" />
    <span className="text-[14px] text-muted-foreground/50 font-semibold tracking-wide whitespace-nowrap">
      {name}
    </span>
  </div>
);

const PoweredBy = () => {
  return (
    <section className="py-8 border-t border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[11px] text-muted-foreground/40 uppercase tracking-[0.18em] text-center mb-5 font-semibold">
          Tools you'll master
        </p>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-marquee">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} name={logo.name} src={logo.src} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PoweredBy;
