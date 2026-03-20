'use client';

import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="min-h-[70vh] flex flex-col justify-center items-center bg-zinc-950 text-white border-t border-white/10 relative overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950 pointer-events-none" />

            <div className="z-10 text-center space-y-8 px-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                    Ready to Create?
                </h2>
                <p className="text-zinc-400 max-w-lg mx-auto">
                    Currently available for freelance projects and open to new opportunities.
                    Let's build something extraordinary together.
                </p>

                <a
                    href="mailto:hello@rechrome.design"
                    className="inline-flex items-center gap-3 text-2xl md:text-4xl font-light hover:text-primary transition-colors underline decoration-1 underline-offset-8"
                >
                    <Mail className="w-6 h-6 md:w-8 md:h-8" />
                    hello@rechrome.design
                </a>

                <div className="flex gap-6 justify-center mt-12">
                    {[Github, Linkedin, Twitter].map((Icon, i) => (
                        <a key={i} href="#" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-white hover:text-black transition-all">
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>

            <footer className="absolute bottom-8 w-full text-center text-xs text-zinc-600 font-mono tracking-widest uppercase">
                © 2025 Rechrome. All Rights Reserved.
            </footer>
        </section>
    );
}
