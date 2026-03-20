'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getFeaturedTemplates } from '@/lib/portfolioTemplates';
import { useEffect, useState } from 'react';

export default function TemplatesSection() {
    const [templates, setTemplates] = useState<any[]>([]);

    useEffect(() => {
        setTemplates(getFeaturedTemplates());
    }, []);

    if (templates.length === 0) return null;

    return (
        <section id="templates" className="py-24 md:py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                                <Sparkles size={12} />
                                Premium Collection
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Start instantly with <span className="text-gradient">ready-to-use templates</span>
                        </h2>
                        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
                            High-converting, cinematic portfolios designed for developers and creators.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/templates" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300">
                            <span className="text-sm font-semibold">View All Templates</span>
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.slice(0, 3).map((template, idx) => (
                        <motion.div 
                            key={template.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                        >
                            {/* Image Placeholder / Thumbnail */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ background: template.thumbnail }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white shadow-lg">
                                        {template.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {template.name}
                                </h3>
                                <p className="text-white/60 text-sm mb-6 flex-1">
                                    {template.description || "Futuristic animated portfolio with smooth interactions."}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="font-bold text-lg text-white">
                                        ₹1499 <span className="text-muted-foreground text-sm font-medium">/ $19</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Link 
                                            href={`/demos/${template.id}`} 
                                            className="px-4 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white/10 transition-colors"
                                        >
                                            Preview
                                        </Link>
                                        <button 
                                            onClick={() => alert("Redirect to Gumroad Link")}
                                            className="px-4 py-2 rounded-full bg-foreground text-background text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
