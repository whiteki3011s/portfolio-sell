'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLoginPage() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            if (res.ok) {
                router.push('/admin');
            } else {
                setError('Invalid password');
            }
        } catch (err) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full"
            >
                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="text-gradient">RECHROME</span> Admin
                    </h1>
                    <p className="text-foreground/70 font-inter">
                        Enter your password to access the admin panel
                    </p>
                </div>

                {/* Login Form */}
                <div className="glass rounded-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-foreground/80 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-12 py-3 glass rounded-lg border border-border focus:border-primary outline-none transition-colors"
                                    placeholder="Enter password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold tracking-wider transition-all hover:scale-105 hover:glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Logging in...' : 'LOGIN'}
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-border/30">
                        <p className="text-xs text-foreground/50 text-center font-inter">
                            Default password: <code className="px-2 py-1 bg-muted rounded text-primary">rechrome2025</code>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
