'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Morphosis",
        category: "Branding",
        color: "bg-[#FF6B6B]",
        shape: "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
    },
    {
        id: 2,
        title: "Fluidity",
        category: "Web Design",
        color: "bg-[#4ECDC4]",
        shape: "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
    },
    {
        id: 3,
        title: "Organic",
        category: "Packaging",
        color: "bg-[#FFE66D]",
        shape: "rounded-[50%_50%_20%_80%/25%_80%_20%_75%]"
    },
    {
        id: 4,
        title: "Abstract",
        category: "Art Direction",
        color: "bg-[#1A535C]",
        shape: "rounded-[70%_30%_30%_70%/60%_40%_60%_40%]"
    }
];

export default function AbstractProjects() {
    return (
        <section className="py-32 bg-[#FFF8F0] overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-[#2D3436] mb-24 text-center"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`relative group ${index % 2 === 1 ? 'md:mt-32' : ''}`}
                        >
                            <div className={`aspect-square ${project.color} ${project.shape} transition-all duration-500 ease-in-out group-hover:rounded-[20px] flex items-center justify-center overflow-hidden relative`}>
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-white/80 font-medium">{project.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
