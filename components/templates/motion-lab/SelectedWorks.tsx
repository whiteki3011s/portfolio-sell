'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const works = [
    {
        title: "Neon Genesis",
        category: "Interactive WebGL",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Cyber Punk",
        category: "Digital Art",
        image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Abstract Flow",
        category: "Generative Design",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Data Realm",
        category: "Visualization",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function MotionSelectedWorks() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-[#111827] text-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Selected Works</h2>
                </div>

                <div className="space-y-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative group cursor-pointer z-10"
                        >
                            <div className="flex items-baseline justify-between border-b border-gray-800 pb-8 group-hover:border-white transition-colors duration-500">
                                <h3 className="text-4xl md:text-6xl font-black tracking-tighter mix-blend-difference group-hover:translate-x-4 transition-transform duration-500">
                                    {work.title}
                                </h3>
                                <span className="text-sm md:text-lg text-gray-500 group-hover:text-white transition-colors duration-500">
                                    {work.category}
                                </span>
                            </div>

                            {/* Floating Image Reveal */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: hoveredIndex === index ? 1 : 0,
                                    scale: hoveredIndex === index ? 1 : 0.8,
                                    x: 200,
                                    y: -150,
                                    rotate: hoveredIndex === index ? 5 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-0 right-0 w-[400px] h-[300px] rounded-lg overflow-hidden pointer-events-none hidden md:block z-20"
                            >
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
