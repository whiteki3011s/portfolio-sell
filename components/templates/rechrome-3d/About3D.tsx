'use client';

import { motion } from 'framer-motion';

const tools = [
    { name: 'Premiere Pro', icon: 'bg-indigo-600' },
    { name: 'After Effects', icon: 'bg-purple-600' },
    { name: 'DaVinci Resolve', icon: 'bg-yellow-500' },
    { name: 'Blender', icon: 'bg-orange-500' },
    { name: 'Figma', icon: 'bg-rose-500' },
    { name: 'Unreal Engine', icon: 'bg-black border border-white/20' }
];

const nodes = [
    { id: 1, x: '20%', y: '20%', label: 'Edit' },
    { id: 2, x: '80%', y: '30%', label: 'Grade' },
    { id: 3, x: '50%', y: '80%', label: 'VFX' },
    { id: 4, x: '20%', y: '70%', label: 'Sound' },
    { id: 5, x: '80%', y: '70%', label: 'Motion' },
];

export default function Rechrome3DAbout() {
    return (
        <section id="about" className="py-32 px-4 relative z-10 bg-[#0B0B0E] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                    {/* 3D Identity Side */}
                    <div className="relative h-[600px] flex items-center justify-center bg-[#050508] border border-white/5 rounded-sm overflow-hidden group">
                        {/* Dynamic Node Graph */}
                        <div className="absolute inset-0">
                            {/* Lines */}
                            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                                <line x1="20%" y1="20%" x2="50%" y2="80%" stroke="#00E5FF" />
                                <line x1="50%" y1="80%" x2="80%" y2="30%" stroke="#4FA3FF" />
                                <line x1="20%" y1="20%" x2="80%" y2="30%" stroke="#FF3BDA" />
                                <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="#fff" />
                                <line x1="80%" y1="70%" x2="50%" y2="80%" stroke="#fff" />
                            </svg>

                            {/* Nodes */}
                            {nodes.map((node) => (
                                <motion.div
                                    key={node.id}
                                    className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center z-10 hover:border-[#00E5FF] hover:shadow-[0_0_20px_#00E5FF] transition-all cursor-crosshair group-hover:scale-110"
                                    style={{ left: node.x, top: node.y }}
                                    animate={{
                                        y: [0, -10, 0],
                                        boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 20px rgba(0,229,255,0.2)', '0 0 0 rgba(0,0,0,0)']
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, delay: node.id * 0.5 }}
                                >
                                    <div className="w-2 h-2 bg-[#00E5FF] rounded-full" />
                                    <span className="absolute -bottom-6 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{node.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* 3D Logo Center */}
                        <div className="relative z-20 text-center mix-blend-difference pointer-events-none">
                            <h3 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">R-3D</h3>
                            <p className="font-mono text-xs uppercase tracking-[0.5em] text-white/50 mt-4">System Identity</p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                                <span className="block text-white">Crafted Frames.</span>
                                <span className="block text-gray-500">Designed Motion.</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#4FA3FF]">Engineered Experiences.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                I operate at the intersection of technical precision and artistic intuition. My workflow is non-linear, adaptive, and built for speed without compromising the soul of the story.
                            </p>
                        </div>

                        {/* Tools Grid */}
                        <div>
                            <h4 className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Primary Arsenal</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {tools.map(tool => (
                                    <div key={tool.name} className="flex items-center gap-3 bg-white/5 p-4 rounded-sm border border-transparent hover:border-white/20 hover:bg-white/10 transition-all cursor-default">
                                        <div className={`w-3 h-3 rounded-full ${tool.icon}`} />
                                        <span className="font-bold text-sm uppercase text-gray-300">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats / Timeline (Simplified) */}
                        <div className="flex gap-12 pt-8 border-t border-white/10">
                            <div>
                                <span className="block text-4xl font-black text-white">08</span>
                                <span className="text-xs font-mono text-gray-500 uppercase">Years Exp.</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black text-white">52</span>
                                <span className="text-xs font-mono text-gray-500 uppercase">Projects</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black text-white">14</span>
                                <span className="text-xs font-mono text-gray-500 uppercase">Awards</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
