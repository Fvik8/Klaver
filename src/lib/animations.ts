/**
 * Animation variants for Framer Motion
 */

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15
    }
  },
};

export const goldGlow = {
  initial: { boxShadow: "0 0 0px rgba(212, 175, 55, 0)" },
  animate: {
    boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
    }
  }
};
