'use client';

import { motion } from 'framer-motion';
import { Play, Square, Activity, Cpu } from 'lucide-react';

const projects = [
    {
        pid: 1024,
        name: "distributed-system-core",
        description: "High-performance microservices framework built in Go.",
        status: "Running",
        memory: "256MB",
        cpu: "12%",
        uptime: "14d 2h"
    },
    {
        pid: 2048,
        name: "neural-net-visualizer",
        description: "Real-time visualization tool for deep learning models.",
        status: "Sleeping",
        memory: "1.2GB",
        cpu: "0.5%",
        uptime: "2d 5h"
    },
    {
        pid: 4096,
        name: "react-terminal-ui",
        description: "A customizable terminal component for React applications.",
        status: "Running",
        memory: "64MB",
        cpu: "2%",
        uptime: "5h 30m"
    },
    {
        pid: 8192,
        name: "crypto-trading-bot",
        description: "Automated trading bot with backtesting capabilities.",
        status: "Stopped",
        memory: "0MB",
        cpu: "0%",
        uptime: "0m"
    }
];

export default function DarkProjects() {
    return (
        <section className="py-24 bg-[#0D1117] text-[#C9D1D9] font-mono">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex items-center gap-2 mb-8 border-b border-[#30363D] pb-4">
                    <Activity size={20} className="text-[#238636]" />
                    <h2 className="text-xl font-bold text-white">top -c</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="text-[#8B949E] border-b border-[#30363D]">
                                <th className="pb-4 font-normal">PID</th>
                                <th className="pb-4 font-normal">COMMAND</th>
                                <th className="pb-4 font-normal">STATUS</th>
                                <th className="pb-4 font-normal">CPU</th>
                                <th className="pb-4 font-normal">MEM</th>
                                <th className="pb-4 font-normal">TIME+</th>
                                <th className="pb-4 font-normal">DESCRIPTION</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#30363D]">
                            {projects.map((project, index) => (
                                <motion.tr
                                    key={project.pid}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group hover:bg-[#161B22] transition-colors cursor-pointer"
                                >
                                    <td className="py-4 text-[#58A6FF]">{project.pid}</td>
                                    <td className="py-4 font-bold text-white group-hover:text-[#58A6FF] transition-colors">
                                        ./{project.name}
                                    </td>
                                    <td className="py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs ${project.status === 'Running' ? 'bg-[#238636]/20 text-[#238636]' :
                                                project.status === 'Sleeping' ? 'bg-[#D29922]/20 text-[#D29922]' :
                                                    'bg-[#DA3633]/20 text-[#DA3633]'
                                            }`}>
                                            {project.status === 'Running' && <Play size={10} fill="currentColor" />}
                                            {project.status === 'Stopped' && <Square size={10} fill="currentColor" />}
                                            {project.status}
                                        </span>
                                    </td>
                                    <td className="py-4 font-mono">{project.cpu}</td>
                                    <td className="py-4 font-mono">{project.memory}</td>
                                    <td className="py-4 font-mono">{project.uptime}</td>
                                    <td className="py-4 text-[#8B949E] max-w-xs truncate">{project.description}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
