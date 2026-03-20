'use client';

import { motion } from 'framer-motion';

export default function MotionLabHero() {
    return (
        <section className="min-h-screen bg-[#111827] text-white flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="mb-8"
                >
                    <div className="inline-block w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 animate-spin-slow blur-xl opacity-70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <h1 className="text-[10vw] font-black leading-none tracking-tighter mix-blend-difference relative">
                        MOTION
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">LAB</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12"
                >
                    Experimental interactions and kinetic typography for the modern web.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-8 py-4 bg-white text-black font-bold rounded-full"
                >
                    Enter Experience
                </motion.button>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                        }}
                        animate={{
                            y: [null, Math.random() * 100 + "vh"],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
