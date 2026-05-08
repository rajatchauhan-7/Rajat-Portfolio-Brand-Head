import { m, useScroll, useTransform } from 'motion/react';
import { DATA } from '../constants';
import { Quote } from 'lucide-react';
import { useRef } from 'react';

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Create a double version of data for seamless looping
  const duplicatedTestimonials = [...DATA.testimonials, ...DATA.testimonials];

  return (
    <section id="testimonials" className="py-32 border-y border-white/5 bg-brand-surface/20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-4 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
          <span className="text-brand-gold font-bold text-[11px] tracking-[0.5em] uppercase whitespace-nowrap">VOICE OF PARTNERS</span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-brand-text tracking-tighter">Trusted <span className="italic font-light text-brand-text/30">Insights.</span></h2>
      </div>

      <div className="relative flex w-full">
        <m.div 
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
          className="flex gap-8 py-4 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {duplicatedTestimonials.map((testimonial, i) => (
            <m.div
              key={`${testimonial.id}-${i}`}
              whileHover={{ scale: 1.02 }}
              className="inline-block w-[320px] md:w-[480px] p-8 md:p-14 bg-black/40 backdrop-blur-xl border border-white/5 rounded-[3rem] relative whitespace-normal group/card hover:border-brand-gold/30 transition-all shrink-0"
            >
              <Quote className="absolute top-10 right-10 text-brand-gold/5 w-16 h-16 group-hover/card:text-brand-gold/10 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-brand-text/80 italic mb-10 leading-relaxed text-base md:text-xl font-light">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-auto pt-8 border-t border-brand-gold/10 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold text-sm border border-brand-gold/10 shadow-inner">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-brand-text font-bold text-base md:text-lg leading-tight">{testimonial.name}</h4>
                    <p className="text-[10px] text-brand-gold/60 uppercase tracking-widest font-bold mt-1">
                      {testimonial.role} <span className="mx-2 text-white/5">/</span> {testimonial.company || 'Direct Partner'}
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>
        
        {/* Subtle Side Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};
