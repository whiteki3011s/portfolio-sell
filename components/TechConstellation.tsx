'use client';

import { motion } from 'framer-motion';
import {
    Code2, Globe, Database, Cpu, Layers, Zap,
    Layout, Box, Server, Smartphone, Cloud, PenTool, FileCode
} from 'lucide-react';
import { useState } from 'react';

const technologies = [
    { name: 'Next.js 15', icon: Globe, ring: 1, speed: 20 },
    { name: 'React 19', icon: Code2, ring: 1, speed: 25 },
    { name: 'TypeScript', icon: FileCode, ring: 2, speed: 30 },
    { name: 'Tailwind', icon: Layout, ring: 2, speed: 35 },
    { name: 'Framer', icon: Zap, ring: 2, speed: 28 },
    { name: 'Three.js', icon: Box, ring: 3, speed: 40 },
    { name: 'Node.js', icon: Server, ring: 3, speed: 45 },
    { name: 'Database', icon: Database, ring: 3, speed: 38 },
];

export default function TechConstellation() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    return (
        <section className="py-24 md:py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[800px]">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl -z-20" />
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 -z-20" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-4 inline-block">
                        Development Stack
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Powered by <span className="text-gradient">Modern Tech</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        Built with the latest tools for maximum performance and scalability.
                    </p>
                </motion.div>

                {/* Constellation Container */}
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                    {/* Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)] z-20">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                            <Cpu className="text-black w-8 h-8" />
                        </div>
                    </div>

                    {/* Orbit Rings */}
                    {[1, 2, 3].map((ring) => (
                        <div
                            key={ring}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                            style={{
                                width: `${ring * 30 + 30}%`,
                                height: `${ring * 30 + 30}%`,
                            }}
                        />
                    ))}

                    {/* Orbiting Tech Nodes */}
                    {technologies.map((tech, i) => {
                        const radius = (tech.ring * 30 + 30) / 2; // Percentage based roughly

                        return (
                            <OrbitingIcon
                                key={tech.name}
                                tech={tech}
                                index={i}
                                radius={radius}
                                onHover={setHoveredTech}
                            />
                        );
                    })}
                </div>

                {/* Hovered Tech Info */}
                <div className="h-8 mt-12 text-center">
                    {hoveredTech && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30"
                        >
                            <span className="text-white font-mono text-sm">{hoveredTech}</span>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}

function OrbitingIcon({ tech, index, radius, onHover }: any) {
    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
            style={{
                animation: `spin ${tech.speed}s linear infinite ${index % 2 === 0 ? 'reverse' : 'normal'}`,
            }}
        >
            <div
                className="absolute top-0 right-1/2 h-full pointer-events-auto cursor-pointer group"
                style={{
                    transform: `translateX(50%) rotate(${index * 45}deg)`,
                    height: `${tech.ring * 30 + 30}%`
                }}
                onMouseEnter={() => onHover(tech.name)}
                onMouseLeave={() => onHover(null)}
            >
                {/* icon container - positioned at the top of the rotating container (which is effectively on the ring) */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ animation: `spin ${tech.speed}s linear infinite reverse direction-reverse` }} // Counter-rotate to keep icon upright
                >
                    <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center hover:scale-125 hover:border-primary transition-all duration-300 shadow-glass group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        <tech.icon size={20} className="text-muted-foreground group-hover:text-white transition-colors" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
