'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Vogue Italia",
        category: "Art Direction",
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop",
        layout: "col-span-12 md:col-span-8"
    },
    {
        id: 2,
        title: "Silk & Stone",
        category: "Campaign",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        layout: "col-span-12 md:col-span-4 mt-12 md:mt-32"
    },
    {
        id: 3,
        title: "Noir Et Blanc",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
        layout: "col-span-12 md:col-span-5"
    },
    {
        id: 4,
        title: "Urban Decay",
        category: "Editorial",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
        layout: "col-span-12 md:col-span-7"
    }
];

export default function EditorialProjects() {
    return (
        <section className="py-32 bg-[#FDFBF7]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-12 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`${project.layout} group cursor-pointer`}
                        >
                            <div className="relative overflow-hidden mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                            </div>
                            <div className="flex justify-between items-baseline border-t border-black pt-2">
                                <h3 className="text-3xl font-serif italic group-hover:pl-4 transition-all duration-300">
                                    {project.title}
                                </h3>
                                <span className="text-xs uppercase tracking-widest text-gray-500">
                                    {project.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
