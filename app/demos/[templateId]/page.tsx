'use client';

import { useParams } from 'next/navigation';
import { getTemplateTheme } from '@/lib/templateThemes';
import Link from 'next/link';
import BackToPortfolio from '@/components/BackToPortfolio';
import { useEffect } from 'react';


// Minimal Noir Imports
import MinimalNoirHero from '@/components/templates/minimal-noir/HeroMinimal';
import MinimalNoirAbout from '@/components/templates/minimal-noir/AboutMinimal';
import MinimalNoirServices from '@/components/templates/minimal-noir/ServicesMinimal';
import SkillsMinimal from '@/components/templates/minimal-noir/SkillsMinimal';
import ProjectGrid from '@/components/templates/minimal-noir/ProjectGrid';
import TestimonialsMinimal from '@/components/templates/minimal-noir/TestimonialsMinimal';
import ContactMinimal from '@/components/templates/minimal-noir/ContactMinimal';
import FooterMinimal from '@/components/templates/minimal-noir/FooterMinimal';

// Studio Grid Imports
import StudioGridHero from '@/components/templates/studio-grid/HeroStudio';
import StudioServices from '@/components/templates/studio-grid/ServicesStudio';
import StudioFeaturedWork from '@/components/templates/studio-grid/FeaturedWork';
import StudioTestimonials from '@/components/templates/studio-grid/Testimonials';
import StudioFooter from '@/components/templates/studio-grid/FooterStudio';

// Motion Lab Imports
import MotionLabHero from '@/components/templates/motion-lab/KineticHero';
import MotionSelectedWorks from '@/components/templates/motion-lab/SelectedWorks';
import MotionPlayground from '@/components/templates/motion-lab/Playground';
import MotionContact from '@/components/templates/motion-lab/ContactMotion';

// LightFolio Imports
import LightFolioHero from '@/components/templates/lightfolio/FriendlyHero';
import LightWorkGrid from '@/components/templates/lightfolio/WorkGrid';
import LightAboutBio from '@/components/templates/lightfolio/AboutBio';
import LightContact from '@/components/templates/lightfolio/ContactSimple';

// Brutal Edge Imports
import BrutalHero from '@/components/templates/brutal-edge/BrutalHero';
import BrutalManifesto from '@/components/templates/brutal-edge/Manifesto';
import BrutalProjects from '@/components/templates/brutal-edge/ProjectsList';
import BrutalContact from '@/components/templates/brutal-edge/ContactBrutal';

// Neo Brutalism Imports
import HeroBrutal from '@/components/templates/neo-brutalism/HeroBrutal';
import BrutalAbout from '@/components/templates/neo-brutalism/BrutalAbout';
import BrutalProjectsNeo from '@/components/templates/neo-brutalism/BrutalProjects';
import BrutalContactNeo from '@/components/templates/neo-brutalism/BrutalContact';

// Cyber Glitch Imports
import HeroGlitch from '@/components/templates/cyber-glitch/HeroGlitch';
import GlitchProjects from '@/components/templates/cyber-glitch/GlitchProjects';
import GlitchSkills from '@/components/templates/cyber-glitch/GlitchSkills';
import GlitchFooter from '@/components/templates/cyber-glitch/GlitchFooter';

// Glass Morphism Imports
import HeroGlass from '@/components/templates/glass-morphism/HeroGlass';
import GlassProjects from '@/components/templates/glass-morphism/GlassProjects';
import GlassAbout from '@/components/templates/glass-morphism/GlassAbout';
import GlassFooter from '@/components/templates/glass-morphism/GlassFooter';

// Vapor Wave Imports
import HeroVapor from '@/components/templates/vapor-wave/HeroVapor';
import VaporPortfolio from '@/components/templates/vapor-wave/VaporPortfolio';
import VaporGuestbook from '@/components/templates/vapor-wave/VaporGuestbook';
import VaporAbout from '@/components/templates/vapor-wave/VaporAbout';

// Dark Code Imports
import TerminalHero from '@/components/templates/dark-code/TerminalHero';
import DarkProjects from '@/components/templates/dark-code/DarkProjects';
import DarkAbout from '@/components/templates/dark-code/DarkAbout';
import DarkSkills from '@/components/templates/dark-code/SkillsTerminal';
import DarkContact from '@/components/templates/dark-code/ContactTerminal';
import DarkFooter from '@/components/templates/dark-code/DarkFooter';

// Photo Gallery Imports
import GalleryHero from '@/components/templates/photo-gallery/GalleryHero';
import GalleryMasonry from '@/components/templates/photo-gallery/MasonryGrid';
import GalleryAbout from '@/components/templates/photo-gallery/AboutPhotographer';
import GalleryContact from '@/components/templates/photo-gallery/ContactGallery';

