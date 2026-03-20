'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function RetroProfile() {
    return (
        <section className="py-24 bg-[#2d3748] relative overflow-hidden border-t-4 border-black">
            <div className="container mx-auto px-6">
                <div className="bg-[#4a5568] border-4 border-black p-8 max-w-4xl mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="relative">
                            <div className="w-48 h-48 bg-[#a0aec0] border-4 border-black relative overflow-hidden">
                                {/* Pixel Avatar Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                                    👾
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-xs py-1 font-mono">
                                    LVL 99 DEV
                                </div>
                            </div>
                            {/* Stats Box */}
                            <div className="mt-4 bg-black text-green-400 p-4 font-mono text-sm border-4 border-gray-600">
                                <div className="flex justify-between">
                                    <span>HP:</span>
                                    <span>100/100</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>MP:</span>
                                    <span>MAX</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>EXP:</span>
                                    <span>999999</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 font-mono text-white">
                            <h2 className="text-3xl font-bold mb-6 text-yellow-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                PLAYER PROFILE
                            </h2>
                            <p className="mb-6 leading-relaxed">
                                A full-stack adventurer exploring the digital realm.
                                Specializes in crafting pixel-perfect experiences and defeating bugs.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>CODING</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="h-4 bg-black border-2 border-white p-0.5">
                                        <div className="h-full bg-green-500 w-[95%]" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>DESIGN</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="h-4 bg-black border-2 border-white p-0.5">
                                        <div className="h-full bg-blue-500 w-[85%]" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>COFFEE</span>
                                        <span>110%</span>
                                    </div>
                                    <div className="h-4 bg-black border-2 border-white p-0.5">
                                        <div className="h-full bg-red-500 w-full animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
