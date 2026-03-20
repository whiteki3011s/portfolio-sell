import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Portfolio from '@/models/Portfolio';

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const category = searchParams.get('category');
        const featured = searchParams.get('featured');

        const query: any = {};
        if (category) query.category = category;
        if (featured === 'true') query.featured = true;

        const portfolios = await Portfolio.find(query).sort({ createdAt: -1 });

        return NextResponse.json(portfolios);
    } catch (error) {
        console.error('Error fetching portfolios:', error);
        return NextResponse.json({ error: 'Failed to fetch portfolios' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();
        const { autoGenerate, ...portfolioData } = body;

        const portfolio = await Portfolio.create(portfolioData);

        if (autoGenerate) {
            try {
                const fs = await import('fs/promises');
                const path = await import('path');

                const templateId = portfolio._id.toString();
                const demoPath = path.join(process.cwd(), 'app', 'demos', templateId);
                const componentPath = path.join(process.cwd(), 'components', 'templates', templateId);

                // Create directories
                await fs.mkdir(demoPath, { recursive: true });
                await fs.mkdir(componentPath, { recursive: true });

                // Create page.tsx
                const pageContent = `import React from 'react';
import Hero from '@/components/templates/${templateId}/Hero';

export default function Page() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Hero />
        </main>
    );
}`;
                await fs.writeFile(path.join(demoPath, 'page.tsx'), pageContent);

                // Create Hero.tsx
                const heroContent = `'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-bold mb-4"
                >
                    ${portfolio.title}
                </motion.h1>
                <p className="text-gray-400">Generated Template</p>
            </div>
        </section>
    );
}`;
                await fs.writeFile(path.join(componentPath, 'Hero.tsx'), heroContent);

            } catch (fsError) {
                console.error('Error generating files:', fsError);
                // We don't fail the request, just log it. The portfolio entry is already created.
            }
        }

        return NextResponse.json(portfolio, { status: 201 });
    } catch (error) {
        console.error('❌ Error creating portfolio:', error);
        if (error instanceof Error) {
            console.error('Stack:', error.stack);
        }
        return NextResponse.json({ error: 'Failed to create portfolio', details: String(error) }, { status: 500 });
    }
}
