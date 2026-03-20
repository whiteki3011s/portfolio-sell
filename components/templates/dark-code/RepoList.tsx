'use client';

import { motion } from 'framer-motion';
import { Star, GitFork } from 'lucide-react';

const repos = [
    {
        name: "distributed-system-core",
        description: "High-performance microservices framework built in Go.",
        language: "Go",
        stars: 1240,
        forks: 350
    },
    {
        name: "neural-net-visualizer",
        description: "Real-time visualization tool for deep learning models.",
        language: "Python",
        stars: 890,
        forks: 210
    },
    {
        name: "react-terminal-ui",
        description: "A customizable terminal component for React applications.",
        language: "TypeScript",
        stars: 560,
        forks: 120
    },
    {
        name: "crypto-trading-bot",
        description: "Automated trading bot with backtesting capabilities.",
        language: "Rust",
        stars: 430,
        forks: 95
    }
];

export default function DarkRepoList() {
    return (
        <section className="py-24 bg-[#0D1117] text-[#C9D1D9]">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex items-center gap-2 mb-8 border-b border-[#30363D] pb-4">
                    <div className="w-3 h-3 rounded-full bg-[#238636]" />
                    <h2 className="text-xl font-bold text-white">Pinned Repositories</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {repos.map((repo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 border border-[#30363D] rounded-md bg-[#0D1117] hover:border-[#8B949E] transition-colors cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-[#58A6FF] hover:underline">{repo.name}</h3>
                                <span className="text-xs border border-[#30363D] rounded-full px-2 py-0.5 text-[#8B949E]">Public</span>
                            </div>
                            <p className="text-sm text-[#8B949E] mb-4 h-10">{repo.description}</p>
                            <div className="flex items-center gap-4 text-xs text-[#8B949E]">
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-[#F1E05A]" />
                                    <span>{repo.language}</span>
                                </div>
                                <div className="flex items-center gap-1 hover:text-[#58A6FF]">
                                    <Star size={14} />
                                    <span>{repo.stars}</span>
                                </div>
                                <div className="flex items-center gap-1 hover:text-[#58A6FF]">
                                    <GitFork size={14} />
                                    <span>{repo.forks}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
