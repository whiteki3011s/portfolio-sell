'use client';

const skills = [
    { title: 'Offline Editing', desc: 'Narrative structure & pacing' },
    { title: 'Color Grading', desc: 'Look development & correction' },
    { title: 'Sound Design', desc: 'Mixing, SFX & atmosphere' },
    { title: 'Motion FX', desc: 'Titles, compositing & cleanup' },
];

export default function SkillsSection() {
    return (
        <section className="py-32 px-6 md:px-20 relative z-10">
            <h2 className="text-4xl font-bold uppercase tracking-widest text-center mb-20">Core Capabilities</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                {skills.map((skill, index) => (
                    <div key={index} className="group relative h-[400px] bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors p-8 flex flex-col justify-end overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />

                        {/* Hover reveal placeholder */}
                        <div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                        <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-xs font-mono text-cyan-400 mb-2 block">0{index + 1}</span>
                            <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-white transition-colors">{skill.title}</h3>
                            <p className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors opacity-0 group-hover:opacity-100 duration-300">{skill.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
