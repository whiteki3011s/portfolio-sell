'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Magnetic from './ui/Magnetic';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    const socialLinks = [
        { icon: Github, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Instagram, href: '#' },
    ];

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
                            Let's start a <br />
                            <span className="text-gradient">project together</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-light">
                            We help brands and businesses build the future.
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-12"
                    >
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="relative group">
                                <label
                                    className={`absolute left-0 transition-all duration-300 ${focusedField === 'name' || formData.name
                                            ? '-top-6 text-xs text-primary'
                                            : 'top-0 text-2xl text-muted-foreground'
                                        }`}
                                >
                                    What's your name?
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-2xl outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div className="relative group">
                                <label
                                    className={`absolute left-0 transition-all duration-300 ${focusedField === 'email' || formData.email
                                            ? '-top-6 text-xs text-primary'
                                            : 'top-0 text-2xl text-muted-foreground'
                                        }`}
                                >
                                    What's your email?
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-2xl outline-none focus:border-primary transition-colors"
                                />
                            </div>
                        </div>

                        <div className="relative group">
                            <label
                                className={`absolute left-0 transition-all duration-300 ${focusedField === 'message' || formData.message
                                        ? '-top-6 text-xs text-primary'
                                        : 'top-0 text-2xl text-muted-foreground'
                                    }`}
                            >
                                Tell us about your project
                            </label>
                            <textarea
                                required
                                rows={1}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                className="w-full bg-transparent border-b border-white/10 py-4 text-2xl outline-none focus:border-primary transition-colors resize-none min-h-[60px]"
                                style={{ height: formData.message ? 'auto' : '60px' }}
                            />
                        </div>

                        <div className="flex justify-center pt-12">
                            <Magnetic>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-48 h-48 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity animate-gradient-shift" />
                                    <span className="relative z-10 flex flex-col items-center gap-2">
                                        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send it!'}
                                        <Send className={`w-6 h-6 transition-transform ${status === 'sending' ? 'translate-x-10 -translate-y-10 opacity-0' : ''}`} />
                                    </span>
                                </button>
                            </Magnetic>
                        </div>
                    </motion.form>

                    {/* Social Links */}
                    <div className="mt-32 flex justify-center gap-8">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <Magnetic key={index}>
                                    <a
                                        href={social.href}
                                        className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                    >
                                        <Icon size={24} />
                                    </a>
                                </Magnetic>
                            );
                        })}
                    </div>

                    <div className="mt-16 flex justify-between items-end text-sm text-muted-foreground border-t border-white/10 pt-8">
                        <div>
                            <p>© 2024 RECHROME</p>
                            <p>All rights reserved.</p>
                        </div>
                        <div className="text-right">
                            <p>Designed & Built by</p>
                            <p className="text-foreground">Rechrome Team</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
