'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import Magnetic from './ui/Magnetic';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    useEffect(() => {
        if (titleRef.current) {
            const tl = gsap.timeline();

            // Split text animation would go here, but for simplicity we'll use standard GSAP
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
            id="home"
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
                        Available for freelance work
                    </span>
                </motion.div>

                {/* Main Title */}
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 leading-[0.9] tracking-tighter"
                >
                    <div className="overflow-hidden">
                        <span className="hero-text block">CRAFTING</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-text block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift">
                            DIGITAL
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-text block">REALITY</span>
                    </div>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                >
                    We build immersive web experiences that push the boundaries of design and technology.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Magnetic>
                        <a
                            href="#portfolio"
                            className="inline-block group relative px-8 py-4 bg-foreground text-background rounded-full font-semibold tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Work
                                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </a>
                    </Magnetic>

                    {/* Scroll Indicator - Centered between buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="hidden sm:flex flex-col items-center gap-2 mx-4"
                    >
                        <div className="w-[20px] h-[34px] rounded-full border border-white/20 flex justify-center p-1.5 backdrop-blur-sm bg-white/5">
                            <motion.div
                                animate={{
                                    y: [0, 8, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"
                            />
                        </div>
                    </motion.div>

                    <Magnetic>
                        <a
                            href="#contact"
                            className="inline-block group relative px-8 py-4 bg-white/10 border border-white/10 text-foreground rounded-full font-semibold tracking-wide overflow-hidden transition-all hover:scale-105 hover:bg-white/20 hover:border-white/20 backdrop-blur-sm"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get in Touch
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        </a>
                    </Magnetic>
                </motion.div>
            </div>


        </section>
    );
}
