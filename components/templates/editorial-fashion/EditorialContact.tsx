'use client';

import React from 'react';

export default function EditorialContact() {
    return (
        <footer className="bg-[#FDFBF7] pt-24 pb-12 border-t border-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div>
                        <h2 className="text-7xl md:text-9xl font-serif italic mb-12 leading-[0.8]">
                            Get in <br /> Touch
                        </h2>
                        <div className="space-y-8 text-lg">
                            <p>
                                Available for commissions and collaborations worldwide.
                            </p>
                            <div className="space-y-2">
                                <p className="font-bold uppercase tracking-widest text-xs">Email</p>
                                <a href="mailto:contact@editorial.com" className="block text-2xl hover:italic transition-all">
                                    contact@editorial.com
                                </a>
                            </div>
                            <div className="space-y-2">
                                <p className="font-bold uppercase tracking-widest text-xs">Studio</p>
                                <p className="text-2xl">
                                    123 Fashion Ave, <br />
                                    New York, NY 10018
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <form className="space-y-12">
                            <div className="border-b border-black pb-4 group">
                                <label className="block text-xs uppercase tracking-widest mb-2 text-gray-500 group-hover:text-black transition-colors">Name</label>
                                <input type="text" className="w-full bg-transparent text-2xl font-serif focus:outline-none placeholder-gray-300" placeholder="Jane Doe" />
                            </div>
                            <div className="border-b border-black pb-4 group">
                                <label className="block text-xs uppercase tracking-widest mb-2 text-gray-500 group-hover:text-black transition-colors">Email</label>
                                <input type="email" className="w-full bg-transparent text-2xl font-serif focus:outline-none placeholder-gray-300" placeholder="jane@example.com" />
                            </div>
                            <div className="border-b border-black pb-4 group">
                                <label className="block text-xs uppercase tracking-widest mb-2 text-gray-500 group-hover:text-black transition-colors">Inquiry</label>
                                <textarea rows={1} className="w-full bg-transparent text-2xl font-serif focus:outline-none placeholder-gray-300 resize-none" placeholder="Tell us about your project" />
                            </div>
                            <button className="w-full py-4 bg-black text-white uppercase tracking-widest text-sm hover:bg-transparent hover:text-black border border-black transition-all duration-300">
                                Send Request
                            </button>
                        </form>

                        <div className="mt-24 flex justify-between text-xs uppercase tracking-widest">
                            <div className="space-x-6">
                                <a href="#" className="hover:underline">Instagram</a>
                                <a href="#" className="hover:underline">Pinterest</a>
                                <a href="#" className="hover:underline">Models.com</a>
                            </div>
                            <div>
                                © 2025 Editorial
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
