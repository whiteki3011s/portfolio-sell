'use client';

import React from 'react';

export default function Y2KContact() {
    return (
        <footer className="py-24 bg-[#000033] text-[#ccff00] font-mono border-t-4 border-[#ccff00]">
            <div className="container mx-auto px-6">
                <div className="max-w-md mx-auto border-2 border-[#ccff00] bg-[#c0c0c0] text-black shadow-xl">
                    <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] text-white px-2 py-1 font-bold flex justify-between items-center text-sm">
                        <span>Instant Messenger</span>
                        <button className="w-4 h-4 bg-[#c0c0c0] text-black border border-white border-b-black border-r-black flex items-center justify-center text-xs">×</button>
                    </div>

                    <div className="p-4 bg-white border-2 border-[#808080] border-t-black border-l-black m-2 h-48 overflow-y-auto font-sans text-sm">
                        <p className="text-blue-800 font-bold">System:</p>
                        <p className="mb-2">Welcome to the chat room!</p>
                        <p className="text-red-600 font-bold">You:</p>
                        <p className="mb-2">Hey! I want to work with you.</p>
                        <p className="text-blue-600 font-bold">Admin:</p>
                        <p>Send me an email at <a href="mailto:cool@y2k.com" className="underline text-blue-800">cool@y2k.com</a>!</p>
                    </div>

                    <div className="p-2 flex gap-2">
                        <input type="text" className="flex-1 border-2 border-[#808080] border-b-white border-r-white px-2 py-1 text-sm font-sans" placeholder="Type a message..." />
                        <button className="px-4 py-1 bg-[#c0c0c0] border-2 border-white border-b-black border-r-black active:border-black active:border-b-white active:border-r-white text-sm font-bold">
                            Send
                        </button>
                    </div>
                </div>

                <div className="text-center mt-12 text-xs opacity-50">
                    <p>BEST VIEWED WITH INTERNET EXPLORER 5.0</p>
                    <p>RESOLUTION 800x600</p>
                    <p className="mt-4">© 1999-2025 Y2K STUDIOS</p>
                </div>
            </div>
        </footer>
    );
}
