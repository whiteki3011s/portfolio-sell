'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function HeroSection() {
    const textRef = useRef(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        gsap.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
        );
     }); return () => ctx.revert(); }, []);

    return (
        <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
            <div ref={textRef} className="z-10 text-center flex flex-col items-center gap-6 px-4">
                <h1 className="text-[10vw] leading-[0.8] font-black uppercase tracking-tighter mix-blend-difference">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
                        VIDEO
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
                        EDITOR
                    </span>
                </h1>

                <h2 className="text-xl md:text-2xl font-light text-zinc-400 max-w-2xl tracking-wide">
                    Crafting cinematic stories through cuts, rhythm & emotion.
                </h2>

                <div className="flex flex-col md:flex-row gap-6 mt-12 items-center">
                    <Link href="/demos/rechrome-cinematic-video-editor/showreel" className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-widest overflow-hidden rounded-full hover:scale-105 transition-transform duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            Watch Reel
                        </span>
                        {/* Liquid Hover Effect */}
                        <div className="absolute inset-0 bg-cyan-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)]" />
                        {/* Glow Burst */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 bg-cyan-400 blur-xl transition-opacity duration-500" />
                    </Link>

                    <Link href="/demos/rechrome-cinematic-video-editor/contact" className="group px-8 py-4 border border-white/20 rounded-full font-bold uppercase tracking-widest hover:bg-white/5 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 text-white">
                        <span>Hire Me</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:animate-ping" />
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] animate-pulse">
                Scroll to Explore
            </div>
        </section>
    );
}
