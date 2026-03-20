'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        client: "FinTech Solutions",
        title: "Banking App Redesign",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
        tags: ["UX/UI", "Mobile App"]
    },
    {
        client: "HealthPlus",
        title: "Telemedicine Platform",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
        tags: ["Web App", "Healthcare"]
    },
    {
        client: "EcoEnergy",
        title: "Sustainability Dashboard",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
        tags: ["Data Viz", "Dashboard"]
    }
];

export default function StudioFeaturedWork() {
    return (
        <section className="py-24 bg-slate-50 text-slate-900">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
                        <div className="h-1 w-20 bg-blue-600 rounded-full" />
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        View All Projects →
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-video rounded-xl overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex gap-2 mb-3">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold bg-white px-2 py-1 rounded border border-slate-200 text-slate-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                            <p className="text-slate-500">{project.client}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
