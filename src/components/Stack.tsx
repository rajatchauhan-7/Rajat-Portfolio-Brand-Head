import { motion } from 'motion/react';
import { DATA } from '../constants';

export const StackSection = () => {
  return (
    <section className="py-40 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-brand-gold font-mono text-xs tracking-[0.4em] uppercase mb-6 block">The Ecosystem</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            The tools that <br /> <span className="italic font-light">power the system.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold pb-4 border-b border-white/5">Research & Strategy</h3>
            <div className="flex flex-wrap gap-2">
              {DATA.stack?.influencer.split(', ').map(tool => (
                <span key={tool} className="px-3 py-1.5 bg-white/[0.03] border border-white/5 rounded-full text-xs text-brand-text/60 font-medium hover:text-brand-text hover:border-brand-gold/30 transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold pb-4 border-b border-white/5">Creative Orchestration</h3>
            <div className="flex flex-wrap gap-2">
              {DATA.stack?.production.split(', ').map(tool => (
                <span key={tool} className="px-3 py-1.5 bg-brand-gold/[0.03] border border-brand-gold/10 rounded-full text-xs text-brand-gold font-medium hover:bg-brand-gold/10 transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold pb-4 border-b border-white/5">Distribution Intelligence</h3>
            <div className="flex flex-wrap gap-2">
              {DATA.stack?.distribution.split(', ').map(tool => (
                <span key={tool} className="px-3 py-1.5 bg-white/[0.03] border border-white/5 rounded-full text-xs text-brand-text/60 font-medium hover:text-brand-text hover:border-brand-gold/30 transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 p-12 glass-card flex flex-col md:flex-row items-center justify-between gap-12">
           <div>
             <h4 className="text-2xl font-bold text-white mb-2">Ready to architect your own?</h4>
             <p className="text-gray-500">I'm currently open to Senior Roles & Select Consulting Projects.</p>
           </div>
           <button className="btn-premium whitespace-nowrap">Start a Conversation</button>
        </div>
      </div>
    </section>
  );
};
