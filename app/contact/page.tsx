'use client';

import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <ContactForm />
            <Footer />
        </main>
    );
}
