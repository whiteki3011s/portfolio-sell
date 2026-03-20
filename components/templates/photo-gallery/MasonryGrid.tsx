'use client';

import { motion } from 'framer-motion';

const photos = [
    "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000&auto=format&fit=crop"
];

export default function GalleryMasonry() {
    return (
        <section className="py-24 px-4 md:px-12 bg-[#FAFAFA]">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="break-inside-avoid"
                    >
                        <img
                            src={photo}
                            alt={`Gallery ${index + 1}`}
                            className="w-full rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
