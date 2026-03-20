'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const levels = [
    {
        id: 1,
        title: "WORLD 1-1",
        subtitle: "E-COMMERCE LAND",
        color: "bg-blue-500"
    },
    {
        id: 2,
        title: "WORLD 1-2",
        subtitle: "SOCIAL MEDIA CASTLE",
        color: "bg-green-500"
    },
    {
        id: 3,
        title: "WORLD 1-3",
        subtitle: "DASHBOARD DUNGEON",
        color: "bg-red-500"
    }
];

export default function RetroLevels() {
    return (
        <section className="py-24 bg-[#1a202c] border-t-4 border-black font-mono">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white text-center mb-16 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    SELECT LEVEL
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {levels.map((level) => (
                        <motion.div
                            key={level.id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-black border-4 border-white p-2 cursor-pointer group"
                        >
                            <div className={`${level.color} h-40 border-4 border-black mb-4 relative overflow-hidden`}>
                                {/* Pixel Clouds/Decoration */}
                                <div className="absolute top-4 right-4 text-white opacity-50 text-4xl">☁️</div>
                                <div className="absolute bottom-0 left-0 w-full h-4 bg-[#8B4513]" /> {/* Ground */}
                            </div>

                            <div className="text-center text-white">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-yellow-400">
                                    {level.title}
                                </h3>
                                <p className="text-xs text-gray-400 mb-4">{level.subtitle}</p>

                                <button className="bg-white text-black px-4 py-2 text-xs font-bold border-2 border-gray-400 hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 mx-auto w-full">
                                    <Play size={12} fill="black" />
                                    START
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
