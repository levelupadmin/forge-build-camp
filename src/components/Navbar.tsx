import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {
  onOpenModal: () => void;
}

const navLinks = [
  { label: "About", href: "#experience" },
  { label: "Pillars", href: "#pillars" },
  { label: "Schedule", href: "#schedule" },
  { label: "Mentors", href: "#mentors" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = ({ onOpenModal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(8,8,8,0.92)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="font-bold text-[17px] text-foreground tracking-tight">FORGE</span>
            <span className="text-[10px] text-primary uppercase tracking-[0.15em] font-semibold">AI RESIDENCY</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#" className="flex items-center gap-1.5 text-muted-foreground text-sm hover:text-foreground transition-colors">
              <FileText size={14} />
              Brochure
            </a>
          </div>

          <div className="hidden md:block">
            <button
              onClick={onOpenModal}
              className="bg-primary text-primary-foreground font-semibold text-[13px] rounded-full px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              REQUEST AN INVITE
            </button>
          </div>

          <button onClick={() => setMenuOpen(true)} className="md:hidden text-foreground p-2 -mr-2" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[17px] text-foreground">FORGE</span>
                <span className="text-[10px] text-primary uppercase tracking-[0.15em] font-semibold">AI RESIDENCY</span>
              </div>
              <button onClick={() => setMenuOpen(false)} className="text-foreground p-2 -mr-2" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a href="#" className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <FileText size={22} />
                Brochure
              </a>
            </div>
            <div className="px-6 pb-8">
              <button
                onClick={() => { setMenuOpen(false); onOpenModal(); }}
                className="w-full bg-primary text-primary-foreground font-semibold rounded-full py-4 text-base cta-pulse"
              >
                Request an Invite
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
