'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const testimonials = [
    {
        client: "CyberCorp CEO",
        text: "This developer is insane! They built our entire platform in 48 hours. Highly recommended.",
        rating: "★★★★★"
    },
    {
        client: "Retro Gamer",
        text: "The aesthetic is perfect. Takes me right back to my childhood. 10/10 would hire again.",
        rating: "★★★★★"
    },
    {
        client: "Startup Founder",
        text: "Chaotic energy but professional delivery. The best of both worlds.",
        rating: "★★★★★"
    }
];

export default function Y2KTestimonials() {
    return (
        <section className="py-24 bg-[#000033] text-[#ccff00] font-mono">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-4">
                        <MessageSquare className="w-8 h-8 text-[#ff00ff]" />
                        <span>USER_REVIEWS.LOG</span>
                    </h2>

                    <div className="space-y-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-black/50 border border-[#00ffff]/30 p-6 rounded-none relative"
                            >
                                <div className="absolute top-0 left-0 bg-[#00ffff] text-[#000033] text-xs font-bold px-2 py-1">
                                    MSG_ID: 00{index + 1}
                                </div>

                                <div className="mt-4 flex flex-col md:flex-row gap-4 md:items-start">
                                    <div className="w-12 h-12 bg-[#ff00ff] rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                                        {testimonial.client[0]}
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-[#00ffff]">{testimonial.client}</h4>
                                            <span className="text-[#ff00ff] tracking-widest">{testimonial.rating}</span>
                                        </div>
                                        <p className="text-lg text-white/90 italic">
                                            "{testimonial.text}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
