'use client';

import { motion } from 'framer-motion';

export default function Rechrome3DShowreel() {
    return (
        <section id="showreel" className="py-20 relative z-10 bg-[#0B0B0E] overflow-hidden">
            {/* Ambient Bloom */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#4FA3FF]/20 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1800px] mx-auto px-4">
                <div className="relative aspect-video w-full bg-black border border-white/10 rounded-sm overflow-hidden group mb-6 shadow-[0_0_100px_rgba(0,0,0,0.5)]">

                    {/* Placeholder Video Pattern */}
                    <div className="absolute inset-0 bg-[#0B0B0E] flex items-center justify-center">
                        <div className="font-mono text-white/10 text-9xl font-black uppercase tracking-tighter opacity-20 group-hover:opacity-40 transition-opacity">
                            REEL 2024
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                        <div className="w-24 h-24 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:border-[#00E5FF] group-hover:shadow-[0_0_30px_#00E5FF] transition-all duration-500">
                            <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-2 group-hover:border-l-[#00E5FF] transition-colors" />
                        </div>
                    </div>

                    {/* Timeline UI Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col gap-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <h2 className="text-3xl font-bold uppercase mb-1">Main Showreel</h2>
                                <p className="font-mono text-[#00E5FF] text-xs tracking-widest">02:34 • 4K • COLOR GRADED</p>
                            </div>
                            <div className="font-mono text-white/50 text-xs">
                                TC: 00:00:00:00
                            </div>
                        </div>

                        {/* Timeline Bar */}
                        <div className="w-full h-12 border-t border-white/20 relative mt-4 overflow-hidden">
                            {/* Ticks */}
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_19px,rgba(255,255,255,0.2)_20px)] opacity-50" />
                            {/* Playhead */}
                            <motion.div
                                animate={{ x: ['0%', '100%'] }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                className="absolute top-0 left-0 h-full w-px bg-[#FF3BDA] shadow-[0_0_10px_#FF3BDA]"
                            >
                                <div className="absolute -top-1 -left-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FF3BDA]" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Info Bar */}
                <div className="flex justify-between items-center px-4 border-l-2 border-[#00E5FF] py-2 bg-white/5 backdrop-blur-sm max-w-4xl mx-auto -mt-12 relative z-20">
                    <div className="flex items-center gap-4">
                        <span className="w-2 h-2 bg-[#FF3BDA] rounded-full animate-pulse" />
                        <span className="font-mono text-xs uppercase tracking-widest text-white/80">NOW PLAYING</span>
                    </div>
                    <span className="font-bold uppercase tracking-wider text-sm">Cinematic Highlights Vol. 1</span>
                </div>
            </div>
        </section>
    );
}
