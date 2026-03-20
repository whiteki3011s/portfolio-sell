'use client';

import { motion } from 'framer-motion';

export default function HeroGradient() {
    return (
        <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob" />
                <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[80%] h-[80%] bg-pink-600 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob animation-delay-4000" />
            </div>

            {/* Glassmorphism Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="backdrop-blur-lg bg-white/10 border border-white/20 p-12 md:p-20 rounded-3xl shadow-2xl"
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
                        Flow State.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Immersive digital experiences that blend color, motion, and emotion into a seamless journey.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Explore Work
                        </button>
                        <button className="px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-md">
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
}
