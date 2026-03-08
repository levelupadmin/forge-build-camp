import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface ToolItem {
  name: string;
  icon: string;
}

const innerTools: ToolItem[] = [
  { name: "ChatGPT", icon: "🤖" },
  { name: "Midjourney", icon: "⛵" },
  { name: "Runway", icon: "🎬" },
  { name: "Claude", icon: "🧠" },
  { name: "Lovable", icon: "💜" },
  { name: "ElevenLabs", icon: "🔊" },
];

const outerTools: ToolItem[] = [
  { name: "n8n", icon: "⚡" },
  { name: "Make", icon: "🔧" },
  { name: "Replit", icon: "💻" },
  { name: "HeyGen", icon: "🎭" },
  { name: "Supabase", icon: "⚙️" },
  { name: "Pika", icon: "✨" },
  { name: "Canva", icon: "🎨" },
  { name: "OpenAI", icon: "🌐" },
  { name: "Kling", icon: "🎥" },
  { name: "Zapier", icon: "⚡" },
];

const ToolsOrbit = () => {
  return (
    <SectionWrapper id="tools" label="TECH STACK">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-16">
        Tools You'll Learn
      </h2>

      <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] mx-auto">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-primary/10" />
        {/* Inner ring */}
        <div className="absolute inset-[22%] rounded-full border border-primary/10" />

        {/* Outer orbit - rotating */}
        <div className="absolute inset-0 orbit-spin-reverse">
          {outerTools.map((tool, i) => {
            const angle = (i / outerTools.length) * 360;
            return (
              <div
                key={tool.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-50%) translateX(-50%)`,
                }}
              >
                <div
                  className="absolute"
                  style={{
                    transform: `translateY(${-160}px) translateX(-50%)`,
                  }}
                >
                  <div className="counter-rotate-reverse flex flex-col items-center">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-card border border-border flex items-center justify-center text-lg md:text-2xl shadow-lg">
                      {tool.icon}
                    </div>
                    <span className="text-[9px] md:text-[11px] text-muted-foreground mt-1.5 font-semibold whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inner orbit - rotating opposite */}
        <div className="absolute inset-[22%] orbit-spin">
          {innerTools.map((tool, i) => {
            const angle = (i / innerTools.length) * 360;
            return (
              <div
                key={tool.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-50%) translateX(-50%)`,
                }}
              >
                <div
                  className="absolute"
                  style={{
                    transform: `translateY(${-100}px) translateX(-50%)`,
                  }}
                >
                  <div className="counter-rotate flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-card border border-border flex items-center justify-center text-xl md:text-3xl shadow-lg">
                      {tool.icon}
                    </div>
                    <span className="text-[10px] md:text-[12px] text-muted-foreground mt-1.5 font-semibold whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center glow */}
        <div className="absolute inset-[35%] rounded-full" style={{
          background: "radial-gradient(circle, hsla(230,80%,62%,0.12), transparent 70%)"
        }} />
      </div>
    </SectionWrapper>
  );
};

export default ToolsOrbit;
