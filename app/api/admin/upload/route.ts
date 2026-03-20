import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const files = formData.getAll('files') as File[];
        const portfolioId = formData.get('portfolioId') as string;

        if (!portfolioId) {
            return NextResponse.json({ error: 'Portfolio ID is required' }, { status: 400 });
        }

        if (!files || files.length === 0) {
            return NextResponse.json({ error: 'No files uploaded' }, { status: 400 });
        }

        // Define the target directory: app/demos/[portfolioId]
        const targetDir = path.join(process.cwd(), 'app', 'demos', portfolioId);

        // Create directory if it doesn't exist
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        // Process each file
        for (const file of files) {
            // We expect the file.name to contain the relative path if uploaded via webkitdirectory
            // But standard File object might just have the name. 
            // For this implementation, we'll assume flat structure or handle basic paths if provided.
            // In a real folder upload, we might need to handle 'webkitRelativePath' client-side and send it.

            // For safety, we only allow writing to the target dir.
            // We will use the filename provided.
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Construct file path. 
            // If the client sends 'page.tsx', it goes to app/demos/[id]/page.tsx
            const filePath = path.join(targetDir, file.name);

            // Write file
            fs.writeFileSync(filePath, buffer);
        }

        return NextResponse.json({ message: `Successfully uploaded ${files.length} files to ${targetDir}` });
    } catch (error) {
        console.error('Error uploading files:', error);
        return NextResponse.json({ error: 'Failed to upload files' }, { status: 500 });
    }
}
