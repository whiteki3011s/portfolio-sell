'use client';

import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function BrutalContact() {
    return (
        <footer className="bg-[#FFFDF5] border-t-8 border-black pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-7xl font-black mb-8 uppercase leading-[0.9]">
                            Let's Make <br />
                            <span className="bg-[#4ECDC4] px-2">Noise</span>
                        </h2>
                        <p className="text-2xl font-bold mb-12 max-w-md">
                            Ready to break the internet? Drop us a line and let's start something massive.
                        </p>

                        <div className="space-y-6 text-xl font-bold">
                            <a href="#" className="flex items-center gap-4 hover:translate-x-4 transition-transform">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black">
                                    <Mail />
                                </div>
                                <span>hello@brutaledge.studio</span>
                            </a>
                            <a href="#" className="flex items-center gap-4 hover:translate-x-4 transition-transform">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black">
                                    <Phone />
                                </div>
                                <span>+1 (555) 999-0000</span>
                            </a>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black">
                                    <MapPin />
                                </div>
                                <span>Brooklyn, NY</span>
                            </div>
                        </div>
                    </div>

                    <form className="bg-[#FF6B6B] p-8 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                        <div className="mb-6">
                            <label className="block text-xl font-black mb-2 uppercase">Name</label>
                            <input
                                type="text"
                                className="w-full bg-white border-4 border-black p-4 text-xl font-bold focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                                placeholder="YOUR NAME"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-xl font-black mb-2 uppercase">Email</label>
                            <input
                                type="email"
                                className="w-full bg-white border-4 border-black p-4 text-xl font-bold focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                                placeholder="YOUR@EMAIL.COM"
                            />
                        </div>
                        <div className="mb-8">
                            <label className="block text-xl font-black mb-2 uppercase">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-white border-4 border-black p-4 text-xl font-bold focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                                placeholder="TELL US EVERYTHING..."
                            />
                        </div>
                        <button className="w-full bg-black text-white py-6 text-2xl font-black uppercase hover:bg-white hover:text-black border-4 border-black transition-colors flex items-center justify-center gap-4">
                            <span>Send It</span>
                            <Send strokeWidth={3} />
                        </button>
                    </form>
                </div>

                <div className="border-t-8 border-black pt-8 flex flex-col md:flex-row justify-between items-center font-black text-xl uppercase">
                    <div>© 2025 Brutal Edge.</div>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:underline decoration-4">Instagram</a>
                        <a href="#" className="hover:underline decoration-4">Twitter</a>
                        <a href="#" className="hover:underline decoration-4">Dribbble</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
