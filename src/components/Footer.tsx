import { ArrowUp } from "lucide-react";
import levelupLogoWhite from "@/assets/levelup-logo.png";
import forgeLogoWhite from "@/assets/forge-logo.png";

const footerLinks = {
  program: [
    { label: "About", href: "#experience" },
    { label: "Pillars", href: "#pillars" },
    { label: "Schedule", href: "#schedule" },
    { label: "Mentors", href: "#mentors" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
  ],
  connect: [
    { label: "Instagram", href: "https://www.instagram.com/forgebylevelup/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/leveluplearning/" },
    { label: "WhatsApp", href: "https://wa.me/919791520177" },
  ],
};

const Footer = () => {
  return (
    <footer
      className="border-t border-white/[0.06] py-16 md:py-20"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — Brand */}
          <div>
            <img src={levelupLogoWhite} alt="LevelUp Learning" className="h-6 mb-4" />
            <img src={forgeLogoWhite} alt="Forge AI Residency" className="h-10 md:h-12 mt-3" />
            <p className="text-white text-[15px] font-medium mt-1">Learn AI by Building with AI.</p>
            <p className="text-white/60 text-[14px] mt-3 max-w-[360px] leading-relaxed">
              A 9-day residential program for founders, marketers, and operators who want to stop watching AI happen and start building with it.
            </p>
          </div>

          {/* Right — Link columns */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-white/40 text-[11px] uppercase font-semibold tracking-[0.15em] mb-4">Program</p>
              <div className="flex flex-col gap-2.5">
                {footerLinks.program.map((l) => (
                  <a key={l.label} href={l.href} className="text-white/60 hover:text-white text-[14px] transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/40 text-[11px] uppercase font-semibold tracking-[0.15em] mb-4">Connect</p>
              <div className="flex flex-col gap-2.5">
                {footerLinks.connect.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-[14px] transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] mt-12 pt-6 flex items-center justify-between">
          <p className="text-white/40 text-[12px]">
            © 2025 Forge by LevelUp Learning · All rights reserved
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-white/40 hover:text-white text-[12px] transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
