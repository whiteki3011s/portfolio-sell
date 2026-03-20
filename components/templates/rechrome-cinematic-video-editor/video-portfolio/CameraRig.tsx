'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function CameraRig() {
    const containerRef = useRef<HTMLDivElement>(null);
    const modelRef = useRef<HTMLDivElement>(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        // Initial State (Hero)
        gsap.set(modelRef.current, {
            xPercent: -50,
            yPercent: -50,
            left: "50%",
            top: "50%",
            scale: 0.8,
            rotation: -10,
            opacity: 0
        });

        // Entrance
        gsap.to(modelRef.current, {
            opacity: 1,
            duration: 1.5,
            delay: 0.5,
            ease: "power2.out"
        });

        // Scroll Journey
        tl
            // About: Move to right side
            .to(modelRef.current, {
                left: "80%",
                top: "40%",
                rotation: 15,
                scale: 0.6,
                duration: 10
            })
            // Skills: Move to left and tilt
            .to(modelRef.current, {
                left: "20%",
                top: "60%",
                rotation: -15,
                scale: 0.7,
                duration: 10
            })
            // Showreel: Center and scale up (focal point)
            .to(modelRef.current, {
                left: "50%",
                top: "50%",
                rotation: 0,
                scale: 0.9,
                duration: 10
            })
            // Timeline: Drift to side
            .to(modelRef.current, {
                left: "85%",
                top: "50%",
                rotation: 20,
                scale: 0.5,
                duration: 10
            })
            // Footer: Fade out
            .to(modelRef.current, {
                opacity: 0,
                scale: 0.2,
                duration: 5
            });

        // Idle Float
        gsap.to(modelRef.current, {
            y: "+=15",
            rotation: "+=2",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

     }); return () => ctx.revert(); }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-lighten">
            <div ref={modelRef} className="absolute w-[800px] h-[800px] opacity-0">
                <Image
                    src="/camera.png"
                    alt="Cinema Camera Rig"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                />
            </div>
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-magenta-500/10 blur-[150px] rounded-full animate-pulse delay-1000" />
        </div>
    );
}
