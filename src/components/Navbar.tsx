import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import levelupLogo from "@/assets/levelup-logo.png";
import levelupLogoDark from "@/assets/levelup-logo-dark.png";

interface NavbarProps {
  onOpenModal: () => void;
}

const navLinks = [
  { label: "About", href: "#experience" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
  { label: "Brochure", href: "#" },
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
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-center h-16">
          <div
            className="flex items-center gap-6 rounded-full px-5 py-2.5"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.1)",
              border: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(255,255,255,0.15)",
              transition: "all 0.3s ease",
            }}
          >
            <img src={scrolled ? levelupLogoDark : levelupLogo} alt="LevelUp Learning" className="h-5 mr-2" />
            <div className={`w-px h-4 ${scrolled ? "bg-black/10" : "bg-white/20"}`} />
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-[14px] font-medium transition-colors ${
                  scrolled ? "text-foreground/70 hover:text-foreground" : "text-white hover:text-white/80"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar — always visible */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 md:hidden transition-all duration-300"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.08)",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="flex items-center justify-between px-6 h-14">
          <a href="#">
            <img
              src={scrolled ? levelupLogoDark : levelupLogo}
              alt="LevelUp Learning"
              className="h-5"
            />
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className={`p-2 -mr-2 ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-14">
              <img src={levelupLogoDark} alt="LevelUp Learning" className="h-5" />
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
            </div>
            <div className="px-6 pb-8">
              <button
                onClick={() => { setMenuOpen(false); onOpenModal(); }}
                className="w-full bg-primary text-primary-foreground font-semibold rounded-full py-4 text-sm uppercase tracking-wider"
              >
                REQUEST AN INVITE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
