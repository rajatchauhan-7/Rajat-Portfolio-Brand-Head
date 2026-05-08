import { m } from 'motion/react';
import { DATA } from '../constants';
import { ArrowRight, Target } from 'lucide-react';
import { useRef } from 'react';
import { Project } from '../types';

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: string }) => {
  return (
    <div 
      className="w-full relative min-h-[75vh] lg:h-screen max-h-[900px] flex items-center py-12 lg:py-0"
    >
      <m.div
        initial={{ opacity: 0 }}
        whileHover={{ y: -10, scale: 1.005 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch font-inter w-full min-h-[75vh] lg:h-full relative group/card overflow-hidden transform-gpu transition-all duration-500`}
      >
        {/* Atmospheric background glow for the active card */}
        <div className="absolute inset-0 bg-brand-gold/[0.02] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 blur-[150px] opacity-0 group-hover/card:opacity-100 transition-all duration-1000 rounded-full scale-50 group-hover/card:scale-100 pointer-events-none z-0" />
        
        {/* Visual Aspect - Full Bleed */}
        <div className="w-full lg:w-[55%] relative overflow-hidden min-h-[40vh] lg:min-h-full">

          <div className="relative w-full h-full overflow-hidden">
            <img 
              src={project.images[0]} 
              alt={project.brand}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-[2000ms] ease-out will-change-transform"
            />
            <div className="absolute inset-0 bg-black/50 mix-blend-multiply group-hover/card:bg-transparent transition-colors duration-1000" />
          </div>
          
          {/* Large Floating ID Tag */}
          <div className="absolute top-8 left-8 text-white/5 font-black text-[10rem] lg:text-[16rem] tracking-tighter select-none pointer-events-none group-hover:text-white/10 transition-colors duration-1000 leading-none">
            {String(project.id).padStart(2, '0')}
          </div>
        </div>

        {/* Strategy Aspect - More Focused Flow */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center p-8 lg:p-12 xl:p-16 space-y-6 relative z-10 bg-brand-bg/95 backdrop-blur-sm border-x border-white/5 lg:border-none min-h-full">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-brand-gold font-bold text-[9px] tracking-[0.5em] uppercase font-mono">{project.tag}</span>
              <div className="w-10 h-px bg-brand-accent/20" />
              <span className="text-brand-text/30 text-[9px] font-mono">{project.period}</span>
            </div>
            <h3 className="text-4xl lg:text-7xl xl:text-8xl font-bold text-brand-text tracking-tighter leading-[0.8] uppercase">{project.brand}</h3>
            <p className="text-brand-gold uppercase text-[9px] font-bold tracking-[0.35em] italic opacity-60">{project.role}</p>
          </div>

          <div className="space-y-6 py-6 border-y border-brand-accent/5">
            <p className="text-base lg:text-lg text-brand-text/50 font-light leading-relaxed max-w-lg">
              {project.desc.split(/(Situation:|Task:|Action:|Result:)/).map((part: string, idx: number) => {
                if (['Situation:', 'Task:', 'Action:', 'Result:'].includes(part)) {
                  return <span key={idx} className="text-brand-gold font-semibold italic">{part} </span>;
                }
                return part;
              })}
            </p>
            <div className="space-y-3">
              <h4 className="text-brand-text/40 uppercase text-[8px] font-bold tracking-[0.4em] flex items-center gap-2">
                <Target size={10} className="text-brand-gold/60" /> Core Objectives
              </h4>
              <ul className="space-y-2">
                {project.approach.slice(0, 3).map((item: string, idx: number) => (
                  <li key={idx} className="text-[12px] text-brand-text/40 font-light pl-4 border-l border-brand-gold/20">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {project.metrics.map((metric: any) => (
              <div 
                key={metric.label}
                className="bg-white/[0.02] border border-white/5 px-4 py-3 rounded-lg flex flex-col items-center group/metric hover:border-brand-gold/20 transition-all duration-500"
              >
                <span className="text-xl lg:text-2xl font-light text-brand-gold mb-0.5">{metric.val}</span>
                <span className="text-[8px] text-brand-text/30 uppercase tracking-widest font-bold text-center">{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            {project.link ? (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <m.button 
                  whileHover={{ scale: 1.01, x: 5 }}
                  className="w-full flex items-center justify-between gap-4 text-brand-text font-bold uppercase text-[9px] tracking-[0.4em] group/btn bg-brand-accent/5 px-6 py-4 rounded-lg hover:bg-brand-gold/10 transition-all duration-300 border border-brand-accent/10"
                >
                  Project Deep Dive <ArrowRight size={12} className="text-brand-gold group-hover/btn:translate-x-1 transition-transform" />
                </m.button>
              </a>
            ) : (
              <div className="text-white/10 font-bold uppercase text-[8px] tracking-[0.3em] px-6 py-4 border border-white/5 rounded-lg inline-block w-full text-center italic">
                Case Study Documentation Under NDA
              </div>
            )}
          </div>
        </div>
      </m.div>
    </div>
  );
};

export const PortfolioSection = () => {
  return (
    <section id="work" className="relative py-0 lg:py-0 overflow-visible">
      {/* Portfolio Backdrop Image - Fixed and Subtle */}
      <div className="absolute top-0 inset-x-0 h-screen -z-10 pointer-events-none overflow-hidden">
        <m.div 
          animate={{ 
            y: [-20, 20, -20],
            rotate: [-1, 1, -1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-10 right-10 w-[400px] md:w-[600px] aspect-[3/4] opacity-20 blur-xl"
        >
          <img 
            src="https://i.postimg.cc/yYbHBQL3/IMG-4248.jpg" 
            alt="Backdrop" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale rounded-full will-change-transform"
          />
        </m.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end pt-32 pb-40 px-6 lg:px-24 gap-12 relative z-10 max-w-7xl mx-auto">
        <m.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <div className="w-12 h-px bg-brand-gold/40" />
            <span className="text-brand-gold font-mono text-xs tracking-[0.6em] uppercase">Selected Work</span>
          </div>
          <h2 className="text-6xl md:text-[10rem] font-bold text-brand-text tracking-tighter leading-[0.8] mb-12 drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            Engineered <br /> <span className="italic font-light text-brand-gold drop-shadow-[0_0_30px_rgba(255,184,0,0.2)] underline decoration-brand-gold/10 underline-offset-[20px]">Outcomes.</span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-text/50 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            A surgical breakdown of results. Every strategy is data-backed, every creative choice is intentional.
          </p>
        </m.div>
      </div>

      <div className="relative w-full">
        {DATA.projects.map((project, i) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={i} 
          />
        ))}
      </div>
    </section>
  );
};
