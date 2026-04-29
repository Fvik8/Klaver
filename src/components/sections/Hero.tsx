import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clover, ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/src/lib/animations";
import { useMagnetic } from "@/src/hooks/useMagnetic";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const buttonMagnetic = useMagnetic(0.2);
  const cardMagnetic = useMagnetic(0.1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");

    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="z-10 space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-forest text-gold text-[10px] font-bold tracking-[0.2em] uppercase">
            EST. 2024 • Munich
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-7xl font-serif text-forest leading-[1.05] tracking-tight"
          >
            Fortune Favors <br/>
            <span className="italic font-light">The Bold.</span> <br/>
            Wealth Favors <br/>
            <span className="text-gold italic font-light text-6xl">The Wise.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-forest/70 max-w-md font-light leading-relaxed font-sans"
          >
            The exclusive German gateway to borderless banking, engineered for the next generation of global capital.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex items-center gap-4 pt-4">
            <div className="relative group w-full max-w-md">
              <form onSubmit={handleSubmit} className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Vip Invite Only" 
                  required
                  className="w-full bg-bone border-b-2 border-forest py-3 pr-40 pl-2 focus:outline-none focus:border-gold text-sm placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest transition-colors disabled:opacity-50"
                  disabled={isSubmitting || isSuccess}
                />
                <motion.div 
                  ref={buttonMagnetic.ref}
                  animate={{ x: buttonMagnetic.x, y: buttonMagnetic.y }}
                  className="absolute right-0 bottom-0"
                >
                  <button 
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="bg-forest text-gold px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-forest transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px] shadow-lg shadow-forest/20"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                    ) : isSuccess ? (
                      <span className="flex items-center gap-2">Secured <CheckCircle2 size={14} /></span>
                    ) : (
                      "Secure Access"
                    )}
                  </button>
                </motion.div>
              </form>
              <AnimatePresence>
                {isSuccess && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-8 left-0 text-[10px] font-bold tracking-widest text-[#0A2F1F] uppercase"
                  >
                    Invitation request received. Stand by for verification.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Card Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative perspective-1000 flex justify-center lg:justify-end"
        >
          <motion.div
            ref={cardMagnetic.ref}
            animate={{ 
              x: cardMagnetic.x * 2,
              y: (cardMagnetic.y * 2) + (Math.sin(Date.now() / 1000) * 10), // Adding subtle hover float
              rotateX: cardMagnetic.y * -0.5,
              rotateY: cardMagnetic.x * 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15
            }}
            className="relative w-full max-w-[420px] aspect-[1.586/1] rounded-[24px] bg-gradient-to-br from-[#111] to-[#222] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.1)] border border-white/5 overflow-hidden group cursor-pointer"
          >

            {/* Gold Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl" />
            <div className="absolute bottom-10 left-10 flex items-center gap-3">
              <Clover className="text-gold w-10 h-10" />
              <div>
                <div className="text-[8px] text-white/30 tracking-[0.2em] font-sans uppercase">Exclusive Tier</div>
                <div className="text-sm text-gold font-serif tracking-widest uppercase">KLAVER BLACK</div>
              </div>
            </div>
            
            <div className="absolute top-8 right-10">
                <div className="w-12 h-8 bg-gradient-to-br from-gold/40 to-gold rounded-md shadow-inner" />
            </div>

            <div className="absolute top-1/2 left-10 -translate-y-1/2">
                <div className="text-white/10 text-4xl font-serif italic select-none">Heritage</div>
            </div>

            {/* Shine effect */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%]"
            />
          </motion.div>
          
          {/* Shadow beneath the card */}
          <div className="absolute -bottom-10 w-2/3 h-10 bg-black/20 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
