'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Vogue Italia",
        category: "Art Direction",
        year: "2024",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Aesop Skin",
        category: "Brand Identity",
        year: "2023",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Kinfolk",
        category: "Editorial Design",
        year: "2023",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "MoMA NYC",
        category: "Digital Experience",
        year: "2022",
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Herman Miller",
        category: "Product Photography",
        year: "2022",
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "The New York Times",
        category: "Web Design",
        year: "2021",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function MinimalNoirGrid() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white text-black" id="work">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="flex justify-between items-baseline border-b border-black pb-4">
                                <div>
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <span className="text-xs text-gray-500">{project.year}</span>
                                </div>
                                <span className="text-sm tracking-widest uppercase">{project.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
