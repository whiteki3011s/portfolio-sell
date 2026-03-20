'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { name: 'Home', href: '/demos/rechrome-cinematic-video-editor' },
    { name: 'Showreel', href: '/demos/rechrome-cinematic-video-editor/showreel' },
    { name: 'Projects', href: '/demos/rechrome-cinematic-video-editor/work' },
    { name: 'Breakdowns', href: '/demos/rechrome-cinematic-video-editor/breakdowns' },
    { name: 'Skills', href: '/demos/rechrome-cinematic-video-editor/skills' },
    { name: 'About', href: '/demos/rechrome-cinematic-video-editor/about' },
    { name: 'Contact', href: '/demos/rechrome-cinematic-video-editor/contact' },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const pathname = usePathname();

    // Close on route change
    useEffect(() => {
        onClose();
    }, [pathname]); // eslint-disable-line

    // 1. Initialize Animation Timeline (Once)
    useEffect(() => {
        const container = containerRef.current;
        const backdrop = backdropRef.current;
        const panel = panelRef.current;

        if (!container || !backdrop || !panel) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ paused: true });

            // Initial Visibility
            tl.set(container, { autoAlpha: 1 });

            // Backdrop Fade
            tl.fromTo(backdrop,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: 'power2.out' }
            );

            // Panel Slide
            tl.fromTo(panel,
                { x: '100%' },
                { x: '0%', duration: 0.6, ease: 'power4.out' },
                "-=0.5"
            );

            // Links Stagger
            tl.fromTo(linksRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
                "-=0.3"
            );

            // Footer Fade
            tl.fromTo('.menu-fade-item',
                { opacity: 0 },
                { opacity: 1, duration: 0.5, stagger: 0.1 },
                "-=0.4"
            );

            tlRef.current = tl;
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // 2. Control Playback based on isOpen prop
    useEffect(() => {
        if (tlRef.current) {
            if (isOpen) {
                tlRef.current.play();
            } else {
                tlRef.current.reverse();
            }
        }
    }, [isOpen]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex justify-end invisible opacity-0"
        >
            {/* Backdrop */}
            <div
                ref={backdropRef}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Sliding Panel */}
            <div
                ref={panelRef}
                className="relative w-full md:w-[600px] h-full bg-[#050505]/95 border-l border-white/10 flex flex-col shadow-[-50px_0_100px_rgba(0,0,0,0.8)]"
            >
                {/* Glass Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6 md:py-8 border-b border-white/5 menu-fade-item">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 border border-cyan-500/50 flex items-center justify-center font-bold text-cyan-400 font-mono text-sm bg-cyan-900/10">
                            RC
                        </div>
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Menu Panel</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="group w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30 transition-all duration-300"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="18" y1="6" x2="6" y2="18" className="origin-center group-hover:rotate-90 transition-transform duration-300"></line>
                            <line x1="6" y1="6" x2="18" y2="18" className="origin-center group-hover:-rotate-90 transition-transform duration-300"></line>
                        </svg>
                    </button>
                </div>

                {/* Main Links */}
                <nav className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-12 gap-1 md:gap-2">
                    {menuItems.map((item, i) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            ref={el => { linksRef.current[i] = el }}
                            className="group relative block w-fit"
                            onClick={onClose}
                        >
                            <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-zinc-400 group-hover:text-white transition-colors duration-300 font-sans tracking-wide">
                                {item.name}
                            </span>
                            {/* Neon Underline Reveal */}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-magenta-500 group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                        </Link>
                    ))}
                </nav>

                {/* Footer / Secondary */}
                <div className="relative z-10 px-8 md:px-12 py-8 md:py-10 bg-white/5 border-t border-white/5 menu-fade-item">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                        {/* Socials */}
                        <div className="flex items-center gap-6">
                            {['Instagram', 'YouTube', 'Vimeo', 'Behance'].map(social => (
                                <a key={social} href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors uppercase text-xs font-bold tracking-widest hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                                    {social}
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <a href="/demos/rechrome-cinematic-video-editor/contact" className="px-6 py-3 border border-white/20 hover:border-magenta-500 hover:bg-magenta-900/20 hover:text-white text-zinc-300 text-xs font-bold uppercase tracking-widest transition-all duration-300 backdrop-blur-md">
                            Hire Me
                        </a>
                    </div>
                </div>

                {/* Subtle 3D Element (Optional Decor) */}
                <div className="absolute bottom-32 right-[-50px] w-64 h-64 opacity-5 pointer-events-none mix-blend-screen animate-pulse">
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500 w-full h-full rotate-12">
                        <circle cx="50" cy="50" r="40" />
                        <path d="M50 10 L50 90 M10 50 L90 50" />
                        <rect x="30" y="30" width="40" height="40" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
