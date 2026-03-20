'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Home, Briefcase, User, Mail, LayoutGrid, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './ui/Magnetic';
import { useCart } from '@/context/CartContext';
import { useSession } from 'next-auth/react';
import UserMenu from './UserMenu';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { toggleCart, items } = useCart();
    const { data: session } = useSession();
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Templates', href: '/templates', icon: Briefcase },
        { name: 'Services', href: '/#services', icon: User },
        { name: 'Contact', href: '/contact', icon: Mail },
    ];

    // Calculate total items
    const totalItems = items.length;

    return (
        <>
            {/* Desktop Floating Navbar */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ${isMounted && isScrolled ? 'scale-90' : 'scale-100'
                    }`}
            >
                <div className="glass-strong rounded-full px-2 py-2 flex items-center gap-2 shadow-glow-primary">
                    <Link href="/" className="px-6 py-2 font-bold text-lg tracking-wider">
                        <span className="text-gradient">RECHROME</span>
                    </Link>

                    <div className="flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Magnetic key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`block px-5 py-3 text-sm font-medium transition-colors relative group ${pathname === link.href ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                                        }`}
                                >
                                    {link.name}
                                    {pathname === link.href && (
                                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                                    )}
                                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </Magnetic>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 ml-2">
                        <Magnetic>
                            <button
                                onClick={toggleCart}
                                className="p-3 bg-primary/10 hover:bg-primary/20 text-foreground rounded-full transition-colors relative"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                {totalItems > 0 && (
                                    <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-[10px] font-bold flex items-center justify-center rounded-full text-primary-foreground border border-background">
                                        {totalItems}
                                    </span>
                                )}
                            </button>
                        </Magnetic>

                        <UserMenu />

                        {!session && (
                            <Magnetic>
                                <Link
                                    href="/login"
                                    className="px-6 py-3 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full text-sm font-semibold transition-all duration-300"
                                >
                                    Login
                                </Link>
                            </Magnetic>
                        )}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Top Bar (Logo + Cart) */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center bg-gradient-to-b from-background to-transparent">
                <Link href="/" className="font-bold text-xl">
                    <span className="text-gradient">RECHROME</span>
                </Link>
                <button
                    onClick={toggleCart}
                    className="p-2 text-foreground relative bg-background/20 backdrop-blur-md rounded-full border border-white/10"
                >
                    <ShoppingBag size={20} />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-[10px] font-bold flex items-center justify-center rounded-full text-primary-foreground">
                            {totalItems}
                        </span>
                    )}
                </button>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
                <div className="glass-strong rounded-4xl p-2 flex justify-between items-center shadow-glow-primary backdrop-blur-3xl bg-black/20">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex-1 flex flex-col items-center justify-center py-2 gap-1 transition-all duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                <div className={`p-1 rounded-xl transition-all duration-300 ${isActive ? 'bg-primary/10' : 'bg-transparent'}`}>
                                    <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                </div>
                                <span className="text-[10px] font-medium">{link.name}</span>
                            </Link>
                        );
                    })}

                    {/* User/Login Link */}
                    <Link
                        href={session ? "/dashboard" : "/login"}
                        className={`flex-1 flex flex-col items-center justify-center py-2 gap-1 transition-all duration-300 ${pathname?.startsWith(session ? '/dashboard' : '/login') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        <div className={`p-1 rounded-xl transition-all duration-300 ${pathname?.startsWith(session ? '/dashboard' : '/login') ? 'bg-primary/10' : 'bg-transparent'}`}>
                            {session ? <LayoutGrid size={20} /> : <LogIn size={20} />}
                        </div>
                        <span className="text-[10px] font-medium">{session ? "Dash" : "Login"}</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
