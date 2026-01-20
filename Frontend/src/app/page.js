"use client";
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Code2, Zap, Database, Smartphone, Cpu, Globe } from 'lucide-react';

export default function Home() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit'}));
        }, 1000);

        return () => {
            lenis.destroy();
            clearInterval(timer);
        }
    }, []);

    const projects = [
        {id: '01', name: 'Agora', status: 'Beta', type: 'Marketplace', tech: 'Java + Spring + RN'},
        {id: '02', name: 'Pulse', status: 'R&D', type: 'Fin-Tech', tech: 'Java + Spring + RN'},
        {id: '03', name: 'AirVista', status: 'Concept', type: 'Visuals', tech: 'Java + Spring + RN'},
        {id: '04', name: 'Lyra', status: 'Concept', type: 'SaaS', tech: 'Java + Spring Ai + RN'},
    ];

    return (
        <main className="bg-[#0A0A0A] text-[#E0E0E0] selection:bg-teal-500 font-mono overflow-x-hidden">

            {/* --- TECHNICAL GRID --- */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                 style={{
                     backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                     backgroundSize: '40px 40px'
                 }}>
            </div>

            {/* HEADER - CLEAN VERSION */}
            <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#0A0A0A]/90 backdrop-blur-md px-6 md:px-12 py-6 flex justify-between items-center">
                {/* BRAND MARK */}
                <div className="flex items-center gap-3">
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-white/90">SpicaLabs</span>
                </div>

                {/* NAV LINKS */}
                <div className="flex gap-8 md:gap-12 text-[11px] md:text-xs uppercase tracking-[0.2em] font-black">
                    <Link href="/inventory" className="text-white/40 hover:text-teal-400 transition-colors">Inventory</Link>
                    <Link href="/about" className="text-white/40 hover:text-teal-400 transition-colors">About</Link>
                    <a href="https://github.com/TaahaSidd" target="_blank" className="text-white/20 hover:text-white transition-colors">GitHub</a>
                </div>
            </nav>

            {/* HERO SECTION - CLEAN TITLES */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
                <motion.div initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
                    <p className="text-[11px] uppercase tracking-[0.5em] text-teal-400 mb-6 font-black">
                        Systems_Engineering_Archive
                    </p>
                    {/* Italics removed from Hero */}
                    <h1 className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[9.5rem] font-black tracking-tighter leading-[0.85] mb-12 text-white uppercase break-words">
                        Software <br/> Engineering <br/> Systems.
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <p className="max-w-md text-white/50 font-medium text-base md:text-lg leading-relaxed font-sans">
                            Building scalable backend architectures and high-fidelity
                            digital interfaces. Focused on bridging Java ecosystems with
                            cross-platform mobile logic.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-l-2 border-teal-400/40 pl-8">
                            <div>
                                <p className="text-[10px] text-teal-400 uppercase font-black mb-2 tracking-widest">Backend_Logic</p>
                                <p className="text-sm font-bold text-white uppercase">Java / Spring Boot / PSQL</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-teal-400 uppercase font-black mb-2 tracking-widest">Mobile_Frontend</p>
                                <p className="text-sm font-bold text-white uppercase">React Native / Next.js</p>
                            </div>
                            <div className="sm:col-span-2 pt-4 border-t border-white/5">
                                <p className="text-[10px] text-teal-400 uppercase font-black mb-2 tracking-widest">Cloud_Infra</p>
                                <p className="text-sm font-bold text-white uppercase tracking-tight">Firebase / Cloudinary / RESTful API</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* MARQUEE */}
            <section className="py-10 border-y border-white/10 bg-[#080808]/50 backdrop-blur-sm overflow-hidden relative">
                <div className="flex overflow-hidden group">
                    <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
                        {[
                            { name: 'Java', icon: <Code2 size={28} /> },
                            { name: 'Spring Boot', icon: <Zap size={28} /> },
                            { name: 'PostgreSQL', icon: <Database size={28} /> },
                            { name: 'React Native', icon: <Smartphone size={28} /> },
                            { name: 'TypeScript', icon: <Cpu size={28} /> },
                            { name: 'Firebase', icon: <Globe size={28} /> },
                        ].map((tech, i) => (
                            <div key={i} className="flex items-center gap-6 group/item transition-colors duration-300">
                                <div className="text-teal-400/40 group-hover/item:text-teal-400 transition-colors">
                                    {tech.icon}
                                </div>
                                <span className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white/20 group-hover/item:text-white transition-colors">
                                    {tech.name}
                                </span>
                                <div className="w-2.5 h-2.5 rounded-full bg-teal-400/20 ml-4"></div>
                            </div>
                        ))}
                        {/* Ensure you duplicate the above .map here for the continuous loop effect */}
                    </div>
                </div>
            </section>

            {/* PROJECT LOG */}
            <section className="py-24 md:py-40 px-6 md:px-20">
                <h3 className="text-[11px] uppercase tracking-[0.5em] text-white/30 mb-14 font-black">Recent Deployments</h3>
                <div className="border-t border-white/10">
                    {projects.map((proj, i) => (
                        <Link key={i} href={`/products/${proj.name.toLowerCase()}`}
                              className="group block border-b border-white/5 py-10 md:py-16 hover:bg-teal-400/[0.02] transition-all px-4">
                            <div className="flex flex-col md:grid md:grid-cols-4 gap-6 md:items-center">
                                <div className="flex items-center gap-6">
                                    <span className="text-teal-400/40 text-xs font-black font-mono">0{i + 1}</span>
                                    <span className="text-3xl md:text-5xl font-black group-hover:text-teal-400 transition-colors tracking-tighter text-white uppercase">{proj.name}</span>
                                </div>
                                <span className="text-xs uppercase text-white/40 tracking-[0.2em] font-black">{proj.type}</span>
                                <span className="text-sm text-white/60 font-bold tracking-wide uppercase">{proj.tech}</span>
                                <div className="flex md:justify-end">
                        <span className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] ${proj.status === 'Beta' || proj.status === 'Live' ? 'bg-teal-500 text-black' : 'border border-white/20 text-white/40'}`}>
                            {proj.status}
                        </span>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* REDIRECT TO REGISTRY */}
                    <Link href="/inventory" className="group block border-b border-white/5 py-12 hover:bg-white/[0.02] transition-all">
                        <div className="flex justify-between items-center px-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.4em]">Central Registry</span>
                                <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                        Access Full Archive —&gt;
                    </span>
                            </div>
                            <div className="hidden md:block">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
                        Total Logged: {projects.length}
                    </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* LOGIC SECTION */}
            <section className="py-24 px-6 md:px-20 border-t border-white/5 bg-[#0D0D0D]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8 font-mono text-sm text-white/40">
                        <p><span className="text-teal-400 font-black">01_</span> Designing for long-term scalability.</p>
                        <p><span className="text-teal-400 font-black">02_</span> Prioritizing type-safety in backend architecture.</p>
                        <p><span className="text-teal-400 font-black">03_</span> Engineering modular cross-platform components.</p>
                    </div>
                    <div className="border-l-2 border-teal-400/20 pl-10 flex items-center">
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed font-sans font-medium uppercase tracking-tight">
                            "I focus on solving complex logic problems first, ensuring the
                            aesthetic layer rests on a stable, high-performance foundation."
                        </p>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="py-40 px-6 text-center bg-[#E0E0E0] text-[#0A0A0A]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-10 font-sans uppercase">
                        Architecture is <br/> intentional.
                    </h2>
                    <p className="text-xs font-black opacity-40 uppercase tracking-[0.6em]">Software Systems // 2026</p>
                </div>
            </section>

            {/* FOOTER - CLEAN INDUSTRIAL VERSION */}
            <footer className="py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-7xl mx-auto">

                    {/* LEFT COLUMN: NAVIGATION */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <p className="text-[11px] uppercase tracking-[0.4em] text-teal-400 font-black">Platform Index</p>
                            <div className="h-px w-8 bg-teal-400/30"></div>
                        </div>

                        <nav className="flex flex-col gap-4">
                            <a href="https://github.com/TaahaSidd" target="_blank" className="block text-sm font-black hover:text-teal-400 transition-colors uppercase tracking-widest text-white/80">
                                GitHub Repository
                            </a>
                            <Link href="/about" className="block text-sm font-black hover:text-teal-400 transition-colors uppercase tracking-widest text-white/80">
                                Technical Archive
                            </Link>
                            <Link href="/inventory" className="block text-sm font-black hover:text-teal-400 transition-colors uppercase tracking-widest text-white/80">
                                Project Inventory
                            </Link>
                        </nav>
                    </div>

                    {/* RIGHT COLUMN: CONTACT (SPAN 2) */}
                    <div className="md:col-span-2 flex flex-col md:items-end">
                        <div className="space-y-2 mb-8 md:text-right">
                            <p className="text-[11px] uppercase tracking-[0.4em] text-white/30 font-black">Direct Inquiries</p>
                            <div className="h-px w-8 bg-white/10 md:ml-auto"></div>
                        </div>

                        <a href="mailto:taaha@system.dev"
                           className="text-3xl sm:text-4xl md:text-6xl font-black text-white hover:text-teal-400 transition-all break-all tracking-tighter lowercase underline decoration-white/10 underline-offset-[12px] hover:decoration-teal-400/40">
                            taaha@system.dev
                        </a>

                        <div className="mt-12 flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
                            <span>© 2026 SpicaLabs Studio</span>
                            <span>All Rights Reserved</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}