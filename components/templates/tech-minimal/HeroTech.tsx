'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Code } from 'lucide-react';

export default function HeroTech() {
    const [codeText, setCodeText] = useState('');
    const fullCode = `class Developer {
  constructor() {
    this.skills = ['React', 'Next.js', 'TypeScript'];
    this.passion = 'Building the future';
  }

  deploy() {
    return "Production Ready";
  }
}`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCodeText(fullCode.substring(0, i));
            i++;
            if (i > fullCode.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-300 overflow-hidden font-mono relative selection:bg-cyan-500/30">
            {/* Circuit Board Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="10" cy="10" r="2" fill="currentColor" />
                        <circle cx="90" cy="90" r="2" fill="currentColor" />
                        <path d="M10 10l20 20h40l20-20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 h-screen flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">

                {/* Left Content */}
                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 text-cyan-400"
                    >
                        <Terminal size={20} />
                        <span className="text-sm font-bold tracking-widest">SYSTEM.INIT( )</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                        Build Faster. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Scale Better.</span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                        High-performance web applications engineered for speed and reliability.
                        Optimized for the modern web.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-md transition-colors flex items-center gap-2">
                            <Zap size={18} />
                            <span>Start Project</span>
                        </button>
                        <button className="px-6 py-3 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 rounded-md transition-colors flex items-center gap-2">
                            <Code size={18} />
                            <span>View Source</span>
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800">
                        <div>
                            <div className="text-3xl font-bold text-white">99%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">Uptime</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">&lt;100ms</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">Latency</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">10k+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">Commits</div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Code Block */}
                <div className="flex-1 w-full max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#1e293b] rounded-lg border border-slate-700 shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-slate-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-xs text-slate-500 font-mono">main.ts</div>
                            <Cpu size={14} className="text-slate-500" />
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="font-mono text-sm leading-relaxed">
                                <code className="text-cyan-300">
                                    {codeText}
                                    <span className="animate-pulse">|</span>
                                </code>
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
