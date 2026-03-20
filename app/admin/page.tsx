'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { TrendingUp, Eye, FolderKanban, ArrowUp } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

interface Analytics {
    totalVisits: number;
    portfolioViews: number;
    contactSubmissions: number;
    totalPortfolios: number;
    visitsData: Array<{ name: string; visits: number }>;
    projectViewsData: Array<{ name: string; views: number }>;
    popularPortfolios: Array<{ portfolioId: string; title: string; views: number }>;
    lastUpdated: string;
}

export default function AdminDashboard() {
    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const res = await fetch('/api/analytics');
            if (res.ok) {
                const data = await res.json();
                setAnalytics(data);
            }
        } catch (error) {
            console.error('Error fetching analytics:', error);
        } finally {
            setLoading(false);
        }
    };

    const stats = [
        {
            title: 'Total Visits',
            value: analytics?.totalVisits || 0,
            icon: TrendingUp,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
            trend: '+12%',
        },
        {
            title: 'Portfolio Views',
            value: analytics?.portfolioViews || 0,
            icon: Eye,
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10',
            trend: '+8%',
        },
        {
            title: 'Total Portfolios',
            value: analytics?.totalPortfolios || 0,
            icon: FolderKanban,
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
            trend: '0%',
        },
    ];

    return (
        <AdminLayout>
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        Dashboard <span className="text-gradient">Overview</span>
                    </h1>
                    <p className="text-foreground/70 font-inter">
                        Welcome back! Here's your portfolio performance.
                    </p>
                </div>

                {loading && !analytics ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {stats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={stat.title}
                                        className="glass rounded-xl p-6 hover:glow-primary transition-all"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                                                <Icon className={`w-6 h-6 ${stat.color}`} />
                                            </div>
                                            <span className="text-xs font-medium text-green-500 flex items-center gap-1">
                                                <ArrowUp className="w-3 h-3" />
                                                {stat.trend}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-1">
                                            {stat.value.toLocaleString()}
                                        </h3>
                                        <p className="text-sm text-foreground/70">{stat.title}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Charts Grid */}
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Visits Chart */}
                            <div className="glass rounded-xl p-6">
                                <h3 className="text-lg font-bold mb-6">Weekly Visits</h3>
                                <ResponsiveContainer width="100%" height={200}>
                                    <AreaChart data={analytics?.visitsData || []}>
                                        <defs>
                                            <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
                                        <XAxis dataKey="name" stroke="#888" fontSize={12} />
                                        <YAxis stroke="#888" fontSize={12} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                border: '1px solid #333',
                                                borderRadius: '8px',
                                            }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="visits"
                                            stroke="#8b5cf6"
                                            fillOpacity={1}
                                            fill="url(#colorVisits)"
                                            strokeWidth={2}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Project Views Chart */}
                            <div className="glass rounded-xl p-6">
                                <h3 className="text-lg font-bold mb-6">Monthly Project Views</h3>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={analytics?.projectViewsData || []}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
                                        <XAxis dataKey="name" stroke="#888" fontSize={12} />
                                        <YAxis stroke="#888" fontSize={12} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                border: '1px solid #333',
                                                borderRadius: '8px',
                                            }}
                                        />
                                        <Bar dataKey="views" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="glass rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-6">Quick Actions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link
                                    href="/admin/portfolio"
                                    className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-all"
                                >
                                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FolderKanban className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Manage Portfolio</h4>
                                        <p className="text-xs text-foreground/70">Add, edit, or delete portfolio items</p>
                                    </div>
                                </Link>

                                <Link
                                    href="/admin/analytics"
                                    className="flex items-start gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:bg-blue-500/10 transition-all"
                                >
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">View Analytics</h4>
                                        <p className="text-xs text-foreground/70">Detailed insights and statistics</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-center">
                            <p className="text-xs text-foreground/50">
                                Last updated: {analytics?.lastUpdated ? new Date(analytics.lastUpdated).toLocaleString() : 'Never'}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
