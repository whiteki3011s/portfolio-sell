'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError('All fields are necessary.');
            return;
        }

        try {
            const resUserExists = await fetch('api/userExists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError('User already exists.');
                return;
            }

            const res = await fetch('api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                const form = e.target as HTMLFormElement;
                form.reset();
                router.push('/login');
            } else {
                console.log('User registration failed.');
            }
        } catch (error) {
            console.log('Error during registration: ', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="orb-glow w-96 h-96 bg-accent/20 top-0 right-0" />
            <div className="orb-glow w-96 h-96 bg-primary/20 bottom-0 left-0" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-gunmetal p-8 rounded-2xl w-full max-w-md relative z-10"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                        <UserPlus className="w-6 h-6 text-accent" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Create Account</h1>
                    <p className="text-muted-foreground">Join Rechrome to manage your portfolio</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center bg-red-500/10 py-2 rounded-lg">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors shadow-glow-secondary"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link href="/login" className="text-accent hover:underline">
                        Sign in
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
