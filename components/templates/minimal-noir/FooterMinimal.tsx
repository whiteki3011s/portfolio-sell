'use client';

export default function FooterMinimal() {
    return (
        <footer className="bg-white text-black py-12 px-6 md:px-12 border-t border-black/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <h3 className="text-2xl font-bold tracking-tighter mb-2">MINIMAL NOIR</h3>
                    <p className="text-sm text-black/50">© 2024 All Rights Reserved.</p>
                </div>
                <div className="flex gap-8">
                    <a href="#" className="text-sm font-bold uppercase tracking-widest hover:underline">Instagram</a>
                    <a href="#" className="text-sm font-bold uppercase tracking-widest hover:underline">LinkedIn</a>
                    <a href="#" className="text-sm font-bold uppercase tracking-widest hover:underline">Behance</a>
                </div>
            </div>
        </footer>
    );
}
