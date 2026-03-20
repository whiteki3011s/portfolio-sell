'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { Loader2 } from 'lucide-react';

export default function BrutalContact() {
    const { handleSubmit, isSubmitting, isSuccess } = useContactForm();

    return (
        <section className="py-32 px-4 md:px-12 bg-[#171717] text-[#FAFAFA] border-x-4 border-b-4 border-[#FAFAFA] mx-4 md:mx-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-[10vw] leading-[0.8] font-black uppercase tracking-tighter mb-8 break-words">
                        WORK<br />WITH<br />US
                    </h2>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="space-y-8 text-2xl font-mono uppercase">
                        <button
                            onClick={(e) => {
                                // Simulate form submission for this brutalist button
                                handleSubmit(e as any);
                            }}
                            disabled={isSubmitting || isSuccess}
                            className="w-full text-left block hover:bg-[#FAFAFA] hover:text-[#171717] p-2 transition-colors border-2 border-[#FAFAFA]"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">CONNECTING... <Loader2 className="animate-spin" /></span>
                            ) : isSuccess ? (
                                "MESSAGE SENT_ACK"
                            ) : (
                                "INITIATE_CONTACT_PROTOCOL"
                            )}
                        </button>
                        <a href="#" className="block hover:bg-[#FAFAFA] hover:text-[#171717] p-2 transition-colors border-2 border-[#FAFAFA]">
                            Instagram
                        </a>
                        <a href="#" className="block hover:bg-[#FAFAFA] hover:text-[#171717] p-2 transition-colors border-2 border-[#FAFAFA]">
                            Twitter
                        </a>
                    </div>
                    <p className="mt-12 font-mono text-sm">
                        &copy; 2024 Brutal Edge. No Rights Reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
