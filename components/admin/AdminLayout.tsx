'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    Briefcase,
    BarChart3,
    LogOut,
    Menu,
    X
} from 'lucide-react';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Portfolio', href: '/admin/portfolio', icon: Briefcase },
        { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    ];

    const handleLogout = async () => {
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
            });

            if (res.ok) {
                router.push('/login');
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className="min-h-screen bg-background flex">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
            >
                <div className="h-full flex flex-col">
                    {/* Logo */}
                    <div className="p-6 border-b border-border flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold text-gradient">
                            RECHROME
                        </Link>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="lg:hidden text-muted-foreground hover:text-foreground"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                                        ${isActive
                                            ? 'bg-primary/10 text-primary border border-primary/20'
                                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                        }
                                    `}
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    <Icon size={20} />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Profile & Logout */}
                    <div className="p-4 border-t border-border">
                        <div className="flex items-center gap-3 px-4 py-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                A
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">Admin User</p>
                                <p className="text-xs text-muted-foreground truncate">admin@rechrome.com</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors"
                        >
                            <LogOut size={20} />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Mobile Header */}
                <header className="lg:hidden h-16 border-b border-border bg-card/50 backdrop-blur-md flex items-center px-4 sticky top-0 z-30">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 -ml-2 text-muted-foreground hover:text-foreground"
                    >
                        <Menu size={24} />
                    </button>
                    <span className="ml-4 font-semibold">Admin Dashboard</span>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10">
                    <div className="max-w-7xl mx-auto animate-fade-in-up">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
