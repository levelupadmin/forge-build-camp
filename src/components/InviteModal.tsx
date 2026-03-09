import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Info } from "lucide-react";

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const roles = [
  "Select your role",
  "Founder / Co-founder",
  "Marketer / Growth",
  "Creator / Filmmaker",
  "Freelancer / Agency Owner",
  "Operator / Executive",
  "Other",
];

const InviteModal = ({ isOpen, onClose }: InviteModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
    build: "",
    source: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", whatsapp: "", role: "", build: "", source: "" });
    }, 300);
  };

  const inputClass = "w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)] rounded-[10px] px-4 py-3.5 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:outline-none transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed z-50 bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[480px] bg-card rounded-t-[20px] md:rounded-[20px] border-t-[3px] border-t-primary max-h-[90vh] overflow-y-auto scrollbar-hide"
          >
            <div className="p-7 md:p-8">
              {!submitted ? (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-[22px] text-foreground">REQUEST AN INVITE</h3>
                      <p className="text-sm text-muted-foreground mt-1">We review every application and reply within 48 hours.</p>
                    </div>
                    <button onClick={handleClose} className="text-muted-foreground hover:text-foreground p-1 -mr-1 -mt-1">
                      <X size={20} />
                    </button>
                  </div>

                  {/* Application fee note */}
                  <div className="flex items-start gap-2.5 bg-primary/[0.06] border border-primary/15 rounded-xl px-4 py-3 mb-5">
                    <Info size={16} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-[13px] text-primary/80 leading-relaxed">
                      A small application fee of <span className="font-bold text-primary">₹500</span> is charged after review to confirm your seat. No payment required now.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input type="text" required placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                    <input type="email" required placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                    <input type="tel" required placeholder="+91 98765 43210" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className={inputClass} />
                    <select required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className={`${inputClass} appearance-none`}>
                      {roles.map((r) => (
                        <option key={r} value={r === "Select your role" ? "" : r} disabled={r === "Select your role"}>{r}</option>
                      ))}
                    </select>
                    <textarea required maxLength={200} rows={3} placeholder="I want to build..." value={form.build} onChange={(e) => setForm({ ...form, build: e.target.value })} className={`${inputClass} resize-none`} />
                    <input type="text" placeholder="Instagram / Friend / Other" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className={inputClass} />
                    <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold rounded-full py-4 text-base mt-2 cta-pulse">
                      Send My Request
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 15 }}>
                    <CheckCircle2 className="text-primary mx-auto" size={64} />
                  </motion.div>
                  <h3 className="font-bold text-[26px] text-foreground mt-4">You're on the list.</h3>
                  <p className="text-[15px] text-muted-foreground mt-2">Our team will reach out on WhatsApp within 48 hours with next steps.</p>
                  <p className="text-[13px] text-muted-foreground/50 mt-3">Follow @leveluplearning on Instagram for updates and announcements.</p>
                  <button onClick={handleClose} className="mt-6 border border-border text-foreground rounded-full px-8 py-3 text-sm hover:border-foreground/30 transition-colors">
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InviteModal;
