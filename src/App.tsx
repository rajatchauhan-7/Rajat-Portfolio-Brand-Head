import { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Navbar, Hero } from './components/Hero';

// Explicitly listing them fixes the "invalid import" error
const AboutSection = lazy(() => import('./components/About').then(m => ({ default: m.AboutSection })));
const BrandWall = lazy(() => import('./components/BrandWall').then(m => ({ default: m.BrandWall })));
const PortfolioSection = lazy(() => import('./components/Portfolio').then(m => ({ default: m.PortfolioSection })));
const ProcessSection = lazy(() => import('./components/Process').then(m => ({ default: m.ProcessSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="relative overflow-x-hidden min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        
        <Suspense fallback={<div className="fixed inset-0 bg-black flex items-center justify-center text-white">Loading...</div>}>
          <Hero />
          <main>
            <AboutSection />
            <BrandWall />
            <PortfolioSection />
            <ProcessSection />
            <Footer />
          </main>
        </Suspense>

        {/* Performance-friendly background blurs */}
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-yellow-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-orange-900/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </LazyMotion>
  );
}
