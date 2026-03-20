'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, CheckCircle2, Lightbulb } from 'lucide-react';

export default function AboutStudio() {
    const process = [
        {
            number: '01',
            title: 'Research the persona',
            description: 'We study your target audience—hiring managers, clients, or collaborators—and understand what they look for in a portfolio.'
        },
        {
            number: '02',
            title: 'Design flows & UI',
            description: 'We craft user journeys and design interfaces that guide visitors naturally through your work, story, and contact points.'
        },
        {
            number: '03',
            title: 'Add motion & interactions',
            description: 'Strategic animations bring the experience to life. Every transition, hover, and scroll effect serves a purpose.'
        },
        {
            number: '04',
            title: 'Ship & iterate',
            description: 'We deliver production-ready code, then refine based on analytics and feedback to maximize impact.'
        }
    ];

    const services = [
        {
            icon: Palette,
            title: 'Ready-Made Portfolio Designs',
            description: 'Choose from our curated collection of premium templates. Each is fully designed, coded, and ready to customize with your content.',
            color: 'primary'
        },
        {
            icon: Code,
            title: 'Template Customization',
            description: 'Start with an existing design and we\'ll customize it to match your brand, add unique sections, or adjust the tech stack.',
            color: 'secondary'
        },
        {
            icon: Zap,
            title: 'Fully Custom Portfolio',
            description: 'Need something unique? We\'ll design and build a portfolio from scratch, tailored precisely to your vision and goals.',
            color: 'accent'
        }
    ];

    const philosophy = [
        {
            title: 'UI/UX first',
            description: 'Beautiful code means nothing if users don\'t understand your work. We prioritize clarity and intuitive navigation.'
        },
        {
            title: 'Motion with purpose',
            description: 'Animations aren\'t decoration—they guide attention, provide feedback, and make interactions feel premium.'
        },
        {
            title: 'Performance & accessibility',
            description: 'Fast load times and inclusive design aren\'t optional. Every portfolio we build is optimized for both.'
        },
        {
            title: 'Developer-friendly builds',
            description: 'Clean, maintainable code with modern best practices. Easy to customize, deploy, and scale.'
        }
    ];

    const stack = [
        'Next.js 15',
        'TypeScript',
        'Tailwind CSS 4',
        'Framer Motion',
        'GSAP',
        'Node.js',
        'MongoDB',
        'Vercel'
    ];

    return (
        <div className="min-h-screen">
            {/* Intro Section */}
            <div className="container mx-auto px-4 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        About the <span className="text-gradient animate-gradient-shift">Studio</span>
                    </h1>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            <span className="text-foreground font-semibold">RECHROME</span> is a UI/UX-focused design studio that specializes in portfolio experiences for developers, designers, and creatives.
                        </p>
                        <p>
                            We believe your portfolio is more than a project list—it's your professional identity. It should feel premium, load instantly, and guide visitors naturally to your best work and contact info.
                        </p>
                        <p>
                            Every template we design combines modern web technologies with strategic UX decisions. The result? Portfolios that don't just look good—they convert visitors into opportunities.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Story Section */}
            <div className="bg-gradient-to-b from-background/50 to-background py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Why portfolios?
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                After building dozens of custom websites, we noticed a pattern: the most impactful projects were portfolios. They're personal, high-stakes, and often the difference between landing a dream job or winning a major client.
                            </p>
                            <p>
                                Yet most developers and designers settle for basic templates or spend weeks building from scratch. We saw an opportunity to create something better—portfolio designs that feel custom but deploy in hours.
                            </p>
                            <p>
                                We work closely with hiring managers and creative directors to understand what catches their attention. Then we bake those insights into every template we create.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Process Section */}
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
                    <p className="text-lg text-muted-foreground">
                        How we approach every portfolio design, from research to launch.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {process.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-strong rounded-2xl p-8 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5 leading-none -mr-4 -mt-4 group-hover:text-primary/10 transition-colors">
                                {step.number}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gradient-to-b from-background to-background/50 py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Offer</h2>
                        <p className="text-lg text-muted-foreground">
                            Three ways to get the portfolio you deserve.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-strong rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
                                >
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${service.color === 'primary'
                                            ? 'bg-primary/20 text-primary'
                                            : service.color === 'secondary'
                                                ? 'bg-secondary/20 text-secondary'
                                                : 'bg-accent/20 text-accent'
                                        }`}>
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Design Philosophy</h2>
                    <p className="text-lg text-muted-foreground">
                        The principles that guide every decision we make.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {philosophy.map((principle, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex gap-4 glass rounded-2xl p-6"
                        >
                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold mb-2">{principle.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tools & Stack */}
            <div className="bg-gradient-to-b from-background/50 to-background py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Tools & Stack</h2>
                        <p className="text-lg text-muted-foreground">
                            Modern technologies for modern portfolios.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                    >
                        {stack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="px-6 py-3 glass-strong rounded-full border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                            >
                                <span className="font-semibold text-sm">{tech}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
