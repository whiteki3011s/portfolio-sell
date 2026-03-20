import fs from 'fs';
import path from 'path';
import { portfolioTemplates } from '../lib/portfolioTemplates';

const publicDemosDir = path.join(process.cwd(), 'public', 'demos');

if (!fs.existsSync(publicDemosDir)) {
    fs.mkdirSync(publicDemosDir, { recursive: true });
}

console.log(`🚀 Populating demos in ${publicDemosDir}...`);

portfolioTemplates.forEach((template) => {
    const demoDir = path.join(publicDemosDir, template.id);
    if (!fs.existsSync(demoDir)) {
        fs.mkdirSync(demoDir, { recursive: true });
    }

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.name} - Demo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: #0a0a0a; color: white; font-family: sans-serif; }
        .glass { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
    </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
    <div class="absolute inset-0 z-0">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
    </div>
    
    <div class="glass p-12 rounded-2xl max-w-2xl w-full text-center relative z-10">
        <div class="mb-8 flex justify-center">
            <div class="w-20 h-20 rounded-xl flex items-center justify-center text-3xl font-bold" style="background: ${template.thumbnail}">
                ${template.name.charAt(0)}
            </div>
        </div>
        
        <h1 class="text-4xl font-bold mb-4">${template.name}</h1>
        <p class="text-xl text-gray-400 mb-8">${template.description}</p>
        
        <div class="grid grid-cols-2 gap-4 mb-8 text-left">
            <div class="p-4 rounded-lg bg-white/5">
                <p class="text-sm text-gray-500">Category</p>
                <p class="font-medium">${template.category}</p>
            </div>
            <div class="p-4 rounded-lg bg-white/5">
                <p class="text-sm text-gray-500">Price</p>
                <p class="font-medium">${template.price}</p>
            </div>
        </div>

        <div class="inline-block px-6 py-3 rounded-full bg-white/10 text-sm">
            This is a placeholder demo. The actual template code would be rendered here.
        </div>
        
        <div class="mt-8">
            <a href="/" class="text-blue-400 hover:text-blue-300 underline">← Back to Marketplace</a>
        </div>
    </div>
</body>
</html>
    `;

    fs.writeFileSync(path.join(demoDir, 'index.html'), htmlContent);
    console.log(`✅ Created demo for: ${template.name}`);
});

console.log('✨ All demos populated successfully!');
