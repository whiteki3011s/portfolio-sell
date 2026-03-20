'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Cyber City",
        category: "Environment",
        color: "shadow-[0_0_30px_#0ff]",
        border: "border-[#0ff]"
    },
    {
        id: 2,
        title: "Night Rider",
        category: "Vehicle",
        color: "shadow-[0_0_30px_#f0f]",
        border: "border-[#f0f]"
    },
    {
        id: 3,
        title: "Data Stream",
        category: "Interface",
        color: "shadow-[0_0_30px_#0f0]",
        border: "border-[#0f0]"
    }
];

export default function NeonProjects() {
    return (
        <section className="py-32 bg-[#050505] text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`p-8 bg-black border-2 ${project.border} ${project.color} rounded-xl relative group cursor-pointer`}
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-100" />

                            <h3 className="text-3xl font-bold mb-4 uppercase tracking-wider">{project.title}</h3>
                            <p className="text-gray-400 font-mono text-sm mb-8">
                                // {project.category}
                            </p>

                            <div className="h-48 bg-gray-900 rounded border border-gray-800 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
