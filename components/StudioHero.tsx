'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import Magnetic from './ui/Magnetic';
import Link from 'next/link';

export default function StudioHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    useEffect(() => {
        if (titleRef.current) {
            const tl = gsap.timeline();

            tl.fromTo(titleRef.current.querySelectorAll('.hero-text'),
                { y: 100, opacity: 0, rotateX: -20 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: 'power4.out'
                }
            );
        }
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000 pt-24 md:pt-34 pb-32"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 -z-10"
            >
                <div className="absolute inset-0 bg-background" />

                {/* Aurora Effect */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
                <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px] animate-float" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
            </motion.div>

            <div className="container mx-auto px-4 text-center relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4 border-primary/20"
                >
                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-sm font-medium text-foreground/80 tracking-wide">
                        Premium Portfolio Templates & Custom Builds
                    </span>
                </motion.div>

                {/* Main Title */}
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[0.95] tracking-tighter max-w-6xl mx-auto"
                >
                    <div className="overflow-hidden">
                        <span className="hero-text block">Build a Portfolio</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-text block">That Actually Gets</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-text block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift">
                            You Clients.
                        </span>
                    </div>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                >
                    Premium portfolio templates and custom-built websites for
                    <br className="hidden md:block" />
                    developers, designers, and creators who want to stand out.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Magnetic>
                        <Link
                            href="/templates"
                            className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-primary)_0%,var(--color-secondary)_50%,var(--color-accent)_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background/90 px-8 py-1 text-sm font-medium text-foreground backdrop-blur-3xl transition-all group-hover:bg-background/80">
                                <span className="flex items-center gap-2 text-lg tracking-wide">
                                    View Templates
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </span>
                        </Link>
                    </Magnetic>

                    <Magnetic>
                        <Link
                            href="/#services"
                            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 font-medium text-foreground transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                        >
                            <span className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <span className="flex items-center gap-2 text-lg tracking-wide">
                                Get Custom Portfolio
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <span className="absolute inset-x-0 -bottom-px mx-auto h-[2px] w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
                        </Link>
                    </Magnetic>
                </motion.div>
            </div>
        </section>
    );
}
