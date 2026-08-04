import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";
import { MapPin } from "lucide-react";

const testimonials = [
  {
    quote: "The Forge has been a transformative experience for me. It didn't just teach me how to use AI, it changed how I think about solving problems, learning faster, and creating value. What I loved most was the community of builders who openly shared ideas, challenged each other, and celebrated every small win. It gave me the confidence to experiment, build, and share my journey.",
    name: "Smitesh Panchal",
    role: "Director of Global Implementation",
    location: "Vadodara",
  },
  {
    quote: "One of the best learning experiences of my life. I got to spend time with incredible individuals from diverse backgrounds, functions, and regions. I learned a great deal, not only about AI and how it can become an effective teammate, but also many valuable leadership, collaboration, and life lessons. It has broadened my perspective and strengthened my problem-solving approach.",
    name: "Alpesh Rohit",
    role: "Process Excellence & Data Governance, Office Beacon",
    location: "Vadodara",
  },
  {
    quote: "You can learn through any platform, be it YouTube, Udemy, or even your doomscrolling Instagram reels. What you really need to comprehend the content is structure and focus. I was able to disconnect from my daily routine, people, and most importantly, my mindset. I learned so many things so fast that a lot of people do not recognize me anymore. I talk and visualize problems differently. Much recommended.",
    name: "Harshita Sevaldasani",
    role: "Partner Marketing Manager, Sarder Inc",
    location: "Ahmedabad",
  },
  {
    quote: "It is a life changing experience. It made me so much more self sufficient and productive in my work.",
    name: "Vinita Tanwani",
    role: "Entrepreneur, Coach & Author",
    location: "Bangalore",
  },
  {
    quote: "A great, immersive experience focused on practical learning, led by action-oriented individuals who are passionate, knowledgeable, and easy to approach.",
    name: "Pranav Swaroop Achar",
    role: "Student Founder, Foundrs",
    location: "Bangalore",
  },
];

const SocialProof = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    } else if (info.offset.x > 50) {
      setDirection(-1);
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -60 }),
  };

  return (
    <SectionWrapper>
      <SectionHeading
        description="Dreamers became builders not just because of the right guidance but the people they surrounded themselves with."
      >
        What happens when you build with the <Accent>right people.</Accent>
      </SectionHeading>

      <div className="max-w-[820px] mx-auto overflow-hidden relative">
        {/* Giant editorial quote mark */}
        <span
          aria-hidden
          className="font-editorial italic text-primary/15 leading-none block select-none pointer-events-none text-center"
          style={{ fontSize: "clamp(120px, 22vw, 260px)", fontWeight: 600 }}
        >
          &ldquo;
        </span>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="-mt-16 md:-mt-24 relative px-2 md:px-10 cursor-grab active:cursor-grabbing"
          >
            {/* Pure pullout, no card */}
            <p
              className="text-center text-foreground font-medium tracking-[-0.01em] leading-[1.45]"
              style={{ fontSize: "clamp(20px, 2.6vw, 30px)" }}
            >
              {t.quote}
            </p>

            {/* Attribution */}
            <div className="mt-10 md:mt-12 flex flex-col items-center gap-1">
              <span className="h-px w-10 bg-primary/50 mb-3" />
              <p className="font-semibold text-foreground text-[16px] md:text-[17px]">{t.name}</p>
              <p className="text-[13px] md:text-[14px] text-muted-foreground">{t.role}</p>
              <p className="text-[12px] text-muted-foreground/70 mt-0.5 flex items-center gap-1 font-mono uppercase tracking-[0.14em]">
                <MapPin className="w-3 h-3" />
                {t.location}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-10 md:mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-8" : "bg-foreground/15 hover:bg-foreground/30 w-1.5"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SocialProof;
