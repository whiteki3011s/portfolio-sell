'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioTemplates } from '@/lib/portfolioTemplates';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiryType: 'Buy a template',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const inquiryTypes = [
        'Buy a template',
        'Customize an existing design',
        'Full custom portfolio',
        'Something else'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            // Construct WhatsApp message
            const phoneNumber = '918770846086'; // REPLACE WITH YOUR WHATSAPP NUMBER (International format without +)
            const text = `*New Portfolio Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Type:* ${formData.inquiryType}\n\n*Message:*\n${formData.message}`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                inquiryType: 'Buy a template',
                message: ''
            });

            // Reset success status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error: any) {
            setStatus('error');
            setErrorMessage('Failed to open WhatsApp. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 border-primary/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-medium text-foreground/80 tracking-wide uppercase">
                            Open for new projects
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                        Let's build your <span className="text-gradient animate-gradient-shift">masterpiece</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Ready to elevate your online presence? Tell us about your vision, and we'll help you turn it into a stunning reality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="glass-strong rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                            {/* Decorative gradient line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50" />

                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Name Field */}
                                    <div className="group">
                                        <label htmlFor="name" className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">
                                            Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                className={`w-full px-6 py-4 bg-black/20 border rounded-2xl text-foreground placeholder-foreground/20 transition-all duration-300 focus:outline-none focus:bg-black/40 ${focusedField === 'name'
                                                    ? 'border-primary/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]'
                                                    : 'border-white/5 hover:border-white/10'
                                                    }`}
                                                placeholder="John Doe"
                                            />
                                            <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`} />
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="group">
                                        <label htmlFor="email" className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                className={`w-full px-6 py-4 bg-black/20 border rounded-2xl text-foreground placeholder-foreground/20 transition-all duration-300 focus:outline-none focus:bg-black/40 ${focusedField === 'email'
                                                    ? 'border-primary/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]'
                                                    : 'border-white/5 hover:border-white/10'
                                                    }`}
                                                placeholder="john@example.com"
                                            />
                                            <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`} />
                                        </div>
                                    </div>
                                </div>

                                {/* Inquiry Type Dropdown */}
                                <div className="group">
                                    <label htmlFor="inquiryType" className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">
                                        Inquiry Type
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="inquiryType"
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('inquiryType')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full px-6 py-4 bg-black/20 border rounded-2xl text-foreground transition-all duration-300 focus:outline-none focus:bg-black/40 appearance-none cursor-pointer ${focusedField === 'inquiryType'
                                                ? 'border-primary/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]'
                                                : 'border-white/5 hover:border-white/10'
                                                }`}
                                        >
                                            {inquiryTypes.map((type) => (
                                                <option key={type} value={type} className="bg-zinc-900 text-foreground py-2">
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${focusedField === 'inquiryType' ? 'w-full' : 'w-0'}`} />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="group">
                                    <label htmlFor="message" className="block text-xs font-bold text-foreground/60 mb-2 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            rows={6}
                                            className={`w-full px-6 py-4 bg-black/20 border rounded-2xl text-foreground placeholder-foreground/20 transition-all duration-300 focus:outline-none focus:bg-black/40 resize-none ${focusedField === 'message'
                                                ? 'border-primary/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]'
                                                : 'border-white/5 hover:border-white/10'
                                                }`}
                                            placeholder="Tell us about your project..."
                                        />
                                        <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`} />
                                    </div>
                                </div>

                                {/* Status Messages */}
                                <AnimatePresence mode="wait">
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                                        >
                                            <AlertCircle size={20} />
                                            <p className="text-sm font-medium">{errorMessage}</p>
                                        </motion.div>
                                    )}
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-xl border border-green-400/20"
                                        >
                                            <CheckCircle size={20} />
                                            <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className={`w-full h-16 relative overflow-hidden rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 group ${status === 'success'
                                        ? 'bg-green-500 text-white cursor-default'
                                        : 'bg-foreground text-background hover:bg-white/90'
                                        }`}
                                >
                                    {status === 'loading' ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <Loader2 className="animate-spin" size={20} />
                                            <span>Sending...</span>
                                        </div>
                                    ) : status === 'success' ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <CheckCircle size={20} />
                                            <span>Sent!</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center gap-2">
                                            <span>Send Message</span>
                                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </div>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Side Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* What to Expect */}
                        <div className="glass-strong rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-colors duration-500 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <MessageSquare size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">What to expect</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                    <span>Reply within 24 hours</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                    <span>Free consultation call</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                    <span>Template recommendations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                    <span>Clear pricing & timeline</span>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="glass-strong rounded-3xl p-8 border border-white/10 hover:border-secondary/30 transition-colors duration-500 group">
                            <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Mail size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Direct contact</h3>
                            <p className="text-muted-foreground mb-6">
                                Prefer email? Reach out directly:
                            </p>
                            <a
                                href="mailto:sharmabhay2006@gmail.com"
                                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-bold text-lg group/link"
                            >
                                sharmabhay2006@gmail.com
                                <Send size={16} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
