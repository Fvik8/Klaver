import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/src/lib/animations";

const sections = [
  {
    id: "heritage",
    title: "Our Heritage",
    subtitle: "Precision since 1924",
    description: "Born in the heart of Munich, Klaver was founded on the principles of stability and radical transparency. For over a century, we have served the world's most discerning families, evolving from a traditional counting house to a digital-first sovereign entity.",
    details: ["Munich Headquarters", "Bespoke Family Office", "Generational Transfer"]
  },
  {
    id: "wealth",
    title: "AI Wealth",
    subtitle: "The Future of Capital",
    description: "Technology meets tradition. Our proprietary machine learning models analyze global volatility in real-time, executing trades with institutional precision while protecting your core capital through sovereign-grade hedging.",
    details: ["Real-time Hedging", "Bespoke Portfolios", "Predictive Analytics"]
  },
  {
    id: "vault",
    title: "The Vault",
    subtitle: "Uncompromising Security",
    description: "Your wealth deserves more than a password. The Vault combines biometric hardware keys with multi-signature governance, ensuring that your borderless banking experience is anchored by the world's strongest encryption protocols.",
    details: ["Hardware Security", "Multi-Sig Auth", "Zero-Knowledge Proofs"]
  }
];

export const HeritageGrid = () => {
  return (
    <section className="bg-bone">
      {sections.map((section, i) => (
        <div 
          key={section.id} 
          id={section.id} 
          className={`min-h-[60vh] flex items-center px-12 border-t border-forest/10 py-24 ${i % 2 === 1 ? "bg-forest text-bone" : ""}`}
        >
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
             <motion.div
               variants={staggerContainer}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, margin: "-100px" }}
             >
               <motion.div variants={fadeInUp} className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-6 ${i % 2 === 1 ? "text-gold" : "text-forest/40"}`}>
                 {section.subtitle}
               </motion.div>
               <motion.h2 
                 variants={fadeInUp}
                 className="text-5xl md:text-7xl font-serif mb-8 leading-tight"
                >
                 {section.title.split(" ")[0]} <br />
                 <span className="italic font-light">{section.title.split(" ").slice(1).join(" ")}</span>
               </motion.h2>
               <motion.p 
                 variants={fadeInUp} 
                 className={`text-lg max-w-md leading-relaxed font-sans mb-10 ${i % 2 === 1 ? "text-bone/60" : "text-forest/70"}`}
                >
                 {section.description}
               </motion.p>
               
               <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                 {section.details.map((detail) => (
                   <span 
                    key={detail} 
                    className={`px-4 py-2 border rounded-full text-[10px] font-bold tracking-widest uppercase ${
                      i % 2 === 1 ? "border-bone/20 text-bone/60" : "border-forest/10 text-forest/40"
                    }`}
                   >
                     {detail}
                   </span>
                 ))}
               </motion.div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative h-[400px] flex items-center justify-center"
             >
                <div className={`absolute inset-0 blur-[100px] rounded-full ${i % 2 === 1 ? "bg-gold/10" : "bg-forest/5"}`} />
                <div className={`w-full h-full glass relative z-10 p-12 flex flex-col justify-between ${i % 2 === 1 ? "border-gold/20" : ""}`}>
                   <div className="flex justify-between items-start">
                      <div className={`w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center`}>
                         <div className="w-4 h-4 bg-gold rounded-full" />
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.3em] font-sans opacity-30">ENCRYPTED NODE</span>
                   </div>
                   
                   <div className="space-y-4">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className={`h-1 w-full rounded-full ${i % 2 === 1 ? "bg-bone/10" : "bg-forest/5"}`}>
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${Math.random() * 100}%` }}
                              transition={{ duration: 2, delay: j * 0.2 }}
                              className="h-full bg-gold rounded-full"
                            />
                        </div>
                      ))}
                   </div>

                   <div className="flex justify-between items-end">
                      <div className="font-serif italic text-4xl opacity-10">MCMXXIV</div>
                      <div className="text-[10px] font-bold tracking-widest opacity-30">BETA-CORE-{i}</div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};
