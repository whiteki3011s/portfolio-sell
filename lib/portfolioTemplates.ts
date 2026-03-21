export type TemplateCategory = 'Minimal' | '3D' | 'Brutalist' | 'Dark' | 'Light' | 'Playful' | 'Editorial' | 'Professional' | 'Clean';
export type TargetAudience = 'Developer' | 'Designer' | 'Photographer' | 'Creative' | 'Agency' | 'Business' | 'Lawyer' | 'Doctor' | 'Architect' | 'Consultant' | 'Professional';

export interface PortfolioTemplate {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    category: TemplateCategory;
    targetAudience: TargetAudience;
    thumbnail: string;
    technologies: string[];
    features: string[];
    badges?: ('New' | 'Best Seller' | 'Popular')[];
    demoUrl?: string;
    price: string;
}

export const portfolioTemplates: PortfolioTemplate[] = [
    {
        id: 'rechrome-3d',
        name: 'Rechrome 3D',
        description: 'A futuristic portfolio experience built for developers who want motion, presence, and impact.',
        longDescription: 'A bold, futuristic portfolio experience that feels like a digital exhibition space. Rechrome 3D combines dark editorial layouts with subtle depth, glass effects, and interactive 3D elements. Every scroll feels cinematic — ideal for developers who want to stand out with motion and presence.',
        category: '3D',
        targetAudience: 'Developer',
        thumbnail: 'linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(88, 28, 135) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Three.js', 'GSAP', 'Tailwind CSS'],
        features: ['Hero-based 3D visuals', 'Scroll-triggered animations', 'High-contrast typography', 'Cinematic transitions', 'Modern tech aesthetic', 'Glassmorphic UI elements'],
        badges: ['Best Seller', 'New'],
        price: '₹1499'
    },
    {
        id: 'minimal-noir',
        name: 'Minimal Noir',
        description: 'A refined, typography-first portfolio for designers who value simplicity and clarity.',
        longDescription: 'A refined, typography-first portfolio template built on clean grids and subtle interactions. Minimal Noir focuses on clarity, hierarchy, and breathing space, allowing work to speak without distraction. Inspired by modern design studios and fashion editorials.',
        category: 'Minimal',
        targetAudience: 'Designer',
        thumbnail: 'linear-gradient(135deg, rgb(17, 17, 17) 0%, rgb(45, 45, 45) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        features: ['Clean monochrome palette', 'Strong typographic hierarchy', 'Grid-based layout', 'Soft micro-interactions', 'Ultra-responsive design', 'Focus on white space'],
        badges: ['Popular'],
        price: '₹1499'
    },
    {
        id: 'studio-grid',
        name: 'Studio Grid',
        description: 'Professional case-study layout for freelancers who want a confident, client-ready presence.',
        longDescription: 'A modular, professional layout for portfolios that need to balance personality with credibility. Studio Grid presents work in a systematic, project-focused structure, ideal for showcasing case studies and service-based offerings.',
        category: 'Editorial',
        targetAudience: 'Agency',
        thumbnail: 'linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(59, 130, 246) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        features: ['Case-study oriented layout', 'Service sections & testimonials', 'Project timeline components', 'Clear navigation system', 'Business-friendly design tone', 'Client showcase areas'],
        badges: ['New'],
        price: '₹1499'
    },
    {
        id: 'motion-lab',
        name: 'Motion Lab',
        description: 'An experimental portfolio that highlights animation and interaction as core identity.',
        longDescription: 'Designed to showcase interaction and animation experiments, Motion Lab feels alive. Hover distortions, kinetic typography, and scroll-based transformations create a portfolio that constantly reacts to the user.',
        category: 'Playful',
        targetAudience: 'Creative',
        thumbnail: 'linear-gradient(135deg, rgb(236, 72, 153) 0%, rgb(168, 85, 247) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'GSAP', 'Framer Motion', 'Lenis'],
        features: ['GSAP / Framer Motion animations', 'Scroll storytelling sequences', 'Dynamic hover effects', 'Interactive project previews', 'Playful yet controlled chaos', 'Kinetic typography'],
        badges: ['New'],
        price: '₹1499'
    },
    {
        id: 'lightfolio',
        name: 'LightFolio',
        description: 'A friendly, approachable portfolio perfect for students and first-time builders.',
        longDescription: 'A friendly, approachable portfolio template that feels modern without being intimidating. LightFolio is focused on clarity, accessibility, and ease-of-use, making it perfect for newcomers who want a professional presence fast.',
        category: 'Light',
        targetAudience: 'Developer',
        thumbnail: 'linear-gradient(135deg, rgb(254, 249, 195) 0%, rgb(253, 224, 71) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        features: ['Light theme with soft tones', 'Simple navigation', 'Guided section layout', 'Fast loading and responsive', 'Easy customization structure', 'Accessibility focused'],
        price: '₹1499'
    },
    {
        id: 'brutal-edge',
        name: 'Brutal Edge',
        description: 'An unapologetically bold portfolio for creatives who want to feel fearless.',
        longDescription: 'An unapologetically bold template inspired by brutalist web design and raw digital aesthetics. Distorted typography, rigid layouts, and unconventional spacing create a memorable, rebellious feel.',
        category: 'Brutalist',
        targetAudience: 'Designer',
        thumbnail: 'linear-gradient(135deg, rgb(220, 38, 38) 0%, rgb(251, 146, 60) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'CSS Grid', 'Tailwind CSS'],
        features: ['Asymmetrical grids', 'Distorted typography', 'Raw digital textures', 'High-impact transitions', 'Statement visuals', 'Unconventional spacing'],
        badges: ['Popular'],
        price: '₹1499'
    },
    {
        id: 'dark-code',
        name: 'Dark Code',
        description: 'Terminal-inspired design for engineers who want to showcase technical depth.',
        longDescription: 'Developer-focused portfolio with terminal-inspired UI, syntax highlighting, and tech stack showcases. Perfect for engineers who want their portfolio to reflect their coding environment.',
        category: 'Dark',
        targetAudience: 'Developer',
        thumbnail: 'linear-gradient(135deg, rgb(6, 78, 59) 0%, rgb(5, 150, 105) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prism.js'],
        features: ['Terminal-inspired UI', 'Syntax-highlighted code blocks', 'Tech stack visualization', 'GitHub integration ready', 'Command-line interactions', 'Monospace typography system'],
        badges: ['Popular'],
        price: '₹1499'
    },
    {
        id: 'photo-gallery',
        name: 'Photo Gallery',
        description: 'Image-first portfolio for photographers who want their work to shine.',
        longDescription: 'A photography-focused template with full-screen galleries, smooth image transitions, and minimal UI that stays out of the way. Let your images tell the story.',
        category: 'Light',
        targetAudience: 'Photographer',
        thumbnail: 'linear-gradient(135deg, rgb(219, 234, 254) 0%, rgb(147, 197, 253) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        features: ['Full-screen image galleries', 'Lazy loading optimization', 'Lightbox with keyboard nav', 'Smooth image transitions', 'Minimal UI overlay', 'Mobile-optimized viewing'],
        price: '₹1499'
    },
    {
        id: 'cyber-glitch',
        name: 'Cyber Glitch',
        description: 'A high-energy cyberpunk portfolio with glitch effects and neon aesthetics.',
        longDescription: 'Enter the matrix with Cyber Glitch. This template features aggressive glitch animations, neon color palettes, and a futuristic HUD interface. Perfect for developers who want to show off their edge.',
        category: 'Dark',
        targetAudience: 'Developer',
        thumbnail: 'linear-gradient(135deg, rgb(0, 255, 255) 0%, rgb(255, 0, 255) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'CSS Glitch', 'Tailwind CSS'],
        features: ['Glitch text effects', 'Neon borders', 'HUD interface', 'Cyberpunk styling', 'Terminal commands', 'High contrast'],
        price: '₹1499'
    },
    {
        id: 'neo-brutalism',
        name: 'Neo Brutalism',
        description: 'Bold, high-contrast design with thick borders and vibrant colors.',
        longDescription: 'Neo Brutalism takes the raw energy of brutalism and adds a pop of color. Thick borders, hard shadows, and unaligned elements create a playful yet commanding presence.',
        category: 'Brutalist',
        targetAudience: 'Designer',
        thumbnail: 'linear-gradient(135deg, rgb(163, 230, 53) 0%, rgb(250, 204, 21) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS'],
        features: ['Hard shadows', 'Thick borders', 'Vibrant colors', 'Playful layout', 'Bold typography', 'Retro vibes'],
        price: '₹1499'
    },
    {
        id: 'glass-morphism',
        name: 'Glass Morphism',
        description: 'Elegant frosted glass effects with deep, immersive backgrounds.',
        longDescription: 'A modern classic. Glass Morphism uses backdrop filters, gradients, and transparency to create a sense of depth and hierarchy. It feels premium, clean, and sophisticated.',
        category: '3D',
        targetAudience: 'Designer',
        thumbnail: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgb(56, 189, 248) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Backdrop Filter'],
        features: ['Frosted glass cards', 'Mesh gradients', 'Depth effects', 'Clean typography', 'Floating elements', 'Premium feel'],
        price: '₹1499'
    },
    {
        id: 'vapor-wave',
        name: 'Vapor Wave',
        description: 'Retro 80s aesthetic with synthwave colors and nostalgic vibes.',
        longDescription: 'Ride the synthwave. Vapor Wave brings back the 80s with pinks, purples, and grid lines. It\'s nostalgic, dreamy, and perfect for creatives who love retro aesthetics.',
        category: 'Playful',
        targetAudience: 'Creative',
        thumbnail: 'linear-gradient(135deg, rgb(244, 114, 182) 0%, rgb(29, 26, 57) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'CSS Grid'],
        features: ['Synthwave palette', 'Grid backgrounds', 'Retro typography', 'VHS effects', 'Neon glows', 'Nostalgic feel'],
        price: '₹1499'
    },
    {
        id: 'retro-8bit',
        name: 'Retro 8Bit',
        description: 'Pixel art style portfolio for game devs and retro enthusiasts.',
        longDescription: 'Level up your portfolio with Retro 8Bit. Featuring pixelated fonts, blocky UI elements, and game-inspired interactions. It\'s a love letter to the golden age of gaming.',
        category: 'Playful',
        targetAudience: 'Developer',
        thumbnail: 'linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(30, 41, 59) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Pixel Art'],
        features: ['Pixel fonts', 'Blocky UI', 'Game interactions', 'Retro colors', 'Sprite animations', 'Fun layout'],
        price: '₹1499'
    },
    {
        id: 'dark-saas',
        name: 'Dark SaaS',
        description: 'Clean, modern dark mode design for software products and services.',
        longDescription: 'The standard for modern software. Dark SaaS features deep blues, crisp borders, and subtle gradients. It\'s professional, trustworthy, and easy on the eyes.',
        category: 'Dark',
        targetAudience: 'Agency',
        thumbnail: 'linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(99, 102, 241) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS'],
        features: ['Dark mode optimization', 'Clean gradients', 'Feature grids', 'Trust signals', 'Modern typography', 'Professional tone'],
        price: '₹1499'
    },
    {
        id: 'swiss-style',
        name: 'Swiss Style',
        description: 'Timeless design based on the International Typographic Style.',
        longDescription: 'Order, clarity, and readability. Swiss Style uses strong grid systems, sans-serif typography, and asymmetrical layouts to create a portfolio that feels like a museum exhibition.',
        category: 'Minimal',
        targetAudience: 'Designer',
        thumbnail: 'linear-gradient(135deg, rgb(220, 38, 38) 0%, rgb(245, 245, 245) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'CSS Grid', 'Tailwind CSS'],
        features: ['Grid systems', 'Helvetica vibes', 'Asymmetry', 'Bold colors', 'Clean layout', 'Typographic focus'],
        price: '₹1499'
    },
    {
        id: 'editorial-fashion',
        name: 'Editorial Fashion',
        description: 'High-end magazine aesthetic with elegant serif typography.',
        longDescription: 'Turn your portfolio into a Vogue spread. Editorial Fashion combines large serif fonts, generous whitespace, and overlapping elements to create a luxurious reading experience.',
        category: 'Editorial',
        targetAudience: 'Photographer',
        thumbnail: 'linear-gradient(135deg, rgb(255, 250, 240) 0%, rgb(180, 83, 9) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS'],
        features: ['Serif typography', 'Magazine layout', 'Image focus', 'Elegant spacing', 'Soft colors', 'Luxury feel'],
        price: '₹1499'
    },
    {
        id: 'abstract-shapes',
        name: 'Abstract Shapes',
        description: 'Playful and organic with fluid shapes and motion.',
        longDescription: 'Break the grid with Abstract Shapes. Featuring floating blobs, organic curves, and fluid animations that make your portfolio feel alive and approachable.',
        category: 'Playful',
        targetAudience: 'Creative',
        thumbnail: 'linear-gradient(135deg, rgb(244, 63, 94) 0%, rgb(251, 191, 36) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Framer Motion', 'SVG'],
        features: ['Organic shapes', 'Fluid animation', 'Bright colors', 'Friendly vibe', 'Custom SVGs', 'Interactive background'],
        price: '₹1499'
    },
    {
        id: 'paper-texture',
        name: 'Paper Texture',
        description: 'Tactile, collage-style design with realistic paper effects.',
        longDescription: 'Bring the physical world to digital. Paper Texture uses grain, shadows, and torn edges to create a handmade, collage-like aesthetic. Perfect for artists and illustrators.',
        category: 'Minimal',
        targetAudience: 'Creative',
        thumbnail: 'linear-gradient(135deg, rgb(245, 245, 240) 0%, rgb(168, 162, 158) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'CSS Filters'],
        features: ['Paper grain', 'Torn edges', 'Collage layout', 'Tactile feel', 'Warm tones', 'Artistic vibe'],
        price: '₹1499'
    },
    {
        id: 'monochrome-pro',
        name: 'Monochrome Pro',
        description: 'Strictly black and white for maximum contrast and impact.',
        longDescription: 'Color is a distraction. Monochrome Pro strips everything back to black and white, using contrast and scale to create drama. A serious portfolio for serious work.',
        category: 'Dark',
        targetAudience: 'Designer',
        thumbnail: 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS'],
        features: ['High contrast', 'Black & White', 'Bold type', 'Minimalist', 'Focus on content', 'Timeless'],
        price: '₹1499'
    },
    {
        id: 'gradient-flow',
        name: 'Gradient Flow',
        description: 'Dreamy, colorful mesh gradients that shift and flow.',
        longDescription: 'Immerse your visitors in color. Gradient Flow features moving mesh gradients, glass cards, and a soft, dreamy atmosphere. Ideal for showing off vibrant digital work.',
        category: 'Light',
        targetAudience: 'Creative',
        thumbnail: 'linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(34, 211, 238) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'WebGL', 'Tailwind CSS'],
        features: ['Mesh gradients', 'Color shifting', 'Soft UI', 'Dreamy vibe', 'Glass effects', 'Modern aesthetic'],
        price: '₹1499'
    },
    {
        id: 'film-grain',
        name: 'Film Grain',
        description: 'Cinematic, moody aesthetic with vintage film effects.',
        longDescription: 'Capture the essence of cinema. Film Grain uses analog textures, grainy overlays, and a monochromatic palette to create a timeless, moody atmosphere perfect for filmmakers and video editors.',
        category: 'Minimal',
        targetAudience: 'Creative',
        thumbnail: 'linear-gradient(135deg, rgb(20, 20, 20) 0%, rgb(220, 38, 38) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS'],
        features: ['Film grain texture', 'Monochrome palette', 'Cinematic layout', 'Video player', 'Analog aesthetics', 'Moody vibe'],
        badges: ['New'],
        price: '₹1499'
    },
    {
        id: 'bauhaus-art',
        name: 'Bauhaus Art',
        description: 'Bold geometric design inspired by the Bauhaus movement.',
        longDescription: 'Form follows function. Bauhaus Art combines primary colors, geometric shapes, and grid-based layouts to create a portfolio that celebrates the legendary design movement.',
        category: 'Brutalist',
        targetAudience: 'Designer',
        thumbnail: 'linear-gradient(135deg, rgb(220, 38, 38) 0%, rgb(234, 179, 8) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'CSS Grid'],
        features: ['Geometric shapes', 'Primary colors', 'Grid system', 'Bold typography', 'Minimalist icons', 'Art movement tribute'],
        badges: ['New'],
        price: '₹1499'
    },
    {
        id: 'y2k-aesthetic',
        name: 'Y2K Aesthetic',
        description: 'Nostalgic early-2000s design with cyber elements and retro tech vibes.',
        longDescription: 'It\'s the year 2000. Y2K Aesthetic brings back the wild web design of the millennium with chrome effects, cyber text, marquee scrolls, and guest books. Pure digital nostalgia.',
        category: 'Playful',
        targetAudience: 'Creative',
        thumbnail: 'linear-gradient(135deg, rgb(0, 0, 51) 0%, rgb(204, 255, 0) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'CSS Animations'],
        features: ['Chrome effects', 'Cyber text', 'Retro elements', 'Guestbook section', 'Nostalgic vibe', 'Late 90s aesthetic'],
        badges: ['New'],
        price: '₹1499'
    },
    {
        id: 'nature-calm',
        name: 'Nature Calm',
        description: 'Serene, organic design with earthy tones and natural imagery.',
        longDescription: 'Find your zen. Nature Calm uses soft earth tones, organic shapes, and nature photography to create a peaceful, calming portfolio experience. Perfect for wellness, yoga, or eco-friendly brands.',
        category: 'Clean',
        targetAudience: 'Creative',
        thumbnail: 'linear-gradient(135deg, rgb(243, 244, 241) 0%, rgb(95, 113, 97) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        features: ['Earth tones', 'Nature photography', 'Organic shapes', 'Serene atmosphere', 'Gentle animations', 'Eco-friendly vibe'],
        badges: ['New'],
        price: '₹1499'
    },
    {
        id: 'neon-nights',
        name: 'Neon Nights',
        description: 'Cyberpunk-inspired portfolio with glowing neon elements and dark backgrounds.',
        longDescription: 'Enter the neon city. Neon Nights features glowing accents, dark backgrounds, and futuristic UI elements that create a cyberpunk atmosphere. Stand out in the digital darkness.',
        category: 'Dark',
        targetAudience: 'Developer',
        thumbnail: 'linear-gradient(135deg, rgb(5, 5, 5) 0%, rgb(0, 255, 255) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'CSS Glow'],
        features: ['Neon glow effects', 'Dark theme', 'Cyberpunk style', 'Glowing borders', 'Futuristic UI', 'High contrast'],
        badges: ['New'],
        price: '₹1499'
    },
    {
        id: 'tech-minimal',
        name: 'Tech Minimal',
        description: 'Clean, terminal-inspired design for developers who value simplicity.',
        longDescription: 'Less is more. Tech Minimal strips everything back to basics with a monospace font, black and white palette, and terminal-style interface. Perfect for developers who let their code do the talking.',
        category: 'Minimal',
        targetAudience: 'Developer',
        thumbnail: 'linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%)',
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS'],
        features: ['Terminal aesthetic', 'Mono typography', 'Clean interface', 'Code-focused', 'Minimal design', 'Developer-friendly'],
        badges: ['New'],
        price: '₹1499'
    }
];

// Helper functions
export const getTemplateById = (id: string): PortfolioTemplate | undefined => {
    return portfolioTemplates.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: PortfolioTemplate['category']): PortfolioTemplate[] => {
    return portfolioTemplates.filter(template => template.category === category);
};

export const getTemplatesByAudience = (audience: PortfolioTemplate['targetAudience']): PortfolioTemplate[] => {
    return portfolioTemplates.filter(template => template.targetAudience === audience);
};

export const getFeaturedTemplates = (): PortfolioTemplate[] => {
    return portfolioTemplates.filter(template =>
        template.badges?.includes('Best Seller') || template.badges?.includes('New')
    ).slice(0, 4);
};
