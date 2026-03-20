'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function LandingVisual() {
    const textRef = useRef<HTMLDivElement>(null);
    const glitchRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        // Entrance animation
        gsap.from(textRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Continuous glitch effect
        const glitchAnimation = () => {
            gsap.to(glitchRef.current, {
                x: gsap.utils.random(-5, 5),
                y: gsap.utils.random(-5, 5),
                duration: 0.1,
                repeat: 3,
                yoyo: true,
                onComplete: () => {
                    gsap.set(glitchRef.current, { x: 0, y: 0 });
                    gsap.delayedCall(gsap.utils.random(2, 5), glitchAnimation);
                }
            });
        };

        gsap.delayedCall(2, glitchAnimation);

        // Floating animation
        gsap.to(textRef.current, {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }, [mounted]);

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <div ref={textRef} className="relative">
                <h1 className="text-[15vw] md:text-[12vw] font-black uppercase leading-none tracking-tighter text-white select-none">
                    PORTFOLIO
                </h1>

                {/* Glitch layer */}
                <div
                    ref={glitchRef}
                    className="absolute inset-0 text-[15vw] md:text-[12vw] font-black uppercase leading-none tracking-tighter opacity-70 mix-blend-difference"
                    style={{
                        color: '#00ff00',
                        textShadow: '2px 2px #ff00ff, -2px -2px #00ffff'
                    }}
                >
                    PORTFOLIO
                </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse" />
        </div>
    );
}
