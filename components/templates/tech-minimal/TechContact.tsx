'use client';

import React from 'react';

export default function TechContact() {
    return (
        <footer className="py-32 bg-black text-white font-mono">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border border-gray-800">
                        <div className="flex gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>

                        <div className="space-y-4 text-sm md:text-base">
                            <p>
                                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> initialize_contact_sequence()
                            </p>
                            <p className="text-gray-400">
                                {'>'} Establishing secure connection...
                                <br />
                                {'>'} Connection established.
                            </p>

                            <form className="mt-8 space-y-4">
                                <div>
                                    <label className="block text-gray-500 mb-1 text-xs uppercase tracking-widest">Input: Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black border border-gray-700 p-3 text-white focus:border-green-500 focus:outline-none transition-colors rounded"
                                        placeholder="user@domain.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 mb-1 text-xs uppercase tracking-widest">Input: Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-black border border-gray-700 p-3 text-white focus:border-green-500 focus:outline-none transition-colors rounded resize-none"
                                        placeholder="Enter your message..."
                                    />
                                </div>
                                <button className="px-6 py-2 bg-green-500 text-black font-bold hover:bg-green-400 transition-colors rounded w-full md:w-auto">
                                    Execute Send
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-12 text-center text-xs text-gray-600">
                        <p>v2.0.25 | build_id: 8f9a2b</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
