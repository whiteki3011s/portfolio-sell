'use client';

const projects = [
    { title: 'Neon Nights', client: 'Nike', role: 'Editor / Color', year: '2024' },
    { title: 'Future Bass', client: 'Red Bull', role: 'VFX / Motion', year: '2023' },
    { title: 'Waves', client: 'Sony Music', role: 'Director / Editor', year: '2023' },
    { title: 'Urban Drift', client: 'Porsche', role: 'Editor', year: '2022' },
];

export default function TimelineSection() {
    return (
        <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold uppercase tracking-widest mb-16 border-b border-zinc-800 pb-8">Selected Projects</h2>

            <div className="space-y-0">
                {projects.map((project, index) => (
                    <div key={index} className="group flex flex-col md:flex-row items-baseline justify-between py-10 border-b border-zinc-800 hover:bg-white/5 transition-colors px-4 cursor-pointer">
                        <div className="flex items-center gap-8">
                            <span className="font-mono text-zinc-600 text-sm">0{index + 1}</span>
                            <h3 className="text-3xl md:text-5xl font-bold uppercase group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                        </div>

                        <div className="flex items-center gap-8 md:gap-16 mt-4 md:mt-0 font-mono text-sm text-zinc-400">
                            <span className="w-24">{project.client}</span>
                            <span className="w-32">{project.role}</span>
                            <span className="text-white">{project.year}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <button className="text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                    View Full Filmography
                </button>
            </div>
        </section>
    );
}
