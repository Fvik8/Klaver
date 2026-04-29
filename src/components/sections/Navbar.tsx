import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Our Heritage", id: "heritage" },
    { label: "AI Wealth", id: "wealth" },
    { label: "The Vault", id: "vault" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "h-20 glass border-b shadow-sm" : "h-24 bg-transparent"
        } flex items-center`}
      >
        <div className="max-w-7xl mx-auto px-12 flex justify-between items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 bg-forest flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
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
                <span className="absolute -inset-2 rounded-full bg-gold/0 group-hover:bg-gold/5 blur-md transition-all duration-300 -z-10" />
              </a>
            ))}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 border border-forest text-[10px] font-bold tracking-widest uppercase hover:bg-forest hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-forest/20"
            >
              Client Login
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-forest" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-bone border-b border-gold/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navItems.map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    className="text-lg font-serif text-left text-forest"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button 
                  className="w-full py-4 bg-forest text-gold font-bold tracking-widest uppercase"
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Client Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
