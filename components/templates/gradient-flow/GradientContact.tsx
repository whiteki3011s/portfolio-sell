'use client';

import React from 'react';

export default function GradientContact() {
    return (
        <footer className="py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 opacity-50" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-6xl md:text-8xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient-x">
                    Let's Flow
                </h2>

                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Ready to start your next project? Let's create something beautiful together.
                </p>

                <a
                    href="mailto:hello@gradient.com"
                    className="inline-block px-12 py-6 rounded-full bg-gray-900 text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-purple-500/20"
                >
                    Get in Touch
                </a>

                <div className="mt-24 flex justify-center gap-8 text-gray-500 font-medium">
                    <a href="#" className="hover:text-purple-600 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-pink-600 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-cyan-600 transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
