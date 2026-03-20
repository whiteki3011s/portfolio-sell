'use client';

import { motion } from 'framer-motion';

const photos = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop"
];

export default function GalleryHero() {
    return (
        <section className="min-h-screen bg-[#FAFAFA] text-[#1F2937]">
            <div className="h-[60vh] relative overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10 }}
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2000&auto=format&fit=crop"
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-6xl md:text-8xl font-light text-white tracking-widest uppercase"
                    >
                        Capture
                    </motion.h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="aspect-square overflow-hidden cursor-pointer"
                        >
                            <img
                                src={photo}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
