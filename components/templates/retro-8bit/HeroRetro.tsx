'use client';

import { motion } from 'framer-motion';

export default function HeroRetro() {
    return (
        <section className="min-h-screen bg-[#2d3748] text-white font-mono flex items-center justify-center overflow-hidden relative">
            {/* Pixel Stars Background */}
            <div className="absolute inset-0 z-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white opacity-50"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${Math.random() * 3 + 1}s infinite`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4 border-4 border-white p-8 bg-[#1a202c] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
                <div className="mb-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="inline-block"
                    >
                        <div className="w-24 h-24 bg-green-500 mx-auto mb-4 relative">
                            {/* Simple Pixel Character Face */}
                            <div className="absolute top-4 left-4 w-4 h-4 bg-black" />
                            <div className="absolute top-4 right-4 w-4 h-4 bg-black" />
                            <div className="absolute bottom-4 left-4 w-16 h-4 bg-black" />
                        </div>
                    </motion.div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-widest text-green-400" style={{ textShadow: '4px 4px 0px #000' }}>
                    PLAYER 1<br />READY
                </h1>

                <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
                    Full Stack Developer<br />
                    Level 99 Code Wizard
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <button className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest border-b-4 border-blue-800 active:border-b-0 active:translate-y-1 transition-all hover:bg-blue-500">
                        Start Game
                    </button>
                    <button className="px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all hover:bg-red-500">
                        Options
                    </button>
                </div>

                {/* Health Bar */}
                <div className="mt-12 w-64 mx-auto border-2 border-white p-1">
                    <div className="h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full animate-pulse" />
                </div>
                <p className="text-xs mt-2 text-gray-400">HP: 100/100</p>
            </div>
        </section>
    );
}
