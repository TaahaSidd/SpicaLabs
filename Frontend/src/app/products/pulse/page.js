"use client";

import React from 'react';
import Link from 'next/link';

export default function PulsePage() {
    return (
        <main className="bg-[#0D110F] min-h-screen text-slate-100 selection:bg-[#7DFF7D] selection:text-[#0D110F]">

            {/* Precision Nav */}
            <nav className="fixed top-0 w-full z-50 bg-[#0D110F]/80 backdrop-blur-xl px-6 py-4 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span
                            className="text-slate-400 group-hover:text-[#7DFF7D] transition-colors font-bold text-xl">←</span>
                        <span
                            className="font-bold tracking-tighter text-white text-xl uppercase tracking-widest">SpicaLab</span>
                    </Link>
                    <button
                        className="bg-[#7DFF7D] text-[#0D110F] px-6 py-2 rounded-full font-bold hover:shadow-[0_0_20px_rgba(125,255,125,0.4)] transition-all text-sm">
                        Get Early Access
                    </button>
                </div>
            </nav>

            {/* Hero - The "Peace of Mind" Vibe */}
            <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto text-center">
                <div
                    className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-slate-400">
                    <span className="w-1.5 h-1.5 bg-[#7DFF7D] rounded-full animate-pulse"></span>
                    Always in Rhythm
                </div>
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.85]">
                    Track less.<br/>Know <span className="text-[#7DFF7D]">more.</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
                    Pulse is the invisible assistant for your finances. It watches your spending in real-time so you
                    never have to open a spreadsheet again.
                </p>
                <div className="flex justify-center gap-4">
                    <div className="w-12 h-1 bg-[#7DFF7D] rounded-full"></div>
                    <div className="w-4 h-1 bg-white/10 rounded-full"></div>
                    <div className="w-4 h-1 bg-white/10 rounded-full"></div>
                </div>
            </section>

            {/* The "Experience" Section - Replacing Tech with Lifestyle Benefits */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

                    {/* Benefit 1 */}
                    <div className="space-y-6">
                        <div className="text-4xl text-[#7DFF7D]">✨</div>
                        <h3 className="text-2xl font-bold">Zero Manual Work</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Stop typing in every coffee and gas station visit. Pulse sees the notification, logs the
                            price, and categorizes it before you've even put your phone back in your pocket.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="space-y-6">
                        <div className="text-4xl text-[#7DFF7D]">🛡️</div>
                        <h3 className="text-2xl font-bold">Privacy by Default</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Your bank data is yours. We don't want it, and we don't see it. Everything happens privately
                            on your device. Secure, local, and invisible.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="space-y-6">
                        <div className="text-4xl text-[#7DFF7D]">📈</div>
                        <h3 className="text-2xl font-bold">Instant Clarity</h3>
                        <p className="text-slate-400 leading-relaxed">
                            A beautiful, simple dashboard that shows you exactly where your money goes. No confusing
                            charts—just the truth about your spending rhythm.
                        </p>
                    </div>

                </div>
            </section>

            {/* The "Pulse" Visual Break */}
            <section className="py-20 overflow-hidden bg-[#1A2F23]/20">
                <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i}
                              className="text-7xl md:text-9xl font-black text-white/5 uppercase tracking-tighter italic">
                            Effortless • Accurate • Private • Automated •
                        </span>
                    ))}
                </div>
            </section>

            {/* The "Why" Section */}
            <section className="py-32 px-6">
                <div
                    className="max-w-4xl mx-auto bg-white/5 p-12 md:p-20 rounded-[3rem] border border-white/10 text-center relative overflow-hidden">
                    {/* Background Pulse Line decoration */}
                    <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10 pointer-events-none"
                         viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M0,50 Q100,20 200,50 T400,50 T600,50 T800,20 T1000,50" fill="none" stroke="#7DFF7D"
                              strokeWidth="2"/>
                    </svg>

                    <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 italic">"Finances should be felt,
                        not managed."</h2>
                    <p className="text-lg text-slate-400 mb-12 relative z-10 max-w-xl mx-auto">
                        We built Pulse for the people who want to be in control of their money without spending hours
                        every week looking at apps.
                    </p>
                    <button
                        className="relative z-10 bg-white text-[#0D110F] px-12 py-5 rounded-full font-black hover:bg-[#7DFF7D] transition-colors uppercase tracking-widest text-sm">
                        Join the Rhythm
                    </button>
                </div>
            </section>

        </main>
    );
}