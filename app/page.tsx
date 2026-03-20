'use client';

import Navbar from '@/components/Navbar';
import StudioHero from '@/components/StudioHero';
import TemplatesSection from '@/components/TemplatesSection';
import ServicesPricingSection from '@/components/ServicesPricingSection';
import DemoSection from '@/components/DemoSection';
import WhySection from '@/components/WhySection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <StudioHero />
            <TemplatesSection />
            <ServicesPricingSection />
            <DemoSection />
            <WhySection />
            <FinalCTA />
            <Footer />
        </main>
    );
}
