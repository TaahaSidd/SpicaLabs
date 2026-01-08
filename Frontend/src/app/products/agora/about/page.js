"use client";

import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function AboutPage() {
    return (
        <main
            className="bg-white min-h-screen text-slate-900 selection:bg-[#008BFD] selection:text-white font-sans overflow-x-hidden">

            {/* --- NAV --- */}
            <nav
                className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 md:px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/products/agora" className="flex items-center gap-2 group">
                        <div
                            className="w-8 h-8 md:w-9 md:h-9 bg-[#008BFD] rounded-xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg shadow-blue-500/20">A
                        </div>
                        <span className="font-bold tracking-tighter text-xl md:text-2xl text-slate-900">Agora</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/products/agora"
                              className="text-sm font-bold text-slate-500 hover:text-[#008BFD] transition-colors">Home</Link>
                        <Link href="/products/agora/universities"
                              className="text-sm font-bold text-slate-500 hover:text-[#008BFD] transition-colors">Universities</Link>
                        <button
                            className="bg-[#008BFD] text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-blue-600 transition-all shadow-md">
                            Get App
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- HERO: THE SOLO MISSION --- */}
            <section className="pt-40 pb-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
                        <span
                            className="text-[#008BFD] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Our Origin</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                            One developer. <br/>
                            <span className="text-[#008BFD]">One Campus mission.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
                            Agora started as a solo project at SpicaLabs to solve a real problem: campus trading was
                            scattered across untrusted groups. I wanted to build a single, secure home for the student
                            economy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- CORE VISION --- */}
            <section className="px-6 mb-32">
                <div className="max-w-5xl mx-auto relative">
                    <motion.div initial={{scale: 0.95, opacity: 0}} whileInView={{scale: 1, opacity: 1}}
                                transition={{duration: 1}}
                                className="bg-[#008BFD] rounded-[3rem] p-10 md:p-16 overflow-hidden relative shadow-2xl shadow-blue-500/20">
                        <div className="relative z-10 max-w-lg">
                            <h2 className="text-white text-3xl md:text-4xl font-black mb-6">Built for the Grind.</h2>
                            <p className="text-blue-50 text-lg font-medium opacity-90 leading-relaxed">
                                Being a solo dev means no corporate interference. Every update is based on actual
                                student feedback. Agora is designed to be lean, fast, and strictly for the campus
                                community.
                            </p>
                        </div>
                        {/* iPhone Mockup Positioning */}
                        <img src="/iPhone%2013%20Pro.png"
                             className="absolute right-[-60px] md:right-[-100px] bottom-[-150px] w-full max-w-[350px] md:max-w-[450px] rotate-[-10deg] drop-shadow-2xl opacity-30 md:opacity-100"
                             alt="Agora Interface"/>
                    </motion.div>
                </div>
            </section>

            {/* --- THE PHILOSOPHY --- */}
            <section className="py-24 bg-slate-50 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-4 mb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-4xl font-black mb-6 leading-tight">The Agora <br/><span
                                className="text-[#008BFD]">Philosophy.</span></h3>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-sm text-xl">🛡️
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Trust is Priority</h4>
                                        <p className="text-slate-500 text-sm font-medium">No outsiders. By using .edu
                                            verification, we ensure you are always dealing with a fellow student.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-sm text-xl">♻️
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Circular Economy</h4>
                                        <p className="text-slate-500 text-sm font-medium">Pass down books, tech, and
                                            furniture. Reduce waste and keep value within the campus ecosystem.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-sm text-xl">⚡
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Direct Exchange</h4>
                                        <p className="text-slate-500 text-sm font-medium">Integrated chat and offer
                                            systems make negotiations and meetups seamless.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="relative z-10">
                                <div
                                    className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl mb-6">👨‍💻
                                </div>
                                <h4 className="text-xl font-black mb-4">Founder's Commitment</h4>
                                <p className="text-slate-600 font-medium italic leading-relaxed">
                                    "Agora isn't just an app; it's a tool I built to make our college lives a bit more
                                    connected and a lot safer. As a solo developer, I'm personally invested in making
                                    this the best platform for every student."
                                </p>
                                <p className="mt-6 font-black text-[#008BFD] text-sm uppercase tracking-widest">— Solo
                                    Dev @ SpicaLabs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-20 bg-white px-6 border-t border-slate-100">
                <div
                    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <div
                            className="w-10 h-10 bg-[#008BFD] rounded-xl flex items-center justify-center text-white font-black text-xl">A
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-slate-900">Agora</span>
                    </div>
                    <div
                        className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <Link href="/products/agora" className="hover:text-[#008BFD]">Privacy Policy</Link>
                        <Link href="/products/agora" className="hover:text-[#008BFD]">Terms of Use</Link>
                        <span>© 2026 SPICALABS</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}