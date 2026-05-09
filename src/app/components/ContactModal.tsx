import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate email sending
    setTimeout(() => {
      // Log the message to console (can be replaced with real email service later)
      console.log("📧 New Contact Form Submission:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      console.log("To:", "min@Sihoooo.cn");

      // Save to localStorage for record keeping
      const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
      submissions.push({
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

      setStatus("success");
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setStatus("idle");
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-[12px] w-full max-w-[500px] p-6 md:p-8 relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                aria-label={t.contact.close}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="font-['Space_Grotesk:Bold',sans-serif] font-semibold text-[28px] leading-[34px] text-white mb-6">
                {t.contact.title}
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ff64e3] transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ff64e3] transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.messagePlaceholder}
                    required
                    rows={5}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ff64e3] transition-colors resize-none"
                  />
                </div>

                {status === "success" && (
                  <motion.p
                    className="text-green-400 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {t.contact.success}
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    className="text-red-400 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {t.contact.error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-gradient-to-r from-[#ff64e3] to-[#d946ef] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] py-3 px-6 rounded-[8px] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? t.contact.sending : t.contact.send}
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
