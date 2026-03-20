'use client';

import { motion } from 'framer-motion';

export default function LightAboutBio() {
    return (
        <section className="py-24 bg-blue-50 text-gray-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-6"
                    >
                        Hi, I'm Alex.
                    </motion.h2>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 leading-relaxed mb-8"
                    >
                        I'm a product designer based in San Francisco. I believe in designing interfaces that are not just functional, but also bring joy to the user. With 5 years of experience, I've helped startups and established companies launch successful digital products.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center gap-4"
                    >
                        <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-blue-600 shadow-sm">UI Design</span>
                        <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-blue-600 shadow-sm">UX Research</span>
                        <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-blue-600 shadow-sm">Prototyping</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
