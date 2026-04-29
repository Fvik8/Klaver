import { motion } from "motion/react";
import React from "react";
import { fadeInUp } from "@/src/lib/animations";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  key?: React.Key;
}

export const GlassCard = ({ children, className = "", delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`
        relative overflow-hidden glass p-8 rounded-2xl
        after:content-[''] after:absolute after:inset-0 after:bg-white/[0.02] after:pointer-events-none
        hover:border-gold/30 transition-colors duration-500
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
