'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Rechrome3DContact() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
    const [budget, setBudget] = useState(5000);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('sent'), 2000);
    };

    return (
        <section id="contact" className="py-32 px-4 relative z-10 bg-[#0B0B0E] text-white overflow-hidden">

            <div className="max-w-4xl mx-auto relative">
                {/* Background Decor */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />

                <h2 className="text-6xl font-black uppercase tracking-tighter mb-16 text-center">
                    Initiate <span className="text-[#FF3BDA]">Protocol</span>
                </h2>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
                    <AnimatePresence mode='wait'>
                        {status === 'sent' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 rounded-full border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF]"
                                >
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                </motion.div>
                                <h3 className="text-2xl font-bold uppercase tracking-widest text-white">Transmission Sent</h3>
                                <p className="text-gray-400 font-mono text-sm max-w-xs">We have received your signal. Expect a secure response within 24 hours.</p>
                                <button onClick={() => setStatus('idle')} className="text-sm text-[#00E5FF] underline underline-offset-4 mt-8 hover:text-white transition-colors">Send another</button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-8 relative z-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase text-gray-400 tracking-widest">Codename / Name</label>
                                        <input type="text" required className="w-full bg-black/50 border border-white/10 p-4 text-white placeholder-gray-700 focus:border-[#00E5FF] focus:outline-none transition-colors rounded-sm" placeholder="ENTER NAME" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase text-gray-400 tracking-widest">Frequency / Email</label>
                                        <input type="email" required className="w-full bg-black/50 border border-white/10 p-4 text-white placeholder-gray-700 focus:border-[#00E5FF] focus:outline-none transition-colors rounded-sm" placeholder="ENTER EMAIL" />
                                    </div>
                                </div>

                                {/* Timeline Selector (Project Type) */}
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase text-gray-400 tracking-widest">Mission Type</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {['Footage Edit', '3D Motion', 'Design Sys', 'Full Prod'].map(type => (
                                            <label key={type} className="cursor-pointer">
                                                <input type="radio" name="type" className="peer sr-only" />
                                                <div className="text-center p-3 bg-black/30 border border-white/10 peer-checked:bg-[#00E5FF]/10 peer-checked:border-[#00E5FF] peer-checked:text-[#00E5FF] hover:bg-white/5 transition-all rounded-sm text-xs font-bold uppercase">
                                                    {type}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Budget Slider */}
                                <div className="space-y-4">
                                    <div className="flex justify-between font-mono text-xs uppercase text-gray-400">
                                        <span>Budget Allocation</span>
                                        <span className="text-[#00E5FF]">${budget.toLocaleString()}+</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1000"
                                        max="50000"
                                        step="1000"
                                        value={budget}
                                        onChange={(e) => setBudget(Number(e.target.value))}
                                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase text-gray-400 tracking-widest">Mission Briefing</label>
                                    <textarea rows={4} className="w-full bg-black/50 border border-white/10 p-4 text-white placeholder-gray-700 focus:border-[#00E5FF] focus:outline-none transition-colors rounded-sm" placeholder="DETAILS..." />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status === 'sending'}
                                    className="w-full py-5 bg-[#00E5FF] text-black font-black uppercase tracking-[0.2em] hover:bg-white transition-colors rounded-sm relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        {status === 'sending' ? 'Transmitting...' : 'Execute Send'}
                                    </span>
                                    {status === 'sending' && (
                                        <motion.div
                                            layoutId="sending-bar"
                                            className="absolute bottom-0 left-0 h-1 bg-white z-20"
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 2 }}
                                        />
                                    )}
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    {/* Decorative Scanner Line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
            </div>
        </section>
    );
}
