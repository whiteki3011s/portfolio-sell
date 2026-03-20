'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Rechrome3DLoader({ onLoadComplete }: { onLoadComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onLoadComplete, 500); // Slight delay after 100%
                    return 100;
                }
                return prev + Math.floor(Math.random() * 5) + 1; // Random increment
            });
        }, 50);

        return () => clearInterval(timer);
    }, [onLoadComplete]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.1, filter: "brightness(2)" }}
                transition={{ duration: 0.8 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0E] text-[#00E5FF]"
            >
                {/* Circular Neon Ring */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full rotate-90" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="2"
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="283"
                            strokeDashoffset={283 - (283 * progress) / 100}
                            className="drop-shadow-[0_0_10px_#00E5FF]"
                        />
                    </svg>

                    {/* Camera Icon Pulse */}
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-white"
                    >
                        <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                    </motion.div>
                </div>

                {/* Text and Bar */}
                <div className="absolute bottom-20 flex flex-col items-center gap-4">
                    <p className="font-mono text-xs tracking-[0.3em] text-white/70">
                        INITIALIZING RECHROME-3D...
                    </p>
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] transition-all duration-75 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="font-mono text-xs">{progress}%</p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
