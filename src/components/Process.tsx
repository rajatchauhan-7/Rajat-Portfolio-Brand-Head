import { m } from 'motion/react';
import { DATA } from '../constants';
import { Search, PenTool, Zap, BarChart3 } from 'lucide-react';

const icons = [Search, PenTool, Zap, BarChart3];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-40 px-6 max-w-7xl mx-auto">
      <div className="mb-24">
        <span className="text-brand-gold font-mono text-xs tracking-[0.4em] uppercase mb-6 block">How I Work</span>
        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-10">
          Great results are <br /> <span className="italic font-light text-gray-500">never accidents.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {DATA.process?.map((step, i) => {
          const Icon = icons[i];
          return (
            <m.div
              key={step.phase}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative"
            >
              <div className="text-[5rem] font-serif font-bold text-white/[0.03] absolute -top-10 -left-6 leading-none group-hover:text-brand-gold/10 transition-colors">
                {step.phase}
              </div>
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-all">
                  <Icon className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-6 italic">"{step.desc}"</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 mb-2">Deliverable</p>
                  <p className="text-sm text-white font-medium">{step.deliverable}</p>
                </div>
              </div>
            </m.div>
          );
        })}
      </div>
    </section>
  );
};
