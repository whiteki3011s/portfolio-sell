'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cases = [
    {
        company: "Acme Corp",
        metric: "+200%",
        label: "Revenue Growth",
        description: "How Acme Corp scaled their infrastructure to handle millions of requests.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
        company: "TechStart",
        metric: "10x",
        label: "Faster Deployment",
        description: "Reducing build times from minutes to seconds with our CI/CD pipeline.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function SaaSCaseStudies() {
    return (
        <section className="py-24 bg-[#0B0F19] border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Success Stories</h2>
                        <p className="text-slate-400">See how leading companies use our platform.</p>
                    </div>
                    <button className="text-blue-500 hover:text-blue-400 flex items-center gap-2 text-sm font-medium transition-colors">
                        View all stories <ArrowRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#151B2B] rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#151B2B] to-transparent z-10" />
                                <img
                                    src={item.image}
                                    alt={item.company}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 relative z-20 -mt-12">
                                <div className="bg-[#0B0F19] border border-slate-800 rounded-xl p-6 mb-6 inline-block shadow-xl">
                                    <div className="text-3xl font-bold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                        {item.metric}
                                    </div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                                        {item.label}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {item.company}
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {item.description}
                                </p>
                                <button className="text-white text-sm font-medium hover:text-blue-400 transition-colors">
                                    Read Case Study →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
