"use client";

import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function AgoraPage() {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main
            className="bg-white min-h-screen text-slate-900 selection:bg-[#008BFD] selection:text-white font-sans overflow-x-hidden">

            {/* --- NAV --- */}
            <nav
                className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 md:px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div
                            className="w-8 h-8 md:w-9 md:h-9 bg-[#008BFD] rounded-xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg shadow-blue-500/20">A
                        </div>
                        <span className="font-bold tracking-tighter text-xl md:text-2xl text-slate-900">Agora</span>
                    </Link>
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="hidden lg:flex gap-8 text-sm font-bold text-slate-500">
                            <a href="#features" onClick={(e) => scrollToSection(e, 'features')}
                               className="hover:text-[#008BFD] cursor-pointer transition-colors">Features</a>
                            <Link href="/products/agora/universities"
                                  className="hover:text-[#008BFD] transition-colors">Universities</Link>
                            <a href="#safety" onClick={(e) => scrollToSection(e, 'safety')}
                               className="hover:text-[#008BFD] cursor-pointer transition-colors">Safety</a>
                            <Link href="/products/agora"
                                  className="text-sm font-bold text-slate-500 hover:text-[#008BFD] transition-colors">Back
                                to App</Link></div>
                        <button
                            className="bg-[#008BFD] text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-blue-600 transition-all shadow-md">
                            Get App
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- HERO --- */}
            <section
                className="relative pt-28 md:pt-48 pb-10 md:pb-64 px-6 min-h-[85vh] lg:min-h-[90vh] flex items-center">
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative">
                    <div className="z-10 text-center lg:text-left">
                        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8}}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
                                The Campus <br/>
                                <span className="text-[#008BFD]">Marketplace.</span>
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                                Securely buy, sell, rent, and exchange items or services within your college community.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-12">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    className="h-10 md:h-14 cursor-pointer active:scale-95 transition-transform"
                                    alt="Play Store"/>
                            </div>
                        </motion.div>
                    </div>

                    <div
                        className="relative lg:absolute right-[-5%] md:right-[-10%] bottom-[-20px] md:bottom-[-120px] w-[110%] md:w-[80%] lg:w-[70%] mx-auto lg:mx-0 pointer-events-none">
                        <motion.div initial={{x: 100, y: 50, opacity: 0}} animate={{x: 0, y: 0, opacity: 1}}
                                    transition={{duration: 1.2}} className="flex justify-end items-end h-full">
                            <img src="/Hand and iPhone 16 Agora.png"
                                 className="w-full h-auto drop-shadow-[-20px_40px_80px_rgba(0,0,0,0.15)] object-contain origin-bottom-right"
                                 alt="Agora App Interface"/>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- 1. USER MANAGEMENT --- */}
            <section id="features" className="py-20 bg-slate-50/50 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <span
                            className="text-[#008BFD] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Identity</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Verified Profiles.</h2>
                        <p className="text-lg md:text-xl text-slate-500 mb-8 font-medium">Secure student registration
                            via .edu email and ID verification. Manage your role as a student or admin.</p>
                        <div className="grid grid-cols-2 gap-4 text-left font-bold text-slate-700">
                            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-sm">🎓
                                Student Only
                            </div>
                            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-sm">🛡️ ID
                                Verified
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <motion.img whileInView={{scale: [0.95, 1], opacity: [0, 1]}} src="/iPhone 13 Pro.png"
                                    className="w-full max-w-[320px] drop-shadow-2xl" alt="Profile"/>
                    </div>
                </div>
            </section>

            {/* --- 2. ITEM & SERVICE LISTINGS --- */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative flex justify-center">
                        <motion.div whileInView={{y: [30, 0], opacity: [0, 1]}} transition={{duration: 0.8}}>
                            <img src="/iPhone 13 Pro-1.png"
                                 className="w-full max-w-[320px] md:max-w-[420px] drop-shadow-2xl" alt="Listing"/>
                        </motion.div>
                    </div>
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        <span
                            className="text-[#008BFD] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Marketplace</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Detailed Listings.</h2>
                        <p className="text-lg md:text-xl text-slate-500 mb-10 font-medium">Post books, electronics, or
                            clothes. Offer services like tutoring and assignment help with multiple images.</p>
                        <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0 font-bold text-slate-700">
                            <li className="flex gap-3 items-center"><span className="text-blue-500">✔</span> Condition &
                                Category Filters
                            </li>
                            <li className="flex gap-3 items-center"><span className="text-blue-500">✔</span> Service
                                Exchange Details
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- 3. DISCOVERY & SEARCH --- */}
            <section
                className="bg-[#008BFD] py-24 px-6 text-white rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <span
                            className="text-blue-200 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Discovery</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Campus-Specific Search.</h2>
                        <p className="text-lg md:text-xl text-blue-50 mb-10">Search by keywords, filter by price range
                            or college, and sort by newest or best price.</p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {['By Category', 'By Condition', 'By University'].map(f => (
                                <span key={f}
                                      className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20 whitespace-nowrap">{f}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <motion.img whileInView={{scale: [0.9, 1], opacity: [0, 1]}} src="/iPhone 13 Pro.png"
                                    className="w-full max-w-[300px] md:max-w-[380px] drop-shadow-2xl" alt="Search"/>
                    </div>
                </div>
            </section>

            {/* --- 4. IN-APP CHAT SYSTEM --- */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 flex justify-center">
                        <motion.img whileInView={{x: [-30, 0], opacity: [0, 1]}} src="/iPhone 13 Pro-2.png"
                                    className="w-full max-w-[320px] drop-shadow-2xl" alt="Chat"/>
                    </div>
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        <span
                            className="text-[#008BFD] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Communication</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Direct Messaging.</h2>
                        <p className="text-lg md:text-xl text-slate-500 mb-8 font-medium">Communicate through an
                            integrated chat system. Negotiate prices and coordinate meetups safely.</p>
                        <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 inline-block text-left">
                            <p className="text-[#008BFD] font-black text-sm mb-1 uppercase tracking-wider">Integrated
                                Offer System</p>
                            <p className="text-slate-600 text-xs font-medium">Make, accept, or decline offers inside the
                                chat.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. SAFETY & MODERATION --- */}
            <section id="safety"
                     className="bg-black py-20 md:py-32 px-6 text-white rounded-[2.5rem] md:rounded-[4rem] mx-2 md:mx-4 mb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    <span
                        className="text-[#008BFD] font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Moderation</span>
                    <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight">Secure & Trusted.</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
                        {[
                            {t: 'Report System', d: 'Flag suspicious listings or users instantly for admin review.'},
                            {t: 'Admin Panel', d: 'Dedicated dashboard for deactivating listings and banning actors.'},
                            {t: 'Secure Login', d: 'Role-based access (Student/Admin) for platform control.'}
                        ].map((item, i) => (
                            <div key={i}
                                 className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-blue-500/50 transition-colors">
                                <h4 className="text-xl font-bold mb-4 text-[#008BFD]">{item.t}</h4>
                                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-16 md:py-24 bg-white px-6 border-t border-slate-100">
                <div
                    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
                    <div>
                        <Link href="/products/agora" className="flex items-center gap-2 mb-6 group">
                            <div
                                className="w-10 h-10 bg-[#008BFD] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/10 transition-transform group-hover:scale-110">A
                            </div>
                            <span className="font-bold text-2xl tracking-tight">Agora</span>
                        </Link>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Building the circular
                            campus economy.</p>
                    </div>
                    <div className="flex gap-16 md:gap-24">
                        <div className="space-y-4">
                            <p className="font-black text-[10px] uppercase tracking-widest text-slate-900">Company</p>
                            <div className="flex flex-col gap-3 text-slate-500 text-sm font-bold">
                                <Link href="/products/agora/about"
                                      className="text-left hover:text-[#008BFD] transition-colors">About Us</Link>
                                <Link href="/products/agora/universities"
                                      className="text-left hover:text-[#008BFD] transition-colors">Universities</Link>
                                <a href="#safety" onClick={(e) => scrollToSection(e, 'safety')}
                                   className="text-left hover:text-[#008BFD] transition-colors">Safety</a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="font-black text-[10px] uppercase tracking-widest text-slate-900">Support</p>
                            <div className="flex flex-col gap-3 text-slate-500 text-sm font-bold">
                                <a href="mailto:hello@spicalabs.com"
                                   className="text-slate-900 hover:text-[#008BFD] transition-colors">hello@spicalabs.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-50 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                    <span>© 2026 SPICALABS</span>
                </div>
            </footer>
        </main>
    );
}