'use client';

import { motion } from 'framer-motion';

export default function HeroEditorial() {
    return (
        <section className="min-h-screen bg-[#FFFAF0] text-[#1c1917] overflow-hidden relative">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-screen flex flex-col justify-center">

                {/* Large Serif Title */}
                <div className="relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-serif italic text-2xl md:text-3xl text-[#b45309] mb-4"
                    >
                        The Collection 2025
                    </motion.p>
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-[12vw] leading-[0.85] tracking-tight"
                    >
                        ELEGANCE<br />
                        <span className="italic font-light">&</span> GRACE
                    </motion.h1>
                </div>

                {/* Floating Images */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute top-1/2 left-10 md:left-32 transform -translate-y-1/2 w-48 md:w-64 aspect-[3/4] bg-stone-200 shadow-2xl rotate-[-6deg] z-0 overflow-hidden"
                >
                    <div className="w-full h-full bg-stone-300 animate-pulse" /> {/* Placeholder for image */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="absolute top-1/2 right-10 md:right-32 transform -translate-y-1/2 w-48 md:w-64 aspect-[3/4] bg-stone-200 shadow-2xl rotate-[6deg] z-0 overflow-hidden"
                >
                    <div className="w-full h-full bg-stone-400 animate-pulse" /> {/* Placeholder for image */}
                </motion.div>

                {/* Bottom Info */}
                <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end font-serif">
                    <div className="text-lg">
                        <p>Visual Storyteller</p>
                        <p>Based in Paris</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-24 w-[1px] bg-black mb-4" />
                        <span className="uppercase tracking-widest text-xs">Scroll</span>
                    </div>
                    <div className="text-lg text-right">
                        <p>Selected Works</p>
                        <p>Vol. 05</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
