'use client';

const roles = [
    { year: '2024', company: 'Future Corp', role: 'Senior Product Designer', loc: 'Remote' },
    { year: '2022', company: 'Neon Studio', role: '3D Generalist', loc: 'New York' },
    { year: '2020', company: 'Agency X', role: 'Frontend Developer', loc: 'London' },
    { year: '2018', company: 'Freelance', role: 'Visual Designer', loc: 'Worldwide' },
];

export default function Rechrome3DExperience() {
    return (
        <section className="py-32 px-4 relative z-10 bg-black text-white border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <h2 className="text-4xl font-bold uppercase tracking-tighter">Experience<span className="text-cyan-500">.log</span></h2>
                    <p className="font-mono text-zinc-500 text-xs uppercase tracking-widest max-w-sm text-right">
                        // Tracking professional trajectory across<br />digital and physical spaces.
                    </p>
                </div>

                <div className="space-y-2">
                    {roles.map((item, index) => (
                        <div key={index} className="group relative flex flex-col md:flex-row items-center justify-between p-6 bg-zinc-900/20 border border-white/5 hover:border-cyan-500/30 hover:bg-zinc-900/40 transition-all duration-300 rounded-lg">
                            {/* Hover accent */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                            <div className="flex items-center gap-8 w-full md:w-auto mb-4 md:mb-0">
                                <span className="font-mono text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                                    {item.year}
                                </span>
                                <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-white transition-colors">
                                    {item.company}
                                </h3>
                            </div>

                            <div className="flex items-center justify-between w-full md:w-auto gap-8 md:gap-16">
                                <span className="text-zinc-400 font-light group-hover:text-cyan-100 transition-colors">
                                    {item.role}
                                </span>
                                <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider group-hover:text-cyan-500/70 transition-colors">
                                    {item.loc}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Marquee (Static simulation for simplicity) */}
                <div className="mt-20 pt-10 border-t border-white/5">
                    <p className="font-mono text-center text-xs text-zinc-600 uppercase tracking-[0.3em] mb-8">
                        Technical Stack
                    </p>
                    <div className="flex justify-center gap-8 md:gap-16 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {['React', 'Three.js', 'Next.js', 'WebGL', 'Blender', 'TypeScript'].map(tech => (
                            <span key={tech} className="text-xl font-bold text-zinc-400 uppercase tracking-tighter hover:text-cyan-400 cursor-default transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
