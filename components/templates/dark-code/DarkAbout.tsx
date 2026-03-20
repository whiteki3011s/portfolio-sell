'use client';

import { motion } from 'framer-motion';

export default function DarkAbout() {
    return (
        <section className="py-24 bg-[#0D1117] text-[#C9D1D9] font-mono border-t border-[#30363D]">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex items-center gap-2 mb-12">
                    <span className="text-[#238636]">$</span>
                    <h2 className="text-2xl font-bold text-white">neofetch --user</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* ASCII Art / Avatar Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-mono text-[10px] md:text-xs leading-[1.1] text-[#58A6FF] whitespace-pre overflow-hidden select-none"
                    >
                        {`
                   -
                  .o+
                 .ooo/
                .ooooo:
               .ooooooo.
              .ooooooooo.
             .ooooooooooo.
            .ooooooooooooo.
           .ooooooooooooooo.
          .ooooooooooooooooo.
         .ooooooooooooooooooo.
        .ooooooooooooooooooooo.
       .ooooooooooooooooooooooo.
      .ooooooooooooooooooooooooo.
     .ooooooooooooooooooooooooooo.
    .ooooooooooooooooooooooooooooo.
   .ooooooooooooooooooooooooooooooo.
  .ooooooooooooooooooooooooooooooooo.
 .ooooooooooooooooooooooooooooooooooo.
.ooooooooooooooooooooooooooooooooooooo.
`}
                    </motion.div>

                    {/* System Specs */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div>
                            <span className="text-[#238636] font-bold">User:</span> <span className="text-white">Dev_One</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">Host:</span> <span className="text-white">Portfolio_v3</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">Kernel:</span> <span className="text-white">Creative_Mind_v2.0</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">Uptime:</span> <span className="text-white">5 years, 3 months</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">Packages:</span> <span className="text-white">142 (npm), 25 (cargo)</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">Shell:</span> <span className="text-white">zsh 5.8</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">Resolution:</span> <span className="text-white">3840x2160</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">DE:</span> <span className="text-white">VS Code</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">WM:</span> <span className="text-white">React_DOM</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">Theme:</span> <span className="text-white">Dark_Mode_Pro</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">CPU:</span> <span className="text-white">100% Focus</span>
                        </div>
                        <div>
                            <span className="text-[#238636] font-bold">Memory:</span> <span className="text-white">Infinite Learning Capacity</span>
                        </div>

                        <div className="pt-8 flex gap-2">
                            <div className="w-8 h-8 bg-black rounded"></div>
                            <div className="w-8 h-8 bg-red-500 rounded"></div>
                            <div className="w-8 h-8 bg-green-500 rounded"></div>
                            <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                            <div className="w-8 h-8 bg-blue-500 rounded"></div>
                            <div className="w-8 h-8 bg-purple-500 rounded"></div>
                            <div className="w-8 h-8 bg-cyan-500 rounded"></div>
                            <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
