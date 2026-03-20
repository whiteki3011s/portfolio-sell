'use client';

import { useState } from 'react';
import MenuButton from './MenuButton';
import MenuOverlay from './MenuOverlay';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <MenuButton isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
            <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            {children}
        </>
    );
}
