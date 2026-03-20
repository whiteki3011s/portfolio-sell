'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { Loader2 } from 'lucide-react';

export default function GalleryContact() {
    const { handleSubmit, isSubmitting, isSuccess } = useContactForm();

    return (
        <section className="py-24 px-4 md:px-12 bg-[#FAFAFA] text-[#1F2937] text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-light uppercase tracking-widest mb-8">Inquiries</h2>
                <p className="text-gray-600 mb-8">
                    For prints, licensing, or assignments, please contact:
                </p>

                <button
                    onClick={(e) => handleSubmit(e as any)}
                    disabled={isSubmitting || isSuccess}
                    className="text-3xl md:text-5xl font-light hover:text-gray-500 transition-colors disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-4">
                            <Loader2 className="animate-spin" /> Sending...
                        </span>
                    ) : isSuccess ? (
                        "Message Sent"
                    ) : (
                        "studio@gallery.com"
                    )}
                </button>

                <div className="mt-16 flex justify-center gap-8 text-sm uppercase tracking-widest text-gray-500">
                    <a href="#" className="hover:text-black transition-colors">Instagram</a>
                    <a href="#" className="hover:text-black transition-colors">Behance</a>
                    <a href="#" className="hover:text-black transition-colors">Unsplash</a>
                </div>
            </div>
        </section>
    );
}
