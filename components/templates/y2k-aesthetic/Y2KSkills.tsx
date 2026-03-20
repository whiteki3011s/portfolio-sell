'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "REACT.JS", "NEXT.JS", "TYPESCRIPT", "TAILWIND", "THREE.JS", "WEBGL", "NODE.JS", "GRAPHQL", "FIGMA", "BLENDER"
];

export default function Y2KSkills() {
    return (
        <section className="py-12 bg-[#ccff00] text-[#000033] font-mono overflow-hidden border-y-4 border-[#000033]">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-12 items-center"
                >
                    {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className="flex items-center gap-12">
                            <span className="text-4xl md:text-6xl font-black tracking-tighter hover:text-[#ff00ff] transition-colors cursor-default">
                                {skill}
                            </span>
                            <span className="text-2xl opacity-50">***</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
