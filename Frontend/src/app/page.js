"use client";
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import Lenis from '@studio-freight/lenis';

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

            {/* HEADER */}
            <nav
                className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#0A0A0A]/90 backdrop-blur-md px-4 md:px-10 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-2 py-1 border border-white/10 bg-white/5 rounded-sm">
                        <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></span>
                        <span
                            className="text-[7px] font-bold tracking-widest uppercase text-white/60">Status: Active</span>
                    </div>
                </div>
                <div className="flex gap-4 md:gap-8 text-[9px] uppercase tracking-widest font-bold">
                    <Link href="/inventory" className="hover:text-teal-400 transition-colors">Inv</Link>
                    <Link href="/about" className="hover:text-teal-400 transition-colors">About</Link>
                    <Link href="https://github.com/TaahaSidd" target="_blank" className="text-white/30">GitHub</Link>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
                <motion.div initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-teal-400 mb-6 font-black">
                        Systems_Engineering_Archive
                    </p>
                    {/* Fixed Hero Typography */}
                    <h1 className="text-4xl sm:text-6xl md:text-[7rem] lg:text-[9rem] font-black tracking-tighter leading-[0.9] mb-12 text-white uppercase break-words">
                        Software <br/> Engineering <br/> Systems.
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <p className="max-w-md text-white/40 font-medium text-sm md:text-base leading-relaxed font-sans">
                            Building scalable backend architectures and high-fidelity
                            digital interfaces. Focused on bridging Java ecosystems with
                            cross-platform mobile logic.
                        </p>

                        {/* STACK SPECIFICATIONS - FIXED ALIGNMENT */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-l border-teal-400/20 pl-6">
                            <div>
                                <p className="text-[8px] text-white/20 uppercase mb-1">Backend_Logic</p>
                                <p className="text-[10px] font-bold text-white/70">Java / Spring Boot / PSQL</p>
                            </div>
                            <div>
                                <p className="text-[8px] text-white/20 uppercase mb-1">Mobile_Frontend</p>
                                <p className="text-[10px] font-bold text-white/70">React Native / Next.js</p>
                            </div>
                            <div className="sm:col-span-2 pt-2 border-t border-white/5">
                                <p className="text-[8px] text-white/20 uppercase mb-1">Cloud_Infra</p>
                                <p className="text-[10px] font-bold text-white/70 tracking-tight">Firebase / Cloudinary
                                    / RESTful API</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* MARQUEE */}
            <section className="py-4 border-y border-white/5 bg-[#080808]">
                <div className="flex overflow-hidden group">
                    <div
                        className="animate-marquee flex items-center gap-12 whitespace-nowrap text-[8px] font-black uppercase tracking-[0.3em] text-white/10">
                        {['Java', 'Spring Boot', 'PostgreSQL', 'React Native', 'TypeScript', 'Firebase', 'Java', 'Spring Boot', 'PostgreSQL', 'React Native', 'TypeScript', 'Firebase'].map((tech, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span className="w-1 h-[1px] bg-teal-400"></span>
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECT LOG - FIXED RESPONSIVENESS */}
            <section className="py-20 md:py-32 px-6 md:px-20">
                <h3 className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-10">Recent_Deployments</h3>
                <div className="border-t border-white/5">
                    {projects.map((proj, i) => (
                        <Link key={i} href={`/products/${proj.name.toLowerCase()}`}
                              className="group block border-b border-white/5 py-8 md:py-12 hover:bg-teal-400/[0.02] transition-all">
                            <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:items-center">
                                <div className="flex items-center gap-4">
                                    <span className="text-teal-400/30 text-[9px] font-bold">0{i + 1}</span>
                                    <span
                                        className="text-2xl md:text-4xl font-black group-hover:text-teal-400 transition-colors tracking-tighter text-white uppercase">{proj.name}</span>
                                </div>
                                <span
                                    className="text-[9px] md:text-[10px] uppercase text-white/20 tracking-widest">{proj.type}</span>
                                <span className="text-[9px] md:text-[10px] text-white/40 font-bold">{proj.tech}</span>
                                <div className="flex md:justify-end">
                                    <span
                                        className={`px-3 py-1 text-[8px] font-black uppercase tracking-widest ${proj.status === 'Live' ? 'bg-teal-500 text-black' : 'border border-white/10 text-white/20'}`}>
                                        {proj.status}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* LOGIC SECTION */}
            <section className="py-20 px-6 md:px-20 border-t border-white/5 bg-[#0D0D0D]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6 font-mono text-xs text-white/40">
                        <p><span className="text-teal-400">01_</span> Designing for long-term scalability.</p>
                        <p><span className="text-teal-400">02_</span> Prioritizing type-safety in backend architecture.
                        </p>
                        <p><span className="text-teal-400">03_</span> Engineering modular cross-platform components.</p>
                    </div>
                    <div className="border-l border-teal-400/20 pl-8 flex items-center">
                        <p className="text-xs md:text-sm text-white/50 leading-relaxed font-sans italic">
                            "I focus on solving complex logic problems first, ensuring the
                            aesthetic layer rests on a stable, high-performance foundation."
                        </p>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="py-32 px-6 text-center bg-[#E0E0E0] text-[#0A0A0A]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-none mb-8 font-sans uppercase">
                        Architecture is <br/> intentional.
                    </h2>
                    <p className="text-[9px] font-black opacity-30 uppercase tracking-[0.5em]">Software Systems //
                        2026</p>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 px-6 bg-[#0A0A0A] border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-7xl mx-auto">
                    <div className="space-y-4">
                        <p className="text-[9px] uppercase tracking-widest text-teal-400">Uplink</p>
                        <a href="https://github.com/TaahaSidd"
                           className="block text-xs font-bold hover:text-white transition-colors">GitHub_Access</a>
                        <Link href="/about"
                              className="block text-xs font-bold hover:text-white transition-colors">Developer_Archive</Link>
                    </div>
                    <div className="md:col-span-2 flex flex-col md:items-end">
                        <p className="text-[9px] uppercase tracking-widest text-white/20 mb-4">Inquiries</p>
                        <a href="mailto:taaha@system.dev"
                           className="text-xl md:text-4xl font-black text-white hover:text-teal-400 transition-all break-all tracking-tighter lowercase">taaha@system.dev</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}