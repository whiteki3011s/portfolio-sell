'use client';

import { motion } from 'framer-motion';

export default function HeroVapor() {
    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#1D1A39]">
            {/* Retro Sun */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-[#FF00FF] to-[#FFD700] opacity-80 blur-md"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 60%)' }} />

            {/* Grid Floor */}
            <div className="absolute bottom-0 w-full h-[40vh] bg-[linear-gradient(rgba(255,0,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.3)_1px,transparent_1px)] bg-[length:40px_40px] [perspective:500px] [transform-style:preserve-3d]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1A39] to-transparent" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#00FFFF] to-[#FF00FF] mb-4 tracking-widest"
                    style={{ fontFamily: '"Press Start 2P", cursive', textShadow: '4px 4px 0px rgba(0,0,0,0.5)' }}
                >
                    VAPOR<br />WAVE
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl text-[#FFD700] mb-12 tracking-[0.5em] font-light uppercase"
                >
                    A E S T H E T I C S
                </motion.p>

                <div className="flex justify-center gap-8">
                    <button className="px-8 py-3 bg-[#FF00FF] text-white font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_40px_rgba(255,0,255,0.8)] transition-all transform hover:-translate-y-1">
                        Start_Experience
                    </button>
                </div>
            </div>

            {/* Floating Palm Trees (CSS Shapes) */}
            <div className="absolute bottom-20 left-10 md:left-40 opacity-60">
                <div className="w-2 h-32 bg-black mx-auto" />
                <div className="w-32 h-32 border-t-8 border-l-8 border-black rounded-tl-full transform -rotate-45 -mt-24" />
            </div>
            <div className="absolute bottom-20 right-10 md:right-40 opacity-60 transform scale-x-[-1]">
                <div className="w-2 h-32 bg-black mx-auto" />
                <div className="w-32 h-32 border-t-8 border-l-8 border-black rounded-tl-full transform -rotate-45 -mt-24" />
            </div>
        </section>
    );
}
