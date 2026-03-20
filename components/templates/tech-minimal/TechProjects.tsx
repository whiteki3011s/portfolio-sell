'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: "01",
        title: "System Architecture",
        stack: ["React", "Node.js", "GraphQL"],
        status: "Deployed"
    },
    {
        id: "02",
        title: "Cloud Infrastructure",
        stack: ["AWS", "Terraform", "Docker"],
        status: "Active"
    },
    {
        id: "03",
        title: "Data Visualization",
        stack: ["D3.js", "Python", "WebGL"],
        status: "Beta"
    }
];

export default function TechProjects() {
    return (
        <section className="py-32 bg-white text-black">
            <div className="container mx-auto px-6">
                <div className="border-t border-black">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="border-b border-black py-12 group cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row items-baseline justify-between gap-8">
                                <div className="flex items-baseline gap-8">
                                    <span className="font-mono text-sm opacity-50">{project.id}</span>
                                    <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                                </div>

                                <div className="flex items-center gap-8">
                                    <div className="flex gap-2">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-gray-100 text-xs font-mono uppercase rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
