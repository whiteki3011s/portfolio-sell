'use client';

import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import PortfolioForm from '@/components/admin/PortfolioForm';
import { Upload, FileCode, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NewPortfolioPage() {
    const [mode, setMode] = useState<'select' | 'manual'>('select');

    if (mode === 'manual') {
        return (
            <AdminLayout>
                <PortfolioForm />
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto py-20">
                <h1 className="text-4xl font-bold mb-4 text-center">Add New Portfolio</h1>
                <p className="text-foreground/60 text-center mb-16 max-w-lg mx-auto">
                    Choose how you want to add a new project to your library.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Manual Option */}
                    <button
                        onClick={() => setMode('manual')}
                        className="glass p-8 rounded-2xl text-left hover:border-primary/50 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

                        <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <FileCode className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Create Manually</h3>
                        <p className="text-foreground/60 mb-8">
                            Start from scratch. Fill in the details, choose a template ID, and we'll generate the boilerplate code for you to start coding.
                        </p>
                        <div className="flex items-center gap-2 text-primary font-semibold">
                            Start Creation <ArrowRight className="w-4 h-4" />
                        </div>
                    </button>

                    {/* Import Option */}
                    <Link
                        href="/admin/portfolio/import"
                        className="glass p-8 rounded-2xl text-left hover:border-blue-500/50 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors" />

                        <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Upload className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Import Source</h3>
                        <p className="text-foreground/60 mb-8">
                            Already have a Next.js project? Upload a ZIP file and we'll extract, rewrite imports, and configure it automatically.
                        </p>
                        <div className="flex items-center gap-2 text-blue-500 font-semibold">
                            Upload ZIP <ArrowRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>
            </div>
        </AdminLayout>
    );
}
