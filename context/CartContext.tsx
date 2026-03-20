'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { IPortfolio } from '@/models/Portfolio';

interface CartContextType {
    items: IPortfolio[];
    isOpen: boolean;
    addToCart: (item: IPortfolio) => void;
    removeFromCart: (itemId: string) => void;
    toggleCart: () => void;
    clearCart: () => void;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<IPortfolio[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to parse cart', e);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (item: IPortfolio) => {
        setItems(prev => {
            if (prev.find(i => i._id === item._id)) return prev;
            return [...prev, item];
        });
        setIsOpen(true); // Open cart when adding
    };

    const removeFromCart = (itemId: string) => {
        setItems(prev => prev.filter(i => i._id !== itemId));
    };

    const toggleCart = () => setIsOpen(prev => !prev);

    const clearCart = () => setItems([]);

    const totalPrice = items.reduce((total, item) => {
        // Parse price string "₹14,999" -> 14999
        const priceString = item.price.replace(/[^0-9]/g, '');
        const price = parseInt(priceString) || 0;
        return total + price;
    }, 0);

    return (
        <CartContext.Provider value={{ items, isOpen, addToCart, removeFromCart, toggleCart, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
