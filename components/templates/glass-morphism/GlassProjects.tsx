'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Cloud Sync",
        category: "SaaS Platform",
        description: "Seamless file synchronization across all your devices with end-to-end encryption.",
        gradient: "from-blue-400/20 to-purple-400/20"
    },
    {
        id: 2,
        title: "Aether UI",
        category: "Design System",
        description: "A comprehensive library of glassmorphic components for modern web applications.",
        gradient: "from-emerald-400/20 to-teal-400/20"
    },
    {
        id: 3,
        title: "Prism Analytics",
        category: "Data Dashboard",
        description: "Visualize complex data streams with beautiful, translucent interactive charts.",
        gradient: "from-orange-400/20 to-rose-400/20"
    }
];

export default function GlassProjects() {
    return (
        <section className="py-32 bg-indigo-50 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-slate-800 mb-24 text-center"
                >
                    Selected Works
                </motion.h2>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative bg-white/40 backdrop-blur-md border border-white/50 p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <span className="inline-block px-4 py-1 rounded-full bg-white/50 text-slate-600 text-sm font-medium mb-6 border border-white/50">
                                            {project.category}
                                        </span>
                                        <h3 className="text-3xl font-bold text-slate-800 mb-4">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                            {project.description}
                                        </p>
                                        <button className="flex items-center gap-2 text-slate-800 font-medium group-hover:gap-4 transition-all">
                                            View Project <ArrowRight size={18} />
                                        </button>
                                    </div>

                                    {/* Abstract Project Preview */}
                                    <div className="h-64 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 border border-white/30 flex items-center justify-center overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                                        <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${project.gradient} blur-2xl opacity-60`} />
                                        <div className="relative z-10 w-3/4 h-3/4 bg-white/30 backdrop-blur-xl rounded-xl border border-white/40 shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