import HeroRetro from '@/components/templates/retro-8bit/HeroRetro';
import RetroProfile from '@/components/templates/retro-8bit/RetroProfile';
import RetroLevels from '@/components/templates/retro-8bit/RetroLevels';
import RetroContact from '@/components/templates/retro-8bit/RetroContact';
import HeroDarkSaaS from '@/components/templates/dark-saas/HeroDarkSaaS';
import SaaSFeatures from '@/components/templates/dark-saas/SaaSFeatures';
import SaaSCaseStudies from '@/components/templates/dark-saas/SaaSCaseStudies';
import SaaSFooter from '@/components/templates/dark-saas/SaaSFooter';
import HeroSwiss from '@/components/templates/swiss-style/HeroSwiss';
import SwissProjects from '@/components/templates/swiss-style/SwissProjects';
import SwissAbout from '@/components/templates/swiss-style/SwissAbout';
import SwissFooter from '@/components/templates/swiss-style/SwissFooter';
import HeroEditorial from '@/components/templates/editorial-fashion/HeroEditorial';
import EditorialProjects from '@/components/templates/editorial-fashion/EditorialProjects';
import EditorialQuotes from '@/components/templates/editorial-fashion/EditorialQuotes';
import EditorialContact from '@/components/templates/editorial-fashion/EditorialContact';
import HeroAbstract from '@/components/templates/abstract-shapes/HeroAbstract';
import AbstractProjects from '@/components/templates/abstract-shapes/AbstractProjects';
import AbstractProcess from '@/components/templates/abstract-shapes/AbstractProcess';
import AbstractContact from '@/components/templates/abstract-shapes/AbstractContact';
import HeroPaper from '@/components/templates/paper-texture/HeroPaper';
import PaperProjects from '@/components/templates/paper-texture/PaperProjects';
import PaperAbout from '@/components/templates/paper-texture/PaperAbout';
import PaperContact from '@/components/templates/paper-texture/PaperContact';
import HeroMonochrome from '@/components/templates/monochrome-pro/HeroMonochrome';
import MonochromeProjects from '@/components/templates/monochrome-pro/MonochromeProjects';
import MonochromeServices from '@/components/templates/monochrome-pro/MonochromeServices';
import MonochromeContact from '@/components/templates/monochrome-pro/MonochromeContact';
import HeroGradient from '@/components/templates/gradient-flow/HeroGradient';
import GradientProjects from '@/components/templates/gradient-flow/GradientProjects';
import GradientProcess from '@/components/templates/gradient-flow/GradientProcess';
import GradientContact from '@/components/templates/gradient-flow/GradientContact';
import HeroFilm from '@/components/templates/film-grain/HeroFilm';
import FilmProjects from '@/components/templates/film-grain/FilmProjects';
import FilmAbout from '@/components/templates/film-grain/FilmAbout';
import FilmContact from '@/components/templates/film-grain/FilmContact';
import HeroBauhaus from '@/components/templates/bauhaus-art/HeroBauhaus';
import BauhausProjects from '@/components/templates/bauhaus-art/BauhausProjects';
import BauhausProcess from '@/components/templates/bauhaus-art/BauhausProcess';
import BauhausContact from '@/components/templates/bauhaus-art/BauhausContact';
import HeroY2K from '@/components/templates/y2k-aesthetic/HeroY2K';
import Y2KProjects from '@/components/templates/y2k-aesthetic/Y2KProjects';
import Y2KAbout from '@/components/templates/y2k-aesthetic/Y2KAbout';
import Y2KServices from '@/components/templates/y2k-aesthetic/Y2KServices';
import Y2KSkills from '@/components/templates/y2k-aesthetic/Y2KSkills';
import Y2KTestimonials from '@/components/templates/y2k-aesthetic/Y2KTestimonials';
import Y2KGuestbook from '@/components/templates/y2k-aesthetic/Y2KGuestbook';
import Y2KContact from '@/components/templates/y2k-aesthetic/Y2KContact';
import Y2KFooter from '@/components/templates/y2k-aesthetic/Y2KFooter';
import HeroNature from '@/components/templates/nature-calm/HeroNature';
import NatureProjects from '@/components/templates/nature-calm/NatureProjects';
import NatureAbout from '@/components/templates/nature-calm/NatureAbout';
import NatureContact from '@/components/templates/nature-calm/NatureContact';
import HeroNeon from '@/components/templates/neon-nights/HeroNeon';
import NeonProjects from '@/components/templates/neon-nights/NeonProjects';
import NeonAbout from '@/components/templates/neon-nights/NeonAbout';
import NeonContact from '@/components/templates/neon-nights/NeonContact';
import HeroTech from '@/components/templates/tech-minimal/HeroTech';
import TechProjects from '@/components/templates/tech-minimal/TechProjects';
import TechAbout from '@/components/templates/tech-minimal/TechAbout';
import TechContact from '@/components/templates/tech-minimal/TechContact';

