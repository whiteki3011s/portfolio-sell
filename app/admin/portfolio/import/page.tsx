'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Upload, FileCode, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ImportPortfolioPage() {
    const router = useRouter();
    const [step, setStep] = useState<'upload' | 'review' | 'importing' | 'success'>('upload');
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [metadata, setMetadata] = useState<{
        title: string;
        description: string;
        packageJsonFound: boolean;
        appDirFound: boolean;
        componentsDirFound: boolean;
    } | null>(null);
    const [price, setPrice] = useState('$199');

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setFile(e.target.files[0]);
            setError('');
            // Optional: We could pre-scan the zip client-side or just send it to verify
        }
    };

    const handleAnalyze = async () => {
        if (!file) return;
        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('phase', 'analyze');

        try {
            const res = await fetch('/api/admin/import-source', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                setMetadata(data.metadata);
                setStep('review');
            } else {
                setError(data.error || 'Failed to analyze ZIP');
            }
        } catch (err) {
            setError('Network error analyzing file');
        } finally {
            setLoading(false);
        }
    };

    const handleImport = async () => {
        if (!file) return;
        setLoading(true);
        setError('');
        setStep('importing');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('phase', 'import');
        formData.append('price', price);
        if (metadata) {
            formData.append('title', metadata.title);
            formData.append('description', metadata.description);
        }

        try {
            const res = await fetch('/api/admin/import-source', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                setStep('success');
            } else {
                setError(data.error || 'Failed to import portfolio');
                setStep('review'); // Go back
            }
        } catch (err) {
            setError('Network error importing file');
            setStep('review');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminLayout>
            <div className="max-w-2xl mx-auto py-10">
                <h1 className="text-3xl font-bold mb-2">Smart Import</h1>
                <p className="text-foreground/60 mb-8">
                    Upload a Next.js project ZIP. We'll extract metadata, move files, and wire up the portfolio.
                </p>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl mb-6 flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        {error}
                    </div>
                )}

                {step === 'upload' && (
                    <div className="glass p-8 rounded-xl text-center space-y-6">
                        <div className="border-2 border-dashed border-white/10 rounded-xl p-12 hover:border-primary/50 transition-colors relative group">
                            <input
                                type="file"
                                accept=".zip"
                                onChange={handleFileSelect}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex flex-col items-center gap-4 pointer-events-none">
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Upload className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Drop project ZIP here</h3>
                                    <p className="text-sm text-foreground/50">or click to browse</p>
                                </div>
                            </div>
                        </div>

                        {file && (
                            <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <FileCode className="w-5 h-5 text-primary" />
                                    <span className="font-medium">{file.name}</span>
                                </div>
                                <span className="text-xs text-foreground/40">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </span>
                            </div>
                        )}

                        <button
                            onClick={handleAnalyze}
                            disabled={!file || loading}
                            className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Analyze Project'}
                        </button>
                    </div>
                )}

                {step === 'review' && metadata && (
                    <div className="glass p-8 rounded-xl space-y-6">
                        <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                            <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Analysis Complete</h3>
                                <p className="text-sm text-foreground/60">We found the following details</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-lg">
                                    <label className="text-xs text-foreground/50 uppercase font-semibold">Project Title</label>
                                    <input
                                        value={metadata.title}
                                        onChange={(e) => setMetadata({ ...metadata, title: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none font-medium text-lg py-1"
                                    />
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg">
                                    <label className="text-xs text-foreground/50 uppercase font-semibold">Structure Check</label>
                                    <div className="flex flex-col gap-1 mt-1 text-sm">
                                        <div className={`flex items-center gap-2 ${metadata.packageJsonFound ? 'text-green-500' : 'text-red-500'}`}>
                                            • package.json
                                        </div>
                                        <div className={`flex items-center gap-2 ${metadata.appDirFound ? 'text-green-500' : 'text-red-500'}`}>
                                            • app/ directory
                                        </div>
                                        <div className={`flex items-center gap-2 ${metadata.componentsDirFound ? 'text-green-500' : 'text-orange-500'}`}>
                                            • components/ directory
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Description</label>
                                <textarea
                                    value={metadata.description}
                                    onChange={(e) => setMetadata({ ...metadata, description: e.target.value })}
                                    rows={3}
                                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary/50 outline-none resize-none"
                                />
                            </div>

                            <div className="space-y-2 pt-4">
                                <label className="text-sm font-medium text-primary">Set Price</label>
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full p-3 bg-white/5 border border-primary/30 rounded-lg focus:border-primary outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => setStep('upload')}
                                className="px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleImport}
                                disabled={loading}
                                className="flex-grow py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex justify-center items-center gap-2"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Confirm Import'}
                            </button>
                        </div>
                    </div>
                )}

                {step === 'importing' && (
                    <div className="glass p-12 rounded-xl text-center space-y-6">
                        <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Importing Project...</h3>
                            <p className="text-foreground/60">Processing files, rewriting imports, and updating database.</p>
                        </div>
                    </div>
                )}

                {step === 'success' && (
                    <div className="glass p-8 rounded-xl text-center space-y-6">
                        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold">Import Successful!</h3>
                        <p className="text-foreground/60">
                            Your portfolio "{metadata?.title}" is now live in the system.
                        </p>
                        <div className="flex gap-4 justify-center pt-4">
                            <button
                                onClick={() => router.push('/admin/portfolio')}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                Go to Dashboard
                            </button>
                            <button
                                onClick={() => setStep('upload')}
                                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg"
                            >
                                Import Another
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
