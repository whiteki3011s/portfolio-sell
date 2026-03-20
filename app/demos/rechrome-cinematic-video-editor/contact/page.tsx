export default function ContactPage() {
    return (
        <main className="bg-[#050505] min-h-screen pt-32 pb-20 px-6 md:px-20 text-white flex flex-col justify-center">
            <div className="max-w-5xl mx-auto w-full">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-white">
                        Let's Edit Something<br /> <span className="text-cyan-500">Unforgettable</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl font-light">
                        Currently accepting bookings for Q4 2024. Available for commercials, music videos, and narrative work.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Form */}
                    <div className="lg:col-span-8">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Full Name</label>
                                    <input type="text" className="w-full bg-zinc-900 border-b border-zinc-700 p-4 text-white focus:border-cyan-500 focus:bg-zinc-800 transition-colors outline-none" placeholder="Who's asking?" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Email Address</label>
                                    <input type="email" className="w-full bg-zinc-900 border-b border-zinc-700 p-4 text-white focus:border-cyan-500 focus:bg-zinc-800 transition-colors outline-none" placeholder="email@address.com" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Project Type</label>
                                <select className="w-full bg-zinc-900 border-b border-zinc-700 p-4 text-white focus:border-cyan-500 focus:bg-zinc-800 transition-colors outline-none appearance-none">
                                    <option>Commercial</option>
                                    <option>Music Video</option>
                                    <option>Narrative / Film</option>
                                    <option>Social Content</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Project Details</label>
                                <textarea rows={5} className="w-full bg-zinc-900 border-b border-zinc-700 p-4 text-white focus:border-cyan-500 focus:bg-zinc-800 transition-colors outline-none" placeholder="Tell me about the timeline, budget, and vision..."></textarea>
                            </div>

                            <div className="pt-8">
                                <button className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors overflow-hidden">
                                    <span className="relative z-10">Send Inquiry</span>
                                    <div className="absolute inset-0 bg-cyan-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Sidebar Info */}
                    <div className="lg:col-span-4 space-y-12 border-l border-zinc-800 pl-8 lg:pl-12">
                        <div>
                            <h4 className="text-magenta-500 font-mono text-xs uppercase tracking-widest mb-4">Email Me</h4>
                            <a href="mailto:studio@editor.com" className="text-2xl font-bold uppercase hover:text-white transition-colors block leading-none">studio@<br />editor.com</a>
                        </div>

                        <div>
                            <h4 className="text-cyan-500 font-mono text-xs uppercase tracking-widest mb-4">Socials</h4>
                            <ul className="space-y-2">
                                {['Instagram', 'Twitter / X', 'LinkedIn', 'Vimeo'].map(s => (
                                    <li key={s}><a href="#" className="text-zinc-400 hover:text-white uppercase font-bold text-sm tracking-wide">{s}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">Local Time</h4>
                            <p className="text-xl font-mono">10:42 AM <span className="text-zinc-600 text-sm">PST</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
