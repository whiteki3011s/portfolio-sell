'use client';

import { motion } from 'framer-motion';
import { type PortfolioTemplate } from '@/lib/portfolioTemplates';
import { ExternalLink, Sparkles, ShoppingBag, Check, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Loader from '@/components/Loader';

import { IPortfolio as ModelPortfolio } from '@/models/Portfolio';

// Define IPortfolio type that satisfies both the local needs and the CartContext
interface IPortfolio extends ModelPortfolio {
    id: string; // Ensure id is present for compatibility
    name: string; // Ensure name is present for compatibility
    // _id and title are already in ModelPortfolio
}

interface PortfolioGalleryProps {
    showHero?: boolean;
    initialPortfolios?: IPortfolio[];
}

export default function PortfolioGallery({ showHero = true, initialPortfolios = [] }: PortfolioGalleryProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedAudience, setSelectedAudience] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [portfolios, setPortfolios] = useState<IPortfolio[]>(initialPortfolios);
    const [loading, setLoading] = useState(initialPortfolios.length === 0);

    const categories = ['All', 'Minimal', '3D', 'Brutalist', 'Dark', 'Light', 'Playful', 'Editorial'];
    const audiences = ['All', 'Developer', 'Designer', 'Photographer', 'Creative', 'Agency'];

    useEffect(() => {
        if (initialPortfolios.length > 0) {
            setLoading(false);
            return;
        }

        const fetchPortfolios = async () => {
            try {
                const res = await fetch('/api/portfolio?published=true');
                if (res.ok) {
                    const data = await res.json();
                    // Map _id to id for compatibility, and ensure _id and title are present
                    const mappedData = data.map((item: any) => ({
                        ...item,
                        id: item.id || item._id, // Prioritize 'id' (slug) over '_id'
                        _id: item._id || item.id, // Ensure '_id' is present for cart operations
                        name: item.name || item.title, // Map title to name for compatibility
                        title: item.title || item.name // Ensure 'title' is present for display
                    }));
                    setPortfolios(mappedData);
                }
            } catch (error) {
                // Silently fail or handle error gracefully
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolios();
    }, [initialPortfolios]);

    const filteredTemplates = portfolios.filter(template => {
        const categoryMatch = selectedCategory === 'All' || template.category === selectedCategory;
        const audienceMatch = selectedAudience === 'All' || template.targetAudience === selectedAudience;

        const searchLower = searchQuery.toLowerCase();
        const searchMatch = searchQuery === '' ||
            template.title.toLowerCase().includes(searchLower) ||
            template.description.toLowerCase().includes(searchLower) ||
            template.technologies?.some(tech => tech.toLowerCase().includes(searchLower)) ||
            template.category.toLowerCase().includes(searchLower);

        return categoryMatch && audienceMatch && searchMatch;
    });

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            {showHero && (
                <div className="container mx-auto px-4 pt-24 pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-4 border-primary/20">
                            <Sparkles className="w-3 h-3 text-primary" />
                            <span className="text-xs font-medium text-foreground/80 uppercase tracking-wider">Premium Templates</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
                            Curated <span className="text-gradient animate-gradient-shift">Masterpieces</span>
                        </h1>

                        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
                            Select a design that speaks to your vision.
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Advanced Glassmorphic Filter Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${showHero ? 'mt-16' : 'mt-0'} mb-12 max-w-5xl mx-auto`}
            >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-1 shadow-glass">
                    {/* Background Noise/Vignette */}
                    <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                    <div className="relative flex flex-col md:flex-row items-center gap-6 p-6">
                        {/* Left Side: Label & Search */}
                        <div className="flex flex-col gap-4 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                            <div>
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-1 flex items-center gap-2">
                                    <Sparkles className="w-3 h-3 text-primary" />
                                    Filter Templates
                                </h3>
                                <p className="text-xs text-muted-foreground">Find your perfect portfolio style.</p>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <Search className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search tags..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Right Side: Filters */}
                        <div className="flex flex-col gap-6 w-full md:w-2/3">
                            {/* Row 1: Categories (Pills) */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${selectedCategory === category
                                            ? 'text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                            : 'text-muted-foreground hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {selectedCategory === category && (
                                            <motion.div
                                                layoutId="activeCategory"
                                                className="absolute inset-0 bg-primary rounded-full"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{category}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Row 2: Audience/Tags (Chips) */}
                            <div className="flex flex-wrap gap-2">
                                {audiences.map((audience) => (
                                    <button
                                        key={audience}
                                        onClick={() => setSelectedAudience(audience)}
                                        className={`relative px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 border ${selectedAudience === audience
                                            ? 'border-secondary text-secondary shadow-[0_0_15px_var(--color-secondary)] bg-secondary/10'
                                            : 'border-white/5 text-muted-foreground hover:border-white/20 hover:text-white bg-white/5'
                                            }`}
                                    >
                                        {audience}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Template Grid */}
            <div className="container mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template, index) => (
                        <DesignCard key={template.id} template={template} index={index} />
                    ))}
                </div>

                {filteredTemplates.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">No templates match your filters. Try a different combination.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function DesignCard({ template, index }: { template: IPortfolio; index: number }) {
    const { addToCart, items } = useCart();
    const isInCart = items.some(item => item._id === template._id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors flex flex-col h-full"
        >
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                {template.thumbnail.startsWith('http') || template.thumbnail.startsWith('/') ? (
                    <img
                        src={template.thumbnail}
                        alt={template.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                        style={{ background: template.thumbnail }}
                    />
                )}

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Link
                        href={template.demoUrl || `/demos/${template.id}`}
                        className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform"
                    >
                        View Demo
                    </Link>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {template.featured && (
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                            FEATURED
                        </span>
                    )}
                    {template.badges?.map(badge => (
                        <span key={badge} className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10">
                            {badge}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{template.title}</h3>
                        <p className="text-sm text-muted-foreground">{template.category} • {template.targetAudience}</p>
                    </div>
                    <span className="text-lg font-bold text-primary">{template.price}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-2 flex-grow">
                    {template.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {template.technologies?.slice(0, 3).map(tech => (
                        <span key={tech} className="px-2 py-1 bg-white/5 rounded text-xs text-muted-foreground border border-white/5">
                            {tech}
                        </span>
                    ))}
                    {(template.technologies?.length || 0) > 3 && (
                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-muted-foreground border border-white/5">
                            +{(template.technologies?.length || 0) - 3}
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Link
                        href={`/portfolio/${template._id}`}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium text-center transition-colors border border-white/5"
                    >
                        Details
                    </Link>
                    <button
                        onClick={() => !isInCart && addToCart(template)}
                        disabled={isInCart}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${isInCart
                            ? 'bg-green-500/20 text-green-500 cursor-default'
                            : 'bg-primary text-primary-foreground hover:opacity-90'
                            }`}
                    >
                        {isInCart ? (
                            <>
                                <Check className="w-4 h-4" /> In Cart
                            </>
                        ) : (
                            <>
                                <ShoppingBag className="w-4 h-4" /> Add to Cart
                            </>
                        )}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
