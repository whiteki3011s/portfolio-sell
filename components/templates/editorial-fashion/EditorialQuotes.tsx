'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EditorialQuotes() {
    return (
        <section className="py-48 bg-[#FDFBF7] overflow-hidden">
            <div className="container mx-auto px-6 relative">
                <div className="absolute top-0 left-0 text-[20rem] font-serif opacity-5 leading-none select-none pointer-events-none">
                    "
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-serif leading-tight mb-12"
                    >
                        "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening."
                    </motion.blockquote>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <div className="h-px w-12 bg-black" />
                        <cite className="not-italic text-sm uppercase tracking-widest font-bold">
                            Coco Chanel
                        </cite>
                        <div className="h-px w-12 bg-black" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
