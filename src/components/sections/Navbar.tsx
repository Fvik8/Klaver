import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Увери се, че пакетът е 'framer-motion'
import { Menu, X } from "lucide-react";
import { AccessModal } from "@/src/components/ui/AccessModal";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["heritage", "wealth", "vault"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    
    // Предотвратява скролването на тялото при отворено меню
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navItems = [
    { label: "Our Heritage", id: "heritage" },
    { label: "AI Wealth", id: "wealth" },
    { label: "The Vault", id: "vault" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? "h-20 bg-bone/80 backdrop-blur-lg border-b border-gold/10 shadow-sm" : "h-24 bg-transparent"
        } flex items-center`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group relative z-[60]"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            <div className="w-8 h-8 bg-forest flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-700">
              <div className="w-4 h-4 bg-gold rounded-full" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tighter uppercase text-forest">KLAVER</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className={`relative text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 group ${
                  activeSection === item.id ? "text-gold" : "text-forest hover:text-gold"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </a>
            ))}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 border border-forest text-[10px] font-bold tracking-widest uppercase hover:bg-forest hover:text-white transition-all duration-500 shadow-sm"
            >
              Client Login
            </button>
          </div>

          {/* Mobile Toggle - Има по-висок Z-index, за да е над менюто */}
          <button 
            className="md:hidden text-forest relative z-[70] p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 bg-bone z-[60] md:hidden flex flex-col justify-center items-center"
            >
              {/* Декоративен фон с точки, съответстващ на вашия дизайн */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#002E24_1px,transparent_1px)] [background-size:20px_20px]" />
              
              <div className="flex flex-col items-center gap-10 relative z-10">
                {navItems.map((item, index) => (
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    key={item.id} 
                    href={`#${item.id}`}
                    className="text-4xl font-serif text-forest hover:text-gold transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 w-full px-12"
                >
                  <button 
                    className="w-full py-5 bg-forest text-gold font-bold tracking-widest uppercase text-xs shadow-xl"
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsOpen(false);
                    }}
                  >
                    Client Login
                  </button>
                </motion.div>
              </div>

              {/* Footer на мобилното меню */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 text-[10px] text-forest/40 uppercase tracking-[0.3em]"
              >
                Est. 2024 • Munich
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
