import { motion } from 'motion/react';
import { DATA } from '../constants';
import React, { useState } from 'react';
import { Brand } from '../types';

export const BrandWall = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-brand-surface/30 backdrop-blur-md overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-12 h-px bg-brand-gold/30" />
          <p className="text-[11px] md:text-[13px] uppercase tracking-[0.7em] text-brand-gold font-black text-center">
            Institutional Brand Partners & Legacy Architecture
          </p>
        </motion.div>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <motion.div 
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Faster feels more responsive
              ease: "linear",
            },
          }}
          className="flex gap-10 px-4 whitespace-nowrap items-center transform-gpu will-change-transform"
          style={{ width: "max-content" }}
        >
          {[...DATA.brands, ...DATA.brands].map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="inline-block px-2">
              {brand.link ? (
                <a 
                  href={brand.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <BrandIcon brand={brand} />
                </a>
              ) : (
                <BrandIcon brand={brand} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Cinematic Side Fades */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-brand-bg via-brand-bg/80 to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

const BrandIcon = ({ brand }: { brand: Brand }) => {
  const [error, setError] = useState(false);

  return (
    <motion.div
      whileHover={{ 
        scale: 1.1,
        borderColor: 'rgba(255,184,0,0.4)',
        backgroundColor: 'rgba(255,184,0,0.08)',
        boxShadow: '0 15px 50px -12px rgba(255,184,0,0.25)'
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="px-10 py-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center transition-all duration-300 group cursor-pointer relative overflow-hidden min-w-[180px] h-[64px]"
    >
      {!error && brand.logo ? (
        <img 
          src={brand.logo} 
          alt={brand.name} 
          loading="eager" // Key visual: render immediately
          decoding="async"
          onError={() => setError(true)}
          className="max-h-6 md:max-h-8 w-auto object-contain grayscale group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-500 opacity-50 group-hover:opacity-100"
        />
      ) : (
        <span className="text-[12px] font-black uppercase text-brand-text/40 group-hover:text-brand-gold transition-colors tracking-[0.25em] whitespace-nowrap">
          {brand.name}
        </span>
      )}
    </motion.div>
  );
};
