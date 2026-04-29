import { motion } from "motion/react";

export const ExclusivityTicker = () => {
  return (
    <div className="bg-forest h-12 w-full text-gold flex items-center overflow-hidden border-t border-gold/10">
      <div className="flex whitespace-nowrap px-12 w-full justify-between items-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">System Status: Active</span>
        <div className="flex items-center gap-12">
          <span className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Invite Only: 42/500 Slots Remaining
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Tier 1 Capital Ratio: 18.4%</span>
          <span className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 italic">Berlin • London • Zurich • Singapore</span>
        </div>
      </div>
    </div>
  );
};
