'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const highlights = [
    { id: 1, title: 'Nike Air Max', client: 'Nike', role: 'Lead Editor', image: '/placeholder-project-1.jpg' },
    { id: 2, title: 'Summer Campaign', client: 'Spotify', role: 'Colorist', image: '/placeholder-project-2.jpg' },
    { id: 3, title: 'Music Video', client: 'Sony Music', role: 'VFX / Edit', image: '/placeholder-project-3.jpg' },
];

export default function ShowreelPage() {
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <main className="bg-[#050505] min-h-screen text-white">

            {/* HERO: Full Width Video Player */}
            <section className="relative w-full h-[85vh] group overflow-hidden">
                <div
                    ref={videoContainerRef}
                    className="absolute inset-0 bg-zinc-900"
                >
                    {/* Placeholder for Video - typically an <video> tag */}
                    <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-10" />
                    <video
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/placeholder-reel-poster.jpg"
                    >
                        {/* Replace with actual video source */}
                        <source src="/reel-teaser.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 pointer-events-none">
                    <button
                        className="pointer-events-auto group relative flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-cyan-500/50"
                        onClick={() => setIsPlaying(true)}
                    >
                        {/* Magnetic Core */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-magenta-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Pulse Ring 1 */}
                        <div className="absolute inset-0 rounded-full border border-cyan-500/30 scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-0 transition-all duration-1000 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />

                        {/* Pulse Ring 2 */}
                        <div className="absolute inset-0 rounded-full border border-magenta-500/30 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />

                        <Play className="w-10 h-10 md:w-16 md:h-16 fill-white stroke-none relative z-10 group-hover:fill-cyan-400 transition-colors duration-300 transform group-hover:translate-x-1" />

                        <span className="absolute -bottom-12 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 text-nowrap">
                            Play Reel
                        </span>
                    </button>
                    <h1 className="mt-16 text-4xl md:text-6xl font-black uppercase tracking-tighter">
                        2024 Showreel
                    </h1>
                    <p className="mt-4 text-zinc-400 font-mono text-sm uppercase tracking-widest">
                        Editing • Color • Sound • Motion
                    </p>
                </div>

                {/* Bottom Info Strip */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12 flex flex-col md:flex-row justify-between items-end bg-gradient-to-t from-black to-transparent">
                    <div className="max-w-xl">
                        <p className="text-lg md:text-xl font-light text-zinc-300">
                            A curated selection of my best work in fast-paced commercials, cinematic music videos, and brand storytelling.
                        </p>
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTS SECTION */}
            <section className="py-24 px-6 md:px-20 max-w-[1920px] mx-auto">
                <div className="flex items-end justify-between mb-16">
                    <h2 className="text-2xl font-mono uppercase tracking-widest text-cyan-500">
                        // Highlights
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item) => (
                        <div key={item.id} className="group relative bg-zinc-900 aspect-[4/5] md:aspect-[3/4] overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-colors duration-500">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700">
                                {/* <Image src={item.image} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" /> */}
                                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-cyan-400 font-mono text-xs mb-2 uppercase tracking-wider">{item.client}</p>
                                <h3 className="text-3xl font-bold uppercase mb-2 leading-none">{item.title}</h3>
                                <p className="text-zinc-500 text-sm">{item.role}</p>
                            </div>

                            {/* Hover Arrow */}
                            <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
