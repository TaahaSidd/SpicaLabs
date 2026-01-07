"use client";

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen selection:bg-[#7DFF7D] selection:text-[#274C77]">
            <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="font-bold tracking-tighter text-2xl text-[#274C77]">
                    Spica<span className="text-slate-300">Lab</span>
                </Link>
                <Link href="/products/gallery"
                      className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#274C77]">
                    The Lab
                </Link>
            </nav>

            <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <img src="/Programer.svg" alt="The Architect" className="w-full h-auto drop-shadow-xl"/>
                    </div>

                    <div className="space-y-8">
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-[#274C77] leading-none">
                            Taaha. <br/>
                            <span className="text-slate-300">Architect.</span>
                        </h1>

                        <p className="text-xl text-slate-500 leading-relaxed max-w-md">
                            I run SpicaLab—a personal studio dedicated to building software with **intent**.
                            I skip the noise to focus on tools that actually solve problems.
                        </p>

                        <div className="pt-4 space-y-4">
                            <Link href="/portfolio"
                                  className="group flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all">
                                <div
                                    className="w-10 h-10 rounded-full bg-[#274C77] flex items-center justify-center text-white text-sm">→
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-[#274C77]">Technical
                                        Portfolio</p>
                                    <p className="text-[10px] text-slate-400">Experience, Skills & Open Source</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}