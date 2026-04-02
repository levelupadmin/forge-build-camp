import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import rishiImg from "@/assets/testimonial-rishi.jpg";
import ananyaImg from "@/assets/testimonial-ananya.jpg";
import kabirImg from "@/assets/testimonial-kabir.jpg";
import meeraImg from "@/assets/testimonial-meera.jpg";
import aryanImg from "@/assets/testimonial-aryan.jpg";
import priyaSImg from "@/assets/testimonial-priya-s.jpg";
import vikramImg from "@/assets/testimonial-vikram.jpg";
import shreyaImg from "@/assets/testimonial-shreya.jpg";

const testimonials = [
  {
    quote: "honestly did not expect to ship something real in 9 days. like actually real. i built an automation that now handles all my lead followups and a landing page for my new offer. my team thought i hired someone lol. the people in the room were the best part though, still talk and build with half of them every week.",
    name: "Rishi Malhotra",
    role: "Co-founder, Koda Labs",
    image: rishiImg,
  },
  {
    quote: "I've done Udemy courses, YouTube rabbit holes, paid for like 3 different AI tools I never properly used.. this was different. you actually sit and build the thing. no theory, no slides, just here's the tool, here's what we're making today. clicked for me in a way nothing else had.",
    name: "Ananya Iyer",
    role: "Growth Lead, Razorpay",
    image: ananyaImg,
  },
  {
    quote: "Was skeptical tbh. thought it would be a lot of 'AI is the future' type content. It wasn't. Day 2 I made my first AI video ad. Day 5 my automation was live. Day 8 I demoed a client dashboard I built from scratch. zero coding background. genuinely changed how I think about what's possible.",
    name: "Kabir Sehgal",
    role: "Founder, Blok Studio",
    image: kabirImg,
  },
  {
    quote: "the dot matrix slide alone was worth the trip. but what stayed with me was the people. a founder from Bangalore, a marketer from Delhi, an operator from Pune, all of us just heads down building for 9 days straight. made friends I'll keep for years. also my content output has 3x'd since I got back so.. yeah.",
    name: "Meera Nambiar",
    role: "Brand Strategist, Swiggy",
    image: meeraImg,
  },
  {
    quote: "I run ops for a 40 person company. I came in knowing exactly what was broken, I just didn't know how to fix it. Left with 2 automations running and a third half built. saved us probably 12 hours a week already. the ROI math is very simple.",
    name: "Aryan Kapoor",
    role: "Head of Operations, Vahan",
    image: aryanImg,
  },
  {
    quote: "ok so I went in thinking I'd learn some tools. came out having completely rethought how I run my agency. the business thinking session on day 3 actually hit different, mapped out my whole workflow and realised I was manually doing 6 things that didn't need a human. fixed 4 of them by day 6.",
    name: "Priya Sood",
    role: "Founder, The Copy Co.",
    image: priyaSImg,
  },
  {
    quote: "My biggest fear was being the least technical person in the room. I was probably top 3 non-technical. didn't matter at all?? the tools are genuinely built for people like us. and the mentors don't make you feel stupid for asking basic questions. best 9 days I've spent on my business in 3 years.",
    name: "Vikram Nair",
    role: "Senior Marketing Manager, CRED",
    image: vikramImg,
  },
  {
    quote: "came for the AI. stayed for the community. still in the group chat every day. we've already referred 3 clients between us and one person in my batch is building something I'm going to invest in. didn't expect any of that when I signed up.",
    name: "Shreya Bhatia",
    role: "Founder, Mosaic Ventures",
    image: shreyaImg,
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

      {/* Carousel — veo.com style: image on top, quote below */}
      <div className="max-w-[560px] mx-auto overflow-hidden">
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
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm cursor-grab active:cursor-grabbing"
          >
            {/* Large Image */}
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
                loading="lazy"
                width={560}
                height={420}
              />
            </div>

            {/* Quote + Attribution */}
            <div className="p-6 md:p-8">
              <p className="text-[18px] md:text-[22px] text-foreground font-medium leading-[1.6] mb-6">
                "{t.quote}"
              </p>
              <p className="font-semibold text-foreground text-[15px]">{t.name}</p>
              <p className="text-[13px] text-muted-foreground">{t.role}</p>
              <p className="text-[13px] text-muted-foreground/60">{t.program}</p>
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
