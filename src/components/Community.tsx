import { motion } from "framer-motion";
import { MessageCircle, RefreshCw, Target } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const features = [
  { icon: MessageCircle, title: "Private Cohort Group", desc: "WhatsApp or Slack group with your cohort, active before, during, and after." },
  { icon: RefreshCw, title: "Alumni Network", desc: "Every future Forge AI cohort adds to your network. You stay connected." },
  { icon: Target, title: "Accountability After", desc: "Monthly check-ins with your cohort. Keep building together long after the program." },
];

const nodeCount = 10;
const nodes = [...Array(nodeCount)].map((_, i) => {
  const angle = (i / nodeCount) * Math.PI * 2;
  const x = 50 + 38 * Math.cos(angle);
  const y = 50 + 38 * Math.sin(angle);
  return { x, y };
});

const Community = () => {
  return (
    <SectionWrapper label="THE COMMUNITY" bg="bg-card">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        Come for the learning.<br />Stay for the community.
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-[17px] leading-[1.8] text-muted-foreground">
            Most programs end when the program ends.
          </p>
          <p className="text-[17px] leading-[1.8] text-muted-foreground mt-4">
            Forge does not work like that.
          </p>
          <p className="text-[17px] leading-[1.8] text-muted-foreground mt-4">
            The people in this room will go on to build companies, launch products, and do interesting things. You will want to know them. They will want to know you.
          </p>
          <p className="text-[17px] leading-[1.8] text-muted-foreground mt-4">
            Long after the program is over, the group chat stays active, the referrals keep coming, and the builds keep shipping.
          </p>
          <p className="text-[17px] leading-[1.8] text-muted-foreground mt-4">
            You are not just joining a program. You are joining the people who take AI seriously.
          </p>
        </div>

        {/* Network visualization with SVG connecting lines */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-72 h-72">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {nodes.map((a, i) =>
                nodes.slice(i + 1).filter((_, j) => j < 2).map((b, j) => (
                  <line
                    key={`${i}-${j}`}
                    x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                    stroke="hsl(var(--primary))"
                    strokeOpacity="0.1"
                    strokeWidth="0.3"
                  />
                ))
              )}
              {/* Center connections */}
              {nodes.map((n, i) => (
                <line key={`c-${i}`} x1={50} y1={50} x2={n.x} y2={n.y} stroke="hsl(var(--primary))" strokeOpacity="0.06" strokeWidth="0.3" />
              ))}
            </svg>

            {nodes.map((n, i) => (
              <motion.div
                key={i}
                className="absolute w-3.5 h-3.5 rounded-full bg-primary/60"
                style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
            {/* Center node */}
            <motion.div
              className="absolute w-5 h-5 rounded-full bg-primary/80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="absolute inset-[25%] rounded-full border border-primary/10" />
            <div className="absolute inset-[10%] rounded-full border border-primary/5" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-12">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card backdrop-blur-sm p-5"
          >
            <f.icon className="text-primary mb-3" size={24} />
            <p className="font-semibold text-foreground text-[15px]">{f.title}</p>
            <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="font-bold text-[26px] md:text-[34px] text-primary leading-tight">
          "The room you build in<br />shapes who you become."
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Community;
