'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        id: 1,
        title: "Immersion",
        description: "Deep dive into the problem space.",
        gradient: "from-pink-500 to-rose-500"
    },
    {
        id: 2,
        title: "Ideation",
        description: "Generating concepts without limits.",
        gradient: "from-purple-500 to-indigo-500"
    },
    {
        id: 3,
        title: "Creation",
        description: "Bringing the vision to life.",
        gradient: "from-cyan-500 to-blue-500"
    }
];

export default function GradientProcess() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 overflow-hidden group"
                        >
                            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.gradient}`} />
                            <div className={`absolute -right-12 -top-12 w-32 h-32 bg-gradient-to-br ${step.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                            <span className="text-6xl font-bold text-gray-100 mb-4 block">0{step.id}</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-500">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
