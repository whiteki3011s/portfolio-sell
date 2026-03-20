'use client';

import { motion } from 'framer-motion';

const technologies = [
    'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion',
    'GSAP', 'Three.js', 'WebGL', 'Node.js', 'MongoDB', 'AWS', 'Vercel'
];

export default function TechStack() {
    return (
        <section className="py-20 border-y border-white/5 bg-black/20 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Powered by Modern Tech
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
                    {technologies.map((tech) => (
                        <span key={tech} className="text-4xl md:text-6xl font-bold text-white/20 hover:text-white/80 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16">
                    {technologies.map((tech) => (
                        <span key={`${tech}-duplicate`} className="text-4xl md:text-6xl font-bold text-white/20 hover:text-white/80 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
