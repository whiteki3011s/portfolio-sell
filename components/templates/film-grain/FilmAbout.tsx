'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FilmAbout() {
    return (
        <section className="py-32 bg-[#1a1a1a] text-[#e0e0e0] relative">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="border border-white/20 p-12 relative"
                    >
                        {/* Corner marks */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white" />

                        <h2 className="text-2xl font-mono mb-8 uppercase tracking-widest">
                            Director's Statement
                        </h2>

                        <p className="text-xl md:text-2xl leading-relaxed font-serif italic text-gray-300">
                            "I believe that every frame should tell a story. In a world of digital perfection, I seek the texture, the grain, and the imperfections that make life real. My work is a tribute to the analog era, reimagined for the digital age."
                        </p>

                        <div className="mt-12 font-mono text-sm text-gray-500">
                            <p>EST. 2025</p>
                            <p>SHOT ON 35MM</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
