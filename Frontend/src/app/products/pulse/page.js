"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PulsePage() {
    return (
        <main className="bg-[#040504] min-h-screen text-white font-sans selection:bg-[#7DFF7D] selection:text-black overflow-x-hidden">

            <nav className="fixed top-0 w-full z-[100] bg-[#040504]/70 backdrop-blur-xl px-4 md:px-6 py-4 md:py-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link href="/inventory" className="flex items-center gap-2 group">
                        <span className="font-bold text-sm tracking-tight uppercase hover:text-[#7DFF7D] transition-colors">Pulse</span>
                    </Link>
                    <div className="px-3 py-1 md:px-4 md:py-1.5 border border-[#7DFF7D]/30 rounded-full">
                        <span className="text-[#7DFF7D] text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Concept_2026</span>
                    </div>
                </div>
            </nav>

            <section className="relative pt-32 md:pt-36 pb-20 md:pb-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-bold tracking-tight leading-[1.1] md:leading-[0.9] mb-12 uppercase">
                            Zero Input. <br/>
                            <span className="text-[#7DFF7D]">Just freedom.</span>
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-20 items-end">
                            <p className="text-lg md:text-2xl text-white/50 leading-snug">
                                Pulse listens to your incoming bank notifications and logs expenses instantly.
                                No manual entry, no banking logins—just pure automation.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="h-px bg-white/10 w-full"></div>
                                <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-[#7DFF7D]">Built for you</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-10 md:py-20 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="bg-[#0A0C0B] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 min-h-[400px] md:h-[500px] flex flex-col justify-between border border-white/5">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold max-w-xs mb-4">Step 01: The Alert</h3>
                                <p className="text-white/40 text-sm md:text-base">Pulse detects the transaction notification from your bank or payment app the second it arrives.</p>
                            </div>

                            <div className="relative w-full bg-white/5 rounded-2xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-5 h-5 bg-blue-500 rounded-md"></div>
                                    <span className="text-[10px] uppercase font-bold text-white/40">HDFC Bank • Just Now</span>
                                </div>
                                <p className="text-sm font-medium">Spent ₹1,240.00 at Zomato using UPI</p>
                            </div>
                        </div>

                        <div className="bg-[#7DFF7D] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 min-h-[400px] md:h-[500px] flex flex-col justify-between text-black">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase italic">Step 02: Auto-Logging</h3>
                                <p className="font-medium opacity-80 text-sm md:text-base">The app parses the amount and merchant, then adds it to your daily list. Your budget updates in real-time.</p>
                            </div>

                            <div className="bg-black text-white p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl shadow-2xl">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[9px] md:text-[10px] font-bold opacity-40 uppercase">Remaining Budget</span>
                                    <span className="text-[9px] text-[#7DFF7D] bg-[#7DFF7D]/10 px-2 py-0.5 rounded">Log Success</span>
                                </div>
                                <h4 className="text-4xl md:text-5xl font-light mb-2">₹1670.20</h4>
                                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-xs opacity-60 italic">Last log: Zomato (₹1,240)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-40 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-10 tracking-tight italic font-serif leading-tight">"Why log manually in 2026?"</h2>
                    <p className="text-white/40 leading-relaxed text-base md:text-lg">
                        If your phone already knows you spent money, why should you tell it again?
                        Pulse bridges the gap between your notifications and your finance goals.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12">
                        <div className="max-w-xs">
                            <h4 className="text-[#7DFF7D] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4">Project Status</h4>
                            <p className="text-sm text-white/60 font-medium leading-relaxed">Pulse is currently in the pre-alpha conceptual stage. We are refining the Notification Listener engine.</p>
                        </div>
                        <div className="flex-1 w-full space-y-2 md:space-y-4">
                            {[
                                { stage: "Notification Listener Logic", status: "Active" },
                                { stage: "AI Category Mapping", status: "Pending" },
                                { stage: "Mobile Interface Design", status: "Concept" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                                    <span className="font-bold text-xs md:text-sm uppercase tracking-tight">{item.stage}</span>
                                    <span className={`text-[9px] md:text-[10px] font-black px-3 py-1 rounded-full ${item.status === 'Active' ? 'bg-[#7DFF7D] text-black' : 'border border-white/10 text-white/20'}`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-40 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-8xl font-bold tracking-tighter mb-6 md:mb-8 uppercase">Follow the <br className="hidden md:block"/> journey.</h2>
                    <p className="text-white/40 mb-10 md:mb-12 max-w-sm mx-auto text-sm">Pulse is a vision of SpicaLab. Be the first to know when the first build is ready.</p>

                    <form className="flex flex-col sm:flex-row justify-center gap-3">
                        <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 w-full sm:w-[320px] focus:outline-none focus:border-[#7DFF7D]/50 transition-colors text-sm"
                        />
                        <button className="bg-[#7DFF7D] text-black px-10 py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-sm hover:scale-105 transition-transform uppercase tracking-widest">
                            Notify Me
                        </button>
                    </form>
                </div>
            </section>

            <footer className="py-10 md:py-12 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest">Pulse</span>
                    </div>
                    <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Designed by Taaha Siddiqui</p>
                </div>
            </footer>
        </main>
    );
}