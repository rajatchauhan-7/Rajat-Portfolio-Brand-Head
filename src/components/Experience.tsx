import { m } from 'motion/react';
import { DATA } from '../constants';
import { ExternalLink, Briefcase, Users, Calendar } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-40 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 lg:mb-32">
        <m.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <span className="text-brand-gold font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Career Trajectory</span>
          <h2 className="text-6xl md:text-[5.5rem] font-bold text-white tracking-tighter leading-none mb-8">Professional <span className="italic font-light text-gray-500">Impact.</span></h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Navigating the evolution of digital brand building for nearly a decade.
          </p>
        </m.div>
      </div>

      <div className="space-y-6">
        {DATA.experiences.map((exp, i) => (
          <m.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.01 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#0D1120]/40 backdrop-blur-xl p-10 lg:p-16 rounded-[2.5rem] border border-white/5 hover:border-brand-gold/30 transition-all duration-700"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">
                  <Calendar size={12} className="text-brand-gold" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-gray-500">{exp.period}</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold text-white leading-tight tracking-tight">{exp.role}</h3>
                  <div className="flex items-center gap-4">
                    <p className="text-2xl font-light text-brand-gold">{exp.company}</p>
                    <div className="h-px flex-grow bg-white/5" />
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600 text-[10px] font-mono tracking-widest uppercase font-bold">
                  <Briefcase size={12} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="lg:col-span-1 h-px lg:h-full lg:w-px bg-white/5" />

              <div className="lg:col-span-6 flex flex-col justify-center">
                <ul className="space-y-6">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-6 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/20 mt-2.5 shrink-0 group-hover/item:bg-brand-gold transition-colors" />
                      <p className="text-gray-400 group-hover/item:text-gray-200 transition-colors text-lg font-light leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
};
