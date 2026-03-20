'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    { id: 1, title: 'Neon Nights', client: 'Adidas', category: 'Commercial', role: 'Editor', year: '2024' },
    { id: 2, title: 'Echoes of Silence', client: 'Indie', category: 'Short Film', role: 'Colorist', year: '2023' },
    { id: 3, title: 'Urban Flow', client: 'Nike', category: 'Social', role: 'Editor / Motion', year: '2024' },
    { id: 4, title: 'Lost in Sound', client: 'Sony', category: 'Music Video', role: 'Director / Edit', year: '2023' },
    { id: 5, title: 'Future Tech', client: 'Samsung', category: 'Commercial', role: 'VFX', year: '2024' },
    { id: 6, title: 'Desert Run', client: 'Jeep', category: 'Commercial', role: 'Colorist', year: '2022' },
];

const filters = ['All', 'Commercial', 'Music Video', 'Short Film', 'Social'];

export default function WorkPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <main className="bg-[#050505] min-h-screen pt-32 pb-20 px-6 md:px-20">
            <div className="max-w-[1920px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter mb-4">
                            Selected<br />Projects
                        </h1>
                        <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest max-w-md">
                            A collection of commercial, narrative, and experimental work.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${activeFilter === filter
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500 hover:text-white'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {filteredProjects.map((project) => (
                        <Link href={`/work/${project.id}`} key={project.id} className="group block">
                            {/* Thumbnail */}
                            <div className="relative aspect-video bg-zinc-900 mb-6 overflow-hidden border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                                <div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-105">
                                    {/* Placeholder for image */}
                                    <div className="w-full h-full bg-gradient-to-tr from-zinc-800 to-zinc-900" />
                                </div>

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="px-6 py-3 border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                        View Project
                                    </span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold uppercase text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm font-mono uppercase mb-2">
                                        {project.client} • {project.category}
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="text-[10px] text-zinc-600 border border-zinc-800 px-2 py-1 rounded">
                                            {project.role}
                                        </span>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32 pt-20 border-t border-white/10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Ready to start your project?</h2>
                    <Link href="/demos/rechrome-cinematic-video-editor/contact" className="inline-block px-8 py-4 bg-cyan-500 text-black font-black uppercase tracking-widest hover:bg-white transition-colors">
                        Hire Me
                    </Link>
                </div>
            </div>
        </main>
    );
}
