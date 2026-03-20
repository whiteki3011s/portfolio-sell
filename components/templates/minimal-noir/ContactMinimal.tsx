'use client';

import { motion } from 'framer-motion';
import { useContactForm } from '@/hooks/useContactForm';
import { ArrowRight, Loader2, Check } from 'lucide-react';

export default function MinimalNoirContact() {
    const { handleSubmit, isSubmitting, isSuccess } = useContactForm();

    return (
        <section className="py-32 px-6 md:px-12 bg-white text-black">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let's Talk.</h2>
                    <p className="text-xl text-gray-500">Available for freelance opportunities.</p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="group">
                        <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400 group-focus-within:text-black transition-colors">Name</label>
                        <input
                            required
                            type="text"
                            className="w-full border-b-2 border-gray-200 py-4 text-2xl focus:outline-none focus:border-black transition-colors bg-transparent"
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400 group-focus-within:text-black transition-colors">Email</label>
                        <input
                            required
                            type="email"
                            className="w-full border-b-2 border-gray-200 py-4 text-2xl focus:outline-none focus:border-black transition-colors bg-transparent"
                            placeholder="jane@example.com"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400 group-focus-within:text-black transition-colors">Message</label>
                        <textarea
                            required
                            rows={3}
                            className="w-full border-b-2 border-gray-200 py-4 text-2xl focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className="group flex items-center gap-4 text-2xl font-bold hover:gap-6 transition-all disabled:opacity-50 disabled:hover:gap-4"
                    >
                        {isSubmitting ? (
                            <>
                                Sending... <Loader2 className="animate-spin" />
                            </>
                        ) : isSuccess ? (
                            <>
                                Sent Successfully <Check />
                            </>
                        ) : (
                            <>
                                Send Message <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
