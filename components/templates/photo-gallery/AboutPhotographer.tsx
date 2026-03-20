'use client';

import { motion } from 'framer-motion';

export default function GalleryAbout() {
    return (
        <section className="py-24 px-4 md:px-12 bg-white text-[#1F2937]">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <img
                        src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=1000&auto=format&fit=crop"
                        alt="Photographer"
                        className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-3xl font-light uppercase tracking-widest mb-8">The Artist</h2>
                    <p className="text-lg leading-relaxed text-gray-600 mb-6">
                        Capturing moments of silence in a chaotic world. My work focuses on the interplay between light and shadow, finding beauty in the mundane.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                        Based in Tokyo, available worldwide for editorial and commercial assignments.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
