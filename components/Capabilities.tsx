'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, Zap, Globe, Smartphone, Rocket } from 'lucide-react';

const capabilities = [
    {
        title: 'High-Performance Web',
        description: 'Blazing fast Next.js applications optimized for Core Web Vitals.',
        icon: Zap,
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
    },
    {
        title: 'Premium UI/UX Design',
        description: 'Pixel-perfect interfaces that feel alive and intuitive.',
        icon: Palette,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
    },
    {
        title: 'Full-Stack Solutions',
        description: 'Robust backends with scalable database architectures.',
        icon: Code2,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
    },
    {
        title: 'Global Scale',
        description: 'Edge-ready deployment for instant access worldwide.',
        icon: Globe,
        color: 'text-green-400',
        bg: 'bg-green-400/10',
    },
    {
        title: 'Mobile First',
        description: 'Responsive designs that look stunning on any device.',
        icon: Smartphone,
        color: 'text-pink-400',
        bg: 'bg-pink-400/10',
    },
    {
        title: 'Growth Focused',
        description: 'Built-in SEO and analytics to drive your success.',
        icon: Rocket,
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
    },
];

export default function Capabilities() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Beyond Just <span className="text-gradient">Templates</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                        We build digital experiences that define brands. From concept to code, we deliver excellence at every layer.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => {
                        const Icon = cap.icon;
                        return (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-8 rounded-2xl glass border border-white/5 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 ${cap.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-7 h-7 ${cap.color}`} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{cap.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {cap.description}
                                </p>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
