'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);

    // Magnetic effect motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for smooth magnetic movement
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        setIsMounted(true);

        const handleScroll = () => {
            // Show after scrolling past 80% of hero section
            setIsVisible(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Magnetic cursor effect
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Apply magnetic pull (max 20px movement)
        const magneticStrength = 0.3;
        mouseX.set(distanceX * magneticStrength);
        mouseY.set(distanceY * magneticStrength);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!isMounted) return null;

    return (
        <motion.div
            ref={buttonRef}
            initial={{ opacity: 0, scale: 0, x: 100 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0,
                x: isVisible ? 0 : 100,
            }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed right-4 top-[80%] -translate-y-1/2 z-50 pointer-events-none"
            style={{
                x,
                y,
            }}
        >
            <motion.button
                onClick={scrollToContact}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative w-36 h-36 pointer-events-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Glow effect layers */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Pulsing background glow */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30 blur-lg"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Glassmorphic button base */}
                <div className="absolute inset-2 rounded-full bg-background/40 backdrop-blur-xl border border-white/10 shadow-2xl" />

                {/* Rotating circular text */}
                <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 144 144"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 72, 72 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                        />
                    </defs>
                    <text
                        className="text-[11px] fill-current text-foreground/60 font-medium tracking-[0.35em] uppercase"
                        style={{ letterSpacing: '0.35em' }}
                    >
                        <textPath href="#circlePath" startOffset="0%">
                            GET IN TOUCH • GET IN TOUCH •
                        </textPath>
                    </text>
                </motion.svg>

                {/* Center arrow icon with glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg"
                        whileHover={{
                            boxShadow: '0 0 40px rgba(102, 126, 234, 0.6)',
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Inner glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-80" />

                        {/* Icon */}
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                rotate: 45,
                            }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10"
                        >
                            <ArrowUpRight className="w-6 h-6 text-primary-foreground drop-shadow-lg" strokeWidth={2.5} />
                        </motion.div>

                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    </motion.div>
                </div>

                {/* Hover ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/40"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />
            </motion.button>
        </motion.div>
    );
}
