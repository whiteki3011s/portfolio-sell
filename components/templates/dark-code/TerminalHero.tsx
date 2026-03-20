'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TerminalHero() {
    const [text, setText] = useState('');
    const fullText = "> Initializing system...\n> Loading modules...\n> User: Dev_One\n> Status: Online\n> Ready to code.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen bg-[#0D1117] text-[#C9D1D9] font-mono flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-[#161B22] rounded-lg border border-[#30363D] shadow-2xl overflow-hidden">
                <div className="bg-[#0D1117] px-4 py-2 border-b border-[#30363D] flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    <span className="ml-2 text-xs text-[#8B949E]">user@portfolio:~</span>
                </div>

                <div className="p-8 min-h-[400px]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="whitespace-pre-wrap text-green-400 mb-8"
                    >
                        {text}
                        <span className="animate-pulse">_</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Full Stack <span className="text-[#238636]">Developer</span>
                        </h1>
                        <p className="text-[#8B949E] text-xl mb-8">
                            Building scalable backend systems and clean frontend interfaces.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-[#238636] text-white rounded-md font-bold hover:bg-[#2EA043] transition-colors border border-[rgba(240,246,252,0.1)]">
                                View GitHub
                            </button>
                            <button className="px-6 py-3 bg-[#21262D] text-[#C9D1D9] rounded-md font-bold hover:bg-[#30363D] transition-colors border border-[#30363D]">
                                $ contact_me
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
