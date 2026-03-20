'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Form",
        category: "Architecture",
        color: "bg-[#E94B3C]", // Red
        shape: "rounded-none"
    },
    {
        id: 2,
        title: "Function",
        category: "Product",
        color: "bg-[#2D5F9E]", // Blue
        shape: "rounded-full"
    },
    {
        id: 3,
        title: "Balance",
        category: "Graphic",
        color: "bg-[#F2C94C]", // Yellow
        shape: "rounded-tr-[100px]"
    }
];

export default function BauhausProjects() {
    return (
        <section className="py-32 bg-[#f0f0f0]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className={`aspect-square ${project.color} ${project.shape} mb-8 flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-95`}>
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                <span className="text-9xl font-bold text-white opacity-20 select-none">
                                    {index + 1}
                                </span>
                            </div>

                            <div className="border-l-4 border-black pl-4">
                                <h3 className="text-3xl font-bold uppercase mb-2">{project.title}</h3>
                                <p className="font-bold text-gray-500 uppercase tracking-widest">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
