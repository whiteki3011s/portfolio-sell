'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Layout,
    Code2,
    Zap,
    Database,
    Gauge,
    Cloud,
    ArrowRight,
    Check,
    GitBranch,
    Server,
    User,
    Smartphone,
    Monitor
} from 'lucide-react';

// --- Micro-Visual Components ---

const UiUxVisual = () => (
    <div className="w-full h-24 bg-background/50 rounded-lg border border-border/50 relative overflow-hidden p-4 flex items-center justify-center">
        <div className="relative w-24 h-16">
            {/* Messy State */}
            <motion.div
                className="absolute inset-0 flex flex-wrap gap-2 opacity-100"
                animate={{ opacity: [1, 0, 0, 1] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
            >
                <div className="w-8 h-8 bg-primary/20 rounded-full absolute top-0 left-8" />
                <div className="w-16 h-4 bg-muted rounded absolute bottom-0 right-0" />
                <div className="w-4 h-12 bg-muted rounded absolute top-2 left-0" />
            </motion.div>

            {/* Clean Grid State */}
            <motion.div
                className="absolute inset-0 grid grid-cols-2 gap-2 opacity-0"
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
            >
                <div className="bg-primary/20 rounded-md w-full h-full" />
                <div className="bg-muted/50 rounded-md w-full h-full" />
                <div className="bg-muted/50 rounded-md w-full h-full" />
                <div className="bg-muted/50 rounded-md w-full h-full" />
            </motion.div>
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-muted-foreground">
            Auto-Layout
        </div>
    </div>
);

const FrontendVisual = () => (
    <div className="w-full h-32 bg-background/50 rounded-lg border border-border/50 relative overflow-hidden p-3 font-mono text-[10px]">
        <div className="space-y-1.5 opacity-70">
            <div className="flex gap-2">
                <span className="text-purple-400">const</span>
                <span className="text-blue-400">Button</span>
                <span>=</span>
                <span>()</span>
                <span>=&gt;</span>
            </div>
            <div className="pl-4 flex gap-2">
                <span className="text-cyan-400">&lt;button&gt;</span>
            </div>
            <div className="pl-8 text-green-400">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    "Click Me"
                </motion.span>
            </div>
            <div className="pl-4 text-cyan-400">&lt;/button&gt;</div>
        </div>

        <motion.div
            className="absolute top-4 right-4 px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-sans shadow-lg shadow-primary/20"
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            Click Me
        </motion.div>
    </div>
);

const MotionVisual = () => (
    <div className="w-full h-32 bg-background/50 rounded-lg border border-border/50 relative overflow-hidden flex items-center justify-center">
        <motion.div
            className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl shadow-lg shadow-purple-500/20"
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                borderRadius: ["12px", "50%", "12px"]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:10px_10px]" />
    </div>
);

const FullStackVisual = () => (
    <div className="w-full h-32 bg-background/50 rounded-lg border border-border/50 relative overflow-hidden flex items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <User className="w-4 h-4 text-muted-foreground" />
            </div>
        </div>

        <motion.div
            className="h-0.5 w-8 bg-muted overflow-hidden"
        >
            <motion.div
                className="h-full w-4 bg-primary"
                animate={{ x: [-16, 32] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        </motion.div>

        <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                <Server className="w-4 h-4 text-green-500" />
            </div>
        </div>

        <motion.div
            className="h-0.5 w-8 bg-muted overflow-hidden"
        >
            <motion.div
                className="h-full w-4 bg-primary"
                animate={{ x: [-16, 32] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
            />
        </motion.div>

        <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                <Database className="w-4 h-4 text-yellow-500" />
            </div>
        </div>
    </div>
);

const PerformanceVisual = () => (
    <div className="w-full h-32 bg-background/50 rounded-lg border border-border/50 relative overflow-hidden flex items-center justify-center">
        <div className="relative w-32 h-16 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-full bg-muted/30 rounded-t-full" />
            <motion.div
                className="absolute bottom-0 left-0 w-full h-full bg-green-500 rounded-t-full origin-bottom"
                initial={{ rotate: -180 }}
                whileInView={{ rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} // Half circle clip
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-12 bg-background rounded-t-full flex items-end justify-center pb-2">
                <span className="text-2xl font-bold text-green-500">100</span>
            </div>
        </div>
    </div>
);

const DeploymentVisual = () => (
    <div className="w-full h-32 bg-background/50 rounded-lg border border-border/50 relative overflow-hidden flex items-center justify-center">
        <div className="flex items-center gap-6">
            <div className="flex flex-col gap-2">
                <motion.div
                    className="w-2 h-2 rounded-full bg-blue-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                    className="w-2 h-2 rounded-full bg-blue-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
            </div>

            <GitBranch className="w-6 h-6 text-muted-foreground rotate-90" />

            <motion.div
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20"
                animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.2)", "0 0 0px rgba(255,255,255,0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Cloud className="w-6 h-6 text-white" />
            </motion.div>
        </div>
        <motion.div
            className="absolute bottom-3 right-3 flex gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        </motion.div>
    </div>
);

// --- Main Component ---

const services = [
    {
        tag: "UX / Product",
        title: "Product UI/UX Design",
        bullets: [
            "Wireframes to high-fidelity UI",
            "User-flows & content hierarchy",
            "Aesthetics meets usability"
        ],
        visual: UiUxVisual
    },
    {
        tag: "Frontend",
        title: "Frontend Engineering",
        bullets: [
            "Next.js + TypeScript architecture",
            "Pixel-perfect implementation",
            "Responsive across all devices"
        ],
        visual: FrontendVisual
    },
    {
        tag: "Animation",
        title: "Interaction & Motion",
        bullets: [
            "Framer Motion & GSAP magic",
            "Scroll-based storytelling",
            "Premium micro-interactions"
        ],
        visual: MotionVisual
    },
    {
        tag: "Full-Stack",
        title: "Full-Stack Web Apps",
        bullets: [
            "Secure Node.js APIs",
            "Real-time database sync",
            "Auth & dashboard systems"
        ],
        visual: FullStackVisual
    },
    {
        tag: "Performance",
        title: "Performance & SEO",
        bullets: [
            "90+ Lighthouse scores",
            "Advanced image optimization",
            "Technical SEO best practices"
        ],
        visual: PerformanceVisual
    },
    {
        tag: "Infra",
        title: "Deployment & Arch",
        bullets: [
            "CI/CD automated pipelines",
            "Global edge network delivery",
            "Scalable cloud architecture"
        ],
        visual: DeploymentVisual
    }
];

export default function ServicesSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section ref={containerRef} className="py-32 bg-background relative">
            <div className="container mx-auto px-4">

                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Services & <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        I design and build modern web experiences — from interface and motion to data, performance, and deployment.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border px-2 py-1 rounded-full">
                                    {service.tag}
                                </span>
                            </div>

                            {/* Visual */}
                            <div className="mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                                <service.visual />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <ul className="space-y-2">
                                {service.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-primary/50" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
