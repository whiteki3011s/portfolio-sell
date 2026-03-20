'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        id: 1,
        title: "Discovery",
        description: "Understanding the core essence of the brand through deep research and workshops.",
        color: "bg-[#FF6B6B]"
    },
    {
        id: 2,
        title: "Exploration",
        description: "Iterating on visual concepts and finding the perfect balance of form and function.",
        color: "bg-[#4ECDC4]"
    },
    {
        id: 3,
        title: "Refinement",
        description: "Polishing every detail and ensuring the design system is robust and scalable.",
        color: "bg-[#FFE66D]"
    }
];

export default function AbstractProcess() {
    return (
        <section className="py-32 bg-[#FFF8F0] relative">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E0F7FA] rounded-full blur-3xl opacity-50 -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-bold text-[#2D3436] mb-24"
                    >
                        Process
                    </motion.h2>

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse text-right' : ''}`}
                            >
                                <div className={`w-24 h-24 ${step.color} rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-bold text-white shadow-lg`}>
                                    0{step.id}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-[#2D3436] mb-4">{step.title}</h3>
                                    <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
