'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Package, Download, Settings, LayoutGrid, LogOut, Check, Loader2 } from 'lucide-react';
import { AVATAR_PRESETS } from '@/lib/presets';

export default function DashboardPage() {
    const { data: session, status, update } = useSession();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('overview');

    // Profile Settings State
    const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status, router]);

    const handleSaveProfile = async () => {
        if (!selectedPreset) return;

        setIsSaving(true);
        try {
            const res = await fetch('/api/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: selectedPreset }),
            });

            if (res.ok) {
                await update({ image: selectedPreset });
                router.refresh();
                setSelectedPreset(null);
            }
        } catch (error) {
            console.error('Failed to update profile', error);
        } finally {
            setIsSaving(false);
        }
    };

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!session) {
        return null;
    }

    const tabs = [
        { id: 'overview', label: 'Overview', icon: LayoutGrid },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto"
            >
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-12 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-xl">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 shadow-glow-primary shrink-0">
                        {session.user?.image ? (
                            <img
                                src={session.user.image}
                                alt={session.user.name || 'User'}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                <User className="w-10 h-10 text-primary" />
                            </div>
                        )}
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h1 className="text-3xl font-bold mb-2">
                            Welcome back, <span className="text-gradient">{session.user?.name}</span>
                        </h1>
                        <p className="text-muted-foreground">{session.user?.email}</p>
                    </div>
                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="px-4 py-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </button>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                ? 'text-white bg-white/10 shadow-lg border border-white/10'
                                : 'text-muted-foreground hover:text-white hover:bg-white/5 border border-transparent'
                                }`}
                        >
                            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-primary' : ''}`} />
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-xl border border-primary/30"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === 'overview' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* My Orders */}
                                <div className="glass-gunmetal p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-colors group">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                            <Package className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">My Orders</h3>
                                            <p className="text-sm text-muted-foreground">Purchase history</p>
                                        </div>
                                    </div>
                                    <div className="text-center py-12 border border-dashed border-white/10 rounded-2xl bg-white/5">
                                        <p className="text-sm text-muted-foreground">No orders yet.</p>
                                        <button
                                            onClick={() => router.push('/portfolio')}
                                            className="mt-4 text-primary hover:underline text-sm"
                                        >
                                            Browse Templates
                                        </button>
                                    </div>
                                </div>

                                {/* Downloads */}
                                <div className="glass-gunmetal p-8 rounded-3xl border border-white/10 hover:border-secondary/30 transition-colors group">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-4 rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                                            <Download className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Downloads</h3>
                                            <p className="text-sm text-muted-foreground">Your assets</p>
                                        </div>
                                    </div>
                                    <div className="text-center py-12 border border-dashed border-white/10 rounded-2xl bg-white/5">
                                        <p className="text-sm text-muted-foreground">No downloads available.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Profile Info */}
                                <div className="glass-gunmetal p-8 rounded-3xl border border-white/10 h-fit">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-4 rounded-2xl bg-accent/10 text-accent">
                                            <Settings className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Account</h3>
                                            <p className="text-sm text-muted-foreground">Manage preferences</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <label className="block text-sm font-medium mb-2 text-muted-foreground">Display Name</label>
                                            <div className="text-white font-medium">{session.user?.name}</div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <label className="block text-sm font-medium mb-2 text-muted-foreground">Email Address</label>
                                            <div className="text-white font-medium">{session.user?.email}</div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <label className="block text-sm font-medium mb-2 text-muted-foreground">Account Type</label>
                                            <div className="text-white font-medium capitalize">
                                                {session.user.image?.includes('googleusercontent') ? 'Google Account' : 'Standard Account'}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Avatar Selection */}
                                <div className="glass-gunmetal p-8 rounded-3xl border border-white/10 lg:col-span-2">
                                    <h3 className="text-xl font-bold mb-6">Choose Avatar</h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                        {AVATAR_PRESETS.map((preset, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedPreset(preset)}
                                                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedPreset === preset
                                                    ? 'border-primary scale-105 shadow-glow-primary'
                                                    : 'border-transparent hover:border-white/20'
                                                    }`}
                                            >
                                                <img
                                                    src={preset}
                                                    alt={`Avatar preset ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                {selectedPreset === preset && (
                                                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                                        <Check className="w-6 h-6 text-white" />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    {selectedPreset && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-8 flex justify-end"
                                        >
                                            <button
                                                onClick={handleSaveProfile}
                                                disabled={isSaving}
                                                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
                                            >
                                                {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                                                Save Changes
                                            </button>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
