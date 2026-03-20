'use client';

import React from 'react';

export default function NeonContact() {
    return (
        <footer className="py-32 bg-[#050505] text-white relative">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-block border-4 border-[#f0f] p-8 rounded-2xl shadow-[0_0_50px_#f0f] mb-16 animate-pulse">
                    <h2 className="text-5xl md:text-7xl font-bold text-[#f0f] uppercase tracking-widest" style={{ textShadow: '0 0 10px #f0f, 0 0 20px #f0f' }}>
                        Open<br />24/7
                    </h2>
                </div>

                <div className="flex justify-center gap-12 text-xl font-bold font-mono">
                    <a href="#" className="text-[#0ff] hover:text-white hover:shadow-[0_0_20px_#0ff] transition-all duration-300">
                        [ EMAIL ]
                    </a>
                    <a href="#" className="text-[#0f0] hover:text-white hover:shadow-[0_0_20px_#0f0] transition-all duration-300">
                        [ GITHUB ]
                    </a>
                    <a href="#" className="text-[#ff0] hover:text-white hover:shadow-[0_0_20px_#ff0] transition-all duration-300">
                        [ TWITTER ]
                    </a>
                </div>

                <p className="mt-16 text-gray-600 font-mono text-xs">
                    // SYSTEM STATUS: ONLINE
                    <br />
                    // © 2025 NEON NIGHTS
                </p>
            </div>
        </footer>
    );
}
