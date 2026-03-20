'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: "Bloom App",
        category: "Mobile Design",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Fresh Market",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Zen Space",
        category: "Interior Web",
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Cloud Soft",
        category: "SaaS Platform",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function LightWorkGrid() {
    return (
        <section className="py-24 bg-white text-gray-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-2">My Work</h2>
                    <p className="text-gray-500">A collection of recent projects.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{project.title}</h3>
                            <p className="text-gray-500">{project.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
