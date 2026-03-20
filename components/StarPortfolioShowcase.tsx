'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { getFeaturedTemplates, type PortfolioTemplate } from '@/lib/portfolioTemplates';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Sparkles, Code2, Globe, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

// --- 3D Tilt Card Component ---
const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative transition-all duration-200 ease-out ${className}`}
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="h-full w-full">
                {children}
            </div>
        </motion.div>
    );
};

// --- Feature Pill Component ---
const FeaturePill = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90 shadow-lg">
        <Icon size={12} className="text-primary" />
        {text}
    </div>
);

// --- Main Component ---
export default function StarPortfolioShowcase() {
    const [templates, setTemplates] = useState<PortfolioTemplate[]>([]);

    useEffect(() => {
        const featured = getFeaturedTemplates();
        setTemplates(featured);
    }, []);

    if (templates.length === 0) return null;

    const [hero, ...rest] = templates;

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary">
                                <Sparkles size={12} />
                                Premium Collection
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40 mb-4 tracking-tight">
                            Selected <span className="text-white">Works</span>
                        </h2>
                        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-lg">
                            An exclusive selection of production-ready portfolio templates. Crafted with modern tech, clean code, and premium aesthetics.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/portfolio" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300">
                            <span className="text-sm font-semibold">View All Projects</span>
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Benton Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
                    {/* Hero Card (Left, Large) */}
                    <div className="md:col-span-2 md:row-span-2 h-[500px] md:h-[600px] perspective-1000">
                        <Link href={`/demos/${hero.id}`} className="block h-full group cursor-pointer">
                            <TiltCard className="h-full">
                                <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
                                    {/* Background Image / Gradient */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ background: hero.thumbnail }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                    {/* Content Layer */}
                                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                                        {/* Floating Features (Top Right) */}
                                        <div className="absolute top-6 right-6 flex flex-col items-end gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            {hero.features.slice(0, 3).map((feat, i) => (
                                                <FeaturePill key={i} icon={Sparkles} text={feat} />
                                            ))}
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-3">
                                                <span className="px-3 py-1 rounded-full bg-primary text-black text-xs font-bold uppercase tracking-wider">
                                                    Featured
                                                </span>
                                                <span className="text-white/60 text-sm font-medium">{hero.category}</span>
                                            </div>

                                            <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300 group-hover:font-mono">
                                                {hero.name}
                                            </h3>

                                            <p className="text-white/70 max-w-xl text-lg line-clamp-2 mb-4">
                                                {hero.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {hero.technologies.slice(0, 4).map((tech) => (
                                                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2 text-white font-bold text-xl">
                                                    {hero.price}
                                                </div>
                                                <div className="h-px flex-1 bg-white/20" />
                                                <span className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                                                    View Details <ArrowRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </Link>
                    </div>

                    {/* Secondary Cards (Right Column) */}
                    <div className="flex flex-col gap-6 h-full md:h-[600px]">
                        {rest.slice(0, 2).map((item, index) => (
                            <div key={item.id} className="flex-1 perspective-1000 relative group">
                                <Link href={`/demos/${item.id}`} className="block h-full cursor-pointer">
                                    <TiltCard className="h-full">
                                        <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-xl">
                                            {/* Background */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ background: item.thumbnail }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                                            {/* Content */}
                                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                                <div className="flex justify-between items-start">
                                                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur border border-white/10 text-xs font-medium text-white">
                                                        {item.category}
                                                    </span>
                                                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                        <ExternalLink size={14} />
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:font-mono transition-all duration-300">{item.name}</h3>
                                                    <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
                                                        <Code2 size={12} />
                                                        {item.technologies[0]}
                                                        <span className="w-1 h-1 rounded-full bg-white/30" />
                                                        <Globe size={12} />
                                                        Web
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hover Tech Overlay */}
                                            <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                                                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    <p className="text-sm font-semibold text-white mb-3">Key Features</p>
                                                    <div className="flex flex-wrap justify-center gap-2">
                                                        {item.features.slice(0, 3).map((f, i) => (
                                                            <span key={i} className="px-2 py-1 rounded bg-white/10 text-[10px] text-zinc-300 border border-white/10">
                                                                {f}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
