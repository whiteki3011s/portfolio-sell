'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Helvetica",
        category: "Typography",
        year: "2024",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Grid System",
        category: "Layout",
        year: "2023",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "International",
        category: "Branding",
        year: "2025",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Modernist",
        category: "Architecture",
        year: "2024",
        image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000&auto=format&fit=crop"
    }
];

export default function SwissProjects() {
    return (
        <section className="py-24 bg-[#F5F5F5] border-t border-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-12 gap-4 mb-16">
                    <div className="col-span-12 md:col-span-4">
                        <h2 className="text-4xl font-bold tracking-tight">Selected Works</h2>
                    </div>
                    <div className="col-span-12 md:col-span-8 border-t border-black pt-4">
                        <p className="text-xl leading-relaxed max-w-2xl">
                            A collection of projects defined by clarity, objectivity, and precision.
                            Form follows function.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-200 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                            </div>

                            <div className="grid grid-cols-12 gap-4 border-t border-black pt-4">
                                <div className="col-span-8">
                                    <h3 className="text-2xl font-bold group-hover:text-red-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm text-gray-600">{project.category}</span>
                                </div>
                                <div className="col-span-4 text-right flex flex-col items-end justify-between">
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-sm font-mono">{project.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
