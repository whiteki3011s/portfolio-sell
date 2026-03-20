'use client';

import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

export default function Y2KFooter() {
    return (
        <footer className="bg-black text-[#ccff00] font-mono border-t-4 border-[#ff00ff] py-12">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-8 mb-8">
                    <a href="#" className="hover:text-[#ff00ff] transition-colors transform hover:scale-110">
                        <Github className="w-8 h-8" />
                    </a>
                    <a href="#" className="hover:text-[#00ffff] transition-colors transform hover:scale-110">
                        <Twitter className="w-8 h-8" />
                    </a>
                    <a href="#" className="hover:text-[#ff9900] transition-colors transform hover:scale-110">
                        <Instagram className="w-8 h-8" />
                    </a>
                    <a href="#" className="hover:text-white transition-colors transform hover:scale-110">
                        <Mail className="w-8 h-8" />
                    </a>
                </div>

                <p className="text-sm opacity-70 mb-4">
                    COPYRIGHT &copy; 2025 CYBER_DEV. ALL RIGHTS RESERVED.
                </p>
                <p className="text-xs text-[#ff00ff] animate-pulse">
                    BUILT WITH &lt;3 AND CAFFEINE IN CYBERSPACE
                </p>
            </div>
        </footer>
    );
}
