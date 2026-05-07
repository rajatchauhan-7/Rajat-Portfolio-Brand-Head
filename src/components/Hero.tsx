import { motion } from 'motion/react';
import { DATA } from '../constants';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { hyperspeedPresets } from './Hyperspeed';
import { useState, lazy, Suspense } from 'react';

const Hyperspeed = lazy(() => import('./Hyperspeed'));

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[min(94%,800px)] px-6 md:px-10 py-5 glass-card flex items-center justify-between border-brand-accent/10"
    >
      <div className="flex items-center gap-6">
        <div className="text-xl font-serif font-bold text-brand-text tracking-tighter italic">
          RC<span className="text-brand-gold">.</span>
        </div>
        <div className="h-6 w-px bg-white/10 hidden md:block" />
        <div className="flex gap-4 hidden md:flex">
          <a href="https://www.linkedin.com/in/rajat-singh-chauhan-9298201b4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:rajat.chauhan16may@gmail.com" className="text-gray-400 hover:text-brand-gold transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="flex gap-6 md:gap-10">
        <a href="#work" className="nav-link text-xs md:text-sm">Work</a>
        <a href="#laboratory" className="nav-link text-xs md:text-sm hidden sm:block">Laboratory</a>
        <a href="#process" className="nav-link text-xs md:text-sm hidden md:block">Process</a>
        <a href="#contact" className="nav-link text-xs md:text-sm">Contact</a>
      </div>
    </motion.nav>
  );
};

export const Hero = () => {
  const [isSpeeding, setIsSpeeding] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-24 px-6 overflow-hidden bg-brand-bg">
      {/* Hyperspeed Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-brand-bg" />}>
          <Hyperspeed 
            effectOptions={{
              ...hyperspeedPresets.one,
              onSpeedUp: () => setIsSpeeding(true),
              onSlowDown: () => setIsSpeeding(false),
            }} 
          />
        </Suspense>
        {/* Dark Vignette/Overlay for readability - Responsive to theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/40 to-brand-bg z-10" />
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center max-w-5xl"
      >
        <motion.p 
          variants={itemVariants}
          className="text-brand-gold font-bold tracking-[0.6em] mb-8 uppercase text-sm md:text-2xl"
        >
          Portfolio
        </motion.p>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-[9rem] font-bold text-brand-text leading-[0.8] md:leading-[0.85] tracking-tighter mb-10 uppercase relative transform-gpu"
        >
          <span className="drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]">Rajat Singh</span> <br className="hidden md:block" /> 
          <span className="text-brand-gold italic font-light drop-shadow-[0_0_30px_rgba(255,184,0,0.3)]">Chauhan</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl text-brand-text/60 max-w-4xl mx-auto mb-16 font-light italic leading-relaxed"
        >
          Head of Brand & Content <span className="mx-3 not-italic opacity-20">·</span> 
          AI Content Ecosystem Strategist <span className="mx-3 not-italic opacity-20">·</span> 
          Creative Lead
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="relative inline-block mb-12"
        >
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border-2 border-brand-gold/20 p-4 relative group cursor-pointer transition-all duration-700 hover:border-brand-gold/50">
            <div className="w-full h-full rounded-full overflow-hidden border border-brand-accent/20 relative z-10">
              <img 
                src="https://i.postimg.cc/yYbHBQL3/IMG-4248.jpg" 
                alt={DATA.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
            </div>
            
            {/* Pulsing Outer Glow on Hover */}
            <div className="absolute inset-0 rounded-full bg-brand-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 border-t-2 border-brand-gold/30 rounded-full"
            />
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-premium flex items-center gap-3"
          >
            Explore Impact <ArrowUpRight size={16} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline border-white/10 text-brand-text hover:bg-white/5"
          >
            Initiate Contact
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-nowrap items-center justify-between gap-6 md:gap-16 mt-20 md:mt-24 w-full max-w-7xl px-8 overflow-x-auto no-scrollbar"
      >
        {DATA.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, scale: 1.1 }}
            transition={{ 
              initial: { delay: 1.8 + (i * 0.1), duration: 0.8 },
              whileHover: { duration: 0.3, ease: "easeOut" }
            }}
            className="text-center group relative cursor-default"
          >
            <div className="relative">
              <div className="text-4xl md:text-7xl font-bold text-brand-text mb-3 leading-none tracking-tighter group-hover:text-brand-gold transition-colors duration-500">
                {stat.value}
              </div>
              {/* Subtle Glow behind the value */}
              <div className="absolute inset-0 bg-brand-gold/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-gold font-black opacity-40 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
