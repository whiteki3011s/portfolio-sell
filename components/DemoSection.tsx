'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const demos = [
    {
        title: "Frontend Developer Portfolio",
        caption: "Built for a frontend dev",
        image: "linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(88, 28, 135) 100%)", // Placeholder, ideally a real image
        rating: 5,
        review: "This portfolio doubled my interview rate within weeks. Clean code and instantly stood out."
    },
    {
        title: "Creative Studio Site",
        caption: "Video editor portfolio",
        image: "linear-gradient(135deg, rgb(20, 20, 20) 0%, rgb(220, 38, 38) 100%)",
        rating: 5,
        review: "My clients loved the cinematic feel. It perfectly showcases my video reels without lagging."
    }
];

export default function DemoSection() {
    return (
        <section className="py-24 bg-background border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Trusted by <span className="text-gradient">creators</span>
                    </motion.h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        See how developers and designers are using our custom builds and templates to win clients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {demos.map((demo, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
                        >
                            <div className="aspect-[16/9] w-full relative overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ background: demo.image }}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-1 mb-4 text-primary">
                                    {[...Array(demo.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {demo.title}
                                </h3>
                                <p className="text-sm text-primary font-mono mb-4 bg-primary/10 inline-block px-3 py-1 rounded-full">
                                    {demo.caption}
                                </p>
                                <p className="text-muted-foreground text-sm italic border-l-2 border-white/10 pl-4 mt-4">
                                    "{demo.review}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
