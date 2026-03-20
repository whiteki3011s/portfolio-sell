'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Maximize2, Minus, X } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "CYBER_SPACE.EXE",
        description: "A fully immersive 3D experience built for a digital art festival. Users navigate a neon city to discover hidden artworks.",
        role: "LEAD DEVELOPER",
        stack: ["THREE.JS", "REACT", "WEBGL"],
        outcome: "Awarded 'Site of the Day' on Awwwards. 50k+ unique visitors in week one.",
        image: "linear-gradient(45deg, #000033, #00ffff)",
        year: "2024"
    },
    {
        id: 2,
        title: "MATRIX_RELOADED",
        description: "E-commerce platform for retro tech gear. Features a custom CRT monitor effect and glitch interactions.",
        role: "UI/UX DESIGNER",
        stack: ["NEXT.JS", "TAILWIND", "STRIPE"],
        outcome: "Increased conversion rate by 40% through gamified checkout flow.",
        image: "linear-gradient(45deg, #000000, #00ff00)",
        year: "2023"
    },
    {
        id: 3,
        title: "NEON_DREAMS",
        description: "Social media dashboard for cyberpunk enthusiasts. Real-time data visualization with a retro-futuristic skin.",
        role: "FULL STACK",
        stack: ["VUE", "D3.JS", "FIREBASE"],
        outcome: "Scaled to 10k active users. Featured in 'Retro Web' magazine.",
        image: "linear-gradient(45deg, #330033, #ff00ff)",
        year: "2023"
    }
];

export default function Y2KProjects() {
    return (
        <section className="py-24 bg-[#000033] text-[#ccff00] font-mono relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff00ff] blur-[100px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ffff] blur-[100px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-1 w-12 bg-[#ccff00]" />
                    <h2 className="text-4xl font-black tracking-tighter">CASE_STUDIES</h2>
                    <div className="h-1 flex-1 bg-[#ccff00]/30" />
                </div>

                <div className="grid gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="border-2 border-[#ccff00] bg-[#000066]/80 backdrop-blur-sm shadow-[12px_12px_0px_0px_rgba(204,255,0,0.3)]"
                        >
                            {/* Window Header */}
                            <div className="bg-[#ccff00] text-[#000033] px-4 py-2 font-bold flex justify-between items-center border-b-2 border-[#000033]">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#000033] animate-pulse" />
                                    {project.title}
                                </span>
                                <div className="flex gap-2">
                                    <button className="p-1 hover:bg-white/50 rounded"><Minus size={14} /></button>
                                    <button className="p-1 hover:bg-white/50 rounded"><Maximize2 size={14} /></button>
                                    <button className="p-1 hover:bg-[#ff0000] hover:text-white rounded"><X size={14} /></button>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                                {/* Project Visual */}
                                <div
                                    className="aspect-video border-2 border-[#00ffff] relative overflow-hidden group"
                                    style={{ background: project.image }}
                                >
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-[#00ffff] text-[#000033] px-6 py-2 font-bold hover:bg-white transition-colors flex items-center gap-2">
                                            <ExternalLink size={16} /> VIEW_PROJECT
                                        </button>
                                    </div>

                                    {/* Scanlines Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none" />
                                </div>

                                {/* Project Details */}
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="bg-[#ff00ff] text-white px-2 py-1 text-xs font-bold">YEAR: {project.year}</span>
                                            <div className="flex gap-2">
                                                <Github className="w-5 h-5 hover:text-[#00ffff] cursor-pointer" />
                                                <ExternalLink className="w-5 h-5 hover:text-[#00ffff] cursor-pointer" />
                                            </div>
                                        </div>
                                        <p className="text-lg leading-relaxed border-l-4 border-[#00ffff] pl-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <h4 className="text-[#00ffff] font-bold mb-2">// ROLE</h4>
                                            <p>{project.role}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[#00ffff] font-bold mb-2">// OUTCOME</h4>
                                            <p>{project.outcome}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-[#00ffff] font-bold mb-2">// TECH_STACK</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech) => (
                                                <span key={tech} className="border border-[#ccff00] px-2 py-1 text-xs hover:bg-[#ccff00] hover:text-[#000033] transition-colors cursor-default">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
