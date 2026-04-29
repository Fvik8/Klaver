import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GoldButton } from "@/src/components/ui/GoldButton";
import { Clover, Instagram, Twitter, Linkedin, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/src/lib/animations";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");

    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleLinkClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    alert(`${label} - This section is currently exclusive to our private beta members.`);
  };

  return (
    <footer className="bg-forest pt-24 pb-12 px-6 text-bone overflow-hidden border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif mb-8 leading-tight"
            >
              Ready to claim your <span className="text-gold italic">heritage?</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-bone/60 mb-10 max-w-md font-sans"
            >
              Join an exclusive group of founders, thinkers, and explorers 
              defining the future of wealth.
            </motion.p>
            
            {/* Waitlist CTA */}
            <motion.form 
              variants={fadeInUp}
              className="relative max-w-md group"
              onSubmit={handleSubmit}
            >
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isSuccess ? "Welcome to the circle." : "Secure your email..."}
                required
                className="w-full bg-white/5 border border-white/10 rounded-none py-4 pl-6 pr-40 text-bone placeholder:text-bone/30 outline-none focus:border-gold transition-colors font-sans disabled:opacity-50"
                disabled={isSubmitting || isSuccess}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <GoldButton 
                  type="submit"
                  isLoading={isSubmitting}
                  className="py-2.5 px-6 text-[10px] shadow-none flex items-center gap-2"
                >
                  {isSuccess ? <><CheckCircle2 size={12} /> Reserved</> : "Reserve Spot"}
                </GoldButton>
              </div>
              <AnimatePresence>
                {isSuccess && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -bottom-6 left-0 text-[10px] text-gold uppercase tracking-[0.2em]"
                  >
                    Invitation pending review.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>

          {/* Sitemaps */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-8">Access</h4>
              <ul className="space-y-4 text-sm font-sans text-bone/50">
                {["Philosophy", "Security", "The App", "Black Card"].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-gold transition-colors" onClick={(e) => handleLinkClick(e, item)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-8">Legal</h4>
              <ul className="space-y-4 text-sm font-sans text-bone/50">
                {["Privacy", "Terms", "Compliance", "Imprint"].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-gold transition-colors" onClick={(e) => handleLinkClick(e, item)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
               <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-8">Connect</h4>
               <div className="flex gap-6">
                 <a href="#" className="text-bone/50 hover:text-gold transition-colors" onClick={(e) => handleLinkClick(e, "Instagram")}><Instagram size={20} /></a>
                 <a href="#" className="text-bone/50 hover:text-gold transition-colors" onClick={(e) => handleLinkClick(e, "Twitter")}><Twitter size={20} /></a>
                 <a href="#" className="text-bone/50 hover:text-gold transition-colors" onClick={(e) => handleLinkClick(e, "Linkedin")}><Linkedin size={20} /></a>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Clover className="text-gold w-6 h-6" />
            <span className="font-serif font-bold tracking-tight text-xl">KLAVER</span>
          </div>
          <p className="text-[10px] font-sans text-bone/30 tracking-widest uppercase">
            © 2026 Klaver Financial Technologies AG. Handcrafted in Berlin.
          </p>
        </div>
      </div>
    </footer>
  );
};
