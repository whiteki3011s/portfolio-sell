'use client';

import { motion } from 'framer-motion';

export default function BrutalHero() {
    return (
        <section className="min-h-screen bg-[#171717] text-[#FAFAFA] pt-32 px-4 border-l-4 border-r-4 border-[#FAFAFA] mx-4 md:mx-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="border-b-4 border-[#FAFAFA] pb-8 mb-12"
                >
                    <h1 className="text-[12vw] font-black leading-[0.8] tracking-tighter uppercase break-words">
                        RAW
                        <br />
                        <span className="text-transparent text-stroke-white">DESIGN</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl font-mono uppercase tracking-widest border-l-4 border-[#FAFAFA] pl-6"
                    >
                        <p>No Filters.</p>
                        <p>No Fluff.</p>
                        <p>Just Impact.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col gap-4"
                    >
                        <button className="bg-[#FAFAFA] text-[#171717] font-black text-2xl py-6 px-8 uppercase hover:bg-[#EF4444] hover:text-white transition-colors border-4 border-transparent hover:border-[#FAFAFA]">
                            See Projects
                        </button>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
                .text-stroke-white {
                    -webkit-text-stroke: 2px #FAFAFA;
                }
            `}</style>
        </section>
    );
}
