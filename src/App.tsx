/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero } from './components/Hero';
import { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation, m } from 'motion/react';
import { Canvas } from '@react-three/fiber';

const GhostCursor = lazy(() => import('./components/GhostCursor'));
const AboutSection = lazy(() => import('./components/About').then(m => ({ default: m.AboutSection })));
const BrandWall = lazy(() => import('./components/BrandWall').then(m => ({ default: m.BrandWall })));
const ExperienceSection = lazy(() => import('./components/Experience').then(m => ({ default: m.ExperienceSection })));
const TestimonialsSection = lazy(() => import('./components/Testimonials').then(m => ({ default: m.TestimonialsSection })));
const CompetenciesSection = lazy(() => import('./components/Competencies').then(m => ({ default: m.CompetenciesSection })));
const PortfolioSection = lazy(() => import('./components/Portfolio').then(m => ({ default: m.PortfolioSection })));
const MethodologySection = lazy(() => import('./components/Methodology').then(m => ({ default: m.MethodologySection })));
const CommunityShowcase = lazy(() => import('./components/CommunityShowcase').then(m => ({ default: m.CommunityShowcase })));
const AICreativeLab = lazy(() => import('./components/AICreativeLab').then(m => ({ default: m.AICreativeLab })));
const BlogSection = lazy(() => import('./components/Blog').then(m => ({ default: m.BlogSection })));
const ProcessSection = lazy(() => import('./components/Process').then(m => ({ default: m.ProcessSection })));
const ServicesSection = lazy(() => import('./components/Services').then(m => ({ default: m.ServicesSection })));
const StackSection = lazy(() => import('./components/Stack').then(m => ({ default: m.StackSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="relative overflow-x-hidden min-h-screen bg-brand-bg transition-colors duration-700">
        
        {/* Safety: This Canvas forces a low pixel ratio to prevent the 4K crash */}
        <div className="fixed inset-0 pointer-events-none -z-10">
           <Suspense fallback={null}>
             <Canvas dpr={[1, 1.2]} gl={{ antialias: false, powerPreference: "high-performance" }}>
                <ambientLight intensity={0.4} />
             </Canvas>
           </Suspense>
        </div>

        <Suspense fallback={
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
             <span className="text-brand-gold font-mono text-[10px] uppercase tracking-[0.2em] opacity-30">Loading Visuals...</span>
          </div>
        }>
          <GhostCursor 
            color="#B8860B" 
            trailLength={20} 
            bloomStrength={0.3} 
            brightness={1.2}
            zIndex={40}
          />
        </Suspense>
        
        <Navbar />
        
        <main>
          <Hero />
          
          <Suspense fallback={<div className="h-96 bg-brand-bg/50 animate-pulse" />}>
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
            <Footer />
          </Suspense>
        </main>
      
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
        <m.div 
          initial={false}
          className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-brand-accent/5 blur-[150px] rounded-full transition-colors duration-700" 
        />
        <m.div 
          initial={false}
          className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-brand-gold/5 blur-[120px] rounded-full transition-colors duration-700" 
        />
      </div>
    </div>
    </LazyMotion>
  );
}
