'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
    "Brand Identity",
    "Digital Design",
    "Art Direction",
    "Development",
    "Strategy"
];

export default function MonochromeServices() {
    return (
        <section className="py-32 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-sm font-bold tracking-widest uppercase mb-8 border-b border-white/20 pb-4">
                            Services
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            We build digital experiences with a focus on precision, typography, and negative space.
                        </p>
                    </div>

                    <div className="w-full md:w-2/3">
                        <div className="space-y-0">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="border-b border-white/20 py-8 group cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 px-4 -mx-4"
                                >
                                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight flex justify-between items-center">
                                        {service}
                                        <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
