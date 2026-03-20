import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // In Next.js 15, we await the promise
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white relative">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference">
                <Link href="/demos/rechrome-cinematic-video-editor/#work" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:opacity-70 transition-opacity text-white">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Work
                </Link>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-4 items-center text-sm font-mono uppercase text-zinc-500">
                        <span>{project.category}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span>{project.year}</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        {project.title}
                    </h1>
                </div>
            </header>

            {/* Project Image Placeholder */}
            <div className="w-full h-[60vh] bg-zinc-900 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                {/* Image would go here */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black text-9xl opacity-20 select-none">
                    IMG
                </div>
            </div>

            {/* Content Section */}
            <section className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">

                {/* Sidebar / Tech Stack */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-6">Technologies</h3>
                        <ul className="space-y-2">
                            {project.technologies.map((tech) => (
                                <li key={tech} className="text-lg font-medium border-l border-zinc-800 pl-4 text-zinc-300">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-6">Links</h3>
                        <div className="flex flex-col gap-4">
                            <button className="px-6 py-3 bg-white text-black font-bold rounded-full w-fit hover:bg-gray-200 transition-colors">
                                Live Preview
                            </button>
                            <button className="px-6 py-3 border border-white/20 font-bold rounded-full w-fit hover:bg-white/10 transition-colors">
                                View Code
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>
            </section>

            {/* Footer / Next Project */}
            <footer className="border-t border-zinc-900 py-20 text-center">
                <p className="text-zinc-500 mb-4">Want to see more?</p>
                <Link href="/demos/rechrome-cinematic-video-editor/#work" className="text-4xl font-bold uppercase hover:text-zinc-500 transition-colors">
                    All Projects
                </Link>
            </footer>
        </main>
    );
}
