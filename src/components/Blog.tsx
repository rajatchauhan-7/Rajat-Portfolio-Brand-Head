import { motion } from 'motion/react';
import { DATA } from '../constants';
import { Clock, ChevronRight } from 'lucide-react';

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Industry Knowledge</span>
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-8">
              Curated <br /> <span className="italic font-light text-gray-500">Insights.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              A selection of foundational industry research and thought leadership that defines the strategies I architect for modern brands.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {DATA.blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ scale: 1.03 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onClick={() => post.link && window.open(post.link, '_blank')}
              className="group p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] hover:border-brand-gold/30 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-center gap-4 text-[10px] text-brand-gold mb-8 font-mono uppercase tracking-[0.2em] font-bold">
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 group-hover:text-brand-gold transition-colors leading-tight tracking-tight">
                {post.title}
              </h3>
              
              <p className="text-gray-400 mb-10 font-light leading-relaxed text-sm lg:text-base">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{post.date}</span>
                <ChevronRight size={16} className="text-brand-gold group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
