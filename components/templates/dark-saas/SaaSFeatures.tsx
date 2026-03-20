'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, BarChart3, Globe } from 'lucide-react';

const features = [
    {
        icon: <Zap className="text-blue-500" />,
        title: "Lightning Fast",
        description: "Optimized for speed with edge caching and global CDN distribution."
    },
    {
        icon: <Shield className="text-purple-500" />,
        title: "Enterprise Security",
        description: "Bank-grade encryption and SOC2 compliance out of the box."
    },
    {
        icon: <BarChart3 className="text-emerald-500" />,
        title: "Real-time Analytics",
        description: "Deep insights into your data with live dashboards and reporting."
    },
    {
        icon: <Globe className="text-orange-500" />,
        title: "Global Scale",
        description: "Deploy to 35+ regions with a single click. Scale infinitely."
    }
];

export default function SaaSFeatures() {
    return (
        <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Built for modern teams
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Everything you need to build, deploy, and scale your applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#151B2B] border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-[#0B0F19] rounded-lg flex items-center justify-center mb-4 border border-slate-800 group-hover:border-slate-700 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
