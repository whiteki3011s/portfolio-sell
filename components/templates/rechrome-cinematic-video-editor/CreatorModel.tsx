'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function CreatorModel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const modelRef = useRef<HTMLDivElement>(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5, // Smooth scrubbing
            }
        });

        // Initial State (Hero): Centered, slightly floating
        gsap.set(modelRef.current, {
            xPercent: -50,
            yPercent: -50,
            left: "50%",
            top: "50%",
            scale: 1,
            opacity: 0,
            rotation: 0
        });

        // Entrance animation
        gsap.to(modelRef.current, {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            delay: 0.5
        });

        // Scroll Sequence
        tl
            // Move to right for About Section
            .to(modelRef.current, {
                left: "85%",
                top: "50%",
                scale: 0.8,
                rotation: -15,
                duration: 5
            }, "start")

            // Move to left and rotate for Timeline
            .to(modelRef.current, {
                left: "15%",
                top: "40%",
                scale: 0.9,
                rotation: 15,
                duration: 5
            }, ">")

            // Move to center bottom for Gallery
            .to(modelRef.current, {
                left: "50%",
                top: "80%",
                scale: 0.6,
                rotation: 0,
                duration: 5
            }, ">");


        // Floating idle animation (always running)
        gsap.to(modelRef.current, {
            y: "+=20",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

     }); return () => ctx.revert(); }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-20 overflow-hidden mix-blend-lighten"
        >
            <div
                ref={modelRef}
                className="absolute w-[600px] h-[600px] opacity-0"
            >
                <Image
                    src="/creator.png"
                    alt="3D Creator Character"
                    fill
                    className="object-contain drop-shadow-[0_0_50px_rgba(50,100,255,0.3)]"
                    priority
                />
            </div>

            {/* Ambient particles or effects could go here */}
        </div>
    );
}
