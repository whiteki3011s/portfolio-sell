'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Studio Grid transformed our digital presence. Their strategic approach and attention to detail are unmatched.",
        author: "Sarah Johnson",
        role: "CMO, TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "The team delivered a complex platform ahead of schedule and beyond our expectations. Truly professional partners.",
        author: "Michael Chen",
        role: "CTO, DataStream",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    }
];

export default function StudioTestimonials() {
    return (
        <section className="py-24 bg-white text-slate-900 border-y border-slate-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Client Stories</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We build lasting partnerships with our clients, helping them navigate the digital landscape and achieve their business goals.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                                <div className="text-sm text-slate-500 font-medium">Enterprise Clients</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                                <div className="text-sm text-slate-500 font-medium">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="p-8 bg-slate-50 rounded-2xl border border-slate-100"
                            >
                                <p className="text-lg italic text-slate-700 mb-6">"{item.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="font-bold text-slate-900">{item.author}</div>
                                        <div className="text-sm text-slate-500">{item.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
