'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { Loader2, Check } from 'lucide-react';

export default function StudioFooter() {
    const { handleSubmit, isSubmitting, isSuccess } = useContactForm();

    return (
        <footer className="bg-slate-900 text-white py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-6">Studio Grid</h2>
                        <p className="text-slate-400 max-w-sm mb-8">
                            A strategic design agency building digital products for the future.
                        </p>
                        <form onSubmit={handleSubmit} className="flex gap-4">
                            <input
                                required
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500 flex-1"
                            />
                            <button
                                disabled={isSubmitting || isSuccess}
                                className="bg-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : isSuccess ? <Check size={16} /> : "Subscribe"}
                            </button>
                        </form>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6">Company</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6">Social</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between text-slate-500 text-sm">
                    <p>&copy; 2024 Studio Grid. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
