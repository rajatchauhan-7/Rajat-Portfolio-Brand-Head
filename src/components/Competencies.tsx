import { motion } from 'motion/react';
import { DATA } from '../constants';
import { Terminal, Brain, Palette, TrendingUp, Cpu, Award } from 'lucide-react';

const icons = {
  Strategic: TrendingUp,
  Technical: Cpu,
  Creative: Palette
};

export const CompetenciesSection = () => {
  return (
    <section className="py-32 px-6 border-y border-white/5 relative overflow-hidden group/section">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <span className="text-brand-gold font-mono text-xs tracking-[0.5em] uppercase mb-6 block">Capabilities Matrix</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Strategic <span className="italic font-light">Versatility.</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl relative">
          {/* Scanning Light Effect */}
          <motion.div 
            animate={{ 
              top: ["-100%", "200%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear",
              delay: 2
            }}
            className="absolute left-0 right-0 h-[200px] bg-gradient-to-b from-transparent via-brand-gold/[0.03] to-transparent z-20 pointer-events-none rotate-12"
          />

          {DATA.skills.map((skill, i) => {
            const Icon = icons[skill.category] || Brain;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  backgroundColor: "rgba(255, 184, 0, 0.02)",
                  y: -5
                }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.05,
                  y: { duration: 0.4, ease: "easeOut" }
                }}
                className="bg-brand-bg p-10 md:p-14 group flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[360px] relative overflow-hidden transition-colors border-transparent hover:border-brand-gold/10 transform-gpu"
              >
                {/* Individual Card Breathing Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-12 group-hover:bg-brand-gold/10 group-hover:shadow-[0_0_30px_rgba(255,184,0,0.15)] transition-all duration-500"
                  >
                    <Icon className="text-brand-gold group-hover:scale-110 transition-transform duration-500" size={24} />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-brand-gold transition-colors duration-500">{skill.name}</h3>
                  <p className="text-[10px] text-brand-text/30 uppercase tracking-[0.3em] font-black">{skill.category}</p>
                </div>
                
                <div className="flex gap-2 mt-12 relative z-10">
                  {[...Array(5)].map((_, j) => (
                    <motion.div 
                      key={j} 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.1) + (j * 0.05), duration: 0.8 }}
                      className={`h-[4px] flex-1 rounded-full origin-left ${j < skill.level ? 'bg-brand-gold shadow-[0_0_10px_rgba(255,184,0,0.3)]' : 'bg-white/5'}`} 
                    />
                  ))}
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-4 right-4 w-1 h-1 bg-brand-gold rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
