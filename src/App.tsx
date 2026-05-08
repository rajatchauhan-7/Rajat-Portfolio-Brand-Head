import { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Navbar, Hero } from './components/Hero';

// Automatically loads all sections safely
const Sections = [
  'AboutSection', 'BrandWall', 'ExperienceSection', 'TestimonialsSection', 
  'CompetenciesSection', 'PortfolioSection', 'MethodologySection', 
  'CommunityShowcase', 'AICreativeLab', 'BlogSection', 'ProcessSection', 
  'ServicesSection', 'StackSection', 'Footer'
].map(name => lazy(() => import(`./components/${name.replace('Section', '')}`)));

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="relative overflow-x-hidden min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        
        {/* SAFETY SHIELD: This Canvas is the "Anchor" that prevents the GPU crash */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Suspense fallback={null}>
            <Canvas 
              dpr={[1, 1.2]} 
              gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
            >
              <color attach="background" args={['#0a0a0a']} />
              <ambientLight intensity={0.5} />
            </Canvas>
          </Suspense>
        </div>

        <Suspense fallback={<div className="fixed inset-0 bg-black flex items-center justify-center text-gold">Loading...</div>}>
          <Hero />
          <main>
            {Sections.map((Component, i) => (
              <Suspense key={i} fallback={<div className="h-20" />}>
                <Component />
              </Suspense>
            ))}
          </main>
        </Suspense>

        {/* Decorative background blurs - lighter on the system than 3D trails */}
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-yellow-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-orange-900/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </LazyMotion>
  );
}
