'use client';

import Navbar from '@/components/Navbar';
import AboutStudio from '@/components/AboutStudio';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <AboutStudio />
            <Footer />
        </main>
    );
}
