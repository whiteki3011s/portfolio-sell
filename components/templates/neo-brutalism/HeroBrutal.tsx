'use client';

import { motion } from 'framer-motion';

export default function HeroBrutal() {
    return (
        <section className="min-h-screen bg-[#FFFDF5] text-black font-sans flex items-center justify-center overflow-hidden border-b-8 border-black">
            <div className="max-w-7xl mx-auto px-4 relative w-full">

                {/* Floating Decorative Elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-100px] right-[-50px] w-40 h-40 bg-[#A3E635] border-4 border-black rounded-full flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-0"
                >
                    <span className="font-black text-xl">WOW!</span>
                </motion.div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-8">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="bg-[#FAFAFA] border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8"
                        >
                            <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">
                                BOLD.<br />
                                LOUD.<br />
                                <span className="text-[#FACC15] text-stroke-3 text-stroke-black">REAL.</span>
                            </h1>
                        </motion.div>

                        <p className="text-2xl font-bold bg-[#F472B6] border-4 border-black p-4 inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                            Digital Designer & Creative Dev
                        </p>
                    </div>

                    <div className="md:col-span-4 flex flex-col gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-6 bg-[#60A5FA] border-4 border-black font-black text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            VIEW WORK
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-6 bg-[#F87171] border-4 border-black font-black text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-white"
                        >
                            GET IN TOUCH
                        </motion.button>
                    </div>
                </div>

                {/* Marquee */}
                <div className="absolute bottom-[-100px] left-[-50px] w-[120%] bg-black text-white py-4 transform -rotate-3 border-y-4 border-white">
                    <div className="whitespace-nowrap overflow-hidden">
                        <span className="text-4xl font-black mx-4">AVAILABLE FOR HIRE • AVAILABLE FOR HIRE • AVAILABLE FOR HIRE •</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
