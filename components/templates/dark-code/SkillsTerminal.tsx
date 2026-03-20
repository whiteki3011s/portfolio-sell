'use client';

import { motion } from 'framer-motion';

const skills = [
    { category: "Languages", items: ["TypeScript", "Rust", "Go", "Python"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind", "Three.js"] },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "Docker"] },
    { category: "DevOps", items: ["AWS", "CI/CD", "Kubernetes", "Terraform"] }
];

export default function DarkSkills() {
    return (
        <section className="py-24 bg-[#0D1117] text-[#C9D1D9] font-mono">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="bg-[#161B22] border border-[#30363D] rounded-lg overflow-hidden">
                    <div className="bg-[#21262D] px-4 py-2 border-b border-[#30363D] text-xs text-[#8B949E]">
                        skills.json
                    </div>
                    <div className="p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#FF7B72]">{"{"}</span>
                            {skills.map((skill, index) => (
                                <div key={index} className="pl-4 my-2">
                                    <span className="text-[#79C0FF]">"{skill.category}"</span>
                                    <span className="text-[#C9D1D9]">: </span>
                                    <span className="text-[#FF7B72]">{"["}</span>
                                    <div className="pl-4">
                                        {skill.items.map((item, i) => (
                                            <span key={i} className="text-[#A5D6FF]">
                                                "{item}"{i < skill.items.length - 1 ? "," : ""}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-[#FF7B72]">{"]"}{index < skills.length - 1 ? "," : ""}</span>
                                </div>
                            ))}
                            <span className="text-[#FF7B72]">{"}"}</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
