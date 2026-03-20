'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Pencil, Code, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Lightbulb,
        title: 'Discovery',
        description: 'Understanding your vision, goals, and target audience through detailed research and planning.',
        gradient: 'from-yellow-500 to-orange-500',
    },
    {
        icon: Pencil,
        title: 'Design',
        description: 'Creating beautiful, user-centric designs with wireframes, prototypes, and visual mockups.',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: Code,
        title: 'Development',
        description: 'Building your product with clean code, modern technology, and best practices.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Rocket,
        title: 'Launch',
        description: 'Deploying your project to production with thorough testing and ongoing support.',
        gradient: 'from-green-500 to-emerald-500',
    },
];

export default function ProcessTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    // Progress line animation
    const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-background/50 via-background to-background overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(102,126,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(102,126,234,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">
                        Our{' '}
                        <span className="text-gradient">Process</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A streamlined approach to bringing your ideas to life
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Progress Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ height: lineProgress }}
                            className="w-full bg-gradient-to-b from-primary via-secondary to-accent"
                        />
                    </div>

                    {/* Steps */}
                    <div className="space-y-24">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2,
                                        ease: [0.6, 0.05, 0.01, 0.9],
                                    }}
                                    className={`relative grid md:grid-cols-2 gap-8 items-center ${isLeft ? '' : 'md:text-right'
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={`${isLeft ? 'md:order-1' : 'md:order-2'}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -4 }}
                                            className="group p-8 glass-strong rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500"
                                        >
                                            {/* Gradient Glow */}
                                            <div
                                                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                                            />

                                            <div className="relative">
                                                {/* Step Number */}
                                                <div className="inline-flex items-center gap-3 mb-4">
                                                    <span className="text-5xl font-bold text-gradient">
                                                        0{index + 1}
                                                    </span>
                                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} p-2.5`}>
                                                        <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                                                    </div>
                                                </div>

                                                <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                                                <p className="text-lg text-muted-foreground leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Center Node */}
                                    <div className={`hidden md:flex items-center justify-center ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.4,
                                            }}
                                            className="relative"
                                        >
                                            {/* Pulsing Glow */}
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.3, 0.6, 0.3],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: 'easeInOut',
                                                }}
                                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} blur-xl will-change-transform`}
                                            />

                                            {/* Node */}
                                            <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl`}>
                                                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                                                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-24"
                >
                    <p className="text-lg text-muted-foreground mb-4">
                        Ready to start your project?
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-glow-primary-strong transition-all"
                    >
                        Let's Work Together
                        <span>→</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
