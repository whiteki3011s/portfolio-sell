'use client';

import React from 'react';

export default function SwissFooter() {
    return (
        <footer className="bg-[#F5F5F5] border-t border-black pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-4xl font-bold mb-8 tracking-tight">Let's collaborate.</h3>
                        <a href="mailto:hello@swiss.design" className="text-2xl hover:text-red-600 transition-colors border-b-2 border-black hover:border-red-600 pb-1 inline-block">
                            hello@swiss.design
                        </a>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Social</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-red-600 transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Behance</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Office</h4>
                        <address className="not-italic space-y-2">
                            <p>Bahnhofstrasse 10</p>
                            <p>8001 Zurich</p>
                            <p>Switzerland</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-black pt-8 flex flex-col md:flex-row justify-between items-end">
                    <div className="text-9xl font-bold leading-none opacity-10 select-none">
                        SWISS
                    </div>
                    <div className="text-sm font-mono mt-8 md:mt-0">
                        © 2025 Swiss Style Template. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
