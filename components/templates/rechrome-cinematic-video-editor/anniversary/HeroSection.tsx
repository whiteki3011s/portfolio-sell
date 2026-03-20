'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HeroSection() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        gsap.registerPlugin(ScrollTrigger);

        // Ambience
        gsap.to('.hero-glow', {
            scale: 1.2,
            opacity: 0.5,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Parallax Text
        gsap.to(textRef.current, {
            yPercent: 50,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

     }); return () => ctx.revert(); }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Texture/Glow */}
            <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div ref={textRef} className="relative z-10 text-center flex flex-col items-center">
                <p className="text-sm md:text-base font-mono text-zinc-500 mb-6 uppercase tracking-widest">
                    Digital Creator • Video Editor • Visual Artist
                </p>
                <h1 className="text-[15vw] leading-[0.85] font-black uppercase tracking-tighter mix-blend-difference flex flex-col items-center">
                    <span>RECHROME</span>
                </h1>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-white" />
            </div>

            {/* Floating Socials */}
            <div className="hidden md:flex flex-col gap-6 fixed right-8 bottom-12 z-40 mix-blend-difference">
                {['TW', 'IG', 'YT', 'BE'].map((social) => (
                    <span key={social} className="text-xs font-bold hover:opacity-50 cursor-pointer transition-opacity">{social}</span>
                ))}
            </div>
        </section>
    );
}
