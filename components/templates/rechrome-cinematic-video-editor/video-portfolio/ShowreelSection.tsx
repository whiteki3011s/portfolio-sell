'use client';

export default function ShowreelSection() {
    return (
        <section className="py-20 relative z-10">
            <div className="w-full h-[80vh] bg-black relative overflow-hidden group">
                {/* Video Placeholder */}
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                    <span className="text-zinc-800 text-9xl font-black uppercase opacity-20">Showreel</span>
                </div>

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-50" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer">
                    <div className="flex flex-col items-center gap-4 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                        <button className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                            <svg className="w-8 h-8 fill-current translate-x-1" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                        <span className="text-white font-bold uppercase tracking-widest text-sm">Play Full Reel</span>
                    </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-10 left-10 pointer-events-none">
                    <h2 className="text-4xl font-bold uppercase mb-2">2024 Showreel</h2>
                    <p className="font-mono text-cyan-400 text-sm">Selected Works • 02:45</p>
                </div>
            </div>
        </section>
    );
}
