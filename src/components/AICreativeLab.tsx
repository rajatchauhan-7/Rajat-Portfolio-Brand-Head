import { motion, useScroll, useTransform } from 'motion/react';
import { DATA } from '../constants';
import { useRef } from 'react';

export const AICreativeLab = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="ai-engine" ref={scrollRef} className="py-24 lg:py-40 border-y border-white/5 relative overflow-hidden bg-brand-surface/40">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-24">
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
             >
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                 <span className="text-brand-gold font-bold text-[10px] tracking-[0.6em] uppercase">Intelligence Architecture</span>
               </div>
               <h2 className="text-6xl md:text-8xl font-bold text-brand-text tracking-tighter leading-[0.9] mb-10">
                 {DATA.aiPipeline.title.split(' ')[0]} <br />
                 <span className="italic font-light text-brand-text/30">{DATA.aiPipeline.title.split(' ').slice(1).join(' ')}</span>
               </h2>
               <p className="text-xl text-brand-text/50 font-light leading-relaxed max-w-xl italic">
                 {DATA.aiPipeline.subtitle}
               </p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               whileHover={{ scale: 1.02 }}
               viewport={{ once: true }}
               transition={{ 
                 opacity: { duration: 1 },
                 scale: { duration: 1 },
                 whileHover: { duration: 0.8, ease: "easeOut" }
               }}
               className="aspect-[16/9] lg:aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl group relative cursor-pointer"
             >
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000" 
                  alt="AI Workflow"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
             </motion.div>
          </div>
        </div>
      </div>

      {/* Horizon-Style Pipeline Steps Slider */}
      <div className="relative w-full overflow-hidden mb-24">
        <motion.div 
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-8 px-4 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {[...DATA.aiPipeline.steps, ...DATA.aiPipeline.steps].map((step, i) => (
            <motion.div
              key={`${step.id}-${i}`}
              whileHover={{ scale: 1.02 }}
              className="inline-block w-[320px] md:w-[450px] p-10 lg:p-14 bg-brand-surface border border-white/5 rounded-[3rem] group relative overflow-hidden backdrop-blur-xl whitespace-normal shrink-0"
            >
              <div className="text-[12rem] lg:text-[18rem] font-bold text-brand-gold/[0.03] absolute -bottom-10 -right-10 tracking-tighter pointer-events-none group-hover:text-brand-gold/[0.06] transition-colors leading-none">
                0{(i % DATA.aiPipeline.steps.length) + 1}
              </div>

              <div className="relative z-10 space-y-8">
                <div className="w-12 h-px bg-brand-gold/20 group-hover:w-20 transition-all duration-700" />
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-brand-text uppercase tracking-tight">{step.label}</h3>
                  <p className="text-brand-text/50 font-light leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
                
                <div className="pt-8">
                  <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 2 }}
                      className="h-full bg-brand-gold/40"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Side Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:max-w-3xl flex flex-col md:flex-row items-center gap-10 md:gap-16 p-12 md:p-16 bg-brand-gold/[0.03] border border-brand-gold/10 rounded-[4rem] backdrop-blur-3xl relative overflow-hidden group cursor-pointer"
          >
             {/* Decorative Background Element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full group-hover:bg-brand-gold/10 transition-colors" />
             
             <div className="text-7xl lg:text-9xl font-light text-brand-gold tracking-tighter italic leading-none shrink-0">40%</div>
             
             <div className="relative z-10 flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-px bg-brand-gold/30" />
                 <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold opacity-100">Performance Benchmark</p>
               </div>
               <h4 className="text-xl md:text-2xl font-bold text-brand-text mb-4 uppercase tracking-tight">Increased Production Velocity</h4>
               <p className="text-brand-text/50 font-light leading-relaxed text-sm md:text-base">
                 By layering custom-trained models with strategic narrative anchors, we achieve a level of creative density and personal resonance that manual production simply cannot match. This is the industrialization of premium brand storytelling.
               </p>
             </div>

             {/* Bottom Progress Bar Decoration */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold/5">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '40%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
                  className="h-full bg-brand-gold/40"
                />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
