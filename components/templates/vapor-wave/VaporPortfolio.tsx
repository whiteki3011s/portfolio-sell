'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Disc } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "DREAM_MALL",
        category: "VIRTUAL REALITY",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "NEON_DRIVE",
        category: "RETRO GAME",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "SYNTH_FM",
        category: "MUSIC PLAYER",
        image: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function VaporPortfolio() {
    return (
        <section className="py-24 bg-[#2b003b] relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff00ff40_1px,transparent_1px),linear-gradient(to_bottom,#ff00ff40_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-top opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00ffff] to-[#ff00ff] drop-shadow-[2px_2px_0px_rgba(255,0,255,0.5)] italic tracking-widest">
                        A E S T H E T I C <br /> W O R K S
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* Neon Frame */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

                            <div className="relative bg-[#1a0b2e] p-2 rounded-lg border-2 border-[#ff00ff]">
                                <div className="aspect-square overflow-hidden mb-4 relative">
                                    <div className="absolute inset-0 bg-[#ff00ff] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover filter contrast-125 brightness-110 group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Scanlines on image */}
                                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-20" />
                                </div>

                                <div className="text-center p-4">
                                    <h3 className="text-2xl font-bold text-[#00ffff] mb-2 tracking-widest drop-shadow-[2px_2px_0px_#ff00ff]">
                                        {project.title}
                                    </h3>
                                    <span className="text-[#ff71ce] text-sm uppercase tracking-widest border border-[#ff71ce] px-2 py-1 rounded">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-transparent border-2 border-[#00ffff] text-[#00ffff] font-bold uppercase tracking-widest hover:bg-[#00ffff] hover:text-[#2b003b] hover:shadow-[0_0_20px_#00ffff] transition-all duration-300 flex items-center gap-2 mx-auto">
                        <Disc className="animate-spin-slow" />
                        Load More Data
                    </button>
                </div>
            </div>
        </section>
    );
}
