'use client';

import { motion } from 'framer-motion';

export default function HeroGlass() {
    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-indigo-900 font-medium mb-6 shadow-sm">
                        ✨ Portfolio 2025
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                        Transparency is the new <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Opacity</span>.
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed backdrop-blur-sm">
                        Crafting digital experiences with depth, clarity, and a touch of glass.
                        Explore a world where UI floats and content breathes.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 text-slate-800 font-bold shadow-lg hover:bg-white/60 transition-all hover:scale-105">
                            View Projects
                        </button>
                        <button className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 transition-all hover:scale-105">
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                {/* Glass Card Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
                            <div>
                                <div className="h-3 w-32 bg-white/40 rounded-full mb-2" />
                                <div className="h-2 w-20 bg-white/20 rounded-full" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-32 rounded-2xl bg-white/20 w-full" />
                            <div className="h-4 w-3/4 bg-white/30 rounded-full" />
                            <div className="h-4 w-1/2 bg-white/30 rounded-full" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-white/40 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-lg"
                        >
                            <span className="text-2xl">💎</span>
                        </motion.div>
                    </div>

                    {/* Background Card for Depth */}
                    <div className="absolute top-6 left-6 w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
