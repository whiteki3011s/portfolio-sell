'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe } from 'lucide-react';

export default function Y2KAbout() {
    return (
        <section className="py-24 bg-[#000033] text-[#ccff00] font-mono relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-2 border-[#ccff00] bg-[#000033]/90 p-8 shadow-[8px_8px_0px_0px_#ccff00]"
                    >
                        <div className="flex items-center gap-2 border-b-2 border-[#ccff00] pb-4 mb-8">
                            <Terminal className="w-6 h-6 animate-pulse" />
                            <h2 className="text-2xl font-bold tracking-widest">WHO_AM_I.EXE</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed">
                                    <span className="text-[#ff00ff] font-bold">&gt; INITIALIZING BIO...</span>
                                    <br /><br />
                                    I'm a digital architect obsessed with the raw energy of the early web. I build experiences that feel like hacking into a mainframe—glitchy, loud, and unforgettable.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    My philosophy is simple: <span className="bg-[#ccff00] text-[#000033] px-1 font-bold">BREAK THE GRID.</span> If it looks like a template, I delete it. I craft bespoke digital chaos that converts.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-[#000066] p-4 border border-[#00ffff]">
                                    <h3 className="text-[#00ffff] font-bold mb-4 flex items-center gap-2">
                                        <Cpu className="w-4 h-4" /> SYSTEM STATS
                                    </h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span>LOCATION:</span>
                                            <span className="text-[#ff00ff]">CYBERSPACE</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>EXPERIENCE:</span>
                                            <span className="text-[#ff00ff]">LVL. 99</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>STATUS:</span>
                                            <span className="text-[#00ff00] animate-pulse">ONLINE</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>MOOD:</span>
                                            <span className="text-[#ff00ff]">HYPER</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-[#000066] p-4 border border-[#ff00ff]">
                                    <h3 className="text-[#ff00ff] font-bold mb-4 flex items-center gap-2">
                                        <Globe className="w-4 h-4" /> MISSION
                                    </h3>
                                    <p className="text-sm">
                                        To resurrect the soul of the internet. No more sterile corporate Memphis. We're bringing back personality, one pixel at a time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
