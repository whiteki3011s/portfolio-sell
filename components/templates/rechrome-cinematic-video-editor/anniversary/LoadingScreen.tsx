'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const percentRef = useRef({ value: 0 });
    const [percentDisplay, setPercentDisplay] = useState(0);
    const [statusText, setStatusText] = useState("RENDERING PORTFOLIO...");

    // Generate 24 ticks for the render ring
    const ticks = Array.from({ length: 24 }).map((_, i) => i);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    // Exit Transition (Frames 60-68)
                    gsap.to(containerRef.current, {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.inOut",
                        onComplete: onComplete
                    });
                }
            });

            // --- FRAME 0-10: Init ---
            // Background & Glow Fade In
            tl.to('.loading-bg', { opacity: 1, duration: 0.5 })
                .to('.center-glow', { opacity: 0.7, duration: 0.5 }, "<");

            // --- FRAME 4-20: Camera Icon Stroke Draw ---
            tl.to('.camera-path', {
                strokeDashoffset: 0,
                duration: 0.8,
                ease: "power1.in", // Slow start
            }, 0.2) // Start at ~0.2s (approx frame 4)
                .to('.camera-path', {
                    stroke: '#00E5FF', // Cyan
                    filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.5))',
                    duration: 0.4
                }, ">-0.2"); // Overlap slightly with end of draw

            // --- FRAME 12-28: Render Ring Activation ---
            // Staggered light up of ticks
            tl.to('.render-tick', {
                opacity: 1,
                stroke: '#FF3BDA', // Magenta shift
                filter: 'drop-shadow(0 0 5px rgba(255, 59, 218, 0.6))',
                stagger: {
                    each: 0.03, // approx 2 frames at 60fps logic
                    from: "start"
                },
                duration: 0.1
            }, 0.5); // Start at 0.5s (frame 12)

            // --- FRAME 20-50: Main Progress ---
            // Render Bar Fill & Counter
            tl.to(progressRef.current, {
                width: '100%',
                duration: 1.5,
                ease: "cubic-bezier(0.4, 0, 0.2, 1)"
            }, 0.8) // Start at 0.8s (frame 20)
                .to(percentRef.current, {
                    value: 100,
                    duration: 1.5,
                    ease: "linear",
                    onUpdate: () => setPercentDisplay(Math.round(percentRef.current.value))
                }, 0.8)
                // Camera Pulse (Frames 38-55)
                .to('.camera-group', {
                    scale: 1.03,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 3,
                    ease: "sine.inOut"
                }, 1.5) // Around frame 38
                .to('.camera-path', {
                    stroke: '#4FA3FF', // Electric Blue flash
                    duration: 0.1,
                    yoyo: true,
                    repeat: 3
                }, 1.5);

            // Text Switch
            tl.add(() => setStatusText("FINALIZING CUTS..."), 2.0);

            // --- FRAME 50-60: Final Blast ---
            tl.to('.render-tick', {
                stroke: '#FFFFFF',
                filter: 'drop-shadow(0 0 10px white)',
                duration: 0.2
            }, 2.1)
                .to('.loading-wrapper', {
                    scale: 1.15,
                    opacity: 0,
                    filter: 'blur(20px)',
                    duration: 0.4,
                    ease: "power2.in"
                }, 2.4);

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[100] bg-[#0B0B0E] flex flex-col items-center justify-center text-white overflow-hidden">

            {/* Layer 1: Background */}
            <div className="loading-bg absolute inset-0 opacity-0 transition-opacity">
                {/* Film Grain */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain" />
                {/* Soft Radial Glow */}
                <div className="center-glow absolute inset-0 bg-radial-gradient from-cyan-900/20 via-transparent to-transparent opacity-0" />
            </div>

            <div className="loading-wrapper relative flex flex-col items-center z-10">

                {/* Holographic Icon Container */}
                <div className="relative w-48 h-48 flex items-center justify-center mb-8">

                    {/* Layer 3: Render Ring */}
                    <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                        {ticks.map((t, i) => {
                            const angle = (i * 360) / 24;
                            const radius = 90;
                            // Convert polar to cartesian
                            const x1 = 50 + (radius - 5) * Math.cos((angle * Math.PI) / 180) / 100 * 100; // Simplified for % logic in viewBox
                            const y1 = 50 + (radius - 5) * Math.sin((angle * Math.PI) / 180) / 100 * 100;
                            // We'll use rotate transform on lines instead for easier length management
                            return (
                                <line
                                    key={i}
                                    className="render-tick opacity-30 origin-center transition-colors"
                                    x1="50%" y1="10%" x2="50%" y2="13%"
                                    stroke="#2D2D33"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    transform={`rotate(${angle} 50 50) translate(0 10)`} // Adjusting radius via translate for normalized SVG
                                />
                            );
                        })}
                        {/* Corrected Ticks Implementation using normalized coordinates */}
                        {ticks.map((t, i) => (
                            <line
                                key={`tick-${i}`}
                                className="render-tick opacity-0"
                                x1="50" y1="10" x2="50" y2="15"
                                stroke="#2D2D33"
                                strokeWidth="3"
                                strokeLinecap="round"
                                transform={`rotate(${i * 15} 50 50)`}
                            />
                        ))}
                    </svg>

                    {/* Layer 2: Camera Icon */}
                    <div className="camera-group w-24 h-24 relative transform-gpu">
                        {/* Chromatic Aberration Clone (Red) */}
                        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-none stroke-red-500/50 stroke-2 translate-x-[1px] opacity-0 animate-pulse">
                            <rect x="15" y="30" width="70" height="45" rx="4" />
                            <circle cx="50" cy="52.5" r="16" />
                            <path d="M30 30 V 20 H 45 V 30" />
                            <path d="M55 30 V 20 H 70 V 30" />
                        </svg>

                        {/* Main Neon Icon */}
                        <svg viewBox="0 0 100 100" className="relative w-full h-full fill-none stroke-[#2D2D33] stroke-2 overflow-visible">
                            <g className="camera-stroke-group">
                                <rect className="camera-path" x="15" y="30" width="70" height="45" rx="4" strokeDasharray="300" strokeDashoffset="300" />
                                <circle className="camera-path" cx="50" cy="52.5" r="16" strokeDasharray="100" strokeDashoffset="100" />
                                {/* Lens Glint */}
                                <circle className="camera-path" cx="50" cy="52.5" r="6" strokeDasharray="40" strokeDashoffset="40" strokeOpacity="0.5" />
                                {/* Top Reels */}
                                <path className="camera-path" d="M30 30 V 20 H 45 V 30" strokeDasharray="60" strokeDashoffset="60" />
                                <path className="camera-path" d="M55 30 V 20 H 70 V 30" strokeDasharray="60" strokeDashoffset="60" />
                            </g>
                        </svg>
                    </div>
                </div>

                {/* Layer 5: Percentage & Text */}
                <div className="flex flex-col items-center gap-2 mb-4 w-60 md:w-80 relative">
                    <div className="flex justify-between w-full font-mono text-cyan-400 text-[10px] md:text-xs tracking-widest uppercase">
                        <span className="opacity-60 animate-pulse">{statusText}</span>
                        <span className="font-bold">{percentDisplay}%</span>
                    </div>
                    {/* Light Sweep Effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1s_infinite]" />
                </div>

                {/* Layer 4: Horizontal Render Bar */}
                <div className="w-60 md:w-80 h-[3px] md:h-[4px] bg-[#2D2D33] rounded-full overflow-hidden relative">
                    <div
                        ref={progressRef}
                        className="h-full bg-gradient-to-r from-cyan-500 to-electric-blue w-0 rounded-full shadow-[0_0_15px_rgba(0,229,255,0.6)]"
                    />
                </div>

            </div>

            <style jsx>{`
                .bg-radial-gradient {
                    background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to));
                }
            `}</style>
        </div>
    );
}
