'use client';

import React from 'react';
import { motion } from 'framer-motion';

const comments = [
    { user: "CoolDude99", text: "This site rocks!!! 🔥", date: "10/24/25" },
    { user: "MatrixFan", text: "Follow the white rabbit...", date: "10/23/25" },
    { user: "WebMaster", text: "Under construction forever.", date: "10/22/25" }
];

export default function Y2KGuestbook() {
    return (
        <section className="py-24 bg-[#000033] text-[#ccff00] font-mono">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 animate-pulse">
                            *** GUESTBOOK ***
                        </h2>
                        <div className="bg-[#ccff00] text-[#000033] py-1 font-bold overflow-hidden">
                            <div className="animate-marquee">
                                WELCOME TO MY WORLD --- SIGN THE GUESTBOOK --- DON'T FORGET TO BOOKMARK!
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {comments.map((comment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="border border-[#ccff00] bg-black/50 p-4 relative"
                            >
                                <div className="flex justify-between border-b border-[#ccff00] border-dashed pb-2 mb-2 text-xs">
                                    <span className="font-bold text-[#ff00ff]">User: {comment.user}</span>
                                    <span className="opacity-70">Date: {comment.date}</span>
                                </div>
                                <p className="text-lg">{comment.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="bg-[#ccff00] text-[#000033] px-8 py-2 font-bold hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_#ff00ff]">
                            SIGN GUESTBOOK
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
