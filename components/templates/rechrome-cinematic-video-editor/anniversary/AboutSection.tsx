'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutSection() {
    const sectionRef = useRef(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        gsap.fromTo('.about-text',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );
     }); return () => ctx.revert(); }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="about-text text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                    About<br />Rechrome
                </h2>
            </div>
            <div className="space-y-8 text-xl text-zinc-400 leading-relaxed font-light">
                <p className="about-text">
                    For five years, <strong className="text-white font-normal">RECHROME</strong> has been exploring the intersection of digital art and functional design. What started as a solo experiment has evolved into a studio defining the visual language of tomorrow.
                </p>
                <p className="about-text">
                    We believe in bold contrasts, cinematic motion, and the power of silence in design. Our work is not just seen; it is felt.
                </p>
                <div className="about-text w-full h-[300px] bg-zinc-900 mt-8 rounded-sm overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-black opacity-50" />
                    {/* Placeholder for collage image */}
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 uppercase font-black tracking-widest">
                        Studio Montage
                    </div>
                </div>
            </div>
        </section>
    );
}
