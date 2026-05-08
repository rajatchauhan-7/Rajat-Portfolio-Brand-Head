import { m } from 'motion/react';
import { Sparkles, Users, Database, Video } from 'lucide-react';

const methodologies = [
  {
    title: "AI-Assisted Production",
    description: "Leveraging Claude & Midjourney for scripting and CapCut/DaVinci for high-retention reel production. Cutting turnaround time by 40% while doubling visual quality.",
    icon: Sparkles,
    metrics: ["40% Faster Delivery", "70-80% Retention View Rate"]
  },
  {
    title: "Influencer GTM Systems",
    description: "End-to-end management from whitelisting to ROI tracking. Focused on nano-influencer seeding to drive organic impressions at 60% lower cost.",
    icon: Users,
    metrics: ["3M+ Organic reach", "60% Cost efficiency"]
  },
  {
    title: "Data-First Narrative",
    description: "Integrating UTM tracking and GA4 insights into creative decisions. Every frame is backed by engagement data to ensure revenue-linked growth.",
    icon: Database,
    metrics: ["28% Lead uplift", "35% Better ROI"]
  }
];

export const MethodologySection = () => {
  return (
    <section className="py-40 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div>
            <span className="text-brand-gold font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">The Methodology</span>
            <h2 className="text-6xl font-bold text-white tracking-tighter leading-none">
              Where Strategy <br /> <span className="italic font-light">Becomes Scale.</span>
            </h2>
          </div>
          
          <div className="space-y-10">
            {methodologies.map((method, i) => (
              <m.div 
                key={method.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                  <method.icon className="text-brand-gold group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{method.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed max-w-lg">{method.description}</p>
                  <div className="flex gap-4">
                    {method.metrics.map(m => (
                      <span key={m} className="text-[10px] font-mono text-brand-gold uppercase tracking-widest font-bold bg-brand-gold/5 px-3 py-1 rounded-full">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <m.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000 group relative"
          >
             <img 
               src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1024" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               alt="Creative Workspace"
             />
             <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay" />
          </m.div>
        </div>
      </div>
    </section>
  );
};
