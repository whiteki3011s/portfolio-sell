'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, Zap, Layers } from 'lucide-react';

const services = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "WEB DESIGN",
        description: "Pixel-perfect layouts that scream nostalgia. I design interfaces that look like they're from 2099 via 1999.",
        color: "#00ffff"
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "FULL STACK",
        description: "Building robust backends and flashy frontends. React, Node, and enough caffeine to kill a horse.",
        color: "#ff00ff"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "INTERACTION",
        description: "Micro-interactions that delight and confuse. Hover effects, scroll triggers, and easter eggs galore.",
        color: "#ccff00"
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "BRANDING",
        description: "Logos and identities that stick. I'll give your brand a face that people won't forget.",
        color: "#ff9900"
    }
];

export default function Y2KServices() {
    return (
        <section className="py-24 bg-[#000033] text-[#ccff00] font-mono border-t border-[#ccff00]/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff]">
                        SERVICES_V1.0
                    </h2>
                    <p className="text-[#ccff00] text-xl max-w-2xl mx-auto">
                        &lt; WHAT_I_DO /&gt;
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-black/40 border border-white/10 p-6 hover:bg-[#000066] transition-colors duration-300"
                        >
                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ccff00] transition-colors duration-300 pointer-events-none" />

                            {/* Icon */}
                            <div
                                className="mb-6 p-4 inline-block rounded-none border-2 bg-black"
                                style={{ borderColor: service.color, color: service.color }}
                            >
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#ccff00] transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>

                            <div className="mt-6 flex justify-end">
                                <span className="text-xs font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                                    [READ_MORE]
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
