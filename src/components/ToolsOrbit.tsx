import SectionWrapper from "./SectionWrapper";

interface ToolItem {
  name: string;
  logo: string;
}

const innerTools: ToolItem[] = [
  { name: "ChatGPT", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
  { name: "Midjourney", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/midjourney.svg" },
  { name: "Runway", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/runwayml.svg" },
  { name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/480px-Claude_AI_logo.svg.png" },
  { name: "Lovable", logo: "https://lovable.dev/icon.svg" },
  { name: "ElevenLabs", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/elevenlabs.svg" },
];

const outerTools: ToolItem[] = [
  { name: "n8n", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" },
  { name: "Make", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/make.svg" },
  { name: "Replit", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/replit.svg" },
  { name: "HeyGen", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/heygen.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/supabase.svg" },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/canva.svg" },
  { name: "Zapier", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg" },
  { name: "Pika", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pika.svg" },
  { name: "Kling", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kling.svg" },
  { name: "Airtable", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/airtable.svg" },
];

// Fallback text initials for logos that fail to load
const fallbackInitials: Record<string, string> = {
  "Midjourney": "MJ",
  "ElevenLabs": "EL",
  "Pika": "PK",
  "Kling": "KL",
  "HeyGen": "HG",
};

// Simple Icons are monochrome SVGs — render them white-tinted via CSS filter
const svgFilter = "brightness(0) invert(1)";

const ToolsOrbit = () => {
  const outerRadius = 240;
  const innerRadius = 145;

  return (
    <SectionWrapper id="tools" label="TECH STACK">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-16">
        Tools You'll Learn
      </h2>

      <div className="relative w-[340px] h-[340px] md:w-[560px] md:h-[560px] mx-auto">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-primary/[0.08]" />
        {/* Inner ring */}
        <div
          className="absolute rounded-full border border-primary/[0.08]"
          style={{
            left: "50%",
            top: "50%",
            width: `${(innerRadius * 2 / outerRadius) * 50}%`,
            height: `${(innerRadius * 2 / outerRadius) * 50}%`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Outer tools */}
        {outerTools.map((tool, i) => {
          const angle = (i / outerTools.length) * Math.PI * 2 - Math.PI / 2;
          const r = 50;
          const x = 50 + r * Math.cos(angle);
          const y = 50 + r * Math.sin(angle);
          return (
            <div
              key={tool.name}
              className="absolute flex flex-col items-center"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg overflow-hidden p-2 md:p-2.5">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                  style={{ filter: svgFilter }}
                  loading="lazy"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const span = document.createElement('span');
                    span.className = 'text-[9px] font-bold text-primary';
                    span.textContent = fallbackInitials[tool.name] || tool.name.slice(0,2).toUpperCase();
                    img.parentElement?.appendChild(span);
                  }}
                />
              </div>
            </div>
          );
        })}

        {/* Inner tools */}
        {innerTools.map((tool, i) => {
          const angle = (i / innerTools.length) * Math.PI * 2 - Math.PI / 2;
          const r = 30;
          const x = 50 + r * Math.cos(angle);
          const y = 50 + r * Math.sin(angle);
          return (
            <div
              key={tool.name}
              className="absolute flex flex-col items-center"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg overflow-hidden p-2 md:p-3">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                  style={{ filter: tool.name === "Lovable" ? "none" : svgFilter }}
                  loading="lazy"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const span = document.createElement('span');
                    span.className = 'text-[9px] font-bold text-primary';
                    span.textContent = fallbackInitials[tool.name] || tool.name.slice(0,2).toUpperCase();
                    img.parentElement?.appendChild(span);
                  }}
                />
              </div>
            </div>
          );
        })}

        {/* Center glow */}
        <div className="absolute inset-[35%] rounded-full" style={{
          background: "radial-gradient(circle, hsla(217,91%,60%,0.10), transparent 70%)"
        }} />
      </div>
    </SectionWrapper>
  );
};

export default ToolsOrbit;
