'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Circle, Square, Triangle } from 'lucide-react';

export default function HeroBauhaus() {
    return (
        <div className="min-h-screen bg-[#f0f0f0] text-[#1a1a1a] overflow-hidden font-sans relative">
            {/* Geometric Background Grid */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 grid-rows-2 h-full w-full opacity-20 pointer-events-none">
                <div className="border-r border-b border-black/10" />
                <div className="border-r border-b border-black/10" />
                <div className="border-r border-b border-black/10" />
                <div className="border-b border-black/10" />
                <div className="border-r border-black/10" />
                <div className="border-r border-black/10" />
                <div className="border-r border-black/10" />
                <div className="border-black/10" />
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-6 h-screen flex flex-col justify-center relative z-10">

                {/* Floating Shapes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-32 h-32 bg-[#D93025] rounded-full mix-blend-multiply opacity-80 blur-sm hidden md:block"
                />
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 left-20 w-24 h-24 bg-[#1A73E8] transform rotate-45 mix-blend-multiply opacity-80 hidden md:block"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 left-1/4 w-16 h-16 bg-[#F9AB00] rounded-full mix-blend-multiply opacity-80 hidden md:block"
                />

                <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Typography Section */}
                    <div className="md:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                        >
                            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85]">
                                FORM <br />
                                <span className="text-[#D93025]">FOLLOWS</span> <br />
                                FUNCTION
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl font-medium max-w-md border-l-4 border-[#1A73E8] pl-6 py-2"
                        >
                            A tribute to geometric minimalism and structural clarity.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-4"
                        >
                            <button className="px-8 py-4 bg-[#1a1a1a] text-white font-bold hover:bg-[#D93025] transition-colors duration-300 flex items-center gap-2 group">
                                <span>EXPLORE WORK</span>
                                <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border-2 border-[#1a1a1a] font-bold hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
                                CONTACT
                            </button>
                        </motion.div>
                    </div>

                    {/* Graphic Section */}
                    <div className="md:col-span-5 relative h-[400px] md:h-[600px] flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {/* Composition */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="absolute top-10 right-10 w-48 h-48 bg-[#1a1a1a]"
                            />
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="absolute bottom-20 left-10 w-40 h-40 bg-[#F9AB00] rounded-full mix-blend-multiply"
                            />
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 300 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="absolute top-0 left-1/2 w-8 bg-[#D93025]"
                            />
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 200 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="absolute bottom-1/3 right-0 h-4 bg-[#1A73E8]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Elements */}
            <div className="absolute bottom-0 left-0 w-full border-t border-black/10 p-6 flex justify-between items-center text-sm font-bold tracking-widest uppercase">
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#D93025]" />
                        <span>Red</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#1A73E8]" />
                        <span>Blue</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#F9AB00]" />
                        <span>Yellow</span>
                    </div>
                </div>
                <div>
                    EST. 1919
                </div>
            </div>
        </div>
    );
}
