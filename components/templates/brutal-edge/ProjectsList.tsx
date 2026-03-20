'use client';

import { motion } from 'framer-motion';

const projects = [
    { title: "Chaos Theory", year: "2024", type: "Identity" },
    { title: "Void Space", year: "2023", type: "Web" },
    { title: "Anti-Design", year: "2023", type: "Print" },
    { title: "Raw Material", year: "2022", type: "Art Direction" },
    { title: "Structure", year: "2022", type: "Architecture" }
];

export default function BrutalProjects() {
    return (
        <section className="py-24 px-4 md:px-12 bg-[#FAFAFA] text-[#171717] mx-4 md:mx-12 border-x-4 border-[#171717]">
            <div className="mb-16 border-b-4 border-[#171717] pb-4">
                <h2 className="text-2xl font-black uppercase tracking-widest">Selected Works</h2>
            </div>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex flex-col md:flex-row justify-between items-baseline py-8 border-b-4 border-[#171717] hover:bg-[#171717] hover:text-[#FAFAFA] transition-colors duration-0 px-4 cursor-pointer"
                    >
                        <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-2 md:mb-0">
                            {project.title}
                        </h3>
                        <div className="flex gap-8 font-mono text-lg">
                            <span>{project.type}</span>
                            <span>{project.year}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
