import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";
import { motion } from "framer-motion";

/**
 * Mixed-size gallery — each photo is tagged with a span type that maps to
 * CSS grid col/row spans. Layout uses grid-flow-dense so items fill gaps.
 *
 * Span types:
 *   hero → 2 cols × 2 rows (main feature)
 *   wide → 2 cols × 1 row  (landscape shots)
 *   tall → 1 col  × 2 rows (portrait shots)
 */
const modules = import.meta.glob("@/assets/gallery/gallery-*.jpg", {
  eager: true,
  as: "url",
}) as Record<string, string>;

type Span = "hero" | "wide" | "tall";

const spanClass = (s: Span) => {
  if (s === "hero") return "col-span-2 row-span-2";
  if (s === "wide") return "col-span-2 row-span-1";
  return "col-span-1 row-span-2"; // tall
};

const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const filename = path.split("/").pop() || "";
    // filename like "gallery-01-hero.jpg" → derive span from suffix
    const m = filename.match(/gallery-\d+-(hero|wide|tall)\.jpg/);
    const span = (m?.[1] ?? "wide") as Span;
    return { src, span, alt: filename };
  });

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

      <div
        className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-2 md:gap-3 mt-2"
        style={{ gridAutoFlow: "dense" }}
      >
        {photos.map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.03 }}
            className={`${spanClass(p.span)} overflow-hidden bg-card`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
