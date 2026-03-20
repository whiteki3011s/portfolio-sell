import DemoLayoutWrapper from '@/components/templates/rechrome-cinematic-video-editor/DemoLayoutWrapper';
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import LayoutClient from '@/components/templates/rechrome-cinematic-video-editor/LayoutClient';

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Creative developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      
        <LayoutClient><DemoLayoutWrapper>{children}</DemoLayoutWrapper></LayoutClient>
      
    
  );
}
