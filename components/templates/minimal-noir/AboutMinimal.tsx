'use client';

import { motion } from 'framer-motion';

export default function MinimalNoirAbout() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white text-black">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold uppercase tracking-widest mb-8"
                    >
                        Philosophy
                    </motion.h2>
                </div>
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl font-medium leading-relaxed mb-12"
                    >
                        I believe that good design is invisible. It should facilitate, not obstruct. My approach is rooted in the principles of Swiss design—grid systems, sans-serif typography, and an obsession with white space.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 gap-8"
                    >
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Recognition</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>Awwwards — Site of the Day (x3)</li>
                                <li>The FWA — SOTD</li>
                                <li>Type Directors Club — Certificate</li>
                                <li>Behance — Featured in Interaction</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Select Clients</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>Vogue International</li>
                                <li>Aesop Skincare</li>
                                <li>Kinfolk Magazine</li>
                                <li>Herman Miller</li>
                                <li>The New York Times</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
