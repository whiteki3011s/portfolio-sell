'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { Loader2, CheckCircle, Send } from 'lucide-react';

export default function LightContact() {
    const { handleSubmit, isSubmitting, isSuccess } = useContactForm();

    return (
        <section className="py-24 bg-white text-gray-900">
            <div className="container mx-auto px-6 md:px-12 max-w-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                    <p className="text-gray-500">Send me a message and I'll get back to you.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input required type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input required type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea required rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className={`w-full py-4 font-bold rounded-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 ${isSuccess
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Sending...
                            </>
                        ) : isSuccess ? (
                            <>
                                <CheckCircle size={20} />
                                Message Sent!
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
