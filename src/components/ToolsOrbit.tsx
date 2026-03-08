import SectionWrapper from "./SectionWrapper";

interface ToolItem {
  name: string;
  logo: string;
}

const innerTools: ToolItem[] = [
  { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png" },
  { name: "Midjourney", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/480px-Midjourney_Emblem.png" },
  { name: "Runway", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Runway_AI_logo.png/480px-Runway_AI_logo.png" },
  { name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/480px-Claude_AI_logo.svg.png" },
  { name: "Lovable", logo: "https://lovable.dev/icon.svg" },
  { name: "ElevenLabs", logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mn2vswkulfsiqhvbhmgj" },
];

const outerTools: ToolItem[] = [
  { name: "n8n", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/N8n-logo.svg/480px-N8n-logo.svg.png" },
  { name: "Make", logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/iajnrmadtmmhpvkfhmne" },
  { name: "Replit", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Replit_Logo.svg/480px-Replit_Logo.svg.png" },
  { name: "HeyGen", logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/b1c5d45f1fbe4ebba5fe3ae46d72ec76" },
  { name: "Supabase", logo: "https://cf-assets.www.cloudflare.com/slt3lc6tev37/3VFGwGzKOixuAiwsJPOXY4/26c1e99ff59b17beb1e3c97fdef5e218/supabase.png" },
  { name: "Pika", logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/0c4b45da04d04e598764e8aa7d9c84cf" },
  { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/480px-Canva_icon_2021.svg.png" },
  { name: "Higgsfield", logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/e80c45be01d14f1f95a9b0ebeac7f6b7" },
  { name: "Kling", logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ydmntpglmvfqmhpfmwjd" },
  { name: "Zapier", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/480px-Zapier_logo.svg.png" },
];

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

        {/* Outer tools - static positioned */}
        {outerTools.map((tool, i) => {
          const angle = (i / outerTools.length) * Math.PI * 2 - Math.PI / 2;
          const r = 50; // percentage from center
          const x = 50 + r * Math.cos(angle);
          const y = 50 + r * Math.sin(angle);
          return (
            <div
              key={tool.name}
              className="absolute flex flex-col items-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg overflow-hidden p-1.5 md:p-2">
                <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" loading="lazy" />
              </div>
              <span className="text-[8px] md:text-[11px] text-muted-foreground mt-1 md:mt-1.5 font-semibold whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          );
        })}

        {/* Inner tools - static positioned */}
        {innerTools.map((tool, i) => {
          const angle = (i / innerTools.length) * Math.PI * 2 - Math.PI / 2;
          const r = 30;
          const x = 50 + r * Math.cos(angle);
          const y = 50 + r * Math.sin(angle);
          return (
            <div
              key={tool.name}
              className="absolute flex flex-col items-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg overflow-hidden p-2 md:p-2.5">
                <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" loading="lazy" />
              </div>
              <span className="text-[9px] md:text-[12px] text-muted-foreground mt-1 md:mt-1.5 font-semibold whitespace-nowrap">
                {tool.name}
              </span>
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
