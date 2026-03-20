'use client';

import { Terminal } from 'lucide-react';

export default function DarkFooter() {
    return (
        <footer className="py-12 bg-[#0D1117] text-[#8B949E] font-mono border-t border-[#30363D]">
            <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <Terminal size={16} />
                    <span className="text-sm">user@portfolio:~$ exit</span>
                </div>

                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-[#58A6FF] transition-colors">--github</a>
                    <a href="#" className="hover:text-[#58A6FF] transition-colors">--twitter</a>
                    <a href="#" className="hover:text-[#58A6FF] transition-colors">--linkedin</a>
                    <a href="#" className="hover:text-[#58A6FF] transition-colors">--email</a>
                </div>

                <div className="text-xs">
                    &copy; 2024 Dark Code. All systems nominal.
                </div>
            </div>
        </footer>
    );
}
