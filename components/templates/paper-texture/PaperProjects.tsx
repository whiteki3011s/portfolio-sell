'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Travel Journal",
        category: "Illustration",
        image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1976&auto=format&fit=crop",
        rotation: "rotate-2"
    },
    {
        id: 2,
        title: "Coffee Shop",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
        rotation: "-rotate-1"
    },
    {
        id: 3,
        title: "Sketchbook",
        category: "Art",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
        rotation: "rotate-3"
    }
];

export default function PaperProjects() {
    return (
        <section className="py-32 bg-[#F0E6D2] relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-6xl font-handwriting text-[#4A4036] text-center mb-24 transform -rotate-2">
                    Recent Sketches
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`bg-white p-4 shadow-lg transform ${project.rotation} hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-pointer`}
                        >
                            {/* Tape Effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#E6D5B8] opacity-80 transform -rotate-1 shadow-sm z-20" />

                            <div className="aspect-[4/5] overflow-hidden mb-4 border-2 border-[#E6D5B8]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover sepia-[0.3]"
                                />
                            </div>
                            <div className="text-center font-handwriting">
                                <h3 className="text-2xl text-[#2C241B]">{project.title}</h3>
                                <p className="text-[#8C7B6C]">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
