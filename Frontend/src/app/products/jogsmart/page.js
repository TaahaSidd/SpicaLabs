"use client";
import React from 'react';
import Link from 'next/link';

export default function JogSmartPage() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen text-[#E0E0E0] font-mono selection:bg-[#FACC15] selection:text-black overflow-x-hidden">

            {/* LAB GRID */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                 style={{
                     backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                     backgroundSize: '40px 40px'
                 }}>
            </div>

            {/* NAV */}
            <nav className="relative z-10 p-8 flex justify-between items-center max-w-7xl mx-auto uppercase">
                <Link href="/"
                      className="group flex items-center gap-3 text-sm font-black tracking-widest text-white hover:text-[#FACC15] transition-all">
                    <span className="group-hover:-translate-x-2 transition-transform">←</span> Back
                </Link>
                <span className="text-xs font-black tracking-widest text-[#FACC15]/50 border border-[#FACC15]/20 px-3 py-1">
                    Status: Architectural Proposal
                </span>
            </nav>

            {/* HERO */}
            <header className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
                <p className="text-[#FACC15] text-sm font-black uppercase tracking-widest mb-6">Concept Brief 003</p>
                <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-white uppercase mb-12">
                    Jog<span className="text-[#FACC15]">Smart.</span>
                </h1>

                <div className="grid md:grid-cols-2 gap-16 items-start border-l-4 border-[#FACC15] pl-8">
                    <p className="text-white/60 text-xl md:text-2xl font-medium font-sans leading-relaxed">
                        A proposal for a spatial intelligence engine that maps urban safety. The core logic involves cross-referencing streetlamp density with real-time traffic timing to generate verified safe paths.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-8">
                        <p className="text-[#FACC15] text-xs font-black uppercase tracking-widest mb-4">Solo Development Status</p>
                        <p className="text-sm text-white/40 leading-relaxed font-sans">
                            This project is a conceptual study in geospatial data weighting. Implementation is currently paused. This page documents the intended architecture and logic flow for future reference.
                        </p>
                    </div>
                </div>
            </header>

            {/* THE CORE LOGIC ENGINE */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
                    <div className="bg-[#0A0A0A] p-10 space-y-6">
                        <div className="w-10 h-px bg-[#FACC15]"></div>
                        <h4 className="text-xl font-black text-white uppercase tracking-tighter">Lumen Data</h4>
                        <p className="text-sm text-white/40 leading-relaxed font-sans uppercase">
                            Proposed integration with OpenStreetMap to calculate streetlamp proximity scores. Higher density equals lower path risk.
                        </p>
                    </div>
                    <div className="bg-[#0A0A0A] p-10 space-y-6 border-x border-white/10">
                        <div className="w-10 h-px bg-[#FACC15]"></div>
                        <h4 className="text-xl font-black text-white uppercase tracking-tighter">Traffic Flow</h4>
                        <p className="text-sm text-white/40 leading-relaxed font-sans uppercase">
                            Timing based logic to avoid high velocity traffic zones during peak hours, favoring pedestrian only nodes.
                        </p>
                    </div>
                    <div className="bg-[#0A0A0A] p-10 space-y-6">
                        <div className="w-10 h-px bg-[#FACC15]"></div>
                        <h4 className="text-xl font-black text-white uppercase tracking-tighter">Safe Routing</h4>
                        <p className="text-sm text-white/40 leading-relaxed font-sans uppercase">
                            A custom routing algorithm modified to prioritize security weight over the shortest possible distance.
                        </p>
                    </div>
                </div>
            </section>

            {/* TECH SPEC BOX */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-24">
                    <div className="space-y-10">
                        <h3 className="text-white text-3xl font-black uppercase tracking-tighter">Project Evolution</h3>
                        <p className="text-white/50 text-lg font-sans leading-relaxed">
                            Running at night in urban environments should not be a gamble. I am exploring how to turn static map data into a dynamic safety score. It is a complex solo build, but the underlying logic is sound.
                        </p>
                    </div>

                    <div className="bg-white/5 p-10 border border-white/10">
                        <h4 className="text-[#FACC15] text-xs font-black uppercase tracking-widest mb-8">Proposed Stack</h4>
                        <div className="space-y-6 text-sm font-black uppercase tracking-widest">
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/30 text-xs">Mobile Engine</span>
                                <span>React Native</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/30 text-xs">Map Service</span>
                                <span>Mapbox SDK</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/30 text-xs">Traffic API</span>
                                <span>TomTom Real Time</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/30 text-xs">Spatial Logic</span>
                                <span>GeoLib Turf.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 py-40 text-center border-t border-white/5">
                <Link href="/"
                      className="bg-[#FACC15] text-black px-16 py-6  font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl shadow-[#FACC15]/10">
                    Return to Lab
                </Link>
            </footer>
        </main>
    );
}