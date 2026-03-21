import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portfolioTemplates } from '@/lib/portfolioTemplates';
import Link from 'next/link';

export default function TemplatesPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-foreground pt-32 pb-24">
            <Navbar />
            
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full -z-10" />
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                        Premium <span className="text-gradient">Templates</span>
                    </h1>
                    <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
                        Skip the setup phase. Launch a world-class portfolio today with our production-ready Next.js templates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioTemplates.map((template) => (
                        <div 
                            key={template.id}
                            className="group flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ background: template.thumbnail }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {template.badges?.map(badge => (
                                        <span key={badge} className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold uppercase tracking-wider text-primary shadow-lg">
                                            {badge}
                                        </span>
                                    ))}
                                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white shadow-lg">
                                        {template.category}
                                    </span>
                                </div>
                            </div>

                            {/* Info Container */}
                            <div className="p-8 flex flex-col flex-1">
                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {template.name}
                                </h2>
                                <p className="text-white/60 text-sm mb-6 flex-1 leading-relaxed">
                                    {template.longDescription || template.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {template.technologies?.slice(0, 3).map((tech) => (
                                        <span key={tech} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-zinc-400 font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-4 mt-auto">
                                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mb-2">
                                        <div className="text-sm text-zinc-400 font-medium">One-time payment</div>
                                        <div className="font-bold text-2xl text-white">
                                            {template.price} <span className="text-muted-foreground text-sm font-medium line-through ml-1">₹{parseInt(template.price.replace('₹', '')) * 2}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-3">
                                        <Link 
                                            href={`/demos/${template.id}`} 
                                            className="flex items-center justify-center w-full py-3 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/10 transition-colors"
                                        >
                                            Live Demo
                                        </Link>
                                        <a 
                                            href={`https://wa.me/918770846086?text=Hey,%20I%20want%20the%20${template.name.replace(/ /g, '%20')}%20template.%20Can%20you%20share%20the%20UPI%20ID?`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center w-full py-3 rounded-full bg-primary text-black text-sm font-bold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all"
                                        >
                                            Get Template
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
