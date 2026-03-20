'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Choose Design',
        description: 'Browse our curated collection of premium templates and select the one that fits your vibe.'
    },
    {
        number: '02',
        title: 'Customize',
        description: 'Easily update content, colors, and images using our intuitive admin panel or code.'
    },
    {
        number: '03',
        title: 'Deploy',
        description: 'Launch your new portfolio to the world with one-click deployment support.'
    }
];

export default function Process() {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        How It <span className="text-gradient">Works</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative text-center"
                        >
                            <div className="w-24 h-24 mx-auto bg-background border-4 border-primary/20 rounded-full flex items-center justify-center text-3xl font-bold text-primary mb-8 relative z-10 shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-muted-foreground max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
