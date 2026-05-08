import { m, useScroll, useTransform, useSpring } from 'motion/react';
import { DATA } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(smoothProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={containerRef} className="pt-12 pb-4 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Left Col: Photo & Mini Bio */}
        <div className="w-full lg:w-[32%] space-y-4">
          <m.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             style={{ y }}
             className="relative group"
          >
            <m.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border border-brand-accent/10 shadow-2xl relative z-10 bg-brand-surface aspect-[0.85]"
            >
              <img 
                src="https://i.postimg.cc/yYbHBQL3/IMG-4248.jpg" 
                alt={DATA.name}
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
            </m.div>
            {/* Minimalist accents */}
            <div className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-brand-gold/20 rounded-tl-2xl z-0" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-brand-gold/20 rounded-br-2xl z-0" />
          </m.div>

          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-4 rounded-xl bg-brand-surface border border-white/5"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
            </div>
            <p className="text-sm text-brand-text font-medium leading-tight">Creative Director at Natriel (HG Group)</p>
          </m.div>
        </div>

        {/* Right Col: Context & Roles */}
        <m.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full lg:w-[68%] py-2"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
            <div className="h-px flex-1 bg-brand-gold/5" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-brand-text leading-[1] tracking-tighter mb-8">
            Behind <span className="italic font-light text-brand-text/40">the</span> <br />
            Ecosystems
          </h2>

          <div className="flex flex-col gap-8 text-brand-text/60 font-light text-sm md:text-base leading-[1.8] tracking-wide mb-12">
            {DATA.about.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {DATA.about.specialisations.map((spec) => (
              <div 
                key={spec}
                className="flex items-center justify-center p-4 bg-white/[0.01] border border-white/5 rounded-lg hover:border-brand-gold/20 group hover:bg-white/[0.03] transition-all"
              >
                <span className="text-brand-text/40 text-[9px] font-bold tracking-[0.15em] uppercase text-center group-hover:text-brand-gold transition-colors">{spec}</span>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
};

