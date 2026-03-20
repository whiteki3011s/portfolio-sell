'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BrutalAbout() {
    return (
        <section className="py-24 bg-black text-[#FFFDF5] overflow-hidden">
            {/* Vibrating Marquee */}
            <div className="bg-[#FF6B6B] text-black py-4 border-y-8 border-white transform rotate-2 scale-105 mb-24">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap text-4xl font-black uppercase tracking-tighter"
                >
                    Design without boundaries • No compromise • Pure impact • Design without boundaries • No compromise • Pure impact •
                </motion.div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7">
                        <h2 className="text-6xl md:text-8xl font-black mb-12 leading-[0.9]">
                            WE DON'T <br />
                            <span className="text-[#4ECDC4] stroke-white stroke-2">WHISPER.</span> <br />
                            WE SHOUT.
                        </h2>
                        <p className="text-2xl font-bold max-w-xl leading-relaxed mb-12">
                            Forget subtle. We build digital experiences that grab you by the collar and demand attention.
                            High contrast, bold typography, and zero apologies.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {["UI/UX", "BRANDING", "DEVELOPMENT", "STRATEGY"].map((tag, i) => (
                                <div key={i} className="border-4 border-white px-6 py-3 font-black text-xl hover:bg-white hover:text-black transition-colors cursor-default transform hover:-rotate-2">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-5 relative">
                        <div className="aspect-square bg-[#FFE66D] border-8 border-white shadow-[20px_20px_0px_0px_#4ECDC4] relative z-10 p-8 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-9xl font-black text-black mb-4">10+</div>
                                <div className="text-3xl font-bold text-black uppercase">Years of<br />Chaos</div>
                            </div>
                        </div>
                        <div className="absolute top-12 left-12 w-full h-full border-8 border-white z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
