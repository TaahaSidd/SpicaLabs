"use client";
import React from 'react';
import Link from 'next/link';

export default function AirVistaPage() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen text-[#E0E0E0] font-mono selection:bg-blue-500 overflow-x-hidden">

            {/* LAB GRID */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                 style={{
                     backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                     backgroundSize: '40px 40px'
                 }}>
            </div>

            {/* NAV */}
            <nav className="relative z-10 p-8 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/registry"
                      className="group flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-white hover:text-blue-400 transition-all">
                    <span className="group-hover:-translate-x-2 transition-transform">←</span> Back
                </Link>
                <a href="https://airvista-lt.netlify.app/" target="_blank"
                   className="text-xs font-black uppercase tracking-widest text-white/30 hover:text-blue-400 transition-colors border-b border-white/10 pb-1">
                    Live-Link [Offline]
                </a>
            </nav>

            {/* HERO */}
            <header className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
                <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-white uppercase mb-12">
                    AirVista
                </h1>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <p className="text-white/60 text-xl md:text-2xl font-medium font-sans leading-relaxed">
                        A deep-dive into travel UX architecture. Built to prove that flight discovery could be a high-speed, utility-first experience without the marketing noise.
                    </p>
                    <div className="bg-blue-600/5 border border-blue-500/20 p-6 rounded-sm">
                        <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-2">Development Note</p>
                        <p className="text-sm text-white/40 leading-relaxed">
                            This project was a curiosity-driven build. While the Netlify deployment is currently inactive, the core logic remains a key part of my UI research.
                        </p>
                    </div>
                </div>
            </header>

            {/* THE SEARCH VISUAL - FADED MOCKUP */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">
                <div className="border border-white/10 bg-white/[0.02] p-12 md:p-20 rounded-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 opacity-20">
                        <div className="space-y-4">
                            <span className="text-xs font-black text-blue-500 uppercase tracking-widest">Origin</span>
                            <div className="text-5xl md:text-6xl font-black text-white border-b-2 border-white/10 pb-6 uppercase">New Delhi</div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-xs font-black text-blue-500 uppercase tracking-widest">Destination</span>
                            <div className="text-5xl md:text-6xl font-black text-white border-b-2 border-white/10 pb-6 uppercase">Mumbai</div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-xs text-white/10 uppercase tracking-[0.5em] mt-10 font-black italic">Visual Record Only</p>
            </section>

            {/* PROJECT INTENT & TECH */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5 grid md:grid-cols-2 gap-24">
                <div>
                    <div>
                        <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-8">Development Note</h3>
                        <div className="space-y-6 text-white/50 text-lg font-sans leading-relaxed">
                            <p>
                                This was mostly me just trying new things. I wanted to see if I could build a travel interface that felt more like a professional tool and less like a marketplace full of ads.
                            </p>
                            <p>
                                It was an experiment in clean data handling—taking a Java/Spring backend and seeing how fast I could map that data onto a minimalist React frontend. No big mission, just curiosity and a weekend spent coding.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <div>
                        <h4 className="text-blue-500 text-xs font-black uppercase tracking-widest mb-6">Technical Stack</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 border border-white/10">
                                <span className="block text-[10px] text-white/30 uppercase mb-1">Backend</span>
                                <span className="text-sm font-black text-white">Java / Spring</span>
                            </div>
                            <div className="bg-white/5 p-4 border border-white/10">
                                <span className="block text-[10px] text-white/30 uppercase mb-1">Frontend</span>
                                <span className="text-sm font-black text-white">React / Tailwind</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/5 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-black text-white/20 uppercase tracking-widest">Current_Status</span>
                            <span className="text-xs font-black text-red-500 uppercase px-3 py-1 bg-red-500/10 rounded-sm">Offline</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-black text-white/20 uppercase tracking-widest">Built_By</span>
                            <span className="text-xs font-black text-white uppercase tracking-tighter">Taaha Siddiqui</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 py-40 text-center border-t border-white/5">
                <Link href="/"
                      className="bg-white text-black px-16 py-6  font-black uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                    Return To Lab
                </Link>
            </footer>
        </main>
    );
}