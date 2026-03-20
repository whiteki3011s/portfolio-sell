'use client';

import { motion } from 'framer-motion';

export default function MinimalNoirHero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-white text-black pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-6xl mx-auto w-full"
            >
                <div className="flex justify-between items-end border-b border-black pb-8 mb-12">
                    <span className="text-sm font-medium tracking-widest uppercase">Portfolio &copy; 2024</span>
                    <span className="text-sm font-medium tracking-widest uppercase">Based in NYC</span>
                </div>

                <h1 className="text-[12vw] leading-[0.9] font-bold tracking-tighter mb-12">
                    DIGITAL
                    <br />
                    DESIGNER
                </h1>

                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <p className="max-w-md text-xl leading-relaxed font-medium">
                        Crafting digital experiences that merge function with form. Specializing in brand identity, art direction, and editorial design.
                    </p>

                    <div className="flex gap-8">
                        <a href="#work" className="text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4">View Work</a>
                        <a href="#contact" className="text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4">Contact</a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
