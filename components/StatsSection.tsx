'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Award, Code, Coffee, Users } from 'lucide-react';

const stats = [
    {
        icon: Code,
        value: 150,
        suffix: '+',
        label: 'Projects Completed',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Users,
        value: 50,
        suffix: '+',
        label: 'Happy Clients',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: Award,
        value: 15,
        suffix: '+',
        label: 'Awards Won',
        gradient: 'from-orange-500 to-red-500',
    },
    {
        icon: Coffee,
        value: 1000,
        suffix: '+',
        label: 'Cups of Coffee',
        gradient: 'from-green-500 to-emerald-500',
    },
];

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            // Easing function for smooth deceleration
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
    return (
        <section className="relative py-32 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">
                        Impact in{' '}
                        <span className="text-gradient">Numbers</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Achievements and milestones that define our journey
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.6, 0.05, 0.01, 0.9],
                                }}
                                className="group"
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="relative h-full p-8 bg-card/50 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300"
                                >
                                    {/* Gradient Glow */}
                                    <div
                                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                                    />

                                    {/* Pulsing Background */}
                                    {/* Static Gradient Background */}
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.gradient} opacity-5`} />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} p-3 mb-6 shadow-lg`}
                                        >
                                            <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                                        </motion.div>

                                        {/* Number */}
                                        <div className="mb-3">
                                            <motion.span
                                                className="text-5xl md:text-6xl font-bold text-gradient block"
                                            >
                                                <AnimatedCounter value={stat.value} />
                                                {stat.suffix}
                                            </motion.span>
                                        </div>

                                        {/* Label */}
                                        <p className="text-muted-foreground text-lg font-medium">
                                            {stat.label}
                                        </p>
                                    </div>

                                    {/* Shine Effect */}
                                    {/* Shine Effect - Hover Only */}
                                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-16 text-muted-foreground"
                >
                    <p className="text-sm">Numbers that grow with every project</p>
                </motion.div>
            </div>
        </section>
    );
}
