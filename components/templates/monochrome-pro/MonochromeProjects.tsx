'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Architecture",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Geometry",
        category: "Design",
        image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Shadows",
        category: "Art Direction",
        image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2080&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Structure",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function MonochromeProjects() {
    return (
        <section className="py-32 bg-white text-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-black">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-square border-r border-b border-black overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black text-white p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <div>
                                    <span className="text-xs font-bold tracking-widest uppercase">0{project.id}</span>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-sm uppercase tracking-widest opacity-70">{project.category}</p>
                                </div>
                            </div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
