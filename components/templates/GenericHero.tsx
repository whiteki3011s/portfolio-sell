'use client';

import { motion } from 'framer-motion';
import { getTemplateTheme } from '@/lib/templateThemes';

interface GenericHeroProps {
    templateId: string;
    title: string;
    subtitle: string;
}

export default function GenericHero({ templateId, title, subtitle }: GenericHeroProps) {
    const theme = getTemplateTheme(templateId);

    return (
        <section
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.fonts.body
            }}
        >
            {/* Background Effects based on style */}
            {theme.style === '3d' && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            )}
            {theme.style === 'brutalist' && (
                <div className="absolute inset-0 border-8 border-black pointer-events-none z-20" />
            )}
            {theme.style === 'playful' && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20" />
            )}

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-bold mb-6"
                    style={{
                        fontFamily: theme.fonts.heading,
                        color: theme.style === 'brutalist' ? theme.colors.foreground : 'inherit',
                        textShadow: theme.id === 'cyber-glitch' ? '2px 2px 0px #0ff, -2px -2px 0px #f0f' : 'none'
                    }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-12"
                >
                    {subtitle}
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
                    style={{
                        backgroundColor: theme.colors.primary,
                        color: theme.style === 'brutalist' ? 'black' : 'white',
                        boxShadow: theme.id === 'neo-brutalism' ? '4px 4px 0px 0px black' : '0 10px 30px -10px rgba(0,0,0,0.3)'
                    }}
                >
                    View Projects
                </motion.button>
            </div>
        </section>
    );
}
