const tools = "Runway  ·  Midjourney  ·  Kling  ·  HeyGen  ·  ElevenLabs  ·  n8n  ·  Make  ·  Zapier  ·  Claude  ·  OpenAI  ·  Lovable  ·  Replit  ·  Supabase  ·  Pika  ·  ";

const ToolsMarquee = () => {
  return (
    <section className="bg-forge-surface border-y border-[rgba(255,255,255,0.05)] py-4 overflow-hidden">
      <div className="flex items-center max-w-7xl mx-auto px-6 lg:px-20">
        <span className="hidden lg:block text-[13px] text-forge-dim mr-6 whitespace-nowrap font-semibold">
          Tools you'll learn
        </span>
        <div className="flex-1 marquee-mask overflow-hidden">
          <div className="flex marquee-track whitespace-nowrap">
            <span className="text-[11px] uppercase tracking-[0.1em] text-amber-dim font-semibold">
              {tools}{tools}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsMarquee;
