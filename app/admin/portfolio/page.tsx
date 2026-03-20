'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';
import { Plus, Search, Edit, Trash2, Eye, Upload } from 'lucide-react';
import { IPortfolio } from '@/models/Portfolio';

export default function PortfolioManager() {
    const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchPortfolios();
    }, []);

    const fetchPortfolios = async () => {
        try {
            const res = await fetch('/api/portfolio');
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

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this portfolio?')) return;

        try {
            const res = await fetch(`/api/portfolio/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setPortfolios(portfolios.filter((p) => p._id !== id));
            }
        } catch (error) {
            console.error('Error deleting portfolio:', error);
        }
    };

    const filteredPortfolios = portfolios.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            Portfolio <span className="text-gradient">Manager</span>
                        </h1>
                        <p className="text-foreground/70 font-inter">
                            Manage your portfolio templates and projects.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/admin/portfolio/new"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
                        >
                            <Plus className="w-5 h-5" />
                            Add New Portfolio
                        </Link>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
                    <input
                        type="text"
                        placeholder="Search portfolios..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-background/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {filteredPortfolios.map((portfolio) => (
                            <div
                                key={portfolio._id}
                                className="glass p-4 rounded-xl flex flex-col md:flex-row items-center gap-6 group hover:border-primary/30 transition-colors"
                            >
                                {/* Thumbnail */}
                                <div
                                    className="w-full md:w-32 h-20 rounded-lg overflow-hidden flex-shrink-0"
                                    style={{ background: portfolio.thumbnail }}
                                />

                                {/* Info */}
                                <div className="flex-grow text-center md:text-left">
                                    <h3 className="font-bold text-lg mb-1">{portfolio.title}</h3>
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-foreground/60">
                                        <span className="px-2 py-0.5 bg-white/5 rounded-full border border-white/5">
                                            {portfolio.category}
                                        </span>
                                        <span>•</span>
                                        <span>{portfolio.price}</span>
                                        <span>•</span>
                                        <span>{portfolio.views} views</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2">
                                    <Link
                                        href={`/demos/${portfolio._id}`}
                                        target="_blank"
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-foreground/70 hover:text-foreground"
                                        title="View Demo"
                                    >
                                        <Eye className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href={`/admin/portfolio/${portfolio._id}`}
                                        className="p-2 hover:bg-blue-500/10 rounded-lg transition-colors text-blue-500"
                                        title="Edit"
                                    >
                                        <Edit className="w-5 h-5" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(portfolio._id!)}
                                        className="p-2 hover:bg-red-500/10 rounded-lg transition-colors text-red-500"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {filteredPortfolios.length === 0 && (
                            <div className="text-center py-20 text-foreground/50">
                                No portfolios found.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </AdminLayout >
    );
}
