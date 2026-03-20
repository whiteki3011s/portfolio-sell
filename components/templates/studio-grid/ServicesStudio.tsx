'use client';

import { motion } from 'framer-motion';

const services = [
    {
        title: "Product Design",
        description: "User-centric design systems and interfaces that drive engagement.",
        icon: "🎨"
    },
    {
        title: "Web Development",
        description: "Scalable, high-performance web applications built on modern stacks.",
        icon: "💻"
    },
    {
        title: "Brand Strategy",
        description: "Comprehensive brand positioning and identity for digital-first companies.",
        icon: "🎯"
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile experiences for iOS and Android.",
        icon: "📱"
    }
];

export default function StudioServices() {
    return (
        <section className="py-24 bg-white text-slate-900">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-slate-100"
                        >
                            <div className="text-4xl mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
