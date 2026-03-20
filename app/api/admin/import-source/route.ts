import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import connectDB from '@/lib/mongodb';
import Portfolio from '@/models/Portfolio';

// Helper to remove directory recursively
const removeDir = (dir: string) => {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
    }
};

export async function POST(req: NextRequest) {
    let tempDir = '';

    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const phase = formData.get('phase') as string; // 'analyze' | 'import'
        const price = formData.get('price') as string;

        if (!file || !file.name.endsWith('.zip')) {
            return NextResponse.json({ error: 'Valid ZIP file required' }, { status: 400 });
        }

        // Create temp dir
        const timestamp = Date.now();
        tempDir = path.join(process.cwd(), 'temp_uploads', `${timestamp}`);
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true });
        }

        // Save and extract ZIP
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const zipPath = path.join(tempDir, 'upload.zip');
        fs.writeFileSync(zipPath, buffer);

        const zip = new AdmZip(zipPath);
        zip.extractAllTo(tempDir, true);

        // Find root of the project (where package.json is)
        let rootDir = tempDir;
        const items = fs.readdirSync(tempDir).filter(i => i !== 'upload.zip');
        if (items.length === 1 && fs.statSync(path.join(tempDir, items[0])).isDirectory()) {
            rootDir = path.join(tempDir, items[0]);
        }

        // Read Metadata
        const packageJsonPath = path.join(rootDir, 'package.json');
        let metadata = {
            title: 'Untitled Portfolio',
            description: 'Imported Portfolio',
            packageJsonFound: false
        };

        if (fs.existsSync(packageJsonPath)) {
            try {
                const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                metadata.title = pkg.name || 'Untitled';
                metadata.description = pkg.description || '';
                metadata.packageJsonFound = true;
            } catch (e) {
                console.warn('Failed to parse package.json');
            }
        }

        const appDir = path.join(rootDir, 'src', 'app').replace(/\\/g, '/')
        // check src/app first, then app
        const hasSrcApp = fs.existsSync(path.join(rootDir, 'src', 'app'));
        const hasApp = fs.existsSync(path.join(rootDir, 'app'));

        const sourceAppDir = hasSrcApp ? path.join(rootDir, 'src', 'app') : (hasApp ? path.join(rootDir, 'app') : null);

        const hasSrcComponents = fs.existsSync(path.join(rootDir, 'src', 'components'));
        const hasComponents = fs.existsSync(path.join(rootDir, 'components'));
        const sourceComponentsDir = hasSrcComponents ? path.join(rootDir, 'src', 'components') : (hasComponents ? path.join(rootDir, 'components') : null);

        if (phase === 'analyze') {
            // Clean up
            removeDir(tempDir);

            return NextResponse.json({
                metadata: {
                    ...metadata,
                    appDirFound: !!sourceAppDir,
                    componentsDirFound: !!sourceComponentsDir
                }
            });
        }
        if (phase === 'import') {
            if (!sourceAppDir) {
                removeDir(tempDir);
                return NextResponse.json({ error: 'No app directory found. Is this a Next.js App Router project?' }, { status: 400 });
            }

            // Override Metadata
            const customTitle = formData.get('title') as string;
            const customDesc = formData.get('description') as string;
            if (customTitle) metadata.title = customTitle;
            if (customDesc) metadata.description = customDesc;

            // Generate Slug/ID
            const slug = metadata.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

            // Define Target Paths
            const targetDemoDir = path.join(process.cwd(), 'app', 'demos', slug);
            const targetComponentsDir = path.join(process.cwd(), 'components', 'templates', slug);

            // Move App Files
            if (fs.existsSync(targetDemoDir)) removeDir(targetDemoDir);
            fs.mkdirSync(targetDemoDir, { recursive: true });
            fs.cpSync(sourceAppDir, targetDemoDir, { recursive: true });

            // Move Components
            if (sourceComponentsDir) {
                if (fs.existsSync(targetComponentsDir)) removeDir(targetComponentsDir);
                fs.mkdirSync(targetComponentsDir, { recursive: true });
                fs.cpSync(sourceComponentsDir, targetComponentsDir, { recursive: true });
            }

            // Create DemoLayoutWrapper Component
            const demoWrapperContent = `'use client';
import Link from 'next/link';
import { LayoutGrid, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DemoLayoutWrapper({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Cleanup global styles on unmount
        return () => {
            // Clean inline styles on body
            document.body.style.removeProperty('background-color');
            document.body.style.removeProperty('color');

            // Explicitly restore Main Site Theme defaults
            const root = document.documentElement;
            root.style.setProperty('--color-background', 'oklch(0.1 0.02 260)');
            root.style.setProperty('--color-foreground', 'oklch(0.98 0.01 260)');
            root.style.setProperty('--color-primary', 'oklch(0.65 0.25 280)');
            root.style.setProperty('--color-secondary', 'oklch(0.7 0.2 220)');
        };
    }, []);

    return (
        <div className="min-h-screen relative">
            <div 
                className="fixed top-6 left-6 z-[9999]"
            >
                {/* Main Icon Trigger */}
                <div 
                    onClick={() => setIsOpen(!isOpen)}
                    className={\`
                    p-3 rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center
                    \${isOpen 
                        ? 'bg-black text-white border-white/20' 
                        : 'bg-black/50 text-white/70 border-white/10 hover:bg-black hover:text-white'
                    }
                    backdrop-blur-md shadow-lg
                \`}>
                    <LayoutGrid size={20} />
                </div>

                {/* Dropdown Menu */}
                <div className={\`
                    absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 origin-top-left
                    \${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                \`}>
                    <div className="flex flex-col py-1">
                        <Link 
                            href="/portfolio"
                            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            <ArrowLeft size={16} />
                            <span>Back to Library</span>
                        </Link>
                        
                        <div className="h-px bg-white/10 mx-2" />
                        
                        <Link 
                            href="/contact"
                            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#00E5FF] hover:bg-white/10 transition-colors"
                        >
                            <ShoppingBag size={16} />
                            <span>Buy Template</span>
                        </Link>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}`;
            if (!fs.existsSync(targetComponentsDir)) fs.mkdirSync(targetComponentsDir, { recursive: true });
            fs.writeFileSync(path.join(targetComponentsDir, 'DemoLayoutWrapper.tsx'), demoWrapperContent);

            // Rewrite Imports and Routes
            const rewriteFileContent = (dir: string) => {
                if (!fs.existsSync(dir)) return;
                const files = fs.readdirSync(dir);

                for (const file of files) {
                    const filePath = path.join(dir, file);
                    const stat = fs.statSync(filePath);

                    if (stat.isDirectory()) {
                        rewriteFileContent(filePath);
                    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                        let content = fs.readFileSync(filePath, 'utf8');
                        let originalContent = content;

                        // 1. Imports: @/components/ -> @/components/templates/slug/
                        content = content.replace(/from ['"]@\/components\//g, `from '@/components/templates/${slug}/`);

                        // 2. Route Rewriting
                        const routeRegex = /(href\s*[=:]\s*['"]|router\.push\(['"]|redirect\(['"])(?!\/demos)(?!\/admin)(?!\/portfolio)(?!http)(?!\/\/)\/([^'"]*)/g;
                        content = content.replace(routeRegex, (match, prefix, path) => {
                            const smoothPath = path === '' ? '' : `/${path}`;
                            return `${prefix}/demos/${slug}${smoothPath}`;
                        });

                        // 3. Inject Layout Wrapper & Strip Tags
                        if (file === 'layout.tsx' && filePath === path.join(targetDemoDir, 'layout.tsx')) {
                            content = content.replace(/<html[^>]*>/g, '').replace(/<\/html>/g, '');
                            content = content.replace(/<body[^>]*>/g, '').replace(/<\/body>/g, '');

                            if (!content.includes('DemoLayoutWrapper')) {
                                content = `import DemoLayoutWrapper from '@/components/templates/${slug}/DemoLayoutWrapper';\n` + content;
                                content = content.replace('{children}', '<DemoLayoutWrapper>{children}</DemoLayoutWrapper>');
                            }
                        }

                        // 4. GSAP Hydration Fix (Best Effort)
                        // Wraps useEffect block containing GSAP in gsap.context
                        if (content.includes('gsap') && content.includes('useEffect')) {
                            // Regex looks for useEffect(() => { ... }, []); where ... contains 'gsap.'
                            // Note: This is a fragile regex but covers the standard pattern used in these templates.
                            const gsapRegex = /(useEffect\(\(\) => \{)([\s\S]*?gsap\.[\s\S]*?)(\}, \[\]\);)/g;
                            content = content.replace(gsapRegex, (match, start, body, end) => {
                                if (body.includes('gsap.context')) return match; // Already fixed
                                return `${start} const ctx = gsap.context(() => { ${body} }); return () => ctx.revert(); ${end}`;
                            });
                        }

                        if (content !== originalContent) {
                            fs.writeFileSync(filePath, content);
                        }
                    }
                }
            };

            rewriteFileContent(targetDemoDir);
            if (sourceComponentsDir) {
                rewriteFileContent(targetComponentsDir);
            }

            // Database Entry
            await connectDB();
            const existing = await Portfolio.findOne({ title: metadata.title });
            if (!existing) {
                await Portfolio.create({
                    id: slug, // explicit string ID requirement
                    title: metadata.title,
                    description: metadata.description,
                    longDescription: metadata.description,
                    category: 'Imported',
                    targetAudience: 'Developer', // explicit requirement
                    price: price || '$199',
                    thumbnail: 'linear-gradient(to right, #434343, #000000)',
                    demoUrl: `/demos/${slug}`,
                    technologies: ['Next.js', 'React'],
                    features: ['Auto-Imported'],
                });
            }

            removeDir(tempDir);
            return NextResponse.json({ success: true, slug });
        }

    } catch (error) {
        console.error('Import error:', error);
        if (tempDir) removeDir(tempDir);
        return NextResponse.json({ error: `Server error during import: ${(error as Error).message}` }, { status: 500 });
    }

    return NextResponse.json({ error: 'Invalid phase' }, { status: 400 });
}
