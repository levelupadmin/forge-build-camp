const footerLinks = {
  program: [
    { label: "About", href: "#experience" },
    { label: "Pillars", href: "#pillars" },
    { label: "Schedule", href: "#schedule" },
    { label: "Mentors", href: "#mentors" },
    { label: "FAQs", href: "#faqs" },
  ],
  connect: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-bold text-foreground text-[16px]">FORGE AI RESIDENCY</p>
            <p className="text-[13px] text-forge-muted mt-1">A Forge Program by LevelUp Learning</p>
            <p className="text-sm text-primary mt-2">Learn AI by Building with AI.</p>
          </div>

          <div>
            <p className="text-[12px] text-forge-dim uppercase font-semibold mb-3">Program</p>
            <div className="flex flex-col gap-2">
              {footerLinks.program.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-forge-muted hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] text-forge-dim uppercase font-semibold mb-3">Connect</p>
            <div className="flex flex-col gap-2">
              {footerLinks.connect.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-forge-muted hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] mt-8 pt-6 text-center">
          <p className="text-[12px] text-forge-dim">
            © 2025 Forge by LevelUp Learning · All rights reserved · Cohort 01
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
