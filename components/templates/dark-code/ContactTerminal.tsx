'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { Terminal, Loader2, Check } from 'lucide-react';

export default function DarkContact() {
    const { handleSubmit, isSubmitting, isSuccess } = useContactForm();

    return (
        <section className="py-24 bg-[#0D1117] text-[#C9D1D9] font-mono border-t border-[#30363D]">
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <h2 className="text-2xl font-bold text-white mb-8">
                    <span className="text-[#238636]">$</span> echo "Let's Connect"
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                    <button
                        onClick={(e) => handleSubmit(e as any)}
                        disabled={isSubmitting || isSuccess}
                        className="px-6 py-3 bg-[#21262D] border border-[#30363D] rounded hover:bg-[#30363D] transition-colors text-[#58A6FF] flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" size={16} />
                                ./sending.sh
                            </>
                        ) : isSuccess ? (
                            <>
                                <Check size={16} />
                                sent_success
                            </>
                        ) : (
                            <>
                                <Terminal size={16} />
                                ./send_email.sh
                            </>
                        )}
                    </button>
                    <a href="#" className="px-6 py-3 bg-[#21262D] border border-[#30363D] rounded hover:bg-[#30363D] transition-colors text-[#58A6FF]">
                        github.com/dev
                    </a>
                    <a href="#" className="px-6 py-3 bg-[#21262D] border border-[#30363D] rounded hover:bg-[#30363D] transition-colors text-[#58A6FF]">
                        twitter.com/dev
                    </a>
                </div>

                <div className="text-sm text-[#8B949E]">
                    <p>-- End of Line --</p>
                </div>
            </div>
        </section>
    );
}
