'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SwissAbout() {
    return (
        <section className="py-32 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-6 lg:col-span-8">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12"
                        >
                            DESIGN IS <br />
                            <span className="text-red-600">INTELLIGENCE</span> <br />
                            MADE VISIBLE.
                        </motion.h2>
                    </div>

                    <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-end">
                        <div className="border-l-4 border-black pl-8 py-2">
                            <p className="text-xl font-bold mb-8">
                                We believe in the power of the grid.
                                In the beauty of simplicity.
                                In the necessity of clarity.
                            </p>
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>ESTABLISHED</span>
                                    <span>2025</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>LOCATION</span>
                                    <span>ZURICH</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>DISCIPLINE</span>
                                    <span>GRAPHIC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Grid */}
                <div className="grid grid-cols-12 gap-4 mt-24 opacity-20 pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-32 border-x border-black" />
                    ))}
                </div>
            </div>
        </section>
    );
}
