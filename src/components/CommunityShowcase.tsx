import { m } from 'motion/react';
import { DATA } from '../constants';
import { Users, Zap, ChevronRight, Share2 } from 'lucide-react';

export const CommunityShowcase = () => {
  return (
    <section id="laboratory" className="py-20 lg:py-40 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <m.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <span className="text-brand-gold font-mono text-xs tracking-[0.4em] uppercase mb-6 block">The Live Laboratory</span>
          <h2 className="text-6xl md:text-[5rem] font-bold text-white tracking-tighter leading-none mb-8">
            Proving The <span className="italic font-light text-gray-500">System.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            I don't just architect systems; I build communities fueled by genuine interest. From cinema to niche subcultures, I have engineered loyal spaces from scratch, proving that with the right narrative framework, scaling an organic presence is a predictable science.
          </p>
        </m.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {DATA.communities.map((item, i) => (
          <m.div
            key={item.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#0D1120]/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-brand-gold/30 transition-all duration-700 p-2 transform-gpu"
          >
            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-8 transform-gpu">
              <img 
                src={item.image} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[2s] group-hover:scale-105 will-change-transform" 
                alt={item.handle}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Share2 size={20} className="text-white" />
                </div>
                <div>
                   <h4 className="text-white font-bold text-xl tracking-tight">{item.handle}</h4>
                   <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{item.platform}</p>
                </div>
              </div>
            </div>

            <div className="px-8 pb-10 space-y-8">
              <div className="flex gap-12 border-b border-white/5 pb-8">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-4xl font-light text-brand-gold tracking-tighter">{item.followers}</span>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-gray-600 font-bold font-mono">Active Community</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-4xl font-light text-white tracking-tighter italic">{item.engagement}</span>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-gray-600 font-bold font-mono"> Engagement Velocity</p>
                </div>
              </div>
              
              <p className="text-gray-400 font-light text-lg leading-relaxed italic border-l-2 border-brand-gold/30 pl-6">
                "{item.description}"
              </p>
              
              {item.link ? (
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white hover:text-brand-gold transition-colors pt-4 group">
                    View Live Testing Hub <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              ) : (
                <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 pt-4 cursor-not-allowed">
                  Hub Under Construction
                </button>
              )}
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
};
