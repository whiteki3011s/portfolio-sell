'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Camera } from 'lucide-react';

export default function HeroFilm() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const drawGrain = () => {
            const w = canvas.width;
            const h = canvas.height;

            ctx.clearRect(0, 0, w, h);

            // Generate noise
            const imageData = ctx.createImageData(w, h);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const noise = Math.random() * 30;
                data[i] = noise;     // r
                data[i + 1] = noise; // g
                data[i + 2] = noise; // b
                data[i + 3] = 40;    // alpha
            }

            ctx.putImageData(imageData, 0, 0);

            // Scratches and dust
            if (Math.random() > 0.95) {
                ctx.beginPath();
                ctx.moveTo(Math.random() * w, 0);
                ctx.lineTo(Math.random() * w, h);
                ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.2})`;
                ctx.lineWidth = Math.random() * 2;
                ctx.stroke();
            }

            time++;
            animationFrameId = requestAnimationFrame(drawGrain);
        };

        drawGrain();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-[#1a1a1a] text-[#e0e0e0] overflow-hidden font-mono">
            {/* Grain Overlay */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-10 mix-blend-overlay"
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20 pointer-events-none" />

            <div className="relative z-30 container mx-auto px-6 h-screen flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-4 mb-8 text-amber-500/80">
                        <Film size={24} />
                        <span className="tracking-[0.5em] text-sm uppercase">Cinematic Portfolio</span>
                        <span className="px-2 py-0.5 border border-amber-500/30 text-xs rounded-sm">REC</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none mix-blend-difference">
                        CAPTURING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 blur-[1px]">MOMENTS</span>
                    </h1>

                    <p className="text-xl md:text-2xl max-w-2xl mb-12 text-gray-400 font-light leading-relaxed">
                        A digital experience inspired by the warmth of analog film.
                        Imperfect, grainy, and authentically human.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <button className="group flex items-center gap-3 px-8 py-4 bg-[#e0e0e0] text-black font-bold tracking-widest hover:bg-amber-500 transition-colors duration-300">
                            <Play size={18} className="fill-current" />
                            <span>SHOWREEL</span>
                        </button>
                        <button className="group flex items-center gap-3 px-8 py-4 border border-[#e0e0e0]/30 hover:border-amber-500/50 hover:text-amber-500 transition-colors duration-300">
                            <Camera size={18} />
                            <span>GALLERY</span>
                        </button>
                    </div>
                </motion.div>

                {/* Film Strip Decoration */}
                <div className="absolute right-0 top-0 bottom-0 w-24 hidden lg:flex flex-col gap-4 py-4 border-l border-white/5 bg-black/20 backdrop-blur-sm">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex-1 mx-4 border-x-4 border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/5 group-hover:bg-amber-500/20 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute bottom-12 left-6 z-30 text-xs text-gray-500 flex gap-8 tracking-widest">
                <span>ISO 400</span>
                <span>35MM</span>
                <span>F/1.8</span>
            </div>
        </div>
    );
}
