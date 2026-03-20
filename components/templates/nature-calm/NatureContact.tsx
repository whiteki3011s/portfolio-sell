'use client';

import React from 'react';

export default function NatureContact() {
    return (
        <footer className="py-32 bg-[#F3F4F1] text-[#2C3E50]">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-serif mb-8">
                        Let's grow together.
                    </h2>

                    <p className="text-[#5F7161] mb-12">
                        Reach out for collaborations or just to say hello.
                    </p>

                    <form className="space-y-6 mb-16">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-transparent border-b border-[#5F7161]/30 py-4 text-center focus:outline-none focus:border-[#5F7161] transition-colors placeholder-[#5F7161]/50"
                        />
                        <button className="px-8 py-3 bg-[#5F7161] text-white rounded-full hover:bg-[#2C3E50] transition-colors duration-300">
                            Send Message
                        </button>
                    </form>

                    <div className="flex justify-center gap-8 text-sm uppercase tracking-widest text-[#5F7161]/70">
                        <a href="#" className="hover:text-[#2C3E50] transition-colors">Instagram</a>
                        <a href="#" className="hover:text-[#2C3E50] transition-colors">Pinterest</a>
                        <a href="#" className="hover:text-[#2C3E50] transition-colors">Unsplash</a>
                    </div>

                    <p className="mt-12 text-xs text-[#5F7161]/40">
                        © 2025 Nature Calm
                    </p>
                </div>
            </div>
        </footer>
    );
}
