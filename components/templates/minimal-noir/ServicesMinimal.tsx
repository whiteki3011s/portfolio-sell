'use client';

import { motion } from 'framer-motion';

const services = [
    {
        title: "Art Direction",
        description: "Guiding the visual language of brands through photography, typography, and layout."
    },
    {
        title: "Brand Identity",
        description: "Creating cohesive design systems that communicate values and personality."
    },
    {
        title: "Digital Design",
        description: "Designing websites and applications that are intuitive, accessible, and beautiful."
    },
    {
        title: "Creative Strategy",
        description: "Defining the 'why' and 'how' behind every design decision to ensure impact."
    }
];

export default function MinimalNoirServices() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white text-black border-t border-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <h2 className="text-[8vw] leading-none font-bold tracking-tighter">SERVICES</h2>
                    <p className="max-w-xs text-right mt-8 md:mt-0 font-medium">
                        Comprehensive design solutions for modern brands.
                    </p>
                </div>

                <div className="space-y-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-t border-gray-200 hover:border-black transition-colors duration-300 cursor-pointer"
                        >
                            <span className="text-2xl md:text-4xl font-medium group-hover:translate-x-4 transition-transform duration-300 mb-4 md:mb-0">{service.title}</span>
                            <div className="flex items-center gap-8">
                                <span className="text-sm text-gray-500 max-w-xs text-right hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {service.description}
                                </span>
                                <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-gray-200" />
                </div>
            </div>
        </section>
    );
}
