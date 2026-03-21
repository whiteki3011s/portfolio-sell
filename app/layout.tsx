import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import AuthProvider from '@/components/AuthProvider';
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "RECHROME - Portfolio Designs for Modern Developers & Designers",
    description: "Premium portfolio website templates built with Next.js, TypeScript, and Framer Motion. Ready-made and custom portfolio designs that actually look designed.",
    keywords: ["portfolio templates", "web design", "Next.js portfolio", "UI/UX", "developer portfolio", "designer portfolio", "RECHROME"],
    openGraph: {
        title: "RECHROME - Premium Portfolio Templates",
        description: "Elevate your digital presence with premium, developer-first portfolio templates.",
        url: "https://rechrome.design",
        siteName: "RECHROME",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "RECHROME Portfolio Templates",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "RECHROME - Premium Portfolio Templates",
        description: "Elevate your digital presence with premium, developer-first portfolio templates.",
        images: ["/og-image.jpg"],
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    themeColor: "#000000",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable} antialiased`}>
            <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
                <AuthProvider>
                    <CartProvider>
                        <SmoothScroll />
                        {children}
                        <CartDrawer />
                    </CartProvider>
                </AuthProvider>
                <Analytics />
            </body>
        </html>
    );
}
