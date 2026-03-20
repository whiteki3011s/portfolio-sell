'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Disc, Globe, Star, Zap } from 'lucide-react';

export default function HeroY2K() {
    return (
        <div className="min-h-screen bg-[#000033] text-[#ccff00] overflow-hidden font-mono relative selection:bg-[#ff00ff] selection:text-white">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Gradient Orb */}
            <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full blur-[120px] opacity-30 animate-pulse" />

            <div className="container mx-auto px-6 h-screen flex flex-col justify-center relative z-10">

                {/* Top Bar */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center border-b border-[#ccff00]/30 pb-4">
                    <div className="flex items-center gap-2">
                        <Globe className="animate-spin-slow" />
                        <span className="text-xs tracking-widest">WORLD WIDE WEB</span>
                    </div>
                    <div className="text-xs">
                        {new Date().toLocaleDateString()}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative">
                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-20 -left-20 text-[#ff00ff] opacity-50 hidden md:block"
                    >
                        <Star size={64} />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-10 -right-10 text-[#00ffff] opacity-50 hidden md:block"
                    >
                        <Zap size={64} />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="inline-block mb-6 px-6 py-2 rounded-full border border-[#ccff00] bg-[#ccff00]/10 backdrop-blur-md"
                    >
                        <span className="text-sm font-bold tracking-widest">WELCOME TO THE FUTURE</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-[#aaaaaa] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        CYBER <br />
                        <span className="text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">SPACE</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-12 text-[#ff00ff] font-bold max-w-2xl mx-auto drop-shadow-[0_0_5px_#ff00ff]">
                        &lt; Designing the digital frontier since 1999. I build websites that break the internet. /&gt;
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <button className="px-8 py-4 bg-gradient-to-r from-[#ff00ff] to-[#cc00ff] text-white font-bold rounded-full shadow-[0_0_20px_#ff00ff] hover:shadow-[0_0_40px_#ff00ff] transition-all duration-300 transform hover:scale-105 border-2 border-white/20">
                            ENTER SITE
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-[#00ffff] text-[#00ffff] font-bold rounded-full shadow-[0_0_10px_#00ffff] hover:bg-[#00ffff]/10 transition-all duration-300 flex items-center justify-center gap-2">
                            <Disc className="animate-spin" />
                            LOAD PROFILE
                        </button>
                    </div>
                </div>

                {/* Marquee */}
                <div className="absolute bottom-12 left-0 w-full overflow-hidden bg-[#ccff00]/10 border-y border-[#ccff00]/30 py-2">
                    <motion.div
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="whitespace-nowrap text-[#ccff00] font-bold tracking-widest text-sm"
                    >
                        LOADING ASSETS... 99% COMPLETE *** WELCOME USER *** SYSTEM READY *** INITIALIZING INTERFACE ***
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
