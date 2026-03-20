'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const layers = ['RAW Footage', 'Edit Lock', 'Color Grade', 'VFX / Comp'];

export default function Rechrome3DBreakdowns() {
    const [activeLayer, setActiveLayer] = useState(0);

    return (
        <section id="breakdowns" className="py-32 px-4 relative z-10 bg-[#0B0B0E] text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Text & Controls */}
                <div className="order-2 lg:order-1">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        Process<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Breakdown</span>
                    </h2>

                    <p className="text-gray-400 mb-12 max-w-md">
                        Deconstructing the craft. From raw camera logs to the final polished pixel. Explore the layers of production.
                    </p>

                    <div className="space-y-4">
                        {layers.map((layer, index) => (
                            <button
                                key={layer}
                                onClick={() => setActiveLayer(index)}
                                className={`w-full text-left p-6 border-l-2 transition-all duration-300 group ${activeLayer === index
                                        ? 'border-[#00E5FF] bg-white/5'
                                        : 'border-white/10 hover:border-white/30'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`font-mono text-xs uppercase tracking-widest ${activeLayer === index ? 'text-[#00E5FF]' : 'text-gray-500'}`}>
                                        Layer 0{index + 1}
                                    </span>
                                    {activeLayer === index && <motion.div layoutId="active-dot" className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />}
                                </div>
                                <h3 className={`text-xl font-bold uppercase mt-2 ${activeLayer === index ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                                    {layer}
                                </h3>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3D Interacitve Cube / Layer View */}
                <div className="order-1 lg:order-2 perspective-1000 h-[500px] flex items-center justify-center relative">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,163,255,0.1)_0%,transparent_70%)]" />

                    <motion.div
                        className="relative w-full max-w-md aspect-square preserve-3d"
                        animate={{ rotateY: activeLayer * -90 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Front (RAW) */}
                        <div className="absolute inset-0 bg-[#1a1a1a] border border-white/10 flex items-center justify-center backface-visible transform translate-z-48">
                            <span className="font-mono text-zinc-700 text-6xl font-black opacity-20 rotate-45">RAW</span>
                            <div className="absolute bottom-4 left-4 font-mono text-xs text-zinc-500">LOG-C • 3200 ISO</div>
                        </div>

                        {/* Right (Edit) */}
                        <div className="absolute inset-0 bg-[#151515] border border-white/10 flex items-center justify-center backface-visible origin-left transform rotate-y-90 translate-x-full">
                            <span className="font-mono text-blue-900 text-6xl font-black opacity-20 rotate-45">EDIT</span>
                            <div className="absolute bottom-4 left-4 font-mono text-xs text-blue-500">AVID TIMELINE</div>
                        </div>

                        {/* Back (Grade) */}
                        <div className="absolute inset-0 bg-[#101010] border border-white/10 flex items-center justify-center backface-visible transform -translate-z-48 rotate-y-180">
                            <span className="font-mono text-purple-900 text-6xl font-black opacity-20 rotate-45">GRADE</span>
                            <div className="absolute bottom-4 left-4 font-mono text-xs text-purple-500">RESOLVE NODE GRAPH</div>
                        </div>

                        {/* Left (VFX) */}
                        <div className="absolute inset-0 bg-[#000000] border border-white/10 flex items-center justify-center backface-visible origin-right transform -rotate-y-90 -translate-x-full">
                            <span className="font-mono text-[#00E5FF] text-6xl font-black opacity-20 rotate-45">VFX</span>
                            <div className="absolute bottom-4 left-4 font-mono text-xs text-[#00E5FF]">NUKE COMP</div>
                        </div>
                    </motion.div>

                    {/* Floor Reflection Shadow */}
                    <div className="absolute -bottom-20 w-3/4 h-20 bg-black blur-xl opacity-80" />
                </div>
            </div>
        </section>
    );
}
