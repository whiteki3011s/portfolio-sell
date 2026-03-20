'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Code2, Cpu } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
    {
        name: "Starter Portfolio",
        price: "₹2999",
        description: "Perfect for a quick, professional online presence.",
        icon: Zap,
        features: [
            "Clean, modern design",
            "2-3 customized sections",
            "Responsive across all devices",
            "Fast delivery (48 hours)"
        ],
        ctaText: "Get Started",
        ctaHref: "https://wa.me/yourwhatsappnumber", // Placeholder link
        popular: false
    },
    {
        name: "Premium Portfolio",
        price: "₹5999",
        description: "Stand out with animations and premium tailored UI.",
        icon: Code2,
        features: [
            "Everything in Starter",
            "Custom Framer animations",
            "Up to 5 custom sections",
            "SEO optimization",
            "Premium UI/UX layout"
        ],
        ctaText: "Get Started",
        ctaHref: "https://wa.me/yourwhatsappnumber", // Placeholder link
        popular: true
    },
    {
        name: "3D Experience",
        price: "₹9999",
        description: "An immersive, interactive 3D web experience.",
        icon: Cpu,
        features: [
            "Everything in Premium",
            "Interactive 3D elements (Three.js)",
            "Advanced GSAP scroll effects",
            "Unlimited sections",
            "Highest tier cinematic visuals"
        ],
        ctaText: "Get Started",
        ctaHref: "https://wa.me/yourwhatsappnumber", // Placeholder link
        popular: false
    }
];

export default function ServicesPricingSection() {
    return (
        <section id="services" className="py-24 md:py-32 relative bg-[#050505] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Want Something <span className="text-gradient">Custom?</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Choose a custom build package tailored exactly to your brand and needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? 'border-primary/50 bg-primary/5 shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]' : 'border-white/10 bg-[#0a0a0a]'} backdrop-blur-sm transition-all duration-300 hover:-translate-y-2`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary">
                                    <plan.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="text-4xl font-bold text-white mb-1">
                                    {plan.price}
                                </div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide">One-time payment</div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                        <div className="mt-0.5 rounded-full bg-primary/20 text-primary p-0.5 flex-shrink-0">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href={plan.ctaHref}
                                target="_blank"
                                rel="noreferrer"
                                className={`group flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold transition-all duration-300 ${plan.popular ? 'bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                            >
                                {plan.ctaText}
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
