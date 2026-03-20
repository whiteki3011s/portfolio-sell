'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Eye } from 'lucide-react';

interface PortfolioCardProps {
    portfolio: {
        _id: string;
        title: string;
        description: string;
        category: string;
        thumbnail: string;
        technologies: string[];
        views: number;
    };
    index: number;
}

export default function PortfolioCard({ portfolio, index }: PortfolioCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass rounded-xl overflow-hidden hover:glow-primary transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                {portfolio.thumbnail &&
                    (portfolio.thumbnail.startsWith('http') ||
                        portfolio.thumbnail.startsWith('/')) &&
                    !portfolio.thumbnail.includes('gradient') ? (
                    <Image
                        src={portfolio.thumbnail}
                        alt={portfolio.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div
                        className="w-full h-full"
                        style={{
                            background: portfolio.thumbnail ||
                                'linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)'
                        }}
                    />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                        href={`/portfolio/${portfolio._id}`}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                        View Details
                        <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-semibold text-primary">
                    {portfolio.category}
                </div>

                {/* Views */}
                <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-xs font-medium text-foreground/80 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {portfolio.views}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {portfolio.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-4 line-clamp-2 font-inter">
                    {portfolio.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {portfolio.technologies.slice(0, 3).map((tech, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                    {portfolio.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded font-medium">
                            +{portfolio.technologies.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
