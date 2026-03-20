'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
    { year: "2025", event: "Senior Engineer" },
    { year: "2023", event: "Tech Lead" },
    { year: "2021", event: "Full Stack Dev" },
    { year: "2019", event: "Started Coding" }
];

export default function TechAbout() {
    return (
        <section className="py-32 bg-gray-50 text-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-400">
                            // About
                        </h2>
                        <p className="text-xl font-medium leading-relaxed">
                            Building scalable solutions with precision and clarity. Focused on performance, accessibility, and clean code.
                        </p>
                    </div>

                    <div className="w-full md:w-2/3">
                        <div className="space-y-8 border-l border-gray-200 pl-8 ml-4">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[37px] top-2 w-4 h-4 bg-white border-2 border-black rounded-full" />
                                    <span className="font-mono text-sm text-gray-500 mb-1 block">{item.year}</span>
                                    <h3 className="text-xl font-bold">{item.event}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
