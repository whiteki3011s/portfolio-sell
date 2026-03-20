'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "The attention to detail is unmatched. A true master of typography and space.",
        author: "Sarah Jenkins",
        role: "Creative Director, Vogue"
    },
    {
        quote: "Transformed our brand identity into something timeless and elegant.",
        author: "Marcus Thorne",
        role: "CEO, Thorne & Co."
    }
];

export default function TestimonialsMinimal() {
    return (
        <section className="py-32 bg-black text-white px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="space-y-8"
                        >
                            <p className="text-2xl md:text-3xl font-serif leading-relaxed">"{t.quote}"</p>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-widest">{t.author}</p>
                                <p className="text-sm text-white/50">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
