import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";
import { motion } from "framer-motion";

/**
 * Gallery of images from the residency.
 * Photos live under src/assets/gallery/ and are auto-imported via Vite's glob import.
 * Drop new images into src/assets/gallery/ (any format) and they will appear here.
 */
const modules = import.meta.glob("@/assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, alt: path.split("/").pop()?.replace(/\.[^.]+$/, "") || "" }));

const Gallery = () => {
  if (photos.length === 0) return null;

  return (
    <SectionWrapper>
      <SectionHeading
        align="center"
        description="A few real moments from the last residency. The room, the work, the after-hours."
      >
        Inside <Accent>the room.</Accent>
      </SectionHeading>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mt-2">
        {photos.map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.03 }}
            className="overflow-hidden bg-card"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
