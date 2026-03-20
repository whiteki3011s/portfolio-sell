'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IPortfolio } from '@/models/Portfolio';
import { Save, X, Upload, Plus, Trash } from 'lucide-react';

interface PortfolioFormProps {
    initialData?: Partial<IPortfolio>;
    isEditing?: boolean;
}

export default function PortfolioForm({ initialData, isEditing = false }: PortfolioFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<IPortfolio>>({
        title: '',
        description: '',
        longDescription: '',
        category: 'Minimal',
        targetAudience: 'Developer',
        price: '',
        thumbnail: '',
        images: [],
        technologies: [],
        features: [],
        badges: [],
        demoUrl: '',
        featured: false,
        published: true,
        ...initialData,
    });

    const [techInput, setTechInput] = useState('');
    const [featureInput, setFeatureInput] = useState('');
    const [sourceFile, setSourceFile] = useState<File | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const [autoGenerate, setAutoGenerate] = useState(false);

    const handleArrayAdd = (field: 'technologies' | 'features', value: string, setInput: (v: string) => void) => {
        if (!value.trim()) return;
        setFormData((prev) => ({
            ...prev,
            [field]: [...(prev[field] || []), value.trim()],
        }));
        setInput('');
    };

    const handleArrayRemove = (field: 'technologies' | 'features', index: number) => {
        setFormData((prev) => ({
            ...prev,
            [field]: prev[field]?.filter((_, i) => i !== index),
        }));
    };

    // Handle Source Code Import (Analyze & Set)
    const handleSourceUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const file = files[0];
        setSourceFile(file);
        setIsAnalyzing(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('phase', 'analyze');

        try {
            const res = await fetch('/api/admin/import-source', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                const data = await res.json();
                const meta = data.metadata;

                setFormData(prev => ({
                    ...prev,
                    title: meta.title || prev.title,
                    description: meta.description || prev.description,
                    longDescription: meta.description || prev.longDescription,
                    // If verified Next.js structure, we can assume technologies
                    technologies: meta.packageJsonFound ? ['Next.js', 'React', 'Tailwind CSS'] : prev.technologies,
                }));
            }
        } catch (error) {
            console.error('Analysis failed:', error);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (sourceFile && !isEditing) {
                // Use Import API
                const importData = new FormData();
                importData.append('file', sourceFile);
                importData.append('phase', 'import');
                importData.append('title', formData.title || '');
                importData.append('description', formData.description || '');
                importData.append('price', formData.price || '$199');
                importData.append('category', formData.category || 'Minimal');

                const res = await fetch('/api/admin/import-source', {
                    method: 'POST',
                    body: importData,
                });

                if (res.ok) {
                    router.push('/admin/portfolio');
                    router.refresh();
                    return;
                } else {
                    const error = await res.json();
                    throw new Error(error.error || 'Import failed');
                }
            } else {
                // Manual Creation/Update
                const url = isEditing ? `/api/portfolio/${initialData?._id}` : '/api/portfolio';
                const method = isEditing ? 'PUT' : 'POST';

                const res = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...formData, autoGenerate }),
                });

                if (res.ok) {
                    router.push('/admin/portfolio');
                    router.refresh();
                } else {
                    const error = await res.json();
                    alert(`Error: ${error.error}`);
                }
            }
        } catch (error) {
            console.error('Error saving portfolio:', error);
            alert('Failed to save portfolio');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto pb-20">
            {/* Header Actions */}
            <div className="flex items-center justify-between sticky top-24 z-20 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <h1 className="text-2xl font-bold">
                    {isEditing ? 'Edit Portfolio' : 'New Portfolio'}
                </h1>
                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        <Save className="w-4 h-4" />
                        {loading ? 'Saving...' : 'Save Portfolio'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Info */}
                <div className="glass p-6 rounded-xl space-y-6">
                    <h3 className="text-lg font-semibold border-b border-white/10 pb-2">Basic Info</h3>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Title</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary/50 outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary/50 outline-none [&>option]:bg-black"
                            >
                                {['Minimal', '3D', 'Brutalist', 'Dark', 'Light', 'Playful', 'Editorial', 'Professional', 'Clean'].map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Target Audience</label>
                            <select
                                name="targetAudience"
                                value={formData.targetAudience}
                                onChange={handleChange}
                                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary/50 outline-none [&>option]:bg-black"
                            >
                                {['Developer', 'Designer', 'Photographer', 'Creative', 'Agency', 'Business', 'Professional'].map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Price</label>
                        <input
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            placeholder="$199"
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary/50 outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Demo URL</label>
                        <input
                            name="demoUrl"
                            value={formData.demoUrl}
                            onChange={handleChange}
                            placeholder="/demos/..."
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary/50 outline-none"
                        />
                    </div>

                    {!isEditing && (
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <input
                                type="checkbox"
                                id="autoGenerate"
                                checked={autoGenerate}
                                onChange={(e) => setAutoGenerate(e.target.checked)}
                                className="w-5 h-5 rounded border-white/20 bg-black/20 text-primary focus:ring-primary/50 cursor-pointer"
                            />
                            <label htmlFor="autoGenerate" className="text-sm font-medium cursor-pointer select-none">
                                Auto-generate boilerplate files (Component & Page)
                            </label>
                        </div>
                    )}
                </div>

                {/* Media & Details */}
                <div className="glass p-6 rounded-xl space-y-6">
                    <h3 className="text-lg font-semibold border-b border-white/10 pb-2">Media & Details</h3>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Thumbnail (CSS Gradient or URL)</label>
                        <input
                            name="thumbnail"
                            value={formData.thumbnail}
                            onChange={handleChange}
                            required
                            placeholder="linear-gradient(...) or https://..."
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary/50 outline-none"
                        />
                        <div className="h-20 w-full rounded-lg mt-2 border border-white/10" style={{ background: formData.thumbnail?.replace(/;$/, '') }} />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Source Code (Auto-Import)</label>
                        <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer relative ${isAnalyzing ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-primary/50'}`}>
                            <input
                                type="file"
                                accept=".zip"
                                onChange={handleSourceUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                id="zip-upload"
                            />
                            <div className="flex flex-col items-center gap-2 pointer-events-none">
                                {isAnalyzing ? (
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                                ) : (
                                    <Upload className="w-8 h-8 text-foreground/50" />
                                )}
                                <span className="text-sm text-foreground/70">
                                    {sourceFile ? sourceFile.name : 'Drop Source Code ZIP'}
                                </span>
                                <span className="text-xs text-foreground/40">
                                    {sourceFile ? 'Ready to import' : 'Auto-fills details & imports on save'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Descriptions */}
                <div className="glass p-6 rounded-xl space-y-6 md:col-span-2">
                    <h3 className="text-lg font-semibold border-b border-white/10 pb-2">Content</h3>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Short Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows={2}
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary/50 outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Long Description</label>
                        <textarea
                            name="longDescription"
                            value={formData.longDescription}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary/50 outline-none"
                        />
                    </div>
                </div>

                {/* Lists (Tech & Features) */}
                <div className="glass p-6 rounded-xl space-y-6 md:col-span-2">
                    <h3 className="text-lg font-semibold border-b border-white/10 pb-2">Lists</h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Technologies */}
                        <div className="space-y-4">
                            <label className="text-sm font-medium">Technologies</label>
                            <div className="flex gap-2">
                                <input
                                    value={techInput}
                                    onChange={(e) => setTechInput(e.target.value)}
                                    placeholder="Add tech (e.g. Next.js)"
                                    className="flex-grow p-2 bg-white/5 border border-white/10 rounded-lg"
                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleArrayAdd('technologies', techInput, setTechInput))}
                                />
                                <button
                                    type="button"
                                    onClick={() => handleArrayAdd('technologies', techInput, setTechInput)}
                                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.technologies?.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2">
                                        {tech}
                                        <button type="button" onClick={() => handleArrayRemove('technologies', i)}>
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <label className="text-sm font-medium">Features</label>
                            <div className="flex gap-2">
                                <input
                                    value={featureInput}
                                    onChange={(e) => setFeatureInput(e.target.value)}
                                    placeholder="Add feature"
                                    className="flex-grow p-2 bg-white/5 border border-white/10 rounded-lg"
                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleArrayAdd('features', featureInput, setFeatureInput))}
                                />
                                <button
                                    type="button"
                                    onClick={() => handleArrayAdd('features', featureInput, setFeatureInput)}
                                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.features?.map((feat, i) => (
                                    <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm flex items-center gap-2">
                                        {feat}
                                        <button type="button" onClick={() => handleArrayRemove('features', i)}>
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
