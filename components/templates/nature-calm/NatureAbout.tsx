'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NatureAbout() {
    return (
        <section className="py-32 bg-[#E8EAE6] relative overflow-hidden">
            {/* Leaf Shadow Overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1596323646539-74418635da2c?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-multiply pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-serif text-[#2C3E50] mb-12 leading-tight"
                    >
                        Design that breathes.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8 text-xl text-[#5F7161] leading-relaxed font-light"
                    >
                        <p>
                            We believe in the power of simplicity. Our approach is grounded in the natural world, finding inspiration in organic forms, soft textures, and calming palettes.
                        </p>
                        <p>
                            Just as nature finds balance, we strive to create digital experiences that feel harmonious and effortless.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
