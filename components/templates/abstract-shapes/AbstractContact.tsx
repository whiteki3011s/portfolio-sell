'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AbstractContact() {
    return (
        <footer className="py-32 bg-[#2D3436] text-white relative overflow-hidden">
            {/* Animated background shapes */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B6B] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-10 blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [0, -90, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4ECDC4] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-10 blur-3xl"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold mb-12"
                    >
                        Let's Create
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-gray-300 mb-16"
                    >
                        Have an idea? Let's shape it into reality together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row justify-center gap-8"
                    >
                        <a
                            href="mailto:hello@abstract.com"
                            className="px-12 py-6 bg-[#FF6B6B] text-white text-xl font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#FF6B6B]/30"
                        >
                            Start a Project
                        </a>
                        <a
                            href="#"
                            className="px-12 py-6 bg-transparent border-2 border-white/20 text-white text-xl font-bold rounded-full hover:bg-white/10 transition-colors duration-300"
                        >
                            View Schedule
                        </a>
                    </motion.div>

                    <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-400">
                        <p>© 2025 Abstract Shapes</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <a href="#" className="hover:text-[#FF6B6B] transition-colors">Dribbble</a>
                            <a href="#" className="hover:text-[#4ECDC4] transition-colors">Behance</a>
                            <a href="#" className="hover:text-[#FFE66D] transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
