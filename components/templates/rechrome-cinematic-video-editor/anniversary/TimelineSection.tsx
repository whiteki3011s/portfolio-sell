'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const milestones = [
    { year: '2019', title: 'The Beginning', desc: 'Launched the first experimental site.' },
    { year: '2020', title: 'Neon Genesis', desc: 'First major client project featuring WebGL.' },
    { year: '2021', title: 'Expansion', desc: 'Partnered with global brands for immersive campaigns.' },
    { year: '2022', title: 'Award Season', desc: 'Won Awwwards Site of the Day x3.' },
    { year: '2023', title: 'New Heights', desc: 'Opened the physical studio in Tokyo.' },
    { year: '2024', title: 'The 5th Era', desc: 'Celebrating five years of digital alchemy.' },
];

export default function TimelineSection() {
    const containerRef = useRef(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        const items = gsap.utils.toArray('.milestone-item');

        items.forEach((item: any) => {
            gsap.fromTo(item,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    }
                }
            );
        });
     }); return () => ctx.revert(); }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-20 border-t border-white/5">
            <h2 className="text-4xl font-bold uppercase tracking-widest mb-24 text-center md:text-left">Milestones</h2>

            <div className="max-w-4xl mx-auto space-y-24 relative pl-8 border-l border-white/10">
                {milestones.map((m, i) => (
                    <div key={i} className="milestone-item relative pl-8 md:pl-16">
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_white]" />
                        <span className="text-8xl md:text-9xl font-black text-white/5 absolute -top-10 -left-4 md:-left-12 -z-10 select-none">
                            {m.year}
                        </span>

                        <div className="relative">
                            <h3 className="text-4xl md:text-5xl font-bold uppercase mb-4">{m.title}</h3>
                            <p className="text-zinc-400 text-lg max-w-md">{m.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
