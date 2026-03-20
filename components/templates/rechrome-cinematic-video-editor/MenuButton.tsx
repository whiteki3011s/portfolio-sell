'use client';

interface MenuButtonProps {
    isOpen: boolean;
    toggle: () => void;
}

export default function MenuButton({ isOpen, toggle }: MenuButtonProps) {
    return (
        <button
            onClick={toggle}
            className="fixed top-8 right-8 z-[100] w-12 h-12 flex flex-col justify-center items-center gap-1.5 mix-blend-difference hover:scale-110 transition-transform"
        >
            <span
                className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
                className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
                className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
        </button>
    );
}
