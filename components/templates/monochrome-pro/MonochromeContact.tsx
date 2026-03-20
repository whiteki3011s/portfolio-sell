'use client';

import React from 'react';

export default function MonochromeContact() {
    return (
        <footer className="py-32 bg-white text-black border-t border-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-12">
                        LET'S TALK
                    </h2>

                    <a
                        href="mailto:hello@monochrome.com"
                        className="text-2xl md:text-4xl hover:bg-black hover:text-white px-8 py-4 transition-colors duration-300 border border-black rounded-full mb-24"
                    >
                        hello@monochrome.com
                    </a>

                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-sm font-bold tracking-widest uppercase border-t border-black pt-12">
                        <div className="flex flex-col gap-4">
                            <span className="opacity-50">Socials</span>
                            <a href="#" className="hover:underline">Instagram</a>
                            <a href="#" className="hover:underline">Twitter</a>
                            <a href="#" className="hover:underline">LinkedIn</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="opacity-50">Office</span>
                            <p>Berlin, DE</p>
                            <p>Kreuzberg 36</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="opacity-50">Legal</span>
                            <a href="#" className="hover:underline">Imprint</a>
                            <a href="#" className="hover:underline">Privacy</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="opacity-50">Copyright</span>
                            <p>© 2025 Mono</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
