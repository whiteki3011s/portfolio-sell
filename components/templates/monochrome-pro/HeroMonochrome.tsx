'use client';

import { motion } from 'framer-motion';

export default function HeroMonochrome() {
    return (
        <section className="min-h-screen bg-white text-black flex flex-col justify-between p-6 md:p-12 border-x-2 border-black max-w-[1800px] mx-auto">
            {/* Top Bar */}
            <div className="flex justify-between items-start border-b-2 border-black pb-6">
                <div className="text-sm font-bold tracking-widest uppercase">
                    Portfolio<br />
                    ©2025
                </div>
                <div className="text-right text-sm font-bold tracking-widest uppercase">
                    Available<br />
                    For Hire
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col justify-center py-12">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-[15vw] leading-[0.8] font-black tracking-tighter text-center mix-blend-difference"
                >
                    MONO<br />CHROME
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t-2 border-black pt-12">
                    <div className="md:col-span-1">
                        <p className="text-xl font-medium leading-tight">
                            Stripping away the unnecessary to reveal the essential.
                        </p>
                    </div>
                    <div className="md:col-span-1 flex justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center"
                        >
                            <div className="w-20 h-20 bg-black rounded-full" />
                        </motion.div>
                    </div>
                    <div className="md:col-span-1 text-right">
                        <p className="text-xl font-medium leading-tight">
                            Design / Art Direction / Strategy
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-end border-t-2 border-black pt-6">
                <button className="px-8 py-4 bg-black text-white font-bold uppercase hover:bg-transparent hover:text-black border-2 border-black transition-colors">
                    View Projects
                </button>
                <div className="hidden md:block w-1/3 h-2 bg-black" />
                <button className="px-8 py-4 bg-transparent text-black font-bold uppercase hover:bg-black hover:text-white border-2 border-black transition-colors">
                    Get in Touch
                </button>
            </div>
        </section>
    );
}
