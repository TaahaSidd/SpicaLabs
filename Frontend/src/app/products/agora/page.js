"use client";

import React from 'react';
import Link from 'next/link';

export default function AgoraPage() {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-[#008BFD] selection:text-white">

            {/* Minimal Nav */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span
                            className="text-slate-400 group-hover:text-[#008BFD] transition-colors font-bold text-xl">←</span>
                        <span className="font-bold tracking-tighter text-slate-900 text-xl">SpicaLab</span>
                    </Link>
                    <div className="flex gap-4">
                        <button
                            className="hidden md:block px-6 py-2 text-sm font-bold text-slate-600 hover:text-[#008BFD] transition-colors">Safety
                        </button>
                        <button
                            className="bg-[#008BFD] text-white px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-[#008BFD]/30 transition-all">
                            Download Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 md:pt-48 pb-20 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 bg-[#008BFD]/10 text-[#008BFD] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            Exclusive to Universities
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-6 leading-[0.9]">
                            The Campus<br/>Marketplace.
                        </h1>
                        <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                            A secure ecosystem for students to buy, sell, and rent books, electronics, and furniture
                            within their own college community.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div
                                className="bg-black text-white px-8 py-3 rounded-2xl flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition-all">
                                <div className="text-2xl">▶</div>
                                <div className="text-left leading-none">
                                    <p className="text-[10px] uppercase">Get it on</p>
                                    <p className="text-lg font-bold">Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="relative flex justify-center">
                        <div
                            className="relative w-[280px] h-[580px] bg-slate-950 rounded-[3rem] border-[12px] border-slate-900 shadow-[0_0_50px_rgba(0,0,0,0.1)] overflow-hidden">
                            <div className="absolute inset-0 bg-white">
                                {/* Simulated App UI */}
                                <div className="p-4 pt-10">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="w-10 h-10 bg-[#008BFD] rounded-full"></div>
                                        <div className="w-24 h-4 bg-slate-100 rounded-full"></div>
                                        <div className="w-6 h-6 bg-slate-100 rounded-md"></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="h-32 bg-slate-50 rounded-2xl"></div>
                                        <div className="h-32 bg-slate-50 rounded-2xl"></div>
                                        <div className="h-32 bg-slate-50 rounded-2xl"></div>
                                        <div className="h-32 bg-slate-50 rounded-2xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Bento Grid */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Built for the Student Hustle</h2>
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Feature 1 */}
                        <div
                            className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden relative group">
                            <h3 className="text-2xl font-bold mb-4">Secure .edu Verification</h3>
                            <p className="text-slate-500 max-w-sm">Every user is verified via their college email. Buy
                                and sell with peers, not strangers. No more sketchy off-campus meetups.</p>
                            <div
                                className="absolute bottom-0 right-0 p-8 text-6xl opacity-10 group-hover:opacity-20 transition-opacity italic font-black">VERIFIED
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-[#008BFD] p-10 rounded-[2.5rem] text-white">
                            <h3 className="text-2xl font-bold mb-4 text-white">In-App Negotiation</h3>
                            <p className="text-blue-100">Our real-time chat system links directly to listings. Make
                                offers and coordinate campus meetups instantly.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                            <div className="text-3xl mb-4">📚</div>
                            <h3 className="text-xl font-bold mb-2">Academic Services</h3>
                            <p className="text-slate-500 text-sm">Need a tutor? Furniture for your dorm? Filter by
                                category and condition to find exactly what you need in seconds.</p>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Direct Exchange</h3>
                                <p className="text-slate-500">Not everything needs cash. Agora supports item-for-item
                                    exchanges, perfect for trading textbooks or assignment help.</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-12 h-12 bg-green-100 rounded-full"></div>
                                <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- BRAND MISSION SECTION --- */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-[#008BFD] font-bold uppercase tracking-[0.2em] text-sm mb-6">Our Mission</h2>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 leading-[1.1]">
                        Making university life <br/>
                        <span className="text-slate-400 italic">accessible for everyone.</span>
                    </h3>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                        Agora was founded on a simple belief: college is expensive enough. We’re building the
                        infrastructure for a circular campus economy—where textbooks are passed down, dorm furniture
                        finds a second home, and student skills are the primary currency.
                    </p>
                    <div className="h-px w-24 bg-slate-200 mx-auto"></div>
                </div>
            </section>

            {/* --- CORE VALUES GRID --- */}
            <section className="py-24 px-6 border-t border-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-16">
                        <div>
                            <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <span
                                    className="w-8 h-8 rounded-lg bg-blue-50 text-[#008BFD] flex items-center justify-center text-sm">01</span>
                                Trust First
                            </h4>
                            <p className="text-slate-500 leading-relaxed">
                                By restricting access to verified students only, we’ve eliminated the anonymity that
                                breeds scams. Agora is a neighborhood, not a warehouse.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <span
                                    className="w-8 h-8 rounded-lg bg-blue-50 text-[#008BFD] flex items-center justify-center text-sm">02</span>
                                Sustainability
                            </h4>
                            <p className="text-slate-500 leading-relaxed">
                                Every item resold on Agora is one less piece of plastic in a landfill. We’re committed
                                to reducing the environmental footprint of move-in day.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <span
                                    className="w-8 h-8 rounded-lg bg-blue-50 text-[#008BFD] flex items-center justify-center text-sm">03</span>
                                Student Empowerment
                            </h4>
                            <p className="text-slate-500 leading-relaxed">
                                Whether it’s tutoring or freelance design, we give students a platform to monetize their
                                talents and gain financial independence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- COMMUNITY STATS (The "Trust" Builder) --- */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                {/* Decorative background glow */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008BFD]/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
                            <div className="text-blue-400 text-xs uppercase tracking-widest font-bold">Campuses</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">50k+</div>
                            <div className="text-blue-400 text-xs uppercase tracking-widest font-bold">Items Sold</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">$0</div>
                            <div className="text-blue-400 text-xs uppercase tracking-widest font-bold">Listing Fees
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                            <div className="text-blue-400 text-xs uppercase tracking-widest font-bold">Verified</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Footer */}
            <section className="py-24 text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-8">🛡️
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Your Safety, Handled.</h2>
                    <p className="text-xl text-slate-500 leading-relaxed mb-10">
                        Reporting systems, admin moderation, and local campus meetups ensure that scammers stay out and
                        students stay safe.
                    </p>
                    <button
                        className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
                        Join Your Campus Agora
                    </button>
                </div>
            </section>

        </main>
    );
}