'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Forest Retreat",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Ocean Mist",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Mountain Air",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function NatureProjects() {
    return (
        <section className="py-32 bg-[#F3F4F1]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`group cursor-pointer ${index === 1 ? 'md:mt-24' : ''}`}
                        >
                            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl shadow-[#5F7161]/10">
                                <div className="aspect-[3/4]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-[#5F7161]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-serif text-[#2C3E50] mb-2">{project.title}</h3>
                                <p className="text-[#5F7161] text-sm uppercase tracking-widest">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
