'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const experienceData = [
    {
        year: '2024 - Present',
        role: 'Senior Frontend Engineer',
        company: 'TechFlow Solutions',
        description: 'Leading the frontend team in building next-gen SaaS products using Next.js and Tailwind. Optimized performance by 40%.'
    },
    {
        year: '2022 - 2024',
        role: 'Creative Developer',
        company: 'Mirage Studio',
        description: 'Developed award-winning immersive web experiences for high-end fashion brands using WebGL and GSAP.'
    },
    {
        year: '2020 - 2022',
        role: 'Full Stack Developer',
        company: 'Nexus Innovations',
        description: 'Built scalable e-commerce platforms and internal tools with React and Node.js.'
    }
];

export default function Experience() {
    const containerRef = useRef(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        const items = gsap.utils.toArray('.experience-item');

        items.forEach((item: any) => {
            gsap.fromTo(item,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                    }
                }
            );
        });

        // Line animation
        gsap.fromTo('.timeline-line',
            { scaleY: 0 },
            {
                scaleY: 1,
                transformOrigin: 'top',
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 80%',
                    scrub: true
                }
            }
        );
     }); return () => ctx.revert(); }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 bg-black text-white relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-24 tracking-tighter text-center">Experience</h2>

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical Line */}
                    <div className="timeline-line absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/20 origin-top hidden md:block" />
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20 md:hidden" />

                    <div className="space-y-16">
                        {experienceData.map((exp, index) => (
                            <div key={index} className={`experience-item flex flex-col md:flex-row gap-8 md:gap-32 relative ${index % 2 === 0 ? 'md:text-right md:flex-row-reverse' : ''}`}>

                                {/* Date (Opposite side on desktop) */}
                                <div className="hidden md:block w-1/2 pt-2">
                                    <span className="text-xl font-mono text-zinc-500">{exp.year}</span>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />

                                {/* Content */}
                                <div className="md:w-1/2">
                                    <span className="md:hidden text-lg font-mono text-zinc-500 block mb-2">{exp.year}</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-xl text-zinc-400 mb-4">{exp.company}</h4>
                                    <p className="text-zinc-400 leading-relaxed max-w-md ml-auto mr-0 md:mr-auto">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
