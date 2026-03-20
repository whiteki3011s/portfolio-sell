'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

export default function VaporAbout() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#2b003b] to-[#4a005f] relative overflow-hidden">
            {/* Sun */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-t from-[#ff00ff] to-[#ff71ce] blur-xl opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#00000080] backdrop-blur-sm border border-[#ff00ff] p-8 md:p-12 max-w-4xl mx-auto shadow-[10px_10px_0px_#00ffff]">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-6 text-[#00ffff]">
                                <Sun className="animate-spin-slow" />
                                <span className="uppercase tracking-widest text-sm">System.About.exe</span>
                            </div>

                            <h2 className="text-4xl font-bold text-white mb-6 leading-relaxed shadow-black drop-shadow-md">
                                <span className="text-[#ff71ce]">NOSTALGIA</span> FOR A FUTURE THAT NEVER HAPPENED
                            </h2>

                            <p className="text-[#b19cd9] text-lg leading-relaxed mb-8 font-mono">
                                We craft digital experiences inspired by the aesthetics of early computing, 80s consumerism, and cyberpunk dreams.
                                It's not just a website; it's a vibe.
                            </p>

                            <div className="p-4 bg-[#2b003b] border border-[#00ffff] text-[#00ffff] font-mono text-sm">
                                <p>&gt; INITIATING CREATIVE SEQUENCE...</p>
                                <p>&gt; LOADING ASSETS: 100%</p>
                                <p className="animate-pulse">&gt; READY TO CREATE_</p>
                            </div>
                        </div>

                        <div className="flex-1 relative">
                            {/* Palm Tree Silhouette (SVG) */}
                            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_#ff00ff]">
                                <path d="M50 100 L50 40 Q30 20 10 30 Q30 40 50 50 Q70 40 90 30 Q70 20 50 40" fill="none" stroke="#ff00ff" strokeWidth="2" />
                                <path d="M50 50 Q30 60 10 50" fill="none" stroke="#00ffff" strokeWidth="2" />
                                <path d="M50 50 Q70 60 90 50" fill="none" stroke="#00ffff" strokeWidth="2" />
                                <path d="M50 40 L50 10" fill="none" stroke="#ff71ce" strokeWidth="2" />
                                <circle cx="50" cy="10" r="5" fill="#ff71ce" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2b003b] to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
