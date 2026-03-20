'use client';

import { useState } from 'react';
import Hero3D from './Hero3D';
import Projects3D from './Projects3D';
import Showreel3D from './Showreel3D';
import Breakdowns3D from './Breakdowns3D';
import About3D from './About3D';
import Contact3D from './Contact3D';
import MenuOverlay from './MenuOverlay';
import LoadingScreen from './LoadingScreen';
import { AnimatePresence, motion } from 'framer-motion';

export default function Rechrome3DLayout() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="bg-[#0B0B0E] min-h-screen text-white selection:bg-[#00E5FF] selection:text-black">
            <AnimatePresence>
                {loading && (
                    <LoadingScreen onLoadComplete={() => setLoading(false)} />
                )}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <MenuOverlay />
                    <Hero3D />
                    <Showreel3D />
                    <Projects3D />
                    <Breakdowns3D />
                    <About3D />
                    <Contact3D />
                </motion.div>
            )}
        </div>
    );
}
