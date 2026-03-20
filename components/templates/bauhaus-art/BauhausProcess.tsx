'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BauhausProcess() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 relative">
                        {/* Geometric Composition */}
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileInView={{ rotate: 45 }}
                            transition={{ duration: 1 }}
                            className="w-64 h-64 bg-[#E94B3C] absolute top-0 left-0 mix-blend-multiply opacity-80"
                        />
                        <motion.div
                            initial={{ x: 50 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1 }}
                            className="w-64 h-64 bg-[#2D5F9E] rounded-full absolute top-32 left-32 mix-blend-multiply opacity-80"
                        />
                        <motion.div
                            initial={{ y: 50 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 1 }}
                            className="w-64 h-64 bg-[#F2C94C] absolute top-16 left-16 mix-blend-multiply opacity-80"
                            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                        />
                        <div className="h-[500px]" /> {/* Spacer */}
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-5xl md:text-7xl font-bold uppercase mb-12 leading-none">
                            Less is<br />More
                        </h2>
                        <div className="space-y-8 text-xl font-medium leading-relaxed">
                            <p>
                                We strip away the unnecessary to reveal the essential. Every line, every shape, and every color serves a purpose.
                            </p>
                            <p>
                                Our process is rooted in the fundamental principles of design: clarity, functionality, and truth to materials.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
