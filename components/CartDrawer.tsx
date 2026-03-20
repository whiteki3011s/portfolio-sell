'use client';

import { useCart } from '@/context/CartContext';
import { X, Trash, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PaymentModal from './PaymentModal';

export default function CartDrawer() {
    const { items, isOpen, toggleCart, removeFromCart, totalPrice, clearCart } = useCart();
    const [showPayment, setShowPayment] = useState(false);

    const handleCheckout = () => {
        setShowPayment(true);
    };

    const handlePaymentSuccess = () => {
        setShowPayment(false);
        clearCart();
        toggleCart();
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleCart}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-white/10 z-50 shadow-2xl flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex items-center justify-between">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <ShoppingBag className="w-5 h-5 text-primary" />
                                    Your Cart ({items.length})
                                </h2>
                                <button onClick={toggleCart} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Items */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {items.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
                                        <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                                        <p>Your cart is empty.</p>
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <div key={item._id} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div
                                                className="w-20 h-20 rounded-lg bg-cover bg-center shrink-0"
                                                style={{ background: item.thumbnail }}
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold truncate">{item.title}</h3>
                                                <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-bold text-primary">{item.price}</span>
                                                    <button
                                                        onClick={() => removeFromCart(item._id!)}
                                                        className="p-1.5 hover:bg-red-500/20 text-muted-foreground hover:text-red-500 rounded-lg transition-colors"
                                                    >
                                                        <Trash className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Footer */}
                            {items.length > 0 && (
                                <div className="p-6 border-t border-white/10 bg-card">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-muted-foreground">Total</span>
                                        <span className="text-2xl font-bold">₹{totalPrice.toLocaleString('en-IN')}</span>
                                    </div>
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                                    >
                                        Checkout Now
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {showPayment && (
                <PaymentModal
                    items={items}
                    total={totalPrice}
                    onClose={() => setShowPayment(false)}
                    onSuccess={handlePaymentSuccess}
                />
            )}
        </>
    );
}
