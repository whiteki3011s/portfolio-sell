'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroGlitch() {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen bg-black text-cyan-400 overflow-hidden font-mono flex items-center justify-center">
            {/* Scanlines */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

            {/* RGB Split Effect Background */}
            <div className="absolute inset-0 opacity-20 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-900/20 to-transparent animate-pulse" />
            </div>

            <div className="relative z-20 text-center p-4 max-w-5xl mx-auto">
                {/* Glitch Title */}
                <div className="relative inline-block mb-6">
                    <motion.h1
                        className={`text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mix-blend-difference ${isGlitching ? 'translate-x-1' : ''}`}
                        style={{ textShadow: '2px 2px 0px #0ff, -2px -2px 0px #f0f' }}
                    >
                        CYBER<br />GLITCH
                    </motion.h1>
                    {isGlitching && (
                        <>
                            <div className="absolute top-0 left-0 w-full h-full text-cyan-500 opacity-70 translate-x-[-5px] translate-y-[-2px] overflow-hidden clip-path-inset-1">
                                CYBER<br />GLITCH
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full text-magenta-500 opacity-70 translate-x-[5px] translate-y-[2px] overflow-hidden clip-path-inset-2">
                                CYBER<br />GLITCH
                            </div>
                        </>
                    )}
                </div>

                <p className="text-xl md:text-2xl text-cyan-300 mb-12 tracking-widest uppercase border-l-4 border-cyan-500 pl-4 text-left max-w-2xl mx-auto">
                    System Failure // Reboot Required<br />
                    <span className="text-pink-500">_Enter the Matrix</span>
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button className="group relative px-8 py-4 bg-transparent border border-cyan-500 text-cyan-500 font-bold uppercase tracking-widest overflow-hidden hover:bg-cyan-500 hover:text-black transition-all duration-100">
                        <span className="relative z-10">Initialize_Project</span>
                        <div className="absolute inset-0 bg-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </button>

                    <button className="px-8 py-4 bg-pink-600 text-black font-bold uppercase tracking-widest hover:bg-pink-500 hover:scale-105 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                        Contact_System
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-10 text-xs text-cyan-700">
                <p>SYS.VER.2.0.45</p>
                <p>MEM: 64TB // OK</p>
            </div>

            <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-3xl" />
        </section>
    );
}
