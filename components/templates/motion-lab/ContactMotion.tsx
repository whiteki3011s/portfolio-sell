'use client';

import { motion } from 'framer-motion';
import { useContactForm } from '@/hooks/useContactForm';
import { Loader2, Check } from 'lucide-react';

export default function MotionContact() {
    const { handleSubmit, isSubmitting, isSuccess } = useContactForm();

    return (
        <section className="py-32 bg-[#111827] text-white flex items-center justify-center">
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-[8vw] font-black leading-none tracking-tighter mb-4">
                        LET'S TALK
                    </h2>
                    <p className="text-xl text-gray-400">Have an idea? Let's build it.</p>
                </motion.div>

                <motion.button
                    onClick={(e) => handleSubmit(e as any)}
                    disabled={isSubmitting || isSuccess}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-12 py-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full text-xl font-bold shadow-lg shadow-orange-500/20 flex items-center gap-3 mx-auto"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" /> Starting...
                        </>
                    ) : isSuccess ? (
                        <>
                            <Check /> Project Started
                        </>
                    ) : (
                        "Start a Project"
                    )}
                </motion.button>
            </div>
        </section>
    );
}
