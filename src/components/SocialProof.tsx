import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import rahulImg from "@/assets/testimonial-rahul.jpg";
import priyaImg from "@/assets/testimonial-priya.jpg";
import adityaImg from "@/assets/testimonial-aditya.jpg";

const testimonials = [
  {
    quote: "I came expecting to watch and take notes. By Day 3 I had already built something I was proud of. The environment just pushes you into motion whether you are ready or not.",
    name: "Rahul M.",
    role: "Founder, Bangalore",
    program: "Past Forge Filmmaking Residency",
    image: rahulImg,
  },
  {
    quote: "Being in the same room as people who are as serious as you completely changes your energy. You do not want to fall behind. You want to build more. It is addictive in the best way.",
    name: "Priya S.",
    role: "Marketer, Mumbai",
    program: "Past Forge Creator Residency",
    image: priyaImg,
  },
  {
    quote: "The mentors do not lecture. They sit next to you, look at your actual work, and help you fix it in real time. That alone was worth the entire experience for me.",
    name: "Aditya K.",
    role: "Agency Owner, Delhi",
    program: "Past Forge Filmmaking Residency",
    image: adityaImg,
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
    <SectionWrapper label="FROM PAST FORGE PARTICIPANTS">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-4">
        What happens when you build with the{" "}
        <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>right people.</span>
      </h2>

      <p className="text-sm text-muted-foreground/50 text-center mb-12">
        Dreamers became builders not just because of the right guidance but the people they surrounded themselves with.
      </p>

      {/* Carousel */}
      <div className="max-w-[600px] mx-auto overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm cursor-grab active:cursor-grabbing"
          >
            <span className="font-serif text-[72px] text-primary/10 leading-none select-none block -mb-8">"</span>
            <p className="text-[17px] md:text-[19px] text-foreground italic leading-[1.8] mb-8">
              {t.quote}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-border"
                loading="lazy"
                width={56}
                height={56}
              />
              <div>
                <p className="font-semibold text-foreground text-[15px]">{t.name}</p>
                <p className="text-[13px] text-muted-foreground">{t.role}</p>
                <p className="text-[13px] text-muted-foreground/60">{t.program}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary w-6"
                  : "bg-border hover:bg-muted-foreground/40"
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
