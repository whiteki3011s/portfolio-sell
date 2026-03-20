'use client';

import { motion } from 'framer-motion';

const skills = [
    { category: "Design", items: ["Art Direction", "Brand Identity", "UI/UX", "Typography", "Layout"] },
    { category: "Tech", items: ["Figma", "Adobe CC", "Webflow", "Spline", "Cinema 4D"] },
    { category: "Strategy", items: ["Creative Direction", "Content Strategy", "Brand Voice", "Market Research"] }
];

export default function SkillsMinimal() {
    return (
        <section className="py-32 bg-white text-black px-6 md:px-12 border-t border-black/10">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-8">Expertise</h2>
                    </div>
                    <div className="md:col-span-8 grid md:grid-cols-3 gap-12">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-lg font-serif italic mb-6">{skillGroup.category}</h3>
                                <ul className="space-y-3">
                                    {skillGroup.items.map((item, i) => (
                                        <li key={i} className="text-sm font-medium text-black/60 hover:text-black transition-colors">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
