import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { m } from 'motion/react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-12 tracking-tighter leading-none">
              Let's Architect <br /> <span className="italic font-light text-brand-gold">The Future.</span>
            </h2>
            <div className="flex items-center gap-8">
              <a href="mailto:rajat.chauhan16may@gmail.com" className="text-2xl md:text-3xl text-white font-light hover:text-brand-gold transition-all pb-2">
                rajat.chauhan16may@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Socials</h4>
                <ul className="space-y-4">
                  <li><a href="https://www.linkedin.com/in/rajat-singh-chauhan-9298201b4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="mailto:rajat.chauhan16may@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Location</h4>
                <p className="text-gray-400">Open to Relocation & Remote Opportunities Globally.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
            © 2026 Rajat Singh Chauhan. Crafted with AI Precision.
          </div>
          
          <m.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
          >
            <ArrowUp size={20} />
          </m.button>

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/rajat-singh-chauhan-9298201b4/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:rajat.chauhan16may@gmail.com" className="text-gray-600 hover:text-white transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
