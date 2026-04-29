import { motion, AnimatePresence } from "motion/react";
import { X, ShieldAlert } from "lucide-react";
import React, { useState } from "react";

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessModal = ({ isOpen, onClose }: AccessModalProps) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code !== "KLAVER-2026") {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest/80 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center p-6 z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-bone glass p-10 relative pointer-events-auto border-gold/30"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-forest/40 hover:text-forest transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-forest flex items-center justify-center rotate-45 mx-auto mb-6">
                  <div className="w-6 h-6 bg-gold rounded-full" />
                </div>
                <h3 className="text-3xl font-serif text-forest mb-2">Vault Access</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-forest/50">Members Only Terminal</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-forest/70 uppercase mb-3">
                    Exclusive Access Code
                  </label>
                  <input
                    type="password"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="•••• •••• ••••"
                    className={`w-full bg-forest/5 border-b-2 py-4 px-2 outline-none font-mono tracking-widest text-lg transition-colors ${
                      error ? "border-red-500 text-red-500" : "border-forest focus:border-gold"
                    }`}
                  />
                  <AnimatePresence>
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 mt-2 text-red-500 text-[10px] font-bold tracking-widest uppercase"
                      >
                        <ShieldAlert size={12} />
                        Invalid Hardware Key or Code
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest text-gold py-4 font-bold tracking-widest uppercase hover:bg-gold hover:text-forest transition-all"
                >
                  Verify Credentials
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-forest/10 text-center">
                <p className="text-[10px] text-forest/30 uppercase tracking-[0.2em]">
                  Encrypted Tunnel: 256-bit AES
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
