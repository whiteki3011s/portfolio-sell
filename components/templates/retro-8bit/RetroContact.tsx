'use client';

import React from 'react';

export default function RetroContact() {
    return (
        <footer className="py-24 bg-black border-t-4 border-white font-mono text-white text-center">
            <div className="container mx-auto px-6">
                <div className="mb-12 animate-pulse">
                    <h2 className="text-4xl font-bold mb-4 text-red-500">GAME OVER</h2>
                    <p className="text-xl">CONTINUE?</p>
                </div>

                <div className="flex justify-center gap-8 mb-16">
                    <button className="text-2xl font-bold hover:text-yellow-400 flex flex-col items-center gap-2 group">
                        <span className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-white group-hover:border-b-yellow-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        YES
                    </button>
                    <button className="text-2xl font-bold text-gray-600 cursor-not-allowed">
                        NO
                    </button>
                </div>

                <div className="max-w-md mx-auto bg-blue-800 border-4 border-white p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                    <h3 className="text-xl font-bold mb-6 border-b-4 border-white pb-2">
                        SEND MESSAGE
                    </h3>
                    <form className="space-y-4 text-left">
                        <div>
                            <label className="block text-xs mb-1">PLAYER NAME</label>
                            <input type="text" className="w-full bg-black border-2 border-white p-2 text-white focus:outline-none focus:border-yellow-400" />
                        </div>
                        <div>
                            <label className="block text-xs mb-1">QUEST DETAILS</label>
                            <textarea rows={3} className="w-full bg-black border-2 border-white p-2 text-white focus:outline-none focus:border-yellow-400" />
                        </div>
                        <button className="w-full bg-white text-black font-bold py-2 hover:bg-yellow-400 border-b-4 border-gray-400 active:border-b-0 active:translate-y-1 transition-all">
                            PRESS START TO SEND
                        </button>
                    </form>
                </div>

                <div className="mt-16 text-xs text-gray-500">
                    CREDITS: 1 | INSERT COIN
                </div>
            </div>
        </footer>
    );
}
