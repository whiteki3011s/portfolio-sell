'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NeonAbout() {
    return (
        <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f] animate-pulse"
                        >
                            SYSTEM<br />OVERRIDE
                        </motion.h2>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="border-l-4 border-[#0ff] pl-8 space-y-6 text-lg text-gray-300 font-mono">
                            <p>
                                <span className="text-[#0ff]">{'>'}</span> We exist in the space between reality and the digital frontier.
                            </p>
                            <p>
                                <span className="text-[#f0f]">{'>'}</span> Our mission is to illuminate the darkness with code and color.
                            </p>
                            <p>
                                <span className="text-[#0f0]">{'>'}</span> Welcome to the future of design.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        </section>
    );
}
