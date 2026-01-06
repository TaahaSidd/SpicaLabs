"use client";

import React from 'react';
import Link from 'next/link';

export default function AirVistaPage() {
    return (
        <main className="bg-[#F8FAFC] min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-600">

            {/* Minimalist Nav */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl px-6 py-4 border-b border-slate-200">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span
                            className="text-slate-400 group-hover:text-blue-600 transition-colors font-bold text-xl">←</span>
                        <span
                            className="font-black tracking-tighter text-slate-900 text-xl uppercase italic">SpicaLab</span>
                    </Link>
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-lg shadow-blue-200">
                        Book Now
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto text-center">
                <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-100">
                    Your Next Adventure Awaits
                </div>
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.85] uppercase italic">
                    THE SKY <br/><span
                    className="text-blue-600 underline decoration-blue-200 underline-offset-8">UNFOLDING.</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
                    AirVista is designed to take the friction out of travel. No clutter, no hidden fees—just a direct
                    path to your next destination.
                </p>

                {/* Search Bar Mockup */}
                <div
                    className="max-w-4xl mx-auto bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 w-full text-left px-6 py-4 border-r border-slate-100">
                        <p className="text-[10px] uppercase font-black text-slate-400 mb-1">From</p>
                        <p className="text-lg font-bold">DEL (Delhi)</p>
                    </div>
                    <div className="flex-1 w-full text-left px-6 py-4 border-r border-slate-100">
                        <p className="text-[10px] uppercase font-black text-slate-400 mb-1">To</p>
                        <p className="text-lg font-bold text-blue-600">BOM (Mumbai)</p>
                    </div>
                    <div className="flex-1 w-full text-left px-6 py-4">
                        <p className="text-[10px] uppercase font-black text-slate-400 mb-1">Departure</p>
                        <p className="text-lg font-bold text-slate-600 italic font-mono uppercase">Next Tuesday</p>
                    </div>
                    <button
                        className="bg-blue-600 text-white w-full md:w-auto px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-colors shadow-xl shadow-blue-200">
                        Search
                    </button>
                </div>
            </section>

            {/* NEW MISSION CARDS: No Tech, Just Travel */}
            <section className="py-24 px-6 bg-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1: Anywhere */}
                        <div
                            className="group p-10 bg-white rounded-[2rem] border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
                            <div
                                className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🌎
                            </div>
                            <h4 className="text-xl font-black uppercase italic mb-4 italic">Fly Anywhere</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">From the bustling streets
                                of Mumbai to the serene heights of the Himalayas. We bridge the distance between you and
                                your dreams.</p>
                        </div>

                        {/* Card 2: Zero Stress */}
                        <div
                            className="group p-10 bg-white rounded-[2rem] border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
                            <div
                                className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🧘
                            </div>
                            <h4 className="text-xl font-black uppercase italic mb-4 italic">Zero Friction</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">Booking shouldn't be a
                                chore. AirVista's clean, distraction-free interface lets you focus on the journey, not
                                the paperwork.</p>
                        </div>

                        {/* Card 3: New Horizons */}
                        <div
                            className="group p-10 bg-white rounded-[2rem] border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
                            <div
                                className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🌅
                            </div>
                            <h4 className="text-xl font-black uppercase italic mb-4 italic">New Horizons</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">Our mission is simple: to
                                make the world smaller. Explore new cities, meet new people, and find yourself somewhere
                                else.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Addition: "Fly Here, There, Anywhere" */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase italic italic tracking-tighter leading-none mb-8 italic">
                            FLY HERE. <br/>FLY THERE. <br/><span className="text-blue-600">FLY EVERYWHERE.</span>
                        </h2>
                        <div className="space-y-6 text-slate-500 text-lg font-medium">
                            <p>AirVista isn't just about tickets; it's about the <span
                                className="text-slate-900 font-bold italic">vista</span>—the view of what’s possible
                                when travel is made accessible to everyone.</p>
                            <p>Whether it's a last-minute business trip to Bangalore or a bucket-list escape to the
                                beaches of Goa, we provide the portal to get you there in three clicks or less.</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] bg-blue-600 rounded-[3rem] overflow-hidden relative shadow-2xl">
                            <div
                                className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2">Featured
                                    Destination</p>
                                <p className="text-4xl font-black uppercase italic italic">Leh, Ladakh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flight Listing - Kept the same as you liked */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h3 className="font-black uppercase italic text-2xl">Today's Top Routes</h3>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {[
                        {airline: 'IndiGo', code: '6E 2102', time: '18:45', price: '₹4,200', seats: '12 Seats Left'},
                        {airline: 'Air India', code: 'AI 804', time: '19:15', price: '₹5,850', seats: 'Limited'},
                    ].map((flight, i) => (
                        <div key={i}
                             className="bg-white border border-slate-200 p-8 rounded-3xl flex justify-between items-center group hover:border-blue-300 transition-colors shadow-sm">
                            <div>
                                <p className="text-xs font-black text-blue-600 uppercase mb-1">{flight.airline}</p>
                                <p className="text-2xl font-black text-slate-900">{flight.time}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase">{flight.code}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-black text-slate-900">{flight.price}</p>
                                <p className="text-[10px] font-bold text-red-500 uppercase">{flight.seats}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Hook */}
            <section className="py-40 text-center bg-blue-600 text-white rounded-t-[4rem]">
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none italic italic">Ready
                    for <br/>Departure?</h2>
                <button
                    className="bg-white text-blue-600 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl">
                    Search Now
                </button>
            </section>

        </main>
    );
}