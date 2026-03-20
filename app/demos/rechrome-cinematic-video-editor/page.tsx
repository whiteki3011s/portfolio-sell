'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/templates/rechrome-cinematic-video-editor/anniversary/LoadingScreen'; // Reuse or update
import CameraRig from '@/components/templates/rechrome-cinematic-video-editor/video-portfolio/CameraRig';
import HeroSection from '@/components/templates/rechrome-cinematic-video-editor/video-portfolio/HeroSection';
import AboutSection from '@/components/templates/rechrome-cinematic-video-editor/video-portfolio/AboutSection';
import SkillsSection from '@/components/templates/rechrome-cinematic-video-editor/video-portfolio/SkillsSection';
import ShowreelSection from '@/components/templates/rechrome-cinematic-video-editor/video-portfolio/ShowreelSection';
import TimelineSection from '@/components/templates/rechrome-cinematic-video-editor/video-portfolio/TimelineSection';
import BreakdownSection from '@/components/templates/rechrome-cinematic-video-editor/video-portfolio/BreakdownSection';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-black min-h-screen text-white relative selection:bg-cyan-500 selection:text-black">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* 3D Background Element */}
        <CameraRig />

        {/* Content Sections */}
        <HeroSection />
        <ShowreelSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <BreakdownSection />

        <footer className="py-20 text-center border-t border-white/5 relative z-10 bg-black">
          <h2 className="text-2xl font-black uppercase mb-8">Ready to Cut?</h2>
          <a href="mailto:hello@example.com" className="text-4xl md:text-6xl font-black hover:text-cyan-400 transition-colors uppercase">
            Let's Talk
          </a>
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest mt-12">
            © 2024 Video Portfolio. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
