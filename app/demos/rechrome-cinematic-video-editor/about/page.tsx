export default function AboutPage() {
    return (
        <main className="bg-[#050505] min-h-screen pt-32 pb-20 px-6 md:px-20 text-white">
            <div className="max-w-6xl mx-auto">
                {/* HERO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative aspect-[3/4] bg-zinc-900 md:order-last">
                        {/* Placeholder generic silhouette or stylish gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-magenta-900/20 mix-blend-screen" />
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-black text-9xl uppercase overflow-hidden opacity-20">
                            Me
                        </div>
                    </div>
                    <div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600">
                            Frame by<br />Frame.
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed mb-8">
                            I'm a video editor based in Los Angeles, obsessed with rhythm, pacing, and the invisible art of storytelling.
                        </p>
                        <p className="text-zinc-500 leading-relaxed">
                            Whether it's a 30-second spot or a feature-length doc, I believe every cut should push the story forward. I specialize in high-energy commercial work and emotive narrative pieces that stick with the viewer long after the screen goes black.
                        </p>
                    </div>
                </div>

                {/* TIMELINE */}
                <div className="mb-32">
                    <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-cyan-500 mb-12"> The Journey </h2>
                    <div className="space-y-12 border-l border-zinc-800 pl-8 ml-4">
                        {[
                            { year: '2024', title: 'Freelance Full-Time', desc: 'Collaborating with global brands and agencies.' },
                            { year: '2020', title: 'Senior Editor @ Agency X', desc: 'Led post-production for major automotive campaigns.' },
                            { year: '2018', title: 'Junior Editor', desc: 'Cut 200+ social assets for tech startups.' },
                            { year: '2016', title: 'Started Editing', desc: 'First short film selected for local festivals.' }
                        ].map((milestone) => (
                            <div key={milestone.year} className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 bg-[#050505] border border-cyan-500 rounded-full" />
                                <span className="text-cyan-500 font-mono text-sm mb-2 block">{milestone.year}</span>
                                <h3 className="text-2xl font-bold uppercase mb-2">{milestone.title}</h3>
                                <p className="text-zinc-500">{milestone.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* VALUES */}
                <div className="mb-32">
                    <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-magenta-500 mb-12">Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: 'Story First', desc: 'Technique serves narrative, always.' },
                            { title: 'Rhythm', desc: 'Every frame dances to the beat.' },
                            { title: 'Precision', desc: 'Pixel-perfect attention to detail.' },
                            { title: 'Collaboration', desc: 'Your vision, amplified.' }
                        ].map((val) => (
                            <div key={val.title} className="border-t border-white/20 pt-6">
                                <h3 className="text-lg font-bold uppercase mb-4">{val.title}</h3>
                                <p className="text-zinc-500 text-sm">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FUN */}
                <div className="bg-zinc-900/30 p-12 border border-white/5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px]" />
                    <h2 className="text-3xl font-black uppercase mb-8 relative z-10">Outside the timeline</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div>
                            <h4 className="text-white font-bold uppercase mb-2 text-xs tracking-widest">Listening To</h4>
                            <p className="text-zinc-400 font-mono">Synthwave / IDM / scores</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-2 text-xs tracking-widest">Watching</h4>
                            <p className="text-zinc-400 font-mono">Sci-Fi Classics, indie thrillers</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-2 text-xs tracking-widest">Collecting</h4>
                            <p className="text-zinc-400 font-mono">Vintage Lenses, Vinyl</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <a href="/demos/rechrome-cinematic-video-editor/contact" className="text-xl font-bold uppercase border-b-2 border-white hover:border-cyan-500 hover:text-cyan-500 transition-colors pb-1">
                        Let's Work Together →
                    </a>
                </div>
            </div>
        </main>
    );
}
