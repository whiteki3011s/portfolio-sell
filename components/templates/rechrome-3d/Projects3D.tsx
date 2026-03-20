'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Editing', '3D / Motion', 'Design', 'Brand Films'];

const projects = [
    { id: '01', title: 'Cyberpunk City', category: '3D / Motion', image: 'bg-indigo-900', size: 'large' },
    { id: '02', title: 'Nike Air', category: 'Brand Films', image: 'bg-blue-900', size: 'small' },
    { id: '03', title: 'Neon Interface', category: 'Design', image: 'bg-purple-900', size: 'small' },
    { id: '04', title: 'Glitch Reel', category: 'Editing', image: 'bg-zinc-800', size: 'medium' },
    { id: '05', title: 'Metaverse Identity', category: '3D / Motion', image: 'bg-cyan-900', size: 'medium' },
    { id: '06', title: 'Vogue Editorial', category: 'Editing', image: 'bg-rose-900', size: 'large' },
];

export default function Rechrome3DProjects() {
    const [filter, setFilter] = useState('All');
    const [hovered, setHovered] = useState<string | null>(null);

    const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

    return (
        <section id="projects" className="py-32 px-4 relative z-10 bg-[#0B0B0E] text-white min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* Header & Filter */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#4FA3FF]">Work</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#FF3BDA]" />
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all duration-300 ${filter === cat
                                        ? 'border-[#00E5FF] bg-[#00E5FF]/10 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                                        : 'border-white/10 text-zinc-500 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3D Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                                onMouseEnter={() => setHovered(project.id)}
                                onMouseLeave={() => setHovered(null)}
                                className={`group relative rounded-sm border border-white/5 bg-[#111] overflow-hidden cursor-pointer ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                        project.size === 'medium' ? 'md:col-span-2' : ''
                                    }`}
                                style={{ perspective: '1000px' }}
                            >
                                {/* Holographic container effect */}
                                <motion.div
                                    className="absolute inset-0 w-full h-full transition-all duration-500 will-change-transform"
                                    animate={hovered === project.id ? { translateZ: 20, rotateX: 2, scale: 1.05 } : { translateZ: 0, rotateX: 0, scale: 1 }}
                                >
                                    {/* Image Placeholder */}
                                    <div className={`absolute inset-0 ${project.image} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                                    {/* Grid Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Content Layer */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="font-mono text-[#00E5FF] text-xs tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                                {project.category}
                                            </span>
                                            <h3 className="text-3xl font-bold uppercase tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00E5FF] transition-all">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Neon Frame */}
                                    <div className="absolute inset-0 border-2 border-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_30px_rgba(0,229,255,0.2)]" />

                                    {/* Corner Brackets */}
                                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-[#FF3BDA] transition-colors" />
                                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-[#FF3BDA] transition-colors" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
