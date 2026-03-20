'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Rechrome3DHero() {
    const textRef = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax for background elements
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    useEffect(() => {
        // Entrance Animation
        const tl = gsap.timeline();

        tl.fromTo(".hero-text-char",
            { y: 100, opacity: 0, rotateX: -45 },
            { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 1.2, ease: "power4.out" }
        )
            .fromTo(".hero-sub",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(".hero-btn",
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5, ease: "back.out(1.7)" },
                "-=0.3"
            );

    }, []);

    return (
        <section id="hero" ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0B0B0E] text-white perspective-1000">


            {/* Neon Atmosphere */}
            <motion.div style={{ y: y1 }} className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#00E5FF]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <motion.div style={{ y: y2 }} className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF3BDA]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            {/* Main Content */}
            <div className="z-10 text-center flex flex-col items-center justify-center gap-8 px-4 relative mt-20">

                {/* Brand Identity */}
                <h1 className="hero-title text-[10vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter"
                    style={{ textShadow: '0 0 40px rgba(0,229,255,0.3)' }}>
                    <div className="overflow-hidden flex justify-center gap-4">
                        <span className="hero-text-char block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">RECHROME</span>
                        <span className="hero-text-char block text-[#00E5FF]">-3D</span>
                    </div>
                </h1>

                <p className="hero-sub font-mono text-xs md:text-sm text-[#4FA3FF] tracking-[0.3em] uppercase backdrop-blur-sm px-6 py-2 border border-white/10 rounded-full bg-[#0B0B0E]/50">
                    Cinematic Editing • 3D Interaction • Modern Design
                </p>

                {/* CTAs */}
                <div className="flex flex-col md:flex-row gap-6 mt-8 items-center">
                    <button className="hero-btn group relative px-8 py-4 bg-[#00E5FF] text-black font-bold uppercase tracking-widest text-xs overflow-hidden rounded-sm hover:scale-105 transition-transform duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                            Watch Showreel
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    </button>

                    <button className="hero-btn group px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-all rounded-sm backdrop-blur-md">
                        Explore Projects
                    </button>
                </div>
            </div>

        </section>
    );
}
