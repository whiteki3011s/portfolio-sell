'use client';

export default function GallerySection() {
    return (
        <section className="py-32 px-6 border-t border-white/5">
            <h2 className="text-9xl md:text-[15vw] font-black uppercase text-center opacity-5 tracking-tighter select-none mb-[-5vw]">
                Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-zinc-900 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-mono text-zinc-700 text-lg">Visual No. 0{item}</span>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/50 backdrop-blur-sm">
                            <p className="text-xs font-bold uppercase tracking-widest">Project Name</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-20">
                <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all font-bold uppercase tracking-widest text-sm">
                    View Full Archive
                </button>
            </div>
        </section>
    );
}
