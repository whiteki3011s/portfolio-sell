'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, ExternalLink, Eye, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Portfolio {
    _id: string;
    title: string;
    description: string;
    category: string;
    images: string[];
    thumbnail: string;
    technologies: string[];
    client?: string;
    projectUrl?: string;
    completedDate: string;
    views: number;
}

export default function PortfolioDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.id) {
            fetchPortfolio(params.id as string);
        }
    }, [params.id]);

    const fetchPortfolio = async (id: string) => {
        try {
            const res = await fetch(`/api/portfolio/${id}`);
            if (res.ok) {
                const data = await res.json();
                setPortfolio(data);
            } else {
                router.push('/');
            }
        } catch (error) {
            console.error('Error fetching portfolio:', error);
            router.push('/');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
        );
    }

    if (!portfolio) {
        return null;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    {/* Back Button */}
                    <Link
                        href="/#portfolio"
                        className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="px-4 py-1 glass rounded-full text-sm font-semibold text-primary">
                                {portfolio.category}
                            </span>
                            <div className="flex items-center gap-2 text-foreground/60 text-sm">
                                <Eye className="w-4 h-4" />
                                {portfolio.views} views
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            {portfolio.title}
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-3xl font-inter">
                            {portfolio.description}
                        </p>
                    </motion.div>

                    {/* Project Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-6 mb-12"
                    >
                        {portfolio.client && (
                            <div className="glass rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <User className="w-5 h-5 text-primary" />
                                    <h3 className="font-semibold">Client</h3>
                                </div>
                                <p className="text-foreground/70">{portfolio.client}</p>
                            </div>
                        )}

                        <div className="glass rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                <h3 className="font-semibold">Completed</h3>
                            </div>
                            <p className="text-foreground/70">
                                {new Date(portfolio.completedDate).toLocaleDateString('en-US', {
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </p>
                        </div>

                        {portfolio.projectUrl && (
                            <div className="glass rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <ExternalLink className="w-5 h-5 text-primary" />
                                    <h3 className="font-semibold">Live Project</h3>
                                </div>
                                <a
                                    href={portfolio.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    View Website
                                </a>
                            </div>
                        )}
                    </motion.div>

                    {/* Images Gallery */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                        <div className="grid gap-6">
                            {portfolio.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative h-96 rounded-xl overflow-hidden glass"
                                >
                                    {image.startsWith('http') ? (
                                        <Image
                                            src={image}
                                            alt={`${portfolio.title} - Image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full"
                                            style={{ background: image }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                        <div className="flex flex-wrap gap-3">
                            {portfolio.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 glass rounded-lg text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
