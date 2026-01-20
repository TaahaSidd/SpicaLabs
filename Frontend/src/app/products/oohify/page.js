"use client";
import React from 'react';
import Link from 'next/link';

export default function OohifyPage() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen text-[#E0E0E0] font-mono selection:bg-[#FF3E00] selection:text-white overflow-x-hidden">

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
                      className="group flex items-center gap-3 text-sm font-black tracking-widest text-white hover:text-[#FF3E00] transition-all">
                    <span className="group-hover:-translate-x-2 transition-transform">←</span> Back
                </Link>
                <span className="text-xs font-black tracking-widest text-[#FF3E00] border border-[#FF3E00]/30 px-3 py-1 bg-[#FF3E00]/5">
                    Status: Market Concept
                </span>
            </nav>

            {/* HERO */}
            <header className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
                <p className="text-[#FF3E00] text-sm font-black uppercase tracking-widest mb-6">Business Study 005</p>
                <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-white uppercase mb-12">
                    Oohify
                </h1>

                <div className="grid md:grid-cols-2 gap-16 items-start border-l-4 border-[#FF3E00] pl-8">
                    <p className="text-white/60 text-xl md:text-2xl font-medium font-sans leading-relaxed">
                        A programmatic DOOH aggregator designed to bridge the gap between small media owners and digital advertisers. The project explores the arbitrage of physical ad space through unified API protocols.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-8">
                        <p className="text-[#FF3E00] text-xs font-black uppercase tracking-widest mb-4">Market Curiosity</p>
                        <p className="text-sm text-white/40 leading-relaxed font-sans">
                            Built as a case study for fragmented market aggregation. While the platform is a concept, the technical challenge lies in syncing real-time inventory from 20 plus legacy CMS providers into one dashboard.
                        </p>
                    </div>
                </div>
            </header>

            {/* LIVE MARKETPLACE MOCKUP - FADED */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="border border-white/10 bg-white/[0.02] overflow-hidden rounded-sm opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <div className="p-8 border-b border-white/10 flex justify-between items-center bg-white/5 uppercase text-[10px] font-black tracking-widest">
                        <span>Inventory Preview</span>
                        <span className="text-[#FF3E00]">Live Feed Disconnected</span>
                    </div>
                    <table className="w-full text-left">
                        <tbody className="divide-y divide-white/5">
                        {[
                            {loc: 'Indiranagar Main St', type: '4K LED Billboard', reach: '850K'},
                            {loc: 'Whitefield Tech Park', type: 'Digital Pillar', reach: '1.2M'},
                            {loc: 'Airport T2 Entry', type: 'Panoramic LED', reach: '2.1M'},
                        ].map((row, i) => (
                            <tr key={i} className="text-sm">
                                <td className="px-8 py-6 font-black text-white uppercase">{row.loc}</td>
                                <td className="px-8 py-6 text-white/40">{row.type}</td>
                                <td className="px-8 py-6 text-[#FF3E00] font-black text-right">{row.reach} Impr</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* BUSINESS LOGIC */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <h4 className="text-[#FF3E00] text-xs font-black uppercase tracking-widest">01 Protocol</h4>
                        <p className="text-white/60 text-lg font-sans leading-relaxed font-bold">
                            Zero physical overhead. The project acts as a software layer that manages traffic rather than owning hardware.
                        </p>
                    </div>
                    <div className="space-y-6 border-x border-white/10 px-0 md:px-12">
                        <h4 className="text-[#FF3E00] text-xs font-black uppercase tracking-widest">02 Sync</h4>
                        <p className="text-white/60 text-lg font-sans leading-relaxed font-bold">
                            Aggregating multiple CMS endpoints into a single programmatic booking engine.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-[#FF3E00] text-xs font-black uppercase tracking-widest">03 Data</h4>
                        <p className="text-white/60 text-lg font-sans leading-relaxed font-bold">
                            Attributing physical footfall to ad play timestamps using mobile location data providers.
                        </p>
                    </div>
                </div>
            </section>

            {/* STACK BOX */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
                <div className="bg-white/5 p-10 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="max-w-md">
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Technical Stack</h3>
                        <p className="text-sm text-white/40 font-sans leading-relaxed">
                            To handle the real time aggregation of thousands of screen nodes, the system is designed with a Java Spring Boot backend for reliability and high performance data processing.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {['Java Spring', 'React Nextjs', 'PostgreSQL', 'Redis'].map((tech) => (
                            <span key={tech} className="px-6 py-3 bg-white/5 border border-white/10 text-xs font-black uppercase text-[#FF3E00]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 py-40 text-center border-t border-white/5">
                <Link href="/"
                      className="bg-[#FF3E00] text-white px-16 py-6 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all shadow-2xl shadow-[#FF3E00]/20">
                    Return To Lab
                </Link>
            </footer>
        </main>
    );
}