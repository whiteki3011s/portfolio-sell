'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PaperAbout() {
    return (
        <section className="py-32 bg-[#F0E6D2] relative">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-xl transform rotate-1 relative">
                    {/* Paper holes */}
                    <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-between py-8">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-4 h-4 rounded-full bg-[#2C241B] opacity-10" />
                        ))}
                    </div>

                    <div className="ml-12">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-5xl font-handwriting text-[#4A4036] mb-8"
                        >
                            Dear Visitor,
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-xl font-handwriting text-[#5C4B3C] leading-relaxed"
                        >
                            <p>
                                I've always believed that design should feel human. In a digital world, I try to bring back the warmth of texture, the imperfection of a sketch, and the story behind every pixel.
                            </p>
                            <p>
                                My process starts with a pencil and paper, exploring ideas freely before they ever touch a screen. This approach allows for genuine creativity and unique solutions.
                            </p>
                            <p className="pt-8 text-3xl transform -rotate-2">
                                Sincerely, <br />
                                <span className="text-[#2C241B]">Alex</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
