'use client';

import React from 'react';

export default function SaaSFooter() {
    return (
        <footer className="bg-[#0B0F19] border-t border-slate-800 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-3xl p-12 text-center mb-24 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to transform your workflow?
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                            Join thousands of developers building the future with our platform.
                            Start your free trial today.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/25">
                                Start Free Trial
                            </button>
                            <button className="px-8 py-3 bg-[#151B2B] hover:bg-[#1E2538] text-white border border-slate-700 font-medium rounded-lg transition-colors">
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h4 className="text-white font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="hover:text-blue-400 cursor-pointer">Features</li>
                            <li className="hover:text-blue-400 cursor-pointer">Integrations</li>
                            <li className="hover:text-blue-400 cursor-pointer">Pricing</li>
                            <li className="hover:text-blue-400 cursor-pointer">Changelog</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="hover:text-blue-400 cursor-pointer">About</li>
                            <li className="hover:text-blue-400 cursor-pointer">Blog</li>
                            <li className="hover:text-blue-400 cursor-pointer">Careers</li>
                            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="hover:text-blue-400 cursor-pointer">Documentation</li>
                            <li className="hover:text-blue-400 cursor-pointer">API Reference</li>
                            <li className="hover:text-blue-400 cursor-pointer">Community</li>
                            <li className="hover:text-blue-400 cursor-pointer">Help Center</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-blue-400 cursor-pointer">Terms of Service</li>
                            <li className="hover:text-blue-400 cursor-pointer">Cookie Policy</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <div>© 2025 Dark SaaS Inc. All rights reserved.</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="hover:text-white cursor-pointer">Twitter</span>
                        <span className="hover:text-white cursor-pointer">GitHub</span>
                        <span className="hover:text-white cursor-pointer">Discord</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
