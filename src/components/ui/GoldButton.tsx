import { motion } from "motion/react";
import { ReactNode } from "react";

interface GoldButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  isLoading?: boolean;
}

export const GoldButton = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary",
  type = "button",
  isLoading = false
}: GoldButtonProps) => {
  return (
    <motion.button
      type={type}
      whileHover={!isLoading ? { scale: 1.02, x: 2 } : {}}
      whileTap={!isLoading ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={isLoading}
      className={`
        relative px-8 py-3 font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300
        ${variant === "primary" ? 
          "bg-gold text-forest shadow-lg hover:shadow-gold/40" : 
          "bg-transparent text-gold border border-gold hover:bg-gold/10"}
        ${isLoading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      <span className={isLoading ? "opacity-0" : "opacity-100"}>
        {children}
      </span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-forest/30 border-t-forest rounded-full animate-spin" />
        </div>
      )}
    </motion.button>
  );
};
