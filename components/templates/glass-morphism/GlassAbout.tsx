'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GlassAbout() {
    return (
        <section className="py-32 bg-indigo-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        {/* Layered Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-30 bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Design Philosophy</h3>
                            <p className="text-slate-600">
                                Believing in clarity through transparency.
                                Creating interfaces that feel light, airy, and effortless to use.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-12 left-12 z-20 w-full bg-white/30 backdrop-blur-md border border-white/40 p-8 rounded-3xl shadow-lg"
                        >
                            <div className="h-24" /> {/* Spacer */}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute top-24 left-24 z-10 w-full bg-white/20 backdrop-blur-sm border border-white/30 p-8 rounded-3xl shadow-lg"
                        >
                            <div className="h-24" /> {/* Spacer */}
                        </motion.div>
                    </div>

                    <div className="lg:pl-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-slate-800 mb-8"
                        >
                            Crafting with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Light & Depth</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 leading-relaxed mb-8"
                        >
                            We specialize in creating immersive digital experiences that break the flat plane of the screen.
                            By utilizing blur, transparency, and subtle shadows, we build interfaces that feel tangible and alive.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-4"
                        >
                            <div className="px-6 py-3 rounded-2xl bg-white/50 border border-white/60 text-slate-700 font-medium shadow-sm">
                                UI Design
                            </div>
                            <div className="px-6 py-3 rounded-2xl bg-white/50 border border-white/60 text-slate-700 font-medium shadow-sm">
                                UX Research
                            </div>
                            <div className="px-6 py-3 rounded-2xl bg-white/50 border border-white/60 text-slate-700 font-medium shadow-sm">
                                Prototyping
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
