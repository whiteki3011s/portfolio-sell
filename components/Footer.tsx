'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background pt-20 pb-10 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            <span className="text-gradient">RECHROME</span>
                        </h2>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Premium portfolio designs for modern developers & designers. Built with Next.js, TypeScript, and Framer Motion.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='relative mx-20'>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="hover:text-primary transition-colors">
                                    Browse Designs
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    About Studio
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Ready-Made Templates</li>
                            <li>Template Customization</li>
                            <li>Custom Portfolios</li>
                            <li>Consultation</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative border-t border-white/10 pt-8">
                    <h1 className="text-[12vw] leading-none font-bold text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none pointer-events-none">
                        RECHROME
                    </h1>
                    <div className="absolute bottom-4 w-full flex justify-between text-xs text-muted-foreground px-4">
                        <span>© 2024 RECHROME</span>
                        <span>ALL RIGHTS RESERVED</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
