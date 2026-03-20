'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        const tl = gsap.timeline();

        tl.fromTo('.hero-text-line',
            { y: 100, opacity: 0, rotateX: -45 },
            { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out' }
        );

        tl.fromTo('.hero-sub',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.5"
        );

        gsap.to('.hero-bg-glow', {
            scale: 1.5,
            opacity: 0.8,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

     }); return () => ctx.revert(); }, []);

    return (
        <section ref={containerRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-background">

            {/* Background Ambience */}
            <div className="hero-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div ref={textRef} className="z-10 text-center flex flex-col items-center gap-4 px-4">
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] flex flex-col">
                    <span className="hero-text-line block">DIGITAL</span>
                    <span className="hero-text-line block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ALCHEMY</span>
                </h1>

                <p className="hero-sub max-w-md text-sm md:text-base text-gray-400 mt-8 font-mono">
                    Turning complex ideas into polished digital experiences.
                </p>

                <div className="hero-sub mt-12 flex gap-4">
                    <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                        View Work
                    </button>
                    <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-semibold">
                        Contact Me
                    </button>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-500 rounded-full animate-scroll-hint" />
                </div>
            </div>
        </section>
    );
}
