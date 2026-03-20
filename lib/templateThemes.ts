export type TemplateStyle = 'minimal' | 'bold' | 'playful' | 'professional' | 'dark' | 'light' | 'brutalist' | '3d' | 'clean';

export interface TemplateTheme {
    id: string;
    name: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        foreground: string;
        muted: string;
    };
    fonts: {
        heading: string;
        body: string;
    };
    style: TemplateStyle;
}

export const templateThemes: Record<string, TemplateTheme> = {
    'rechrome-3d': {
        id: 'rechrome-3d',
        name: 'Rechrome 3D',
        colors: {
            primary: '#00E5FF', // Neon Cyan
            secondary: '#4FA3FF', // Electric Blue
            accent: '#FF3BDA', // Magenta Pulse
            background: '#0B0B0E', // Obsidian Black
            foreground: '#FFFFFF',
            muted: 'rgba(255,255,255,0.12)' // Glass Gray
        },
        fonts: {
            heading: 'var(--font-montserrat)', // Placeholder for Sora/Exo
            body: 'var(--font-inter)'
        },
        style: '3d'
    },
    'minimal-noir': {
        id: 'minimal-noir',
        name: 'Minimal Noir',
        colors: {
            primary: 'rgb(255, 255, 255)',
            secondary: 'rgb(163, 163, 163)',
            accent: 'rgb(82, 82, 82)',
            background: 'rgb(0, 0, 0)',
            foreground: 'rgb(255, 255, 255)',
            muted: 'rgb(115, 115, 115)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'minimal'
    },
    'studio-grid': {
        id: 'studio-grid',
        name: 'Studio Grid',
        colors: {
            primary: 'rgb(59, 130, 246)', // Blue
            secondary: 'rgb(99, 102, 241)', // Indigo
            accent: 'rgb(139, 92, 246)', // Violet
            background: 'rgb(15, 23, 42)',
            foreground: 'rgb(248, 250, 252)',
            muted: 'rgb(148, 163, 184)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'professional'
    },
    'motion-lab': {
        id: 'motion-lab',
        name: 'Motion Lab',
        colors: {
            primary: 'rgb(236, 72, 153)', // Pink
            secondary: 'rgb(168, 85, 247)', // Purple
            accent: 'rgb(251, 146, 60)', // Orange
            background: 'rgb(17, 24, 39)',
            foreground: 'rgb(255, 255, 255)',
            muted: 'rgb(156, 163, 175)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'playful'
    },
    'lightfolio': {
        id: 'lightfolio',
        name: 'LightFolio',
        colors: {
            primary: 'rgb(59, 130, 246)', // Blue
            secondary: 'rgb(16, 185, 129)', // Green
            accent: 'rgb(251, 191, 36)', // Yellow
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(17, 24, 39)',
            muted: 'rgb(107, 114, 128)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'light'
    },
    'brutal-edge': {
        id: 'brutal-edge',
        name: 'Brutal Edge',
        colors: {
            primary: 'rgb(239, 68, 68)', // Red
            secondary: 'rgb(251, 146, 60)', // Orange
            accent: 'rgb(234, 179, 8)', // Yellow
            background: 'rgb(23, 23, 23)',
            foreground: 'rgb(250, 250, 250)',
            muted: 'rgb(163, 163, 163)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'brutalist'
    },
    'dark-code': {
        id: 'dark-code',
        name: 'Dark Code',
        colors: {
            primary: 'rgb(16, 185, 129)', // Green
            secondary: 'rgb(6, 182, 212)', // Cyan
            accent: 'rgb(34, 211, 238)', // Light Cyan
            background: 'rgb(13, 17, 23)',
            foreground: 'rgb(201, 209, 217)',
            muted: 'rgb(139, 148, 158)'
        },
        fonts: {
            heading: `'Courier New', monospace`,
            body: `'Courier New', monospace`
        },
        style: 'dark'
    },
    'photo-gallery': {
        id: 'photo-gallery',
        name: 'Photo Gallery',
        colors: {
            primary: 'rgb(99, 102, 241)', // Indigo
            secondary: 'rgb(139, 92, 246)', // Violet
            accent: 'rgb(168, 85, 247)', // Purple
            background: 'rgb(250, 250, 250)',
            foreground: 'rgb(31, 41, 55)',
            muted: 'rgb(107, 114, 128)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'light'
    },
    // Batch 1: Modern Tech
    'cyber-glitch': {
        id: 'cyber-glitch',
        name: 'Cyber Glitch',
        colors: {
            primary: 'rgb(0, 255, 255)', // Cyan
            secondary: 'rgb(255, 0, 255)', // Magenta
            accent: 'rgb(255, 255, 0)', // Yellow
            background: 'rgb(10, 10, 10)',
            foreground: 'rgb(240, 240, 240)',
            muted: 'rgb(80, 80, 80)'
        },
        fonts: {
            heading: `'Courier New', monospace`,
            body: `'Courier New', monospace`
        },
        style: 'dark'
    },
    'neo-brutalism': {
        id: 'neo-brutalism',
        name: 'Neo Brutalism',
        colors: {
            primary: 'rgb(163, 230, 53)', // Lime
            secondary: 'rgb(250, 204, 21)', // Yellow
            accent: 'rgb(244, 63, 94)', // Rose
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(0, 0, 0)',
            muted: 'rgb(200, 200, 200)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'brutalist'
    },
    'glass-morphism': {
        id: 'glass-morphism',
        name: 'Glass Morphism',
        colors: {
            primary: 'rgba(255, 255, 255, 0.2)',
            secondary: 'rgba(255, 255, 255, 0.1)',
            accent: 'rgb(56, 189, 248)', // Sky
            background: 'rgb(15, 23, 42)', // Slate 900
            foreground: 'rgb(255, 255, 255)',
            muted: 'rgba(255, 255, 255, 0.5)'
        },
        fonts: {
            heading: 'var(--font-inter)',
            body: 'var(--font-inter)'
        },
        style: '3d'
    },
    'vapor-wave': {
        id: 'vapor-wave',
        name: 'Vapor Wave',
        colors: {
            primary: 'rgb(244, 114, 182)', // Pink
            secondary: 'rgb(56, 189, 248)', // Cyan
            accent: 'rgb(167, 139, 250)', // Purple
            background: 'rgb(29, 26, 57)', // Deep Purple
            foreground: 'rgb(255, 255, 255)',
            muted: 'rgb(139, 92, 246)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'playful'
    },
    'retro-8bit': {
        id: 'retro-8bit',
        name: 'Retro 8Bit',
        colors: {
            primary: 'rgb(34, 197, 94)', // Green
            secondary: 'rgb(239, 68, 68)', // Red
            accent: 'rgb(59, 130, 246)', // Blue
            background: 'rgb(30, 41, 59)',
            foreground: 'rgb(255, 255, 255)',
            muted: 'rgb(148, 163, 184)'
        },
        fonts: {
            heading: `'Courier New', monospace`,
            body: `'Courier New', monospace`
        },
        style: 'playful'
    },
    'dark-saas': {
        id: 'dark-saas',
        name: 'Dark SaaS',
        colors: {
            primary: 'rgb(99, 102, 241)', // Indigo
            secondary: 'rgb(30, 41, 59)', // Slate 800
            accent: 'rgb(14, 165, 233)', // Sky
            background: 'rgb(15, 23, 42)', // Slate 900
            foreground: 'rgb(248, 250, 252)',
            muted: 'rgb(100, 116, 139)'
        },
        fonts: {
            heading: 'var(--font-inter)',
            body: 'var(--font-inter)'
        },
        style: 'professional'
    },
    // Batch 2: Creative & Artsy
    'swiss-style': {
        id: 'swiss-style',
        name: 'Swiss Style',
        colors: {
            primary: 'rgb(220, 38, 38)', // Red
            secondary: 'rgb(0, 0, 0)', // Black
            accent: 'rgb(255, 255, 255)', // White
            background: 'rgb(245, 245, 245)',
            foreground: 'rgb(23, 23, 23)',
            muted: 'rgb(115, 115, 115)'
        },
        fonts: {
            heading: 'var(--font-inter)', // Helvetica-ish
            body: 'var(--font-inter)'
        },
        style: 'minimal'
    },
    'editorial-fashion': {
        id: 'editorial-fashion',
        name: 'Editorial Fashion',
        colors: {
            primary: 'rgb(0, 0, 0)',
            secondary: 'rgb(231, 229, 228)', // Stone 200
            accent: 'rgb(180, 83, 9)', // Amber 700
            background: 'rgb(255, 250, 240)', // Floral White
            foreground: 'rgb(28, 25, 23)',
            muted: 'rgb(120, 113, 108)'
        },
        fonts: {
            heading: `'Playfair Display', serif`,
            body: 'var(--font-inter)'
        },
        style: 'light'
    },
    'abstract-shapes': {
        id: 'abstract-shapes',
        name: 'Abstract Shapes',
        colors: {
            primary: 'rgb(244, 63, 94)', // Rose
            secondary: 'rgb(168, 85, 247)', // Purple
            accent: 'rgb(251, 191, 36)', // Amber
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(31, 41, 55)',
            muted: 'rgb(156, 163, 175)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'playful'
    },
    'paper-texture': {
        id: 'paper-texture',
        name: 'Paper Texture',
        colors: {
            primary: 'rgb(68, 64, 60)', // Stone 700
            secondary: 'rgb(168, 162, 158)', // Stone 400
            accent: 'rgb(220, 38, 38)', // Red (stamp)
            background: 'rgb(245, 245, 240)', // Off-white
            foreground: 'rgb(28, 25, 23)',
            muted: 'rgb(120, 113, 108)'
        },
        fonts: {
            heading: `'Courier New', monospace`,
            body: `'Courier New', monospace`
        },
        style: 'minimal'
    },
    'monochrome-pro': {
        id: 'monochrome-pro',
        name: 'Monochrome Pro',
        colors: {
            primary: 'rgb(0, 0, 0)',
            secondary: 'rgb(255, 255, 255)',
            accent: 'rgb(82, 82, 82)',
            background: 'rgb(10, 10, 10)',
            foreground: 'rgb(250, 250, 250)',
            muted: 'rgb(115, 115, 115)'
        },
        fonts: {
            heading: 'var(--font-inter)',
            body: 'var(--font-inter)'
        },
        style: 'dark'
    },
    'gradient-flow': {
        id: 'gradient-flow',
        name: 'Gradient Flow',
        colors: {
            primary: 'rgb(99, 102, 241)', // Indigo
            secondary: 'rgb(236, 72, 153)', // Pink
            accent: 'rgb(34, 211, 238)', // Cyan
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(15, 23, 42)',
            muted: 'rgb(100, 116, 139)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'light'
    },
    // Batch 3: Professional & Clean
    'corporate-pro': {
        id: 'corporate-pro',
        name: 'Corporate Pro',
        colors: {
            primary: 'rgb(37, 99, 235)', // Blue 600
            secondary: 'rgb(30, 41, 59)', // Slate 800
            accent: 'rgb(100, 116, 139)', // Slate 500
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(15, 23, 42)',
            muted: 'rgb(148, 163, 184)'
        },
        fonts: {
            heading: 'var(--font-inter)',
            body: 'var(--font-inter)'
        },
        style: 'professional'
    },
    'minimalist-cv': {
        id: 'minimalist-cv',
        name: 'Minimalist CV',
        colors: {
            primary: 'rgb(23, 23, 23)', // Neutral 900
            secondary: 'rgb(82, 82, 82)', // Neutral 600
            accent: 'rgb(212, 212, 212)', // Neutral 300
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(23, 23, 23)',
            muted: 'rgb(163, 163, 163)'
        },
        fonts: {
            heading: 'var(--font-inter)',
            body: 'var(--font-inter)'
        },
        style: 'minimal'
    },
    'legal-firm': {
        id: 'legal-firm',
        name: 'Legal Firm',
        colors: {
            primary: 'rgb(30, 58, 138)', // Blue 900
            secondary: 'rgb(202, 138, 4)', // Yellow 600 (Gold)
            accent: 'rgb(241, 245, 249)', // Slate 100
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(15, 23, 42)',
            muted: 'rgb(100, 116, 139)'
        },
        fonts: {
            heading: `'Playfair Display', serif`,
            body: 'var(--font-inter)'
        },
        style: 'professional'
    },
    'medical-suite': {
        id: 'medical-suite',
        name: 'Medical Suite',
        colors: {
            primary: 'rgb(13, 148, 136)', // Teal 600
            secondary: 'rgb(15, 118, 110)', // Teal 700
            accent: 'rgb(204, 251, 241)', // Teal 100
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(15, 23, 42)',
            muted: 'rgb(148, 163, 184)'
        },
        fonts: {
            heading: 'var(--font-inter)',
            body: 'var(--font-inter)'
        },
        style: 'clean'
    },
    'architecture-studio': {
        id: 'architecture-studio',
        name: 'Architecture Studio',
        colors: {
            primary: 'rgb(0, 0, 0)',
            secondary: 'rgb(64, 64, 64)', // Neutral 700
            accent: 'rgb(229, 229, 229)', // Neutral 200
            background: 'rgb(250, 250, 250)',
            foreground: 'rgb(23, 23, 23)',
            muted: 'rgb(115, 115, 115)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'minimal'
    },
    'consultant-pro': {
        id: 'consultant-pro',
        name: 'Consultant Pro',
        colors: {
            primary: 'rgb(124, 45, 18)', // Orange 900 (Deep Rust)
            secondary: 'rgb(255, 255, 255)',
            accent: 'rgb(254, 215, 170)', // Orange 200
            background: 'rgb(255, 252, 245)', // Warm white
            foreground: 'rgb(28, 25, 23)',
            muted: 'rgb(120, 113, 108)'
        },
        fonts: {
            heading: `'Playfair Display', serif`,
            body: 'var(--font-inter)'
        },
        style: 'professional'
    },
    // Batch 4: Niche & Fun
    'gamer-streamer': {
        id: 'gamer-streamer',
        name: 'Gamer Streamer',
        colors: {
            primary: 'rgb(168, 85, 247)', // Purple 500
            secondary: 'rgb(0, 0, 0)',
            accent: 'rgb(34, 197, 94)', // Green 500 (Neon)
            background: 'rgb(10, 10, 10)',
            foreground: 'rgb(255, 255, 255)',
            muted: 'rgb(82, 82, 82)'
        },
        fonts: {
            heading: 'var(--font-montserrat)', // Should be a gaming font ideally
            body: 'var(--font-inter)'
        },
        style: 'dark'
    },
    'foodie-blog': {
        id: 'foodie-blog',
        name: 'Foodie Blog',
        colors: {
            primary: 'rgb(220, 38, 38)', // Red 600
            secondary: 'rgb(254, 242, 242)', // Red 50
            accent: 'rgb(251, 191, 36)', // Amber 400
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(23, 23, 23)',
            muted: 'rgb(115, 115, 115)'
        },
        fonts: {
            heading: `'Playfair Display', serif`,
            body: 'var(--font-inter)'
        },
        style: 'light'
    },
    'travel-journal': {
        id: 'travel-journal',
        name: 'Travel Journal',
        colors: {
            primary: 'rgb(14, 165, 233)', // Sky 500
            secondary: 'rgb(240, 253, 250)', // Teal 50
            accent: 'rgb(234, 179, 8)', // Yellow 500
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(15, 23, 42)',
            muted: 'rgb(100, 116, 139)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'clean'
    },
    'pet-portfolio': {
        id: 'pet-portfolio',
        name: 'Pet Portfolio',
        colors: {
            primary: 'rgb(249, 115, 22)', // Orange 500
            secondary: 'rgb(255, 247, 237)', // Orange 50
            accent: 'rgb(132, 204, 22)', // Lime 500
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(67, 20, 7)', // Brown
            muted: 'rgb(120, 113, 108)'
        },
        fonts: {
            heading: 'var(--font-inter)', // Rounded if possible
            body: 'var(--font-inter)'
        },
        style: 'playful'
    },
    'wedding-story': {
        id: 'wedding-story',
        name: 'Wedding Story',
        colors: {
            primary: 'rgb(219, 39, 119)', // Pink 600
            secondary: 'rgb(253, 242, 248)', // Pink 50
            accent: 'rgb(251, 207, 232)', // Pink 200
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(80, 7, 36)', // Dark Pink
            muted: 'rgb(157, 23, 77)'
        },
        fonts: {
            heading: `'Playfair Display', serif`,
            body: 'var(--font-inter)'
        },
        style: 'light'
    },
    'music-artist': {
        id: 'music-artist',
        name: 'Music Artist',
        colors: {
            primary: 'rgb(147, 51, 234)', // Purple 600
            secondary: 'rgb(0, 0, 0)',
            accent: 'rgb(236, 72, 153)', // Pink 500
            background: 'rgb(17, 24, 39)', // Gray 900
            foreground: 'rgb(255, 255, 255)',
            muted: 'rgb(107, 114, 128)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'bold'
    },
    'film-grain': {
        id: 'film-grain',
        name: 'Film Grain',
        colors: {
            primary: 'rgb(255, 255, 255)',
            secondary: 'rgb(0, 0, 0)',
            accent: 'rgb(220, 38, 38)', // Red
            background: 'rgb(20, 20, 20)',
            foreground: 'rgb(230, 230, 230)',
            muted: 'rgb(100, 100, 100)'
        },
        fonts: {
            heading: 'var(--font-inter)',
            body: 'var(--font-inter)'
        },
        style: 'minimal'
    },
    'bauhaus-art': {
        id: 'bauhaus-art',
        name: 'Bauhaus Art',
        colors: {
            primary: 'rgb(220, 38, 38)', // Red
            secondary: 'rgb(37, 99, 235)', // Blue
            accent: 'rgb(234, 179, 8)', // Yellow
            background: 'rgb(240, 240, 240)',
            foreground: 'rgb(23, 23, 23)',
            muted: 'rgb(115, 115, 115)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'bold'
    },
    'y2k-aesthetic': {
        id: 'y2k-aesthetic',
        name: 'Y2K Aesthetic',
        colors: {
            primary: 'rgb(204, 255, 0)', // Lime
            secondary: 'rgb(255, 0, 255)', // Magenta
            accent: 'rgb(0, 255, 255)', // Cyan
            background: 'rgb(0, 0, 51)',
            foreground: 'rgb(204, 255, 0)',
            muted: 'rgb(102, 102, 153)'
        },
        fonts: {
            heading: `'Courier New', monospace`,
            body: `'Courier New', monospace`
        },
        style: 'playful'
    },
    'nature-calm': {
        id: 'nature-calm',
        name: 'Nature Calm',
        colors: {
            primary: 'rgb(95, 113, 97)', // Forest Green
            secondary: 'rgb(224, 226, 225)', // Soft Gray
            accent: 'rgb(44, 62, 80)', // Deep Blue
            background: 'rgb(243, 244, 241)',
            foreground: 'rgb(44, 62, 80)',
            muted: 'rgb(168, 174, 166)'
        },
        fonts: {
            heading: `'Playfair Display', serif`,
            body: 'var(--font-inter)'
        },
        style: 'clean'
    },
    'neon-nights': {
        id: 'neon-nights',
        name: 'Neon Nights',
        colors: {
            primary: 'rgb(0, 255, 255)', // Cyan
            secondary: 'rgb(255, 0, 255)', // Magenta
            accent: 'rgb(0, 255, 0)', // Green
            background: 'rgb(5, 5, 5)',
            foreground: 'rgb(255, 255, 255)',
            muted: 'rgb(80, 80, 80)'
        },
        fonts: {
            heading: 'var(--font-montserrat)',
            body: 'var(--font-inter)'
        },
        style: 'dark'
    },
    'tech-minimal': {
        id: 'tech-minimal',
        name: 'Tech Minimal',
        colors: {
            primary: 'rgb(0, 0, 0)',
            secondary: 'rgb(255, 255, 255)',
            accent: 'rgb(34, 197, 94)', // Green
            background: 'rgb(255, 255, 255)',
            foreground: 'rgb(0, 0, 0)',
            muted: 'rgb(163, 163, 163)'
        },
        fonts: {
            heading: `'Courier New', monospace`,
            body: `'Courier New', monospace`
        },
        style: 'minimal'
    }
};

export const getTemplateTheme = (templateId: string): TemplateTheme => {
    return templateThemes[templateId] || templateThemes['rechrome-3d'];
};
