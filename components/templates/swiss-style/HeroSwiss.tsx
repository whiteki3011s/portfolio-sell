'use client';

import { motion } from 'framer-motion';

export default function HeroSwiss() {
    return (
        <section className="min-h-screen bg-[#F5F5F5] text-[#111] font-sans flex flex-col justify-between p-8 md:p-16 border-[20px] border-[#DC2626]">
            {/* Top Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b-4 border-black pb-8">
                <div className="col-span-12 md:col-span-8">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85]"
                    >
                        HELVETICA<br />
                        NEUE<br />
                        <span className="text-[#DC2626]">DESIGN.</span>
                    </motion.h1>
                </div>
                <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
                    <p className="text-xl font-bold uppercase tracking-widest mb-4">
                        International<br />Typographic<br />Style
                    </p>
                    <div className="w-full h-4 bg-black" />
                </div>
            </div>

            {/* Middle Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-grow items-center py-12">
                <div className="col-span-12 md:col-span-6">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="w-full h-64 bg-[#DC2626] origin-left"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 pl-0 md:pl-12">
                    <p className="text-2xl md:text-4xl font-medium leading-tight max-w-lg">
                        Objective clarity. <br />
                        Mathematical grids. <br />
                        Asymmetrical balance.
                    </p>
                </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t-4 border-black pt-8">
                <div>
                    <span className="block text-sm font-bold uppercase mb-2">Project</span>
                    <span className="text-lg">Portfolio 2025</span>
                </div>
                <div>
                    <span className="block text-sm font-bold uppercase mb-2">Role</span>
                    <span className="text-lg">Art Director</span>
                </div>
                <div>
                    <span className="block text-sm font-bold uppercase mb-2">Location</span>
                    <span className="text-lg">Zurich, CH</span>
                </div>
                <div className="flex justify-end items-end">
                    <button className="px-8 py-4 bg-black text-white font-bold uppercase hover:bg-[#DC2626] transition-colors">
                        View Works
                    </button>
                </div>
            </div>
        </section>
    );
}
