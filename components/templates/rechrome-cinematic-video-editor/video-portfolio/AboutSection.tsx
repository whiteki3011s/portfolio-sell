'use client';

export default function AboutSection() {
    return (
        <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
            <div className="relative">
                {/* Profile placeholder */}
                <div className="aspect-[3/4] bg-zinc-900 rounded-sm border border-zinc-800 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <div className="absolute bottom-6 left-6 z-20">
                        <p className="text-xs font-mono text-cyan-400 mb-1">EDITOR_PROFILE_V1.0</p>
                        <h3 className="text-3xl font-bold uppercase">The Editor</h3>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-cyan-500/50" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-magenta-500/50" />
            </div>

            <div className="space-y-8">
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                    About<br />The Cut
                </h2>
                <div className="text-lg text-zinc-400 space-y-6 font-light">
                    <p>
                        I don't just assemble footage; I orchestrate emotions. With over 8 years in post-production, I specialize in turning raw chaos into coherent, cinematic narratives.
                    </p>
                    <p>
                        Whether it's a high-energy commercial, a moody music video, or a long-form documentary, my approach is always rhythm-first. Every frame matters.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                    {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D'].map((tool) => (
                        <div key={tool} className="px-4 py-2 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
