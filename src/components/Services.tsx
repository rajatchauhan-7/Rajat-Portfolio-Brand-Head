import { motion } from 'motion/react';
import { DATA } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section id="consulting" className="py-24 lg:py-48 px-6 max-w-7xl mx-auto">
      <div className="mb-24 text-center lg:text-left">
        <span className="text-brand-gold font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Strategic Consulting</span>
        <h2 className="text-6xl md:text-8xl font-bold text-brand-text tracking-tighter leading-none mb-10">
          Direct Brand <br /> <span className="italic font-light text-brand-text/30">Partnerships.</span>
        </h2>
        <p className="text-xl text-brand-text/50 font-light leading-relaxed max-w-3xl mx-auto lg:mx-0">
          Beyond full-time leadership roles, I offer three focused consulting engagements meticulously structured around systems guaranteed to generate outcomes.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {DATA.services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 lg:p-12 flex flex-col hover:bg-white/[0.04] hover:border-brand-gold/30 transition-all"
          >
            <div className="text-[5rem] font-bold text-white/[0.02] absolute top-4 right-8 select-none group-hover:text-brand-gold/10 transition-colors">
              {String(i + 1).padStart(2, '0')}
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <div className="text-brand-gold font-mono text-sm font-bold tracking-widest uppercase mb-6">{service.price}</div>
                <p className="text-gray-400 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-gold mt-1 shrink-0" />
                    <span className="text-sm text-gray-500 font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ gap: '1.5rem' }}
                className="btn-outline w-full flex items-center justify-center gap-4 py-5 border-white/10 group-hover:border-brand-gold/50 transition-all rounded-2xl"
              >
                Book Discovery <ArrowRight size={16} className="text-brand-gold" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
