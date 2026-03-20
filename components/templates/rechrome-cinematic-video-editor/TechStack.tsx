'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const techStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Node.js", "Figma", "Three.js", "WebGL", "PostgreSQL",
    "React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Node.js", "Figma", "Three.js", "WebGL", "PostgreSQL"
];

export default function TechStack() {
    const trackRef = useRef(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        const track = trackRef.current;

        // Calculate total width of one set of items to scroll exactly that amount
        // ideally we measure this, but for a simple marquee, translating xPercent is easier if we have enough duplicates

        gsap.to(track, {
            xPercent: -50, // Move half the width (since we duplicated the list)
            ease: "none",
            duration: 20,
            repeat: -1
        });
     }); return () => ctx.revert(); }, []);

    return (
        <section className="py-20 bg-black overflow-hidden border-b border-white/5">
            <div className="relative w-full">
                <div
                    ref={trackRef}
                    className="flex whitespace-nowrap gap-16 md:gap-32 w-max"
                >
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-900 opacity-50 hover:opacity-100 hover:from-white hover:to-zinc-400 transition-all duration-300 cursor-default select-none"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Vignette effect for smooth fade on edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
