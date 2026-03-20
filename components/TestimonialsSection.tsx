'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechStart Inc.',
        image: '👩‍💼',
        content: 'Working with this team was an absolute game-changer. They delivered a stunning website that exceeded all our expectations. The attention to detail and creativity was remarkable.',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Founder, DesignLab',
        image: '👨‍💻',
        content: 'The level of professionalism and technical expertise is unmatched. Our project was delivered on time and the results have significantly improved our online presence.',
        rating: 5,
    },
    {
        name: 'Emily Rodriguez',
        role: 'Marketing Director, BrandCo',
        image: '👩‍🎨',
        content: 'Incredible experience from start to finish. The team understood our vision and brought it to life with beautiful animations and seamless user experience.',
        rating: 5,
    },
    {
        name: 'David Park',
        role: 'CTO, InnovateTech',
        image: '👨‍🔧',
        content: 'Outstanding work! The website not only looks amazing but performs flawlessly. The optimization and attention to performance metrics was impressive.',
        rating: 5,
    },
];

export default function TestimonialsSection() {
    const [[current, direction], setCurrent] = useState([0, 0]);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 6000);

        return () => clearInterval(timer);
    }, [current]);

    const paginate = (newDirection: number) => {
        const nextIndex = (current + newDirection + testimonials.length) % testimonials.length;
        setCurrent([nextIndex, newDirection]);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
    };

    return (
        <section className="relative py-32 bg-gradient-to-b from-background via-background to-background/50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(102,126,234,0.1),transparent_50%)]" />

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
                        Client{' '}
                        <span className="text-gradient">Testimonials</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        What people say about working with us
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Quote Icon Background */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 text-primary/20"
                    >
                        <Quote className="w-full h-full" />
                    </motion.div>

                    {/* Testimonial Cards */}
                    <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 },
                                }}
                                className="absolute w-full"
                            >
                                <div className="relative p-10 md:p-12 glass-strong rounded-3xl border border-white/10">
                                    {/* Content */}
                                    <div className="text-center mb-8">
                                        <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed italic mb-6">
                                            "{testimonials[current].content}"
                                        </p>

                                        {/* Stars */}
                                        <div className="flex items-center justify-center gap-1 mb-6">
                                            {[...Array(testimonials[current].rating)].map((_, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    className="text-yellow-500 text-2xl"
                                                >
                                                    ★
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center justify-center gap-4">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.5, type: 'spring' }}
                                            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl shadow-lg"
                                        >
                                            {testimonials[current].image}
                                        </motion.div>
                                        <div className="text-left">
                                            <motion.h4
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 }}
                                                className="font-bold text-lg"
                                            >
                                                {testimonials[current].name}
                                            </motion.h4>
                                            <motion.p
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.7 }}
                                                className="text-muted-foreground"
                                            >
                                                {testimonials[current].role}
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => paginate(-1)}
                            className="w-12 h-12 rounded-full glass border border-white/10 hover:border-white/30 flex items-center justify-center transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setCurrent([index, index > current ? 1 : -1])}
                                    className="relative"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <div
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                                                ? 'bg-primary w-8'
                                                : 'bg-muted-foreground/30'
                                            }`}
                                    />
                                </motion.button>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => paginate(1)}
                            className="w-12 h-12 rounded-full glass border border-white/10 hover:border-white/30 flex items-center justify-center transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
