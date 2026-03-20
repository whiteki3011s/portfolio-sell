'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { TrendingUp, Eye, FolderKanban } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface Analytics {
    totalVisits: number;
    portfolioViews: number;
    totalPortfolios: number;
    visitsData: Array<{ name: string; visits: number }>;
    projectViewsData: Array<{ name: string; views: number }>;
    popularPortfolios: Array<{ portfolioId: string; title: string; views: number }>;
}

export default function AnalyticsPage() {
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

    const COLORS = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

    return (
        <AdminLayout>
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        Analytics <span className="text-gradient">Dashboard</span>
                    </h1>
                    <p className="text-foreground/70 font-inter">
                        Detailed insights into your portfolio performance
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/70">Total Visits</p>
                                        <p className="text-2xl font-bold">{analytics?.totalVisits.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                                        <Eye className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/70">Portfolio Views</p>
                                        <p className="text-2xl font-bold">{analytics?.portfolioViews.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                                        <FolderKanban className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/70">Total Projects</p>
                                        <p className="text-2xl font-bold">{analytics?.totalPortfolios}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Charts */}
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="glass rounded-xl p-6">
                                <h3 className="text-lg font-bold mb-6">Weekly Visits Trend</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={analytics?.visitsData || []}>
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
                                        <Line
                                            type="monotone"
                                            dataKey="visits"
                                            stroke="#8b5cf6"
                                            strokeWidth={3}
                                            dot={{ fill: '#8b5cf6', r: 4 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="glass rounded-xl p-6">
                                <h3 className="text-lg font-bold mb-6">Monthly Project Views</h3>
                                <ResponsiveContainer width="100%" height={300}>
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

                        {/* Popular Portfolios */}
                        <div className="glass rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-6">Most Viewed Portfolios</h3>
                            <div className="space-y-4">
                                {analytics?.popularPortfolios.map((portfolio, index) => (
                                    <div
                                        key={portfolio.portfolioId}
                                        className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center font-bold text-primary">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <p className="font-semibold">{portfolio.title}</p>
                                                <p className="text-sm text-foreground/70">{portfolio.views} views</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Eye className="w-4 h-4 text-foreground/50" />
                                            <span className="font-bold">{portfolio.views}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
