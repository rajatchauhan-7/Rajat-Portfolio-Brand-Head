/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero } from './components/Hero';
import { AboutSection } from './components/About';
import { BrandWall } from './components/BrandWall';
import { ExperienceSection } from './components/Experience';
import { TestimonialsSection } from './components/Testimonials';
import { CompetenciesSection } from './components/Competencies';
import { PortfolioSection } from './components/Portfolio';
import { MethodologySection } from './components/Methodology';
import { CommunityShowcase } from './components/CommunityShowcase';
import { AICreativeLab } from './components/AICreativeLab';
import { BlogSection } from './components/Blog';
import { ProcessSection } from './components/Process';
import { ServicesSection } from './components/Services';
import { StackSection } from './components/Stack';
import { Footer } from './components/Footer';
import { Suspense, lazy } from 'react';

const GhostCursor = lazy(() => import('./components/GhostCursor'));

export default function App() {
  return (
    <div className={`relative overflow-x-hidden min-h-screen bg-brand-bg transition-colors duration-700`}>
      
      <Suspense fallback={null}>
        <GhostCursor 
          color="#B8860B" 
          trailLength={25} 
          bloomStrength={0.4} 
          brightness={1.5}
          zIndex={40}
        />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <BrandWall />
        <PortfolioSection />
        <ProcessSection />
        <CommunityShowcase />
        <AICreativeLab />
        <MethodologySection />
        <CompetenciesSection />
        <ExperienceSection />
        <TestimonialsSection />
        <BlogSection />
        <ServicesSection />
        <StackSection />
      </main>
      <Footer />
      
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
        <div className={`absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-brand-accent/5 blur-[150px] rounded-full transition-colors duration-700`} />
        <div className={`absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-brand-gold/5 blur-[120px] rounded-full transition-colors duration-700`} />
      </div>

      {/* Grain texture overlay */}
      {/* <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" /> */}
    </div>
  );
}
