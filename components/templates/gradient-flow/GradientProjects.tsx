'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Aurora",
        category: "App Design",
        gradient: "from-pink-500 via-red-500 to-yellow-500"
    },
    {
        id: 2,
        title: "Nebula",
        category: "Branding",
        gradient: "from-blue-400 via-indigo-500 to-purple-500"
    },
    {
        id: 3,
        title: "Prism",
        category: "Web Design",
        gradient: "from-green-400 via-teal-500 to-blue-500"
    }
];

export default function GradientProjects() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="group relative"
                        >
                            <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`} />
                            <div className="relative bg-white ring-1 ring-gray-900/5 rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
                                <div className="w-full md:w-1/2 aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <span className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${project.gradient} uppercase tracking-widest`}>
                                        {project.category}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                        A visual exploration of color and light, creating immersive digital experiences that captivate and engage.
                                    </p>
                                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300">
                                        View Case Study <span>→</span>
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
