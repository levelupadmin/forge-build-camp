import { motion } from "framer-motion";
import { MessageCircle, RefreshCw, Target } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const features = [
  { icon: MessageCircle, title: "Private Group", desc: "WhatsApp or Slack group with your batch, active before, during, and after." },
  { icon: RefreshCw, title: "Alumni Network", desc: "Every future Forge AI batch adds to your network. You stay connected." },
  { icon: Target, title: "Accountability After", desc: "Monthly check-ins with your batch. Keep building together long after the program." },
];

const Community = () => {
  return (
    <SectionWrapper label="THE COMMUNITY">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-12">
        Come for the learning.<br />Stay for the community.
      </h2>

      <div className="max-w-[640px] mx-auto mb-12">
        <p className="text-[16px] leading-[1.8] text-muted-foreground text-center">
          Most programs end when the program ends. Forge does not work like that.
        </p>
        <p className="text-[16px] leading-[1.8] text-muted-foreground mt-4 text-center">
          The people in this room will go on to build companies, launch products, and do interesting things. You will want to know them.
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[20px] md:text-[24px] text-foreground font-medium text-center mt-8 leading-snug"
        >
          "The group chat stays active.<br />The referrals keep coming."
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 max-w-[840px] mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border border-border rounded-2xl p-5 shadow-sm"
          >
            <f.icon className="text-primary mb-3" size={24} />
            <p className="font-semibold text-foreground text-[15px]">{f.title}</p>
            <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Community;
