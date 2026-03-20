'use client';

import React from 'react';
import { MessageSquare, Save } from 'lucide-react';

export default function VaporGuestbook() {
    return (
        <footer className="py-24 bg-[#1a0b2e] border-t-4 border-[#ff00ff] relative">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#00ffff] mb-4 tracking-widest uppercase drop-shadow-[2px_2px_0px_#ff00ff]">
                        Sign The Guestbook
                    </h2>
                    <p className="text-[#ff71ce] font-mono">
                        Leave a message for the webmaster...
                    </p>
                </div>

                <div className="bg-[#c0c0c0] p-1 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-600 shadow-xl">
                    <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center font-bold text-sm mb-1">
                        <span>GUESTBOOK.EXE</span>
                        <button className="w-4 h-4 bg-[#c0c0c0] border border-white text-black flex items-center justify-center text-xs leading-none">x</button>
                    </div>

                    <div className="bg-white p-6 text-black font-sans">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold mb-1">Name:</label>
                                <input
                                    type="text"
                                    className="w-full border-2 border-gray-400 border-b-white border-r-white bg-gray-100 p-2 shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Message:</label>
                                <textarea
                                    rows={4}
                                    className="w-full border-2 border-gray-400 border-b-white border-r-white bg-gray-100 p-2 shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)] focus:outline-none"
                                />
                            </div>
                            <div className="flex justify-end gap-4 mt-6">
                                <button className="px-6 py-2 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:bg-gray-400 font-bold text-sm flex items-center gap-2">
                                    <Save size={16} />
                                    Submit
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 border-t border-gray-400 pt-4">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 bg-blue-200 border border-gray-400 flex items-center justify-center">
                                    👤
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-blue-800">CoolUser99 <span className="text-gray-500 font-normal text-xs">wrote:</span></div>
                                    <p className="text-sm bg-[#ffffcc] p-2 border border-gray-300 shadow-sm mt-1">
                                        Awesome site! Love the retro vibes. Keep it up!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-[#ff00ff] text-xs font-mono">
                    <p>BEST VIEWED IN NETSCAPE NAVIGATOR 4.0</p>
                    <p className="mt-2">© 1999-2025 VAPOR CORP</p>
                </div>
            </div>
        </footer>
    );
}
