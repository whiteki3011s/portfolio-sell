'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const menuItems = [
    { name: 'Home', href: '#hero', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Showreel', href: '#showreel', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Projects', href: '#projects', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { name: 'Breakdowns', href: '#breakdowns', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { name: 'About', href: '#about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Contact', href: '#contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
];

export default function MenuOverlay() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 right-8 z-[100] w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:border-[#00E5FF] group transition-colors"
            >
                <div className="space-y-1.5">
                    <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white group-hover:bg-[#00E5FF] transition-colors" />
                    <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-4 h-0.5 bg-white group-hover:bg-[#00E5FF] transition-colors" />
                    <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white group-hover:bg-[#00E5FF] transition-colors" />
                </div>
            </button>

            {/* Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
                        />

                        {/* 3D Slide-out Panel */}
                        <motion.div
                            initial={{ x: '100%', rotateY: -10 }}
                            animate={{ x: 0, rotateY: 0 }}
                            exit={{ x: '100%', rotateY: -10 }}
                            transition={{ type: 'spring', damping: 20 }}
                            className="fixed top-0 right-0 h-full w-80 md:w-96 z-[95] bg-[#0B0B0E]/90 backdrop-blur-xl border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] perspective-1000"
                        >
                            <div className="h-full flex flex-col justify-center p-8 md:p-12 space-y-8">
                                <h2 className="font-mono text-xs text-[#00E5FF] tracking-[0.3em] uppercase mb-4 border-b border-white/10 pb-4">
                                    Navigation System
                                </h2>

                                <nav className="flex flex-col space-y-2">
                                    {menuItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group relative flex items-center gap-6 py-3 cursor-pointer perspective-500"
                                        >
                                            {/* 3D Orbit Icon */}
                                            <div className="relative w-8 h-8 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                                <svg className="w-5 h-5 text-white/50 group-hover:text-[#00E5FF] fill-none stroke-current stroke-2 transition-colors" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                                </svg>
                                                <div className="absolute inset-0 border border-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                                            </div>

                                            {/* Text */}
                                            <span className="text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#00E5FF] transition-colors group-hover:translate-x-2 duration-300">
                                                {item.name}
                                            </span>

                                            {/* Neon Glint */}
                                            <div className="absolute bottom-0 left-14 w-0 h-px bg-[#00E5FF] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#00E5FF]" />
                                        </Link>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-8 border-t border-white/10 text-xs text-white/30 font-mono text-center">
                                    RECHROME-3D v1.0
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
