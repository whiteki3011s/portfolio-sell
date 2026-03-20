'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "The Last Light",
        role: "Director of Photography",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Urban Echoes",
        role: "Colorist",
        image: "https://images.unsplash.com/photo-1517604931442-71053e3e2e3c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Neon Dreams",
        role: "Editor",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function FilmProjects() {
    return (
        <section className="py-32 bg-[#1a1a1a] text-[#e0e0e0] overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-mono mb-16 tracking-widest uppercase text-center">
                    Selected Works
                </h2>

                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Film Strip Effect */}
                            <div className="w-full md:w-2/3 relative bg-black p-4 rounded-sm shadow-2xl">
                                <div className="absolute top-0 left-0 bottom-0 w-8 bg-black border-r border-dashed border-gray-700 flex flex-col justify-between py-2">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="w-4 h-6 bg-white/10 mx-auto rounded-sm" />
                                    ))}
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 w-8 bg-black border-l border-dashed border-gray-700 flex flex-col justify-between py-2">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="w-4 h-6 bg-white/10 mx-auto rounded-sm" />
                                    ))}
                                </div>

                                <div className="mx-8 aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-1/3 text-center md:text-left">
                                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                                <p className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-6">
                                    {project.role}
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    A cinematic exploration of light and shadow, capturing the essence of the moment through a vintage lens.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
