'use client';

import { motion } from 'framer-motion';

export default function HeroAbstract() {
    return (
        <section className="min-h-screen bg-[#FFF5F5] text-[#333] overflow-hidden relative flex items-center justify-center">
            {/* Fluid Background Blobs */}
            <div className="absolute inset-0 z-0 opacity-70">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 33% 67% / 55% 27% 73% 45%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FF9A9E] mix-blend-multiply filter blur-2xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -60, 0],
                        borderRadius: ["50% 50% 33% 67% / 55% 27% 73% 45%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 33% 67% / 55% 27% 73% 45%"]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#FECFEF] mix-blend-multiply filter blur-2xl"
                />
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        borderRadius: ["40% 60% 60% 40% / 40% 40% 60% 60%", "60% 40% 40% 60% / 60% 60% 40% 40%", "40% 60% 60% 40% / 40% 40% 60% 60%"]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-[#A18CD1] mix-blend-multiply filter blur-2xl opacity-50"
                />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A9E] to-[#FECFEF] drop-shadow-sm">
                        Create.<br />
                        Flow.<br />
                        Inspire.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl font-light text-gray-700 mb-12"
                >
                    Designing digital experiences that feel alive.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-6"
                >
                    <button className="px-8 py-4 rounded-full bg-white text-gray-800 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        See My Work
                    </button>
                    <button className="px-8 py-4 rounded-full bg-[#FF9A9E] text-white font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:bg-[#ff8085]">
                        Let's Talk
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
