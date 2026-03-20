'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
    const containerRef = useRef(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        const text = textRef.current;
        if (!text) return;

        // Split text into words (simple version)
        const words = text.innerText.split(' ');
        text.innerHTML = words.map(word => `<span class="inline-block opacity-0 translate-y-4 about-word mr-2">${word}</span>`).join('');

        gsap.to('.about-word', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1
            },
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: 'power2.out'
        });

     }); return () => ctx.revert(); }, []);

    return (
        <section id="about" ref={containerRef} className="min-h-screen py-24 px-6 bg-zinc-950 flex items-center justify-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-sm font-mono text-primary mb-8 uppercase tracking-widest">The Story</h2>
                <p ref={textRef} className="text-3xl md:text-5xl font-light leading-snug text-zinc-100">
                    I craft digital experiences that merge functionality with artistic expression. With a background in design and engineering, I specialize in building applications that feel intuitive, responsive, and alive. Each project is an opportunity to push boundaries and redefine what's possible on the web.
                </p>
            </div>
        </section>
    );
}
