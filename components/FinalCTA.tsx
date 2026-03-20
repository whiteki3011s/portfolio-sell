'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#050505]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -z-10" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-12 md:p-16 rounded-[3rem]"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                            <Sparkles size={24} />
                        </div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        Ready to upgrade your portfolio?
                    </h2>
                    
                    <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
                        Stop losing clients to average design. Launch a premium portfolio that does the selling for you.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/templates" 
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-black font-bold hover:bg-primary/90 hover:scale-105 transition-all text-center flex justify-center items-center gap-2"
                        >
                            View Templates <ArrowRight size={18} />
                        </Link>
                        
                        <Link 
                            href="/#services" 
                            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all text-center"
                        >
                            Get Custom Site
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
