'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FilmContact() {
    return (
        <footer className="bg-black text-[#e0e0e0] py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl font-mono uppercase tracking-[0.2em] mb-16">
                        Credits
                    </h2>

                    <div className="space-y-4 font-mono text-sm uppercase tracking-widest">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-gray-600">Directed By</span>
                            <span className="text-xl">Your Name</span>
                        </div>

                        <div className="flex flex-col items-center gap-2 pt-8">
                            <span className="text-gray-600">Produced By</span>
                            <span className="text-xl">Film Grain Studios</span>
                        </div>

                        <div className="flex flex-col items-center gap-2 pt-8">
                            <span className="text-gray-600">Contact</span>
                            <a href="mailto:cast@film.com" className="text-xl hover:text-white transition-colors">
                                cast@film.com
                            </a>
                        </div>
                    </div>

                    <div className="pt-24 pb-12">
                        <p className="text-xs text-gray-700 font-mono">
                            © 2025 ALL RIGHTS RESERVED
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        </footer>
    );
}
