import { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Navbar, Hero } from './components/Hero';

// Explicitly loading sections fixes the Vercel Rollup crash
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
      <div className="relative overflow-x-hidden min-h-screen bg-[#0a0a0a] transition-colors duration-700">
        
        {/* The Safety Shield Canvas for your premium effects */}
        <div className="fixed inset-0 pointer-events-none -z-10">
           <Suspense fallback={null}>
             <Canvas dpr={[1, 1.2]} gl={{ antialias: false, powerPreference: "high-performance" }}>
                <ambientLight intensity={0.4} />
             </Canvas>
           </Suspense>
        </div>

        <Suspense fallback={
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
             <span className="text-[#B8860B] font-mono text-[10px] uppercase tracking-[0.2em] opacity-30">Loading Visuals...</span>
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
          
          <Suspense fallback={<div className="h-96 bg-black/50 animate-pulse" />}>
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
      </div>
    </LazyMotion>
  );
}
