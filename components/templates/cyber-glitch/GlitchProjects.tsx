'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "NEURAL_NET_V1",
        category: "AI / ML",
        description: "Autonomous learning algorithm with adaptive neural pathways.",
        tech: ["Python", "TensorFlow", "CUDA"],
        status: "ONLINE"
    },
    {
        id: 2,
        title: "CYBER_SEC_GRID",
        category: "SECURITY",
        description: "Decentralized firewall matrix for quantum encryption.",
        tech: ["Rust", "WebAssembly", "Solidity"],
        status: "ACTIVE"
    },
    {
        id: 3,
        title: "DATA_VIS_CORE",
        category: "ANALYTICS",
        description: "Real-time holographic data visualization engine.",
        tech: ["WebGL", "Three.js", "React"],
        status: "PROCESSING"
    }
];

export default function GlitchProjects() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="py-24 bg-black text-cyan-500 font-mono relative overflow-hidden">
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none z-10 opacity-20" />

            <div className="container mx-auto px-6 relative z-20">
                <div className="flex items-center gap-4 mb-16">
                    <Terminal className="text-cyan-500 animate-pulse" />
                    <h2 className="text-4xl font-bold tracking-tighter glitch-text" data-text="PROJECT_DATABASE">
                        PROJECT_DATABASE
                    </h2>
                    <div className="h-px flex-1 bg-cyan-900/50" />
                    <span className="text-xs text-cyan-700">v.2.0.45</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            onHoverStart={() => setHoveredId(project.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            className="group relative bg-black border border-cyan-900/50 p-6 hover:border-cyan-500 transition-colors duration-300"
                        >
                            {/* Glitch Effect Layers */}
                            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 blur transition-opacity" />

                            {/* Corner Markers */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500 opacity-50 group-hover:opacity-100" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500 opacity-50 group-hover:opacity-100" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500 opacity-50 group-hover:opacity-100" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500 opacity-50 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold bg-cyan-900/30 text-cyan-400 px-2 py-1">
                                        {project.category}
                                    </span>
                                    <span className={`text-xs font-bold px-2 py-1 ${project.status === 'ONLINE' ? 'text-green-500 bg-green-900/20' :
                                            'text-yellow-500 bg-yellow-900/20'
                                        }`}>
                                        [{project.status}]
                                    </span>
                                </div>

                                <h3 className={`text-2xl font-bold mb-2 transition-all duration-200 ${hoveredId === project.id ? 'translate-x-2 text-white' : 'text-cyan-100'
                                    }`}>
                                    {project.title}
                                </h3>

                                <p className="text-cyan-700 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs text-cyan-600 border border-cyan-900/50 px-2 py-0.5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-cyan-900/30">
                                    <button className="flex items-center gap-2 text-sm text-cyan-500 hover:text-white transition-colors">
                                        <Github size={16} />
                                        <span>SOURCE</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-cyan-500 hover:text-white transition-colors">
                                        <ExternalLink size={16} />
                                        <span>DEPLOY</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
