'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => { const ctx = gsap.context(() => { 
        // Navbar hide/show on scroll
        const showAnim = gsap.from('.navbar-container', {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            }
        });
     }); return () => ctx.revert(); }, []);

    const navLinks = [
        { name: 'Home', href: '/demos/rechrome-cinematic-video-editor' },
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="navbar-container fixed top-0 left-0 w-full z-50 px-6 py-4 mix-blend-difference text-white">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/demos/rechrome-cinematic-video-editor" className="text-2xl font-bold tracking-tighter uppercase z-50 relative group">
                    <span className="inline-block transition-transform group-hover:-translate-y-1">R</span>
                    <span className="inline-block transition-transform group-hover:-translate-y-1 delay-75">e</span>
                    <span className="inline-block transition-transform group-hover:-translate-y-1 delay-100">c</span>
                    <span className="inline-block transition-transform group-hover:-translate-y-1 delay-150">h</span>
                    <span className="inline-block transition-transform group-hover:-translate-y-1 delay-200">r</span>
                    <span className="inline-block transition-transform group-hover:-translate-y-1 delay-300">o</span>
                    <span className="inline-block transition-transform group-hover:-translate-y-1 delay-400">m</span>
                    <span className="inline-block transition-transform group-hover:-translate-y-1 delay-500">e</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                        Let's Talk
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 space-y-1.5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`block w-8 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-40">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-4xl font-bold uppercase hover:text-gray-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
