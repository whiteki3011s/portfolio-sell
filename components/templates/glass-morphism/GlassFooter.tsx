'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GlassFooter() {
    return (
        <footer className="py-24 bg-indigo-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-white/30 backdrop-blur-xl border border-white/50 p-12 rounded-[3rem] shadow-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Ready to start?
                    </h2>
                    <p className="text-xl text-slate-600 mb-12">
                        Let's build something beautiful together.
                    </p>

                    <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative">Get in Touch</span>
                    </button>
                </motion.div>

                <div className="mt-16 flex justify-center gap-8 text-slate-500 font-medium">
                    <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-indigo-600 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
                </div>

                <div className="mt-8 text-sm text-slate-400">
                    © 2025 Glass Morphism. Crafted with blur.
                </div>
            </div>
        </footer>
    );
}
