"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function UniversitiesPage() {
    const [searchTerm, setSearchTerm] = useState("");

    // Updated with top Indian Institutions
    const unis = [
        {name: "IIT Delhi", location: "New Delhi", status: "Live"},
        {name: "IIT Bombay", location: "Mumbai", status: "Live"},
        {name: "BITS Pilani", location: "Rajasthan", status: "Live"},
        {name: "VIT Vellore", location: "Tamil Nadu", status: "Live"},
        {name: "SRM University", location: "Chennai", status: "Live"},
        {name: "Delhi University", location: "New Delhi", status: "Coming Soon"},
        {name: "Manipal Institute (MIT)", location: "Karnataka", status: "Live"},
        {name: "NIT Trichy", location: "Tamil Nadu", status: "Coming Soon"},
        {name: "IIT Madras", location: "Chennai", status: "Live"},
        {name: "Anna University", location: "Chennai", status: "Coming Soon"},
        {name: "Amity University", location: "Noida", status: "Live"},
        {name: "IIT Kharagpur", location: "West Bengal", status: "Coming Soon"},
    ];

    const filteredUnis = unis.filter(u =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="bg-white min-h-screen text-slate-900 font-sans selection:bg-[#008BFD] selection:text-white">

            {/* --- NAV --- */}
            <nav
                className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 md:px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/products/agora" className="flex items-center gap-2 group">
                        <div
                            className="w-8 h-8 bg-[#008BFD] rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20">A
                        </div>
                        <span className="font-bold tracking-tighter text-xl">Agora</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/products/agora"
                              className="text-sm font-bold text-slate-500 hover:text-[#008BFD] transition-colors">Home</Link>
                        <Link href="/products/agora/about"
                              className="text-sm font-bold text-slate-500 hover:text-[#008BFD] transition-colors">About</Link>
                    </div>
                </div>
            </nav>

            {/* --- HERO --- */}
            <section className="pt-40 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
                        <span
                            className="text-[#008BFD] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Campus Network</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                            India's Campus <br/><span className="text-[#008BFD]">Economy.</span>
                        </h1>
                        <p className="text-xl text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
                            Agora is expanding across India's top institutions. Is your campus part of the circular
                            economy yet?
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto relative">
                            <input
                                type="text"
                                placeholder="Search IIT, NIT, or Private Unis..."
                                className="w-full px-6 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-[#008BFD]/10 transition-all font-bold placeholder:text-slate-300 shadow-inner"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- UNIVERSITY GRID --- */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredUnis.map((uni, i) => (
                            <motion.div
                                key={i}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{delay: i * 0.05}}
                                className="p-8 rounded-[2.5rem] border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:border-[#008BFD]/30 transition-all duration-500 group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div
                                        className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-50 group-hover:scale-110 transition-all">🏛️
                                    </div>
                                    <span
                                        className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full ${uni.status === 'Live' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                                        {uni.status}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black mb-1 group-hover:text-[#008BFD] transition-colors">{uni.name}</h3>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">{uni.location}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- REQUEST ACCESS CTA --- */}
                    <div
                        className="mt-20 p-12 md:p-20 rounded-[4rem] bg-black text-white text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black mb-6">Bring Agora to <br/> your Campus.</h2>
                            <p className="text-slate-400 mb-10 max-w-lg mx-auto font-medium text-lg leading-relaxed">
                                Join the waitlist for your college. We launch where the demand is highest.
                            </p>
                            <button
                                className="bg-[#008BFD] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20">
                                Request Access
                            </button>
                        </div>
                        <div
                            className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-[#008BFD] blur-[150px] opacity-20"></div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-12 border-t border-slate-100 text-center">
                <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">© 2026 SPICALABS • BUILT
                    IN INDIA</p>
            </footer>
        </main>
    );
}