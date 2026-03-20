'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Wind, Sun } from 'lucide-react';

export default function HeroNature() {
    return (
        <div className="min-h-screen bg-[#F3F4F1] text-[#2C3E2C] overflow-hidden font-sans relative">
            {/* Organic Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#E8EBE4] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] mix-blend-multiply opacity-80"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, -5, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-[#D8E2DC] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] mix-blend-multiply opacity-80"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        y: [0, 20, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-[#C5D5C5] rounded-[50%_50%_30%_70%/50%_50%_60%_40%] mix-blend-multiply opacity-80"
                />
            </div>

            <div className="container mx-auto px-6 h-screen flex flex-col justify-center relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-3 mb-6 text-[#5F7161]"
                    >
                        <Sun size={20} />
                        <span className="uppercase tracking-widest text-sm font-medium">Sustainable Design</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-serif font-light mb-8 leading-tight text-[#1A261A]"
                    >
                        Rooted in <br />
                        <span className="italic text-[#4A6741]">Simplicity.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-xl md:text-2xl mb-12 text-[#5F7161] font-light leading-relaxed max-w-xl"
                    >
                        Crafting digital experiences that breathe.
                        Organic layouts, natural palettes, and thoughtful interactions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-wrap gap-6"
                    >
                        <button className="px-8 py-4 bg-[#2C3E2C] text-[#F3F4F1] rounded-full font-medium hover:bg-[#1A261A] transition-colors duration-300 shadow-lg shadow-[#2C3E2C]/20 flex items-center gap-2">
                            <Leaf size={18} />
                            <span>View Projects</span>
                        </button>
                        <button className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-[#2C3E2C]/10 text-[#2C3E2C] rounded-full font-medium hover:bg-white transition-colors duration-300 flex items-center gap-2">
                            <Wind size={18} />
                            <span>Our Philosophy</span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Floating Leaf Decoration */}
            <motion.div
                animate={{
                    y: [0, 15, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 text-[#4A6741]/20 hidden lg:block"
            >
                <Leaf size={120} />
            </motion.div>
        </div>
    );
}
