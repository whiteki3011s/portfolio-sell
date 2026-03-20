'use client';

import { motion } from 'framer-motion';

export default function HeroDarkSaaS() {
    return (
        <section className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
                        Build faster.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Scale better.</span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
                        I help startups and enterprises build scalable, high-performance web applications with modern technologies.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                            View Portfolio
                        </button>
                        <button className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                            Contact Sales
                        </button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 flex gap-8">
                        <div className="text-slate-400">
                            <p className="text-2xl font-bold text-white">50+</p>
                            <p className="text-sm">Projects Delivered</p>
                        </div>
                        <div className="text-slate-400">
                            <p className="text-2xl font-bold text-white">100%</p>
                            <p className="text-sm">Client Satisfaction</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 bg-[#161B28] border border-white/10 rounded-2xl p-2 shadow-2xl">
                        <div className="bg-[#0B0F19] rounded-xl overflow-hidden border border-white/5 aspect-[4/3] relative group">
                            {/* Dashboard Mockup UI */}
                            <div className="absolute top-0 left-0 w-full h-12 bg-[#161B28] border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>

                            <div className="p-8 mt-8 grid grid-cols-3 gap-4">
                                <div className="h-32 bg-blue-500/10 rounded-lg border border-blue-500/20 animate-pulse" />
                                <div className="h-32 bg-purple-500/10 rounded-lg border border-purple-500/20 animate-pulse delay-75" />
                                <div className="h-32 bg-pink-500/10 rounded-lg border border-pink-500/20 animate-pulse delay-150" />
                                <div className="col-span-3 h-48 bg-white/5 rounded-lg border border-white/5 mt-4" />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    Live Preview
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
