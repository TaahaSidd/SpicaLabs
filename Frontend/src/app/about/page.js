"use client";
import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function AboutPage() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen text-[#E0E0E0] font-mono selection:bg-teal-500 overflow-x-hidden">

            {/* --- TECHNICAL GRID BACKGROUND --- */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                 style={{
                     backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                     backgroundSize: '40px 40px'
                 }}>
            </div>

            {/* HEADER */}
            <nav className="relative z-10 p-6 md:p-8 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/"
                      className="font-black tracking-tighter text-lg md:text-xl text-white group flex items-center gap-2">
                    SYSTEM<span className="text-white/20">_CORE</span>
                </Link>
                <div className="hidden sm:block text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                    UID: T_Siddiqui // 2026
                </div>
            </nav>

            <section className="relative z-10 max-w-7xl mx-auto px-6 py-10 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT COLUMN: IDENTITY & BIO */}
                    <div className="lg:col-span-7 space-y-10 md:space-y-12">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            {/* Fluid Responsive Typography */}
                            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.8] mb-8 uppercase">
                                TAAHA <br/>SIDDIQUI.
                            </h1>
                            <div className="flex flex-wrap gap-3 items-center">
                                <span
                                    className="text-[9px] font-black uppercase tracking-[0.3em] bg-teal-400/10 text-teal-400 px-3 py-1 border border-teal-400/20">
                                    Software_Engineer
                                </span>
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                                    Full_Stack_Systems
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.3}}
                            className="max-w-xl space-y-6"
                        >
                            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-sans">
                                I engineer full-stack software systems with a focus on Java backend
                                architectures and high-fidelity mobile experiences using React Native.
                            </p>
                            <p className="text-xs md:text-sm text-white/30 leading-relaxed italic border-l border-teal-400/30 pl-6">
                                "Engineering is the process of resolving complexity through intentional
                                architecture. I prioritize system integrity and maintainable logic."
                            </p>
                        </motion.div>

                        {/* EXTERNAL PORTFOLIO UPLINK */}
                        <motion.div
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5}}
                        >
                            <a
                                href="https://taahasiddportfolio.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex flex-col gap-4 p-6 md:p-8 border border-white/5 rounded-sm bg-white/[0.01] hover:bg-teal-400/[0.02] hover:border-teal-400/30 transition-all duration-500 w-full md:w-auto md:min-w-[400px]"
                            >
                                <div className="flex justify-between items-center gap-6">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-teal-400">External_Uplink</p>
                                        <h3 className="text-lg md:text-xl font-black tracking-tighter text-white uppercase">Legacy_Portfolio_v1</h3>
                                    </div>
                                    <div
                                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-teal-400 group-hover:text-black group-hover:border-teal-400 transition-all">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" strokeWidth="3">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: DATA BLOCKS */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* TECH SPEC BOX */}
                        <div
                            className="p-6 md:p-8 border border-white/5 bg-white/[0.01] rounded-sm relative overflow-hidden group">
                            <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 mb-8 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-teal-400"></span> Technical_Specifications
                            </h3>

                            <div className="grid grid-cols-1 gap-5">
                                {[
                                    {label: 'Backend', val: 'Java / Spring Boot / PSQL'},
                                    {label: 'Frontend', val: 'React / Next.js / Tailwind'},
                                    {label: 'Mobile', val: 'React Native / Expo'},
                                    {label: 'Services', val: 'Firebase / Cloudinary'}
                                ].map((item, i) => (
                                    <div key={i}
                                         className="flex justify-between items-end border-b border-white/5 pb-2">
                                        <span
                                            className="text-[8px] text-white/20 uppercase tracking-tighter">{item.label}</span>
                                        <span
                                            className="text-[10px] font-bold text-white/70 uppercase">{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STATUS GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 border border-white/5 bg-white/[0.01] rounded-sm">
                                <p className="text-[8px] text-white/20 uppercase mb-3">Origin</p>
                                <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">India_IST</p>
                            </div>
                            <div className="p-6 border border-white/5 bg-white/[0.01] rounded-sm">
                                <p className="text-[8px] text-white/20 uppercase mb-3">Availability</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></span>
                                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">Open_Session</p>
                                </div>
                            </div>
                        </div>

                        {/* RAW OBJECT DECORATION */}
                        <div
                            className="p-6 border border-white/5 bg-black/40 rounded-sm font-mono text-[9px] leading-relaxed text-teal-400/40">
                            <p>{"{"}</p>
                            <p className="pl-4">"identity": "Taaha Siddiqui",</p>
                            <p className="pl-4">"focus": ["Scalability", "Maintainability"],</p>
                            <p className="pl-4">"stack": "Enterprise_Fullstack",</p>
                            <p className="pl-4">"status": "Ready"</p>
                            <p>{"}"}</p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}