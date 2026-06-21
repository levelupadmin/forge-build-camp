import { ArrowUp } from "lucide-react";
import levelupLogoWhite from "@/assets/levelup-logo.png";
import forgeLogoWhite from "@/assets/forge-logo.png";

const programLinks = [
  { label: "About", href: "#what-is-forge" },
  { label: "Pillars", href: "#pillars" },
  { label: "Schedule", href: "#schedule" },
  { label: "Mentors", href: "#mentors" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

const connectLinks = [
  { label: "Instagram", href: "https://www.instagram.com/forgebylevelup/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/leveluplearning/" },
  { label: "WhatsApp", href: "https://wa.me/919791520177" },
];

const Footer = () => {
  return (
    <footer
      className="border-t border-white/[0.06] py-16 md:py-24"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* TOP: brand statement on its own — editorial breath */}
        <div className="mb-14 md:mb-20 max-w-[720px]">
          <img src={forgeLogoWhite} alt="Forge AI Residency" className="h-12 md:h-16 mb-6" />
          <p className="font-editorial italic text-[24px] md:text-[36px] lg:text-[42px] leading-[1.15] tracking-[-0.01em] text-white">
            Learn AI by <span className="text-primary">Building</span> with AI.
          </p>
          <p className="text-white/55 text-[14px] md:text-[15px] mt-5 leading-[1.65] max-w-[520px]">
            A 7-day residential program for founders, operators, and business leaders who want to stop watching AI happen and start building with it.
          </p>
        </div>

        {/* MIDDLE: link columns aligned to a grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mb-14">
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/40 mb-5">
              Program
            </p>
            <div className="flex flex-col gap-3">
              {programLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-white/70 hover:text-white text-[14px] md:text-[15px] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/40 mb-5">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {connectLinks.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-[14px] md:text-[15px] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/40 mb-5">
              Built by
            </p>
            <img src={levelupLogoWhite} alt="LevelUp Learning" className="h-6 opacity-80" />
            <p className="text-white/45 text-[12px] md:text-[13px] mt-3 leading-[1.55] max-w-[260px]">
              An invite-only residency by the LevelUp Learning team.
            </p>
          </div>
        </div>

        {/* BOTTOM: thin attribution */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/35 text-[11px] md:text-[12px] font-mono tracking-wide">
            © 2026 Forge by LevelUp Learning. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-white/40 hover:text-white text-[11px] md:text-[12px] font-mono tracking-wider uppercase transition-colors"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
