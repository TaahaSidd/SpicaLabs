"use client";

import React from 'react';
import Link from 'next/link';

export default function PulsePage() {
    return (
        <main
            className="bg-[#0D110F] min-h-screen text-slate-100 selection:bg-[#7DFF7D] selection:text-[#0D110F] overflow-x-hidden">

            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 bg-[#0D110F]/80 backdrop-blur-xl px-6 py-4 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span
                            className="text-slate-400 group-hover:text-[#7DFF7D] transition-colors font-bold text-xl">←</span>
                        <div className="flex items-center gap-2">
                            <img src="/PulseLogoSvg.svg" alt="Pulse Logo" className="w-6 h-6 object-contain"/>
                            <span
                                className="font-bold tracking-tighter text-white text-xl uppercase tracking-[0.2em]">Pulse</span>
                        </div>
                    </Link>
                    <button
                        className="bg-[#7DFF7D] text-[#0D110F] px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
                        Join
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="text-left">
                        <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter text-white mb-10 leading-[0.8] mix-blend-difference">
                            Stop <br/>Counting.<br/><span className="text-[#7DFF7D]">Start Living.</span>
                        </h1>
                        <p className="text-2xl text-slate-400 max-w-sm leading-tight mb-12">
                            The invisible assistant for your money. No math, no spreadsheets, no stress.
                        </p>
                    </div>

                    {/* The 3D Render Image */}
                    <div className="relative">
                        <div className="relative w-full aspect-square lg:scale-125 lg:translate-x-20">
                            <img
                                src="/3dRender.jpg"
                                alt="Abstract Rhythm"
                                className="w-full h-full object-cover rounded-[4rem] shadow-[0_0_100px_rgba(125,255,125,0.1)] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Subtle overlay to make it blend into the black background */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-[#0D110F] via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>

                {/* Background Ambient Glow */}
                <div
                    className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#7DFF7D]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            </section>

            {/* Rest of your sections (Invisible UI, Intermission, etc) */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">You spend. We note.</h2>
                            <p className="text-slate-400 text-lg">Buy a coffee? Pulse knows. Pay rent? Pulse notes it.
                                You don't have to lift a finger.</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Know your limit.</h2>
                            <p className="text-slate-400 text-lg">One glance shows you exactly how much you have left
                                for the month. Simple as a heartbeat.</p>
                        </div>
                    </div>

                    <div className="bg-[#141816] rounded-[3rem] p-10 border border-white/5 shadow-2xl">
                        <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Safe to spend</p>
                        <h3 className="text-6xl font-light text-[#7DFF7D] mb-8">$1,240.00</h3>
                        <div className="space-y-4 opacity-40">
                            <div className="h-px bg-white/10 w-full"></div>
                            <div className="flex justify-between text-sm italic">
                                <span>Grocery Store</span><span>-$42.00</span></div>
                            <div className="flex justify-between text-sm italic">
                                <span>Coffee Shop</span><span>-$5.50</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-48 px-6 text-center bg-[#7DFF7D] text-[#0D110F]">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 leading-none">Money, made
                    quiet.</h2>
                <button
                    className="bg-[#0D110F] text-white px-12 py-6 rounded-full font-black hover:scale-105 transition-all uppercase tracking-widest text-sm">
                    Get Early Access
                </button>
            </section>

            {/* Footer */}
            <footer
                className="py-10 text-center border-t border-white/5 opacity-40 text-[10px] uppercase tracking-widest">
                © 2026 SpicaLab — Less math, more life.
            </footer>
        </main>
    );
}