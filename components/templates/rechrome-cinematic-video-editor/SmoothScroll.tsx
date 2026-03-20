'use client';

import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Register ScrollTrigger to avoid hydration mismatch issues
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef(null);

    useEffect(() => { const ctx = gsap.context(() => { 
        // Update ScrollTrigger on Lenis scroll
        function update(time: number) {
            // time is passed from Lenis's RAF loop
            ScrollTrigger.update();
        }

        // This is handled automatically by new versions of @gsap/react / lenis/react interaction usually,
        // but explicit updates ensure sync.
        // However, ReactLenis component handles much of this.
        // We mainly need to ensure GSAP Ticker is handled if we want perfect sync.

        gsap.ticker.add((time) => {
            // lenisRef.current?.lenis?.raf(time * 1000) 
            // Note: ReactLenis usually handles the RAF loop unless we turn it off.
            // For now, we trust ReactLenis's internal loop or default window RAF.
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(() => { });
        };
     }); return () => ctx.revert(); }, []);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
