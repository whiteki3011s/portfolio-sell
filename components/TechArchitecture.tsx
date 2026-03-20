'use client';

import { motion } from 'framer-motion';
import {
    Cpu, Database, Globe, Layers, Zap,
    Shield, Smartphone, Code2, Server
} from 'lucide-react';

const techGroups = [
    {
        title: "Frontend Core",
        icon: Layers,
        items: ["Next.js 15 (App Router)", "React 19 Server Components", "TypeScript 5.x", "Tailwind CSS 4"]
    },
    {
        title: "Visual Engine",
        icon: Zap,
        items: ["Framer Motion", "Three.js / R3F", "GSAP Integration", "WebGL Shaders"]
    },
    {
        title: "Backend & Inf",
        icon: Server,
        items: ["Node.js Runtime", "Edge Functions", "PostgreSQL / MongoDB", "Vercel Edge Network"]
    }
];

export default function TechArchitecture() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-4">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            System Architecture
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50 mb-4">
                            Built for Performance.
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            A production-grade stack designed for speed, scalability, and SEO dominance. No bloat, just power.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {techGroups.map((group, idx) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                                    <group.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-xs font-mono text-white/30 group-hover:text-primary/70 transition-colors">
                                    SYS_MOD_0{idx + 1}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-6 font-mono tracking-tight">{group.title}</h3>

                            <ul className="space-y-4">
                                {group.items.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary/80 transition-colors" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Status Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-center md:justify-start font-mono text-xs text-white/40"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        SYSTEM_OPERATIONAL
                    </div>
                    <div className="flex items-center gap-2">
                        <Cpu size={12} />
                        Next.js 15.0.0
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield size={12} />
                        TypeScript Strict
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe size={12} />
                        Global Edge CDN
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
