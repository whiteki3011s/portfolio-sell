'use client';

import { LucideIcon, Scissors, Zap, Music, Palette, Monitor } from 'lucide-react';

const skills = [
    { title: 'Editing', icon: Scissors, desc: 'Storytelling, Pacing, Multi-cam', tags: ['Premiere', 'Avid'] },
    { title: 'Color Grading', icon: Palette, desc: 'Correction, Looks, Matching', tags: ['Resolve', 'Baselight'] },
    { title: 'Sound Design', icon: Music, desc: 'Mixing, Foley, Soundscapes', tags: ['Audition', 'ProTools'] },
    { title: 'Motion FX', icon: Zap, desc: 'Titles, Compositing, cleanup', tags: ['After Effects', 'Nuke'] },
];

const tools = [
    { name: 'Premiere Pro', level: 'Expert', years: '8 Years' },
    { name: 'After Effects', level: 'Advanced', years: '6 Years' },
    { name: 'DaVinci Resolve', level: 'Advanced', years: '5 Years' },
    { name: 'Cinema 4D', level: 'Intermediate', years: '3 Years' },
    { name: 'Figma', level: 'Competent', years: '4 Years' },
    { name: 'Blender', level: 'Learning', years: '1 Year' },
];

const workflow = [
    { step: '01', title: 'Brief & Sync', desc: 'Understanding the vision and organizing assets.' },
    { step: '02', title: 'Assembly', desc: 'Building the narrative structure.' },
    { step: '03', title: 'Refinement', desc: 'Pacing, trimming, and flow adjustments.' },
    { step: '04', title: 'Color & Sound', desc: 'Polishing the visual and auditory experience.' },
    { step: '05', title: 'Mastering', desc: 'Final export for all deliverables.' },
];

export default function SkillsPage() {
    return (
        <main className="bg-[#050505] min-h-screen pt-32 pb-20 px-6 md:px-20 text-white">
            <div className="max-w-[1920px] mx-auto">
                <div className="mb-24 text-center">
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                        Skills &<br />Services
                    </h1>
                    <p className="text-zinc-400 font-mono text-lg uppercase tracking-widest">
                        From raw footage to final master.
                    </p>
                </div>

                {/* SKILL CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div key={skill.title} className="bg-zinc-900/20 border border-white/5 p-8 hover:bg-zinc-900/50 hover:border-cyan-500/30 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-900/50 group-hover:text-cyan-400 transition-colors">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold uppercase mb-2">{skill.title}</h3>
                                <p className="text-zinc-400 text-sm mb-6 min-h-[40px]">{skill.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {skill.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* TOOLS GRID */}
                <div className="mb-32">
                    <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 mb-12 text-center">Software Proficiency</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {tools.map((tool) => (
                            <div key={tool.name} className="text-center p-6 border border-white/5 hover:border-white/20 transition-colors">
                                <div className="font-bold text-lg mb-1">{tool.name}</div>
                                <div className="text-cyan-500 text-xs font-mono uppercase mb-2">{tool.level}</div>
                                <div className="text-zinc-600 text-[10px] uppercase tracking-widest">{tool.years}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* WORKFLOW */}
                <div className="border-t border-white/10 pt-24">
                    <h2 className="text-4xl font-black uppercase mb-16 text-center">The Workflow</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {workflow.map((flow) => (
                            <div key={flow.step} className="relative pt-8 border-t-2 border-zinc-800 hover:border-magenta-500 transition-colors duration-500 group">
                                <span className="absolute -top-3 left-0 bg-[#050505] text-zinc-600 px-2 font-mono text-xs group-hover:text-magenta-500 transition-colors">
                                    {flow.step}
                                </span>
                                <h4 className="text-xl font-bold uppercase mb-4">{flow.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">{flow.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
