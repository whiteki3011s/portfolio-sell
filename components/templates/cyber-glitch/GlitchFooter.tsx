'use client';

import React from 'react';
import { Twitter, Linkedin, Mail, Globe } from 'lucide-react';

export default function GlitchFooter() {
    return (
        <footer className="bg-black text-cyan-500 font-mono border-t border-cyan-900/50 relative overflow-hidden">
            {/* Moving Scanline */}
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 animate-scanline" />

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-2xl font-bold text-white mb-4 glitch-text" data-text="SYSTEM_SHUTDOWN">
                            SYSTEM_SHUTDOWN
                        </h4>
                        <p className="text-cyan-700 max-w-md text-sm leading-relaxed">
                            Initiating termination sequence. All assets secured.
                            Thank you for visiting the digital frontier.
                            Connection will be terminated in 3... 2... 1...
                        </p>
                    </div>

                    <div>
                        <h5 className="text-sm font-bold text-white mb-4 border-b border-cyan-900/50 pb-2 inline-block">
                            QUICK_LINKS
                        </h5>
                        <ul className="space-y-2 text-sm text-cyan-700">
                            <li className="hover:text-cyan-400 cursor-pointer hover:translate-x-2 transition-transform">
                                &gt; HOME_BASE
                            </li>
                            <li className="hover:text-cyan-400 cursor-pointer hover:translate-x-2 transition-transform">
                                &gt; PROJECT_LOGS
                            </li>
                            <li className="hover:text-cyan-400 cursor-pointer hover:translate-x-2 transition-transform">
                                &gt; SKILL_MATRIX
                            </li>
                            <li className="hover:text-cyan-400 cursor-pointer hover:translate-x-2 transition-transform">
                                &gt; CONTACT_NODE
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-sm font-bold text-white mb-4 border-b border-cyan-900/50 pb-2 inline-block">
                            CONNECT_GRID
                        </h5>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-cyan-900/50 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border border-cyan-900/50 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border border-cyan-900/50 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-cyan-900/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cyan-800">
                    <div className="flex items-center gap-2">
                        <Globe size={12} />
                        <span>LOC: EARTH_C-137</span>
                    </div>
                    <div>
                        © 2025 CYBER_SYSTEMS INC. ALL RIGHTS RESERVED.
                    </div>
                    <div className="font-bold text-cyan-600">
                        STATUS: OFFLINE
                    </div>
                </div>
            </div>
        </footer>
    );
}
