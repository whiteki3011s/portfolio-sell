'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
    const [text, setText] = useState('');
    const fullText = 'SYSTEM INITIALIZATION...';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) {
                index = 0;
                setText('');
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50" style={{ perspective: '1000px' }}>
            <div className="relative w-24 h-24">
                {/* Hyper-Cube */}
                <motion.div
                    className="relative w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateX: 360, rotateY: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    {/* Cube Faces */}
                    {[
                        'rotateX(0deg) translateZ(48px)',   // Front
                        'rotateX(180deg) translateZ(48px)', // Back
                        'rotateY(90deg) translateZ(48px)',  // Right
                        'rotateY(-90deg) translateZ(48px)', // Left
                        'rotateX(90deg) translateZ(48px)',  // Top
                        'rotateX(-90deg) translateZ(48px)', // Bottom
                    ].map((transform, i) => (
                        <div
                            key={i}
                            className="absolute inset-0 border border-primary/40 bg-primary/5 backdrop-blur-[2px] shadow-[0_0_15px_rgba(var(--primary),0.2)]"
                            style={{ transform }}
                        />
                    ))}

                    {/* Inner Core */}
                    <div className="absolute inset-8 bg-white/20 blur-md rounded-full animate-pulse"
                        style={{ transform: 'translateZ(0)' }} />
                </motion.div>

                {/* Orbital Rings */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[160%] h-[160%] border border-secondary/30 rounded-full"
                    style={{ x: '-50%', y: '-50%' }}
                    animate={{ rotateX: 360, rotateY: 45 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[200%] h-[200%] border border-accent/20 rounded-full"
                    style={{ x: '-50%', y: '-50%' }}
                    animate={{ rotateX: -360, rotateY: -45 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Typing Text */}
            <div className="mt-20 font-mono text-xs text-primary/80 tracking-[0.3em] h-6 flex items-center">
                {text}
                <span className="animate-pulse ml-1 w-2 h-4 bg-primary/50 block" />
            </div>
        </div>
    );
}