// Generic Hero Import
import GenericHero from '@/components/templates/GenericHero';
import Rechrome3DLayout from '@/components/templates/rechrome-3d/Layout';
import { div } from 'framer-motion/client';

// ... (other imports remain, I need to be careful not to delete them if I use replace_file_content poorly. I'll use a targeted replace for the case block and add the import separately or usage replace_file_content with care)
// Wait, replace_file_content replaces a BLOCK. I need to add the import first.
// I will use `replace_file_content` to swap the imports at the top and the case block.
// Actually, I can just ADD the import at the top using a unique string anchor.
// And then replace the case block.

// Imports block update:
// I'll replace the existing rechrome-3d imports with the single layout import.


export default function TemplateDemo() {
    const params = useParams();
    const templateId = params.templateId as string;
    const theme = getTemplateTheme(templateId);

    useEffect(() => {
        if (theme) {
            const root = document.documentElement;
            // Store original values if needed, or just remove property to revert to CSS defaults
            // Assuming CSS defaults are defined in global CSS or null resets them
            root.style.setProperty('--primary', theme.colors.primary);
            root.style.setProperty('--secondary', theme.colors.secondary);
            root.style.setProperty('--accent', theme.colors.accent);
            root.style.setProperty('--background', theme.colors.background);
            root.style.setProperty('--text', theme.colors.foreground);

            return () => {
                // Explicitly restore Main Site Theme defaults
                root.style.setProperty('--primary', 'oklch(0.65 0.25 280)');
                root.style.setProperty('--secondary', 'oklch(0.7 0.2 220)');
                // Reset others or set to main defaults if known. 
                // Based on previous edits, main site uses:
                // background: oklch(0.1 0.02 260)
                // foreground: oklch(0.98 0.01 260)
                root.style.setProperty('--color-background', 'oklch(0.1 0.02 260)');
                root.style.setProperty('--color-foreground', 'oklch(0.98 0.01 260)');

                // Also clean up the properties set by this template
                root.style.removeProperty('--primary');
                root.style.removeProperty('--secondary');
                root.style.removeProperty('--accent');
                root.style.removeProperty('--background');
                root.style.removeProperty('--text');

                // Clean body inline styles
                document.body.style.removeProperty('background-color');
                document.body.style.removeProperty('color');
            };
        }
    }, [theme]);

    const renderTemplateContent = () => {
        switch (templateId) {
            case 'rechrome-3d':
                return <Rechrome3DLayout />;
            case 'minimal-noir':
                return (
                    <>
                        <MinimalNoirHero />
                        <MinimalNoirAbout />
                        <MinimalNoirServices />
                        <SkillsMinimal />
                        <ProjectGrid />
                        <TestimonialsMinimal />
                        <ContactMinimal />
                        <FooterMinimal />
                    </>
                );
            case 'studio-grid':
                return (
                    <>
                        <StudioGridHero />
                        <StudioServices />
                        <StudioFeaturedWork />
                        <StudioTestimonials />
                        <StudioFooter />
                    </>
                );
            case 'motion-lab':
                return (
                    <>
                        <MotionLabHero />
                        <MotionSelectedWorks />
                        <MotionPlayground />
                        <MotionContact />
                    </>
                );
            case 'lightfolio':
                return (
                    <>
                        <LightFolioHero />
                        <LightWorkGrid />
                        <LightAboutBio />
                        <LightContact />
                    </>
                );
            case 'brutal-edge':
                return (
                    <>
                        <BrutalHero />
                        <BrutalManifesto />
                        <BrutalProjects />
                        <BrutalContact />
                    </>
                );
            case 'dark-code':
                return (
                    <>
                        <TerminalHero />
                        <DarkAbout />
                        <DarkProjects />
                        <DarkSkills />
                        <DarkContact />
                        <DarkFooter />
                    </>
                );
            case 'photo-gallery':
                return (
                    <>
                        <GalleryHero />
                        <GalleryMasonry />
                        <GalleryAbout />
                        <GalleryContact />
                    </>
                );
            case 'retro-8bit':
                return (
                    <>
                        <HeroRetro />
                        <RetroProfile />
                        <RetroLevels />
                        <RetroContact />
                    </>
                );
            case 'dark-saas':
                return (
                    <>
                        <HeroDarkSaaS />
                        <SaaSFeatures />
                        <SaaSCaseStudies />
                        <SaaSFooter />
                    </>
                );
            case 'swiss-style':
                return (
                    <>
                        <HeroSwiss />
                        <SwissProjects />
                        <SwissAbout />
                        <SwissFooter />
                    </>
                );
            case 'editorial-fashion':
                return (
                    <>
                        <HeroEditorial />
                        <EditorialProjects />
                        <EditorialQuotes />
                        <EditorialContact />
                    </>
                );
            case 'abstract-shapes':
                return (
                    <>
                        <HeroAbstract />
                        <AbstractProjects />
                        <AbstractProcess />
                        <AbstractContact />
                    </>
                );
            case 'paper-texture':
                return (
                    <>
                        <HeroPaper />
                        <PaperProjects />
                        <PaperAbout />
                        <PaperContact />
                    </>
                );
            case 'monochrome-pro':
                return (
                    <>
                        <HeroMonochrome />
                        <MonochromeProjects />
                        <MonochromeServices />
                        <MonochromeContact />
                    </>
                );
            case 'gradient-flow':
                return (
                    <>
                        <HeroGradient />
                        <GradientProjects />
                        <GradientProcess />
                        <GradientContact />
                    </>
                );
            case 'film-grain':
                return (
                    <>
                        <HeroFilm />
                        <FilmProjects />
                        <FilmAbout />
                        <FilmContact />
                    </>
                );
            case 'cyber-glitch':
                return (
                    <>
                        <HeroGlitch />
                        <GlitchProjects />
                        <GlitchSkills />
                        <GlitchFooter />
                    </>
                );
            case 'neo-brutalism':
                return (
                    <>
                        <HeroBrutal />
                        <BrutalAbout />
                        <BrutalProjectsNeo />
                        <BrutalContactNeo />
                    </>
                );
            case 'glass-morphism':
                return (
                    <>
                        <HeroGlass />
                        <GlassProjects />
                        <GlassAbout />
                        <GlassFooter />
                    </>
                );
            case 'vapor-wave':
                return (
                    <>
                        <HeroVapor />
                        <VaporPortfolio />
                        <VaporGuestbook />
                        <VaporAbout />
                    </>
                );
            case 'bauhaus-art':
                return (
                    <>
                        <HeroBauhaus />
                        <BauhausProjects />
                        <BauhausProcess />
                        <BauhausContact />
                    </>
                );
            case 'y2k-aesthetic':
                return (
                    <>
                        <HeroY2K />
                        <Y2KAbout />
                        <Y2KSkills />
                        <Y2KServices />
                        <Y2KProjects />
                        <Y2KTestimonials />
                        <Y2KGuestbook />
                        <Y2KContact />
                        <Y2KFooter />
                    </>
                );
            case 'nature-calm':
                return (
                    <>
                        <HeroNature />
                        <NatureProjects />
                        <NatureAbout />
                        <NatureContact />
                    </>
                );
            case 'neon-nights':
                return (
                    <>
                        <HeroNeon />
                        <NeonProjects />
                        <NeonAbout />
                        <NeonContact />
                    </>
                );
            case 'tech-minimal':
                return (
                    <>
                        <HeroTech />
                        <TechProjects />
                        <TechAbout />
                        <TechContact />
                    </>
                );

            // Batch 3 & 4: Templates using GenericHero fallback
            case 'corporate-pro':
            case 'minimalist-cv':
            case 'legal-firm':
            case 'medical-suite':
            case 'architecture-studio':
            case 'consultant-pro':
            case 'gamer-streamer':
            case 'foodie-blog':
            case 'travel-journal':
            case 'pet-portfolio':
            case 'wedding-story':
            case 'music-artist':
                return (
                    <GenericHero
                        templateId={templateId}
                        title={theme.name}
                        subtitle={`A premium ${theme.style} template coming soon.`}
                    />
                );

            default:
                return <div className="min-h-screen flex items-center justify-center text-white">Template not found</div>;
        }
    };

    if (!theme) {
        return <div className="min-h-screen flex items-center justify-center text-white">Template not found</div>;
    }

    return (
        <div className="min-h-screen" style={{ backgroundColor: theme.colors.background, color: theme.colors.foreground }}>
            <BackToPortfolio />

            {/* Template Content */}
            <div>
                {renderTemplateContent()}
            </div>
        </div>
    );
}
