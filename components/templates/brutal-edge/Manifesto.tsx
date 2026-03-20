'use client';

import { motion } from 'framer-motion';

export default function BrutalManifesto() {
    return (
        <section className="py-32 px-4 md:px-12 bg-[#171717] text-[#FAFAFA] border-x-4 border-[#FAFAFA] mx-4 md:mx-12 border-t-4">
            <div className="max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter"
                >
                    We Don't Do Subtle.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-3xl font-mono leading-relaxed space-y-8"
                >
                    <p className="bg-[#FAFAFA] text-[#171717] inline p-2">
                        Design should punch you in the face.
                    </p>
                    <p>
                        It should be raw, honest, and unapologetic. We strip away the polish to reveal the structure. No gradients. No shadows. Just pure, unadulterated content.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
