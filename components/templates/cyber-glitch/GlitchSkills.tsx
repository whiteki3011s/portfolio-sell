'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: "REACT_CORE", level: 95 },
    { name: "TYPESCRIPT", level: 90 },
    { name: "NODE_JS", level: 85 },
    { name: "WEBGL", level: 75 },
    { name: "PYTHON", level: 80 },
    { name: "AWS_CLOUD", level: 70 }
];

export default function GlitchSkills() {
    return (
        <section className="py-24 bg-black text-cyan-500 font-mono relative border-t border-cyan-900/30">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* HUD Interface */}
                    <div className="relative border border-cyan-900/50 p-8 bg-cyan-900/5">
                        <div className="absolute top-0 left-0 bg-cyan-500 text-black text-xs font-bold px-2 py-1">
                            SYSTEM_STATUS
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-4">
                            <div className="space-y-2">
                                <div className="text-xs text-cyan-700">CPU_USAGE</div>
                                <div className="text-2xl font-bold text-white animate-pulse">12%</div>
                                <div className="h-1 w-full bg-cyan-900/50 overflow-hidden">
                                    <motion.div
                                        animate={{ width: ["10%", "30%", "15%"] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-full bg-cyan-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-xs text-cyan-700">MEMORY</div>
                                <div className="text-2xl font-bold text-white">64GB</div>
                                <div className="h-1 w-full bg-cyan-900/50 overflow-hidden">
                                    <div className="h-full w-[40%] bg-cyan-500" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-xs text-cyan-700">UPTIME</div>
                                <div className="text-2xl font-bold text-white">99.9%</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-xs text-cyan-700">NETWORK</div>
                                <div className="text-2xl font-bold text-white">SECURE</div>
                            </div>
                        </div>

                        {/* Radar/Grid Decoration */}
                        <div className="absolute bottom-4 right-4 w-24 h-24 border border-cyan-900/50 rounded-full flex items-center justify-center opacity-50">
                            <div className="w-full h-[1px] bg-cyan-900/50 absolute" />
                            <div className="h-full w-[1px] bg-cyan-900/50 absolute" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-1/2 h-1/2 border-r border-cyan-500 absolute top-0 right-0 origin-bottom-left bg-gradient-to-t from-transparent to-cyan-500/20"
                            />
                        </div>
                    </div>

                    {/* Skill Bars */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-500 animate-ping" />
                            SKILL_MATRIX_LOADED
                        </h3>

                        {skills.map((skill, index) => (
                            <div key={index} className="group">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-cyan-300 group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                    <span className="text-cyan-700">
                                        [{skill.level}%]
                                    </span>
                                </div>
                                <div className="h-2 bg-cyan-900/30 w-full overflow-hidden relative">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        className="h-full bg-cyan-600 group-hover:bg-cyan-400 transition-colors relative"
                                    >
                                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_white]" />
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
