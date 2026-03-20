'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Music, MapPin } from 'lucide-react';

export default function HeroNeon() {
    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans relative selection:bg-[#ff00ff] selection:text-white">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ff00ff] rounded-full blur-[150px] opacity-20 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00ffff] rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="container mx-auto px-6 h-screen flex flex-col justify-center relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#ff00ff]/50 bg-[#ff00ff]/10 text-[#ff00ff] text-sm font-bold tracking-widest mb-8 shadow-[0_0_10px_rgba(255,0,255,0.3)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#ff00ff] animate-ping" />
                        LIVE FROM TOKYO
                    </motion.div>

                    <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter leading-none relative">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">NEON</span>
                        <span className="absolute left-0 top-0 text-[#00ffff] blur-[2px] opacity-50 z-0 animate-pulse">NEON</span>
                        <br />
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">NIGHTS</span>
                        <span className="absolute left-0 top-[1em] text-[#ff00ff] blur-[2px] opacity-50 z-0 animate-pulse" style={{ animationDelay: '0.1s' }}>NIGHTS</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-2xl mx-auto font-light">
                        Electrifying digital experiences that glow in the dark.
                        <span className="text-white font-medium"> Bold, vibrant, and unforgettable.</span>
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <button className="group relative px-8 py-4 bg-transparent text-white font-bold tracking-widest overflow-hidden transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 border border-[#00ffff] shadow-[0_0_10px_#00ffff,inset_0_0_10px_#00ffff] rounded-lg group-hover:shadow-[0_0_20px_#00ffff,inset_0_0_20px_#00ffff] transition-shadow duration-300" />
                            <div className="relative flex items-center gap-3">
                                <Zap className="text-[#00ffff]" />
                                <span>START PARTY</span>
                            </div>
                        </button>

                        <button className="group relative px-8 py-4 bg-transparent text-white font-bold tracking-widest overflow-hidden transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 border border-[#ff00ff] shadow-[0_0_10px_#ff00ff,inset_0_0_10px_#ff00ff] rounded-lg group-hover:shadow-[0_0_20px_#ff00ff,inset_0_0_20px_#ff00ff] transition-shadow duration-300" />
                            <div className="relative flex items-center gap-3">
                                <Music className="text-[#ff00ff]" />
                                <span>LISTEN NOW</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/50 backdrop-blur-md p-6 flex justify-between items-center text-xs font-mono text-gray-500">
                <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-[#00ffff]" />
                        <span>SHIBUYA, TOKYO</span>
                    </div>
                    <div className="hidden md:block">
                        TEMP: 24°C
                    </div>
                </div>
                <div className="flex gap-1">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 h-4 bg-[#ff00ff]"
                            style={{
                                opacity: Math.random(),
                                height: Math.random() * 16 + 4 + 'px'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
