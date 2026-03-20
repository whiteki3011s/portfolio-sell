'use client';

import { motion } from 'framer-motion';

export default function LightFolioHero() {
    return (
        <section className="min-h-[90vh] bg-white text-gray-900 flex items-center">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 tracking-tight">
                            Hello, I'm <span className="text-blue-600">Alex</span>.
                            <br />
                            I design friendly interfaces.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                            Passionate about creating accessible, human-centered digital products that solve real problems.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                                View My Work
                            </button>
                            <button className="px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition-colors">
                                Download Resume
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative blob */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-bl from-blue-100 to-green-100 rounded-l-full -z-10 opacity-50 blur-3xl" />
        </section>
    );
}
