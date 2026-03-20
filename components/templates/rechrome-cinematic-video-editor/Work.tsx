'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Work() {
    const containerRef = useRef(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        const cards = gsap.utils.toArray('.project-card');

        cards.forEach((card: any, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    }
                }
            );
        });
     }); return () => ctx.revert(); }, []);

    return (
        <section id="work" ref={containerRef} className="min-h-screen py-32 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-24 border-b border-zinc-800 pb-8">
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Selected<br />Work</h2>
                    <p className="hidden md:block text-right text-gray-400 max-w-xs">
                        A curated collection of projects that define my journey and capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <Link href={`/work/${project.slug}`} key={index}>
                            <div className="project-card group relative p-8 md:p-12 border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/80 transition-all duration-500 rounded-2xl overflow-hidden cursor-pointer">
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 relative z-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-primary">
                                            <span>{project.category}</span>
                                            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-400 max-w-md group-hover:text-zinc-300 transition-colors">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="md:self-start">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
