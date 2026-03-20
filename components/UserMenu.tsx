'use client';

import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, Settings, LayoutDashboard } from 'lucide-react';

export default function UserMenu() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    if (!session?.user) return null;

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
                {session.user.image ? (
                    <img
                        src={session.user.image}
                        alt={session.user.name || 'User'}
                        className="w-6 h-6 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="w-3 h-3 text-primary" />
                    </div>
                )}
                <span className="text-sm font-medium hidden md:block">{session.user.name?.split(' ')[0]}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-48 py-2 rounded-xl glass-gunmetal border border-white/10 shadow-xl z-50"
                    >
                        <div className="px-4 py-2 border-b border-white/10 mb-2">
                            <p className="text-sm font-medium text-white">{session.user.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{session.user.email}</p>
                        </div>

                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <LayoutDashboard className="w-4 h-4" />
                            Dashboard
                        </Link>

                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <Settings className="w-4 h-4" />
                            Settings
                        </Link>

                        <div className="border-t border-white/10 my-2" />

                        <button
                            onClick={() => signOut()}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
