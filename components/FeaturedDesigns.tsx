'use client';

import { motion } from 'framer-motion';
import { getFeaturedTemplates } from '@/lib/portfolioTemplates';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function FeaturedDesigns() {
    const featured = getFeaturedTemplates();

    return (
        <section className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Featured <span className="text-gradient animate-gradient-shift">Designs</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
                        Handpicked portfolio templates that stand out. Each crafted with precision and purpose.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {featured.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl aspect-[3/4] glass border border-white/5 hover:border-primary/30 transition-all duration-500"
                        >
                            <Link href={`/demos/${template.id}`} className="block w-full h-full">
                                {/* Template Preview */}
                                <div
                                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        background: template.thumbnail
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                                    {template.badges?.map((badge) => (
                                        <span
                                            key={badge}
                                            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${badge === 'New'
                                                ? 'bg-accent/20 text-accent border border-accent/30'
                                                : badge === 'Best Seller'
                                                    ? 'bg-primary/20 text-primary border border-primary/30'
                                                    : 'bg-secondary/20 text-secondary border border-secondary/30'
                                                }`}
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="mb-3">
                                        <span className="px-3 py-1 bg-background/50 backdrop-blur-md text-foreground/80 rounded-full text-xs font-medium border border-white/10">
                                            {template.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">{template.name}</h3>
                                    <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {template.description}
                                    </p>
                                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span className="text-primary font-bold text-lg">{template.price}</span>
                                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                                            <ExternalLink size={18} />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full font-semibold transition-all duration-300 group"
                    >
                        View All Designs
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
