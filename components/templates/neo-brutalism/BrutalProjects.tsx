'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "THE BIG DROP",
        category: "E-COMMERCE",
        color: "bg-[#FF6B6B]",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "LOUD & CLEAR",
        category: "AUDIO BRANDING",
        color: "bg-[#4ECDC4]",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "RAW POWER",
        category: "FITNESS APP",
        color: "bg-[#FFE66D]",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function BrutalProjects() {
    return (
        <section className="py-24 bg-[#FFFDF5] border-t-8 border-black">
            <div className="container mx-auto px-6">
                <h2 className="text-6xl md:text-8xl font-black mb-16 uppercase tracking-tighter transform -rotate-1">
                    Selected <br />
                    <span className="bg-black text-[#FFFDF5] px-4">Works</span>
                </h2>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`group relative border-8 border-black bg-white p-4 md:p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-200`}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                                <div className="relative aspect-video border-4 border-black overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                    <div className={`absolute inset-0 ${project.color} mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity`} />
                                </div>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <div className="inline-block border-4 border-black px-4 py-2 font-bold mb-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                            {project.category}
                                        </div>
                                        <h3 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9]">
                                            {project.title}
                                        </h3>
                                        <p className="text-xl font-bold border-l-8 border-black pl-6 mb-8">
                                            A bold exploration of digital maximalism.
                                            Breaking grids and taking names.
                                        </p>
                                    </div>

                                    <button className="self-start flex items-center gap-4 bg-black text-white px-8 py-4 text-xl font-bold hover:bg-[#FF6B6B] hover:text-black transition-colors border-4 border-black shadow-[8px_8px_0px_0px_#FFFDF5]">
                                        <span>VIEW CASE STUDY</span>
                                        <ArrowUpRight size={24} strokeWidth={3} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
