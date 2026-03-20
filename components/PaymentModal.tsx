'use client';

import { IPortfolio } from '@/models/Portfolio';
import { X, Check, Copy, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface PaymentModalProps {
    items: IPortfolio[];
    total: number;
    onClose: () => void;
    onSuccess: () => void;
}

export default function PaymentModal({ items, total, onClose, onSuccess }: PaymentModalProps) {
    const [copied, setCopied] = useState(false);
    const upiId = '8770846086@ybl';
    const whatsappNumber = '918770846086';

    const handleCopy = () => {
        navigator.clipboard.writeText(upiId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSendOrder = () => {
        const itemNames = items.map(i => i.title).join(', ');
        const message = `Hi, I just paid ₹${total.toLocaleString('en-IN')} via UPI for the following templates: ${itemNames}. Please send the files.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        onSuccess();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-card border border-white/10 rounded-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold mb-6">Complete Purchase</h2>

                {/* Order Summary */}
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Order Summary</h3>
                    <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                        {items.map(item => (
                            <div key={item._id} className="flex justify-between text-sm">
                                <span>{item.title}</span>
                                <span className="font-mono">{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-primary">₹{total.toLocaleString('en-IN')}</span>
                    </div>
                </div>

                {/* Payment Details */}
                <div className="space-y-4 mb-8">
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">Pay via UPI to</p>
                        <div className="flex items-center justify-center gap-2 bg-primary/10 p-3 rounded-lg border border-primary/20">
                            <span className="font-mono font-bold text-lg">{upiId}</span>
                            <button
                                onClick={handleCopy}
                                className="p-2 hover:bg-primary/20 rounded-md transition-colors"
                                title="Copy UPI ID"
                            >
                                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                        Scan via GPay, PhonePe, Paytm, or any UPI app.
                    </p>
                </div>

                {/* Actions */}
                <button
                    onClick={handleSendOrder}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                    <MessageCircle className="w-5 h-5" />
                    I've Paid, Send Order on WhatsApp
                </button>
            </div>
        </div>
    );
}
