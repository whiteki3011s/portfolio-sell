'use client';

import { useState } from 'react';
import Image from 'next/image';

const breakdowns = [
    {
        id: 1,
        title: 'Cyberpunk City - Color Grade',
        original: '/placeholder-before.jpg', // You would typically have real images here
        graded: '/placeholder-after.jpg'
    },
    {
        id: 2,
        title: 'Desert Mirage - VFX Cleanup',
        original: '/placeholder-before.jpg',
        graded: '/placeholder-after.jpg'
    }
];

const timelines = [
    { id: 1, title: 'Music Video Edit', software: 'Premiere Pro', tracks: '32 Video / 14 Audio', image: '/timeline-1.jpg' },
    { id: 2, title: 'Documentary Assembly', software: 'DaVinci Resolve', tracks: '12 Video / 24 Audio', image: '/timeline-2.jpg' },
];

export default function BreakdownsPage() {
    return (
        <main className="bg-[#050505] min-h-screen pt-32 pb-20 px-6 md:px-20 text-white">
            <div className="max-w-[1920px] mx-auto">
                {/* Header */}
                <div className="mb-24">
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
                        Breakdowns<br /><span className="text-zinc-800">& Process</span>
                    </h1>
                    <p className="text-zinc-400 font-mono text-lg max-w-2xl border-l-2 border-cyan-500 pl-6">
                        Editing is only half the story. See how raw footage transforms through color grading, VFX, and sound design.
                    </p>
                </div>

                {/* Section 1: Before / After */}
                <div className="mb-32">
                    <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-cyan-500 mb-12 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-cyan-500" />
                        Color & VFX
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {breakdowns.map((item) => (
                            <div key={item.id} className="space-y-4">
                                <div className="group relative aspect-video bg-zinc-900 border border-white/10 overflow-hidden cursor-crosshair">
                                    {/* Simulated Before/After */}
                                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black text-4xl uppercase">
                                        Before
                                    </div>
                                    <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* The Reveal - Simple hover implementation */}
                                    <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-white font-black text-4xl uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 clip-path-inset">
                                        After
                                        {/* In a real app, use a proper component that tracks mouse X */}
                                    </div>

                                    <div className="absolute bottom-4 right-4 text-[10px] font-mono uppercase bg-black/50 backdrop-blur px-2 py-1 text-white">
                                        Hover to Grade
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <h3 className="text-xl font-bold uppercase">{item.title}</h3>
                                    <span className="text-cyan-500 font-mono text-xs">DaVinci Resolve</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Timelines */}
                <div className="mb-32">
                    <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-magenta-500 mb-12 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-magenta-500" />
                        The Timeline
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {timelines.map((tl) => (
                            <div key={tl.id} className="bg-zinc-900/30 p-8 border border-white/5 hover:border-magenta-500/50 transition-colors duration-500">
                                <div className="aspect-[4/3] bg-zinc-950 mb-6 flex items-center justify-center border border-white/5">
                                    <span className="text-zinc-800 font-mono text-xs">Timeline Screenshot</span>
                                </div>
                                <h3 className="text-2xl font-bold uppercase mb-2">{tl.title}</h3>
                                <div className="flex gap-4 text-xs font-mono text-zinc-500">
                                    <span>{tl.software}</span>
                                    <span className="text-zinc-700">|</span>
                                    <span className="text-white">{tl.tracks}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Case Study Writeup */}
                <div className="max-w-4xl border-t border-white/10 pt-20">
                    <span className="text-cyan-500 font-mono text-xs uppercase mb-4 block">Case Study</span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">Visual Rhythm in "Speed"</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-light text-zinc-400 leading-relaxed">
                        <div>
                            <h4 className="text-white font-bold uppercase mb-2">The Problem</h4>
                            <p>The footage was chaotic and lacked a cohesive narrative thread. The energy was high, but the story was lost in the noise.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-2">The Approach</h4>
                            <p>I focused on matching cuts to the percussive elements of the track, creating a "visual beat sheet" before assembling the main edit.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-2">The Result</h4>
                            <p>A high-octane commercial that retained the raw energy of the shoot while guiding the viewer clearly through the product features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
