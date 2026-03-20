'use client';

import React from 'react';

export default function BauhausContact() {
    return (
        <footer className="bg-[#f0f0f0] border-t-8 border-black">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#2D5F9E] p-16 md:p-32 text-white flex flex-col justify-center">
                    <h2 className="text-6xl md:text-8xl font-bold uppercase mb-8 leading-none">
                        Start<br />Now
                    </h2>
                    <p className="text-xl opacity-80 max-w-md">
                        Ready to build something timeless? Let's collaborate.
                    </p>
                </div>

                <div className="p-16 md:p-32 bg-[#F2C94C] flex flex-col justify-center">
                    <div className="space-y-8">
                        <a href="mailto:studio@bauhaus.com" className="block text-3xl md:text-5xl font-bold hover:underline decoration-4">
                            studio@bauhaus.com
                        </a>
                        <div className="text-xl font-bold uppercase tracking-widest space-y-2">
                            <p>Dessau, Germany</p>
                            <p>+49 123 456 789</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black text-white p-6 flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                <p>© 2025 Bauhaus Studio</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-[#E94B3C] transition-colors">IG</a>
                    <a href="#" className="hover:text-[#2D5F9E] transition-colors">TW</a>
                    <a href="#" className="hover:text-[#F2C94C] transition-colors">LI</a>
                </div>
            </div>
        </footer>
    );
}
