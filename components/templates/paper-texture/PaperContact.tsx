'use client';

import React from 'react';

export default function PaperContact() {
    return (
        <footer className="py-32 bg-[#2C241B] relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto bg-[#F0E6D2] p-8 shadow-2xl transform -rotate-1">
                    <div className="border-4 border-double border-[#4A4036] p-8 h-full relative">
                        {/* Stamp */}
                        <div className="absolute top-4 right-4 w-24 h-32 border-2 border-[#4A4036] flex items-center justify-center opacity-50 transform rotate-3">
                            <span className="font-handwriting text-xs text-center">POSTAGE<br />PAID</span>
                        </div>

                        <div className="pr-32">
                            <h2 className="text-4xl font-handwriting text-[#4A4036] mb-8">Send a Postcard</h2>

                            <form className="space-y-6">
                                <div>
                                    <label className="block font-handwriting text-[#5C4B3C] text-xl mb-2">To:</label>
                                    <input type="email" className="w-full bg-transparent border-b-2 border-[#4A4036] font-handwriting text-2xl focus:outline-none focus:border-[#2C241B] placeholder-[#8C7B6C]" placeholder="Your Email" />
                                </div>
                                <div>
                                    <label className="block font-handwriting text-[#5C4B3C] text-xl mb-2">Message:</label>
                                    <textarea rows={4} className="w-full bg-transparent border-b-2 border-[#4A4036] font-handwriting text-2xl focus:outline-none focus:border-[#2C241B] placeholder-[#8C7B6C] resize-none" placeholder="Write something nice..." />
                                </div>
                                <button className="px-8 py-3 bg-[#4A4036] text-[#F0E6D2] font-handwriting text-xl rounded shadow-md hover:bg-[#2C241B] transition-colors">
                                    Send It
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 font-handwriting text-[#F0E6D2]/60">
                    <p>© 2025 Paper Texture Portfolio</p>
                </div>
            </div>
        </footer>
    );
}
