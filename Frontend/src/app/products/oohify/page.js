"use client";

import React from 'react';
import Link from 'next/link';

export default function OohifyPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-slate-100 selection:bg-[#FF3E00] selection:text-white">

            {/* Nav - Kept the same */}
            <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl px-6 py-4 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span
                            className="text-slate-600 group-hover:text-[#FF3E00] transition-colors font-bold text-xl">←</span>
                        <span className="font-black tracking-tighter text-white text-xl uppercase">SpicaLab <span
                            className="text-[#FF3E00]">Pro</span></span>
                    </Link>
                    <button
                        className="bg-[#FF3E00] text-white px-6 py-2 rounded-lg font-bold hover:brightness-125 transition-all text-xs uppercase tracking-widest">
                        Launch Terminal
                    </button>
                </div>
            </nav>

            {/* Hero - Kept the same as you liked */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3E00]/10 text-[#FF3E00] rounded-sm text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-[#FF3E00]/20">
                            pDOOH Aggregator v4.2
                        </div>
                        <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.8] uppercase">
                            DOMINATE <br/><span className="text-[#FF3E00]">PHYSICAL</span> ATTENTION.
                        </h1>
                        <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                            Stop buying "space." Start buying <span
                            className="text-white font-bold italic">moments.</span> OOHify gives SMBs the same
                            programmatic power as global agencies.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div
                                className="bg-white text-black px-8 py-4 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-[#FF3E00] hover:text-white transition-all cursor-pointer">
                                Browse Inventory
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div
                            className="bg-[#111] border border-white/10 rounded-xl p-2 shadow-2xl transition-transform group-hover:scale-[1.01] duration-700">
                            <div className="bg-[#050505] rounded-lg overflow-hidden border border-white/5">
                                <div
                                    className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-orange-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Market Feed: Bengaluru // Live</span>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded border border-white/5">
                                            <p className="text-[10px] uppercase text-slate-500 mb-1 font-bold">Live
                                                Impressions</p>
                                            <p className="text-2xl font-black text-[#FF3E00]">412,022</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded border border-white/5 text-right">
                                            <p className="text-[10px] uppercase text-slate-500 mb-1 font-bold">Active
                                                Screens</p>
                                            <p className="text-2xl font-black text-white">84</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Recent
                                            API Verification</p>
                                        {[
                                            {time: '18:31:02', loc: 'MG Road Junction', status: 'VERIFIED'},
                                            {time: '18:30:58', loc: 'Airport T2 LED', status: 'VERIFIED'},
                                        ].map((item, i) => (
                                            <div key={i}
                                                 className="flex justify-between items-center text-[10px] font-mono p-3 bg-white/5 rounded border border-white/5">
                                                <span className="text-slate-500">{item.time}</span>
                                                <span className="text-white font-bold">{item.loc}</span>
                                                <span className="text-green-500 font-bold">{item.status}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: The Aggregated Marketplace Table */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-[#FF3E00] font-mono text-xs tracking-widest uppercase mb-2 font-bold">Aggregated
                                Marketplace</h2>
                            <h3 className="text-4xl font-black uppercase italic italic">Live Inventory</h3>
                        </div>
                        <p className="text-slate-500 text-sm max-w-sm">Access billboard inventory from 20+ media owners
                            in one single, high-speed dashboard.</p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
                        <table className="w-full text-left text-sm">
                            <thead
                                className="border-b border-white/10 text-slate-400 uppercase font-black text-[10px] tracking-widest">
                            <tr>
                                <th className="px-6 py-4">Location</th>
                                <th className="px-6 py-4">Screen Type</th>
                                <th className="px-6 py-4">Avg. Weekly Reach</th>
                                <th className="px-6 py-4">Next Available Slot</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 font-medium">
                            {[
                                {loc: 'Indiranagar Main St.', type: '4K LED Billboard', reach: '850K+', slot: 'Jan 12'},
                                {loc: 'Whitefield Tech Park', type: 'Digital Pillar', reach: '1.2M+', slot: 'Jan 08'},
                                {
                                    loc: 'Koramangala 80ft Rd',
                                    type: 'Outdoor Vertical',
                                    reach: '600K+',
                                    slot: 'Immediate'
                                },
                                {loc: 'Domlur Flyover', type: 'Panoramic LED', reach: '2.1M+', slot: 'Jan 15'},
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-6 text-white font-bold italic uppercase tracking-tighter">{row.loc}</td>
                                    <td className="px-6 py-6 text-slate-400">{row.type}</td>
                                    <td className="px-6 py-6 text-white font-mono">{row.reach}</td>
                                    <td className="px-6 py-6 text-slate-400 font-mono">{row.slot}</td>
                                    <td className="px-6 py-6 text-right">
                                        <button
                                            className="text-[#FF3E00] border border-[#FF3E00]/50 px-4 py-1.5 rounded uppercase text-[10px] font-black hover:bg-[#FF3E00] hover:text-white transition-all">Select
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: Zero-Asset Advantage (B2B Logic) */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic italic mb-8 italic">The
                            Arbitrage <br/>Business Model.</h2>
                        <div className="space-y-12">
                            <div className="flex gap-6">
                                <div
                                    className="shrink-0 w-10 h-10 border border-[#FF3E00] flex items-center justify-center font-black text-[#FF3E00]">01
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase">No Physical Overhead</h4>
                                    <p className="text-slate-500 text-sm">We don't buy billboards. We don't maintain
                                        hardware. We own the **software protocol** that manages the traffic.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div
                                    className="shrink-0 w-10 h-10 border border-[#FF3E00] flex items-center justify-center font-black text-[#FF3E00]">02
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase">Deep API Integration</h4>
                                    <p className="text-slate-500 text-sm">OOHify plugs directly into the Content
                                        Management Systems (CMS) of dozens of media owners, giving us real-time booking
                                        authority.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div
                                    className="shrink-0 w-10 h-10 border border-[#FF3E00] flex items-center justify-center font-black text-[#FF3E00]">03
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase">Audience Intelligence</h4>
                                    <p className="text-slate-500 text-sm">By partnering with mobile-location data
                                        providers, we attribute physical footfall to specific ad-play timestamps. We
                                        prove ROI where others guess.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FF3E00] p-12 rounded-[2.5rem] text-white">
                        <h3 className="text-4xl font-black italic uppercase italic mb-6 leading-none">Why OOHify Wins in
                            India.</h3>
                        <p className="font-medium text-lg mb-8 opacity-90 leading-relaxed">
                            The Indian market is fragmented. Small media owners have 5-10 screens each and no way to
                            reach large advertisers. OOHify aggregates them into a single "Giant Screen," giving SMBs
                            easy access and media owners more revenue.
                        </p>
                        <div className="bg-black/10 p-6 rounded-2xl border border-black/10">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4">Market Potential</p>
                            <div className="flex justify-between items-end">
                                <span className="text-6xl font-black italic">18%</span>
                                <span className="text-sm font-bold max-w-[120px] text-right">YoY Growth in Indian pDOOH Market.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaign Metrics Section - Added more detail */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black uppercase italic italic text-center mb-16">Measure What
                        Matters.</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center p-8 bg-white/5 border border-white/5 rounded-2xl">
                            <p className="text-4xl font-black text-[#FF3E00] mb-2">Real-Time</p>
                            <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Verification</p>
                        </div>
                        <div className="text-center p-8 bg-white/5 border border-white/5 rounded-2xl">
                            <p className="text-4xl font-black text-white mb-2">QR</p>
                            <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Attribution</p>
                        </div>
                        <div className="text-center p-8 bg-white/5 border border-white/5 rounded-2xl">
                            <p className="text-4xl font-black text-white mb-2">Geo</p>
                            <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Fencing</p>
                        </div>
                        <div className="text-center p-8 bg-white/5 border border-white/5 rounded-2xl">
                            <p className="text-4xl font-black text-[#FF3E00] mb-2">SME</p>
                            <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">First Focus</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA - Kept the same vibe */}
            <section
                className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-transparent to-[#FF3E00]/10">
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 italic">Own the
                    Street.</h2>
                <button
                    className="bg-[#FF3E00] text-white px-10 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,62,0,0.3)]">
                    Launch Your Campaign
                </button>
            </section>

        </main>
    );
}