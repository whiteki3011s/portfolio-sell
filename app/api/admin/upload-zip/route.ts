import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const portfolioId = formData.get('portfolioId') as string;

        if (!portfolioId) {
            return NextResponse.json({ error: 'Portfolio ID is required' }, { status: 400 });
        }

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        if (!file.name.endsWith('.zip')) {
            return NextResponse.json({ error: 'File must be a ZIP archive' }, { status: 400 });
        }

        // Convert File to Buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Define target directory: public/demos/[portfolioId]
        const publicDir = path.join(process.cwd(), 'public', 'demos');
        const targetDir = path.join(publicDir, portfolioId);

        // Ensure public/demos exists
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
        }

        // Clean target directory if it exists (overwrite)
        if (fs.existsSync(targetDir)) {
            fs.rmSync(targetDir, { recursive: true, force: true });
        }
        fs.mkdirSync(targetDir, { recursive: true });

        // Extract ZIP
        const zip = new AdmZip(buffer);
        zip.extractAllTo(targetDir, true);

        // Check for common issues (e.g., nested folder)
        // If the user zipped a folder named "out", the content might be in public/demos/[id]/out
        // We want it in public/demos/[id]
        const items = fs.readdirSync(targetDir);
        if (items.length === 1 && fs.statSync(path.join(targetDir, items[0])).isDirectory()) {
            const nestedDir = path.join(targetDir, items[0]);
            const nestedItems = fs.readdirSync(nestedDir);

            // Move everything up
            for (const item of nestedItems) {
                fs.renameSync(path.join(nestedDir, item), path.join(targetDir, item));
            }
            fs.rmdirSync(nestedDir);
        }

        return NextResponse.json({
            message: 'Portfolio deployed successfully',
            url: `/demos/${portfolioId}/index.html`
        });
    } catch (error) {
        console.error('Error uploading ZIP:', error);
        return NextResponse.json({ error: 'Failed to upload and extract ZIP' }, { status: 500 });
    }
}
