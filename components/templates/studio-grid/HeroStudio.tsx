'use client';

import { motion } from 'framer-motion';

export default function StudioGridHero() {
    return (
        <section className="min-h-[80vh] flex items-center bg-slate-50 text-slate-900 pt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900"
                        >
                            We build digital products that <span className="text-blue-600">scale</span>.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-600 max-w-2xl mb-10"
                        >
                            Studio Grid is a strategic design and development agency partnering with forward-thinking companies to create exceptional digital experiences.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-4"
                        >
                            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                Our Services
                            </button>
                            <button className="px-8 py-4 border border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
                                View Case Studies
                            </button>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-center gap-6">
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="text-4xl font-bold text-slate-900 mb-1">120+</div>
                            <div className="text-sm text-slate-500 font-medium">Projects Delivered</div>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="text-4xl font-bold text-slate-900 mb-1">15+</div>
                            <div className="text-sm text-slate-500 font-medium">Industry Awards</div>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="text-4xl font-bold text-slate-900 mb-1">98%</div>
                            <div className="text-sm text-slate-500 font-medium">Client Retention</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
