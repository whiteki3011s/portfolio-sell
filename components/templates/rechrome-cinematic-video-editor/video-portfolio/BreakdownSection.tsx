'use client';

export default function BreakdownSection() {
    return (
        <section className="py-32 px-6 relative z-10 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold uppercase tracking-widest mb-16 text-center">Process Breakdowns</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((i) => (
                        <div key={i} className="relative aspect-video group overflow-hidden bg-zinc-900 border border-zinc-800">
                            {/* Before Image Placeholder */}
                            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center grayscale">
                                <span className="font-mono text-zinc-600 uppercase">RAW Footage</span>
                            </div>

                            {/* After Image Placeholder (Reveals on Hover) */}
                            <div className="absolute inset-0 bg-cyan-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[url('/placeholder-after.jpg')] bg-cover">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <span className="relative font-bold text-white uppercase tracking-widest">Final Grade</span>
                            </div>

                            {/* Floating Metadata */}
                            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                                <span className="px-2 py-1 bg-black/50 backdrop-blur text-[10px] font-mono uppercase text-cyan-400 border border-cyan-500/30">Color Grade</span>
                                <span className="px-2 py-1 bg-black/50 backdrop-blur text-[10px] font-mono uppercase text-magenta-400 border border-magenta-500/30">VFX Cleanup</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
