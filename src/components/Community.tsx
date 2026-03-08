import { motion } from "framer-motion";
import { MessageCircle, RefreshCw, Target } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const features = [
  { icon: MessageCircle, title: "Private Cohort Group", desc: "WhatsApp or Slack group with your cohort, active before, during, and after." },
  { icon: RefreshCw, title: "Alumni Network", desc: "Every future Forge AI cohort adds to your network. You stay connected." },
  { icon: Target, title: "Accountability After", desc: "Monthly check-ins with your cohort. Keep building together long after Day 9." },
];

const Community = () => {
  return (
    <SectionWrapper label="THE COMMUNITY" bg="bg-forge-surface">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        Come for the learning.<br />Stay for the community.
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-[17px] leading-[1.8] text-forge-muted">
            Most programs end when the program ends.
          </p>
          <p className="text-[17px] leading-[1.8] text-forge-muted mt-4">
            Forge does not work like that.
          </p>
          <p className="text-[17px] leading-[1.8] text-forge-muted mt-4">
            The people in this room will go on to build companies, launch products, and do interesting things. You will want to know them. They will want to know you.
          </p>
          <p className="text-[17px] leading-[1.8] text-forge-muted mt-4">
            Long after the 9 days are over, the group chat stays active, the referrals keep coming, and the builds keep shipping.
          </p>
          <p className="text-[17px] leading-[1.8] text-forge-muted mt-4">
            You are not just joining a program. You are joining the people who take AI seriously.
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-64 h-64">
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const x = 50 + 40 * Math.cos(angle);
              const y = 50 + 40 * Math.sin(angle);
              return (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-primary/60"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                />
              );
            })}
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
            className="glass-card p-5"
          >
            <f.icon className="text-primary mb-3" size={24} />
            <p className="font-semibold text-foreground text-[15px]">{f.title}</p>
            <p className="text-sm text-forge-muted mt-1">{f.desc}</p>
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
