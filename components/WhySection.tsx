'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Palette, Rocket } from 'lucide-react';

const reasons = [
    {
        title: "Fast delivery (48 hours)",
        description: "Get your custom portfolio online in record time.",
        icon: Zap,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    },
    {
        title: "Designed for conversions",
        description: "Every element is crafted to drive client inquiries.",
        icon: Target,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Premium UI/UX",
        description: "Immersive layouts, dark modes, and glassmorphism.",
        icon: Palette,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Optimized for hiring",
        description: "Built to impress recruiters and top-tier agencies.",
        icon: Rocket,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    }
];

export default function WhySection() {
    return (
        <section className="py-24 md:py-32 relative bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Why Choose <span className="text-gradient">Me</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            The difference between a normal website and a high-converting machine.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/5 ${reason.bg}`}>
                                <reason.icon className={`w-8 h-8 ${reason.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
