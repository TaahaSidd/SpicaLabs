"use client";

import React from 'react';
import Link from 'next/link';

export default function JogSmartPage() {
    return (
        <main className="bg-[#0A0C10] min-h-screen text-slate-100 selection:bg-[#FACC15] selection:text-[#0A0C10]">

            {/* Athletic Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0A0C10]/90 backdrop-blur-xl px-6 py-4 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-slate-500 group-hover:text-[#FACC15] transition-colors font-bold text-xl">←</span>
                        <span className="font-black tracking-tighter text-white text-xl uppercase italic">SpicaLab</span>
                    </Link>
                    <button className="bg-[#FACC15] text-[#0A0C10] px-6 py-2 rounded-full font-black hover:scale-105 transition-all text-xs uppercase tracking-widest">
                        Get the Intel
                    </button>
                </div>
            </nav>

            {/* Hero - The "Don't Be Left in the Dark" Vibe */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FACC15]/10 text-[#FACC15] rounded-md text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-[#FACC15]/20">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            Live: 1,240 Runners Active Now
                        </div>
                        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white mb-6 leading-[0.8] uppercase">
                            RUN WITH<br/><span className="text-[#FACC15]">INTEL.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
                            Stop guessing which routes are safe. Join the thousands of runners sharing live updates on crowds, lighting, and hazards. <span className="text-white font-bold">Don't be the last to know.</span>
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#FACC15] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all">
                                Access the Map
                            </button>
                        </div>
                    </div>

                    {/* The "Crowd Heatmap" Preview */}
                    <div className="relative group">
                        <div className="bg-[#15181E] border border-white/10 rounded-[3rem] p-4 shadow-2xl relative z-10 transition-transform group-hover:scale-[1.02] duration-500">
                            <div className="bg-[#0A0C10] rounded-[2.5rem] overflow-hidden min-h-[500px] relative">
                                {/* Heatmap Overlay */}
                                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.4194,37.7749,12/600x600?access_token=YOUR_TOKEN')] bg-cover opacity-40"></div>

                                {/* Live Pulses */}
                                <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-[#FACC15]/20 rounded-full blur-2xl animate-pulse"></div>
                                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-[#FACC15] rounded-full shadow-[0_0_15px_#FACC15]"></div>

                                {/* "Trending Route" Popup */}
                                <div className="absolute top-10 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl w-48 animate-bounce">
                                    <p className="text-[10px] font-black text-[#FACC15] uppercase tracking-tighter">🔥 Trending Now</p>
                                    <p className="text-xs font-bold text-white">East Park Path</p>
                                    <p className="text-[10px] text-slate-400 font-medium italic">High foot traffic • Well lit</p>
                                </div>

                                {/* Bottom Status */}
                                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                                    <div className="bg-[#0A0C10]/90 border border-white/10 p-4 rounded-2xl">
                                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                            <span className="text-slate-400">Route Safety Index</span>
                                            <span className="text-[#FACC15]">Excellent</span>
                                        </div>
                                        <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                                            <div className="w-[92%] h-full bg-[#FACC15]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The FOMO Section: "The City is Moving" */}
            <section className="py-24 px-6 border-y border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-black uppercase italic mb-6">See what <br/>others see.</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            While you're stuck on the same old dark paths, the JogSmart community is discovering perfectly lit, high-traffic routes every night. Access the collective eye of your city.
                        </p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                            <p className="text-3xl font-black text-white">15m</p>
                            <p className="text-[10px] font-black text-[#FACC15] uppercase">Max Update Delay</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                            <p className="text-3xl font-black text-white">9/10</p>
                            <p className="text-[10px] font-black text-[#FACC15] uppercase">Runners Recommend</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* "Don't Run Blind" Comparison */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-black italic uppercase mb-16 italic">Don't Run Blind.</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="p-10 rounded-[2.5rem] border border-white/5 bg-white/5 grayscale">
                            <p className="text-slate-500 font-black uppercase text-xs mb-4">Without JogSmart</p>
                            <ul className="text-left space-y-4 text-slate-500 font-medium">
                                <li>• Guessing street light status</li>
                                <li>• Unpredictable crowd levels</li>
                                <li>• Unexpected construction/hazards</li>
                                <li>• Running with uncertainty</li>
                            </ul>
                        </div>
                        <div className="p-10 rounded-[2.5rem] border border-[#FACC15]/30 bg-[#FACC15]/5">
                            <p className="text-[#FACC15] font-black uppercase text-xs mb-4">With JogSmart</p>
                            <ul className="text-left space-y-4 text-white font-bold">
                                <li>• Live lighting verification</li>
                                <li>• Real-time crowd heatmaps</li>
                                <li>• Community-flagged obstacles</li>
                                <li>• Absolute route confidence</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Hook */}
            <section className="py-40 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black italic uppercase mb-8 italic italic italic italic">Your city is active. <br/>Are you in the loop?</h2>
                    <button className="bg-[#FACC15] text-[#0A0C10] px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(250,204,21,0.2)]">
                        Claim Your Route
                    </button>
                </div>
            </section>

        </main>
    );
}