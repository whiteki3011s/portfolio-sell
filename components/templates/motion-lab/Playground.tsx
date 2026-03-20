'use client';

import { motion } from 'framer-motion';

export default function MotionPlayground() {
    return (
        <section className="py-32 bg-[#0B101B] text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl font-bold">Playground</h2>
                    <p className="text-gray-400">Experimental sketches & prototypes</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 0.95 }}
                            className="aspect-square bg-gray-800 rounded-2xl overflow-hidden relative group cursor-pointer"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${i === 0 ? 'from-pink-500 to-purple-600' :
                                    i === 1 ? 'from-blue-500 to-cyan-400' :
                                        i === 2 ? 'from-orange-500 to-red-500' :
                                            'from-green-400 to-emerald-600'
                                } opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Experiment_0{i + 1}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
