'use client';

import Link from 'next/link';
import { LayoutGrid, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function BackToPortfolio() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-6 left-6 z-[9999]">
            {/* Main Icon Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
                p-3 rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center
                ${isOpen
                        ? 'bg-black text-white border-white/20'
                        : 'bg-black/50 text-white/70 border-white/10 hover:bg-black hover:text-white'
                    }
                backdrop-blur-md shadow-lg
            `}>
                <LayoutGrid size={20} />
            </div>

            {/* Dropdown Menu */}
            <div className={`
                absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 origin-top-left
                ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
            `}>
                <div className="flex flex-col py-1">
                    <Link
                        href="/portfolio"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Library</span>
                    </Link>

                    <div className="h-px bg-white/10 mx-2" />

                    <Link
                        href="/contact"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#00E5FF] hover:bg-white/10 transition-colors"
                    >
                        <ShoppingBag size={16} />
                        <span>Buy Template</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
