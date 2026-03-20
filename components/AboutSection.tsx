'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Zap, Globe, Cpu, Award, Users } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Beyond the <span className="text-gradient animate-gradient-shift">Code</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
                        We are a team of digital artisans crafting the future of the web.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
                    {/* Card 1: Main About - Large */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 glass-strong rounded-3xl p-8 flex flex-col justify-between group hover:border-primary/30 transition-colors"
                    >
                        <div>
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Visionary Development</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                At RECHROME, we don't just build websites; we engineer digital ecosystems.
                                Our approach combines aesthetic precision with robust engineering to deliver
                                products that stand the test of time and scale with your ambition.
                            </p>
                        </div>
                        <div className="mt-8">
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'TypeScript', 'Node.js', 'WebGL', 'AWS'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-background/50 rounded-full text-xs font-medium border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Stats - Tall */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-1 md:col-span-1 row-span-2 glass rounded-3xl p-8 flex flex-col justify-center gap-8"
                    >
                        <div className="text-center">
                            <div className="text-5xl font-bold text-gradient mb-2">50+</div>
                            <div className="text-sm text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="w-full h-px bg-border/50" />
                        <div className="text-center">
                            <div className="text-5xl font-bold text-gradient mb-2">30+</div>
                            <div className="text-sm text-muted-foreground">Happy Clients</div>
                        </div>
                        <div className="w-full h-px bg-border/50" />
                        <div className="text-center">
                            <div className="text-5xl font-bold text-gradient mb-2">5+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                    </motion.div>

                    {/* Card 3: Service - Small */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 glass rounded-3xl p-6 flex flex-col justify-between hover:bg-primary/5 transition-colors group"
                    >
                        <Code className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                        <div>
                            <h4 className="text-xl font-bold mb-1">Web Dev</h4>
                            <p className="text-xs text-muted-foreground">Full-stack solutions</p>
                        </div>
                    </motion.div>

                    {/* Card 4: Service - Small */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1 glass rounded-3xl p-6 flex flex-col justify-between hover:bg-accent/5 transition-colors group"
                    >
                        <Palette className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                        <div>
                            <h4 className="text-xl font-bold mb-1">UI/UX</h4>
                            <p className="text-xs text-muted-foreground">Pixel-perfect design</p>
                        </div>
                    </motion.div>

                    {/* Card 5: Location - Wide */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1 md:col-span-2 glass rounded-3xl p-8 flex items-center justify-between relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
                            <p className="text-muted-foreground">Based in India, working worldwide.</p>
                        </div>
                        <Globe className="w-32 h-32 text-primary/5 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-500" />
                        <div className="relative z-10 bg-background/50 backdrop-blur-sm p-3 rounded-full border border-white/10">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                    </motion.div>

                    {/* Card 6: Tech - Small */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="col-span-1 glass rounded-3xl p-6 flex flex-col justify-between hover:bg-secondary/5 transition-colors group"
                    >
                        <Cpu className="w-10 h-10 text-primary mb-4 group-hover:rotate-12 transition-transform" />
                        <div>
                            <h4 className="text-xl font-bold mb-1">Modern Stack</h4>
                            <p className="text-xs text-muted-foreground">Next.js 15 & Tailwind</p>
                        </div>
                    </motion.div>

                    {/* Card 7: Mobile - Small */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="col-span-1 glass rounded-3xl p-6 flex flex-col justify-between hover:bg-primary/5 transition-colors group"
                    >
                        <Smartphone className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                        <div>
                            <h4 className="text-xl font-bold mb-1">Mobile First</h4>
                            <p className="text-xs text-muted-foreground">Responsive by default</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
