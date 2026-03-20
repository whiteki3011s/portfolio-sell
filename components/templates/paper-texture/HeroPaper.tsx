'use client';

import { motion } from 'framer-motion';

export default function HeroPaper() {
    return (
        <section className="min-h-screen bg-[#F0EAD6] text-[#2C2C2C] relative overflow-hidden flex items-center justify-center">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none z-20"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' }} />

            {/* Torn Paper Elements */}
            <div className="absolute top-0 left-0 w-full h-16 bg-white transform -skew-y-1 origin-top-left z-10 shadow-sm" />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform skew-y-1 origin-bottom-right z-10 shadow-sm" />

            <div className="relative z-30 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="order-2 md:order-1">
                    <motion.div
                        initial={{ rotate: -2, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 shadow-lg transform rotate-[-1deg] border border-gray-200"
                    >
                        <span className="font-handwriting text-2xl text-gray-500 block mb-2" style={{ fontFamily: 'cursive' }}>Hello, I am</span>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight text-[#3E2723]">
                            The<br />
                            Artisan.
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed font-serif">
                            Crafting digital stories with a human touch.
                            I believe in imperfection, texture, and the warmth of handmade design.
                        </p>
                    </motion.div>

                    <div className="mt-8 flex gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="px-6 py-3 bg-[#3E2723] text-[#F0EAD6] font-serif font-bold shadow-md"
                        >
                            View Portfolio
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            className="px-6 py-3 bg-transparent border-2 border-[#3E2723] text-[#3E2723] font-serif font-bold"
                        >
                            Contact Me
                        </motion.button>
                    </div>
                </div>

                {/* Collage Visual */}
                <div className="order-1 md:order-2 relative h-[400px] w-full">
                    <motion.div
                        initial={{ rotate: 5, scale: 0.9, opacity: 0 }}
                        animate={{ rotate: 3, scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="absolute top-10 right-10 w-64 h-80 bg-gray-300 shadow-xl z-10 border-4 border-white transform rotate-3"
                    >
                        {/* Placeholder for photo */}
                        <div className="w-full h-full bg-gray-400 opacity-50" />
                    </motion.div>

                    <motion.div
                        initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
                        animate={{ rotate: -2, scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="absolute top-20 right-40 w-56 h-64 bg-[#8D6E63] shadow-lg z-0 border-4 border-white transform -rotate-2"
                    />

                    {/* Tape */}
                    <div className="absolute top-4 right-32 w-32 h-8 bg-yellow-100 opacity-80 transform rotate-[-10deg] z-20 shadow-sm" />
                </div>
            </div>
        </section>
    );
}
