'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Loader, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Portfolio {
    _id: string;
    title: string;
    description: string;
    category: string;
    thumbnail: string;
    technologies: string[];
    views: number;
}

export default function PortfolioShowcase() {
    const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPortfolios();
    }, []);

    const fetchPortfolios = async () => {
        try {
            const res = await fetch('/api/portfolio?published=true');
            if (res.ok) {
                const data = await res.json();
                setPortfolios(data);
            }
        } catch (error) {
            console.error('Error fetching portfolios:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Loader className="w-8 h-8 text-primary animate-spin" />
            </div>
        );
    }

    return <PortfolioContent portfolios={portfolios} />;
}

function PortfolioContent({ portfolios }: { portfolios: Portfolio[] }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} id="portfolio" className="relative md:h-[300vh] bg-background py-20 md:py-0">
            <div className="md:sticky md:top-0 flex flex-col md:flex-row md:h-screen md:items-center md:overflow-hidden">
                <motion.div style={{ x }} className="flex flex-col md:flex-row gap-12 md:gap-16 px-4 md:px-24 w-full md:w-auto md:items-center">
                    {/* Intro Card */}
                    <div className="flex-shrink-0 w-full md:w-[400px] flex flex-col justify-center">
                        <h2 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
                            SELECTED <br />
                            <span className="text-gradient">WORKS</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                            A curated selection of our finest digital craftsmanship.
                            <span className="hidden md:inline"> Scroll to explore.</span>
                        </p>
                        <div className="mt-8 hidden md:flex items-center gap-4 text-primary">
                            <span className="text-sm font-medium uppercase tracking-widest">Scroll</span>
                            <ArrowRight className="animate-pulse" />
                        </div>
                    </div>

                    {/* Project Cards */}
                    {portfolios.map((portfolio) => (
                        <div
                            key={portfolio._id}
                            className="group relative h-[50vh] md:h-[70vh] w-full md:w-[50vw] md:min-w-[400px] md:max-w-[800px] flex-shrink-0 overflow-hidden rounded-3xl bg-card border border-white/5"
                        >
                            <div className="absolute inset-0 z-0">
                                {portfolio.thumbnail &&
                                    (portfolio.thumbnail.startsWith('http') ||
                                        portfolio.thumbnail.startsWith('/')) &&
                                    !portfolio.thumbnail.includes('gradient') ? (
                                    <Image
                                        src={portfolio.thumbnail}
                                        alt={portfolio.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            background: portfolio.thumbnail ||
                                                'linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)'
                                        }}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium backdrop-blur-sm">
                                        {portfolio.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-bold mb-2 text-white">{portfolio.title}</h3>
                                <p className="text-gray-300 line-clamp-2 mb-6 max-w-lg text-sm md:text-base">
                                    {portfolio.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {portfolio.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="text-xs text-gray-400 border border-white/10 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                                        <ExternalLink size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* End Card */}
                    <div className="flex-shrink-0 w-full md:w-[400px] flex flex-col justify-center items-center text-center">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Want to see more?</h3>
                        <a href="#contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:glow-primary transition-all">
                            Start a Project
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}