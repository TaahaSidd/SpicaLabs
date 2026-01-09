"use client";
import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function JogSmartPage() {
    return (
        <main
            className="bg-[#050607] min-h-screen text-white font-sans selection:bg-[#FACC15] selection:text-black overflow-x-hidden">

            {/* CLEAN NAV */}
            <nav
                className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#050607]/80 backdrop-blur-md px-6 py-5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/inventory"
                          className="font-bold text-sm tracking-widest uppercase hover:text-[#FACC15] transition-colors">
                        <span className="ml-2">JogSmart</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span
                            className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Research_Phase_01</span>
                    </div>
                </div>
            </nav>

            {/* RESHAPED HERO: THE BLUEPRINT */}
            <section className="relative pt-44 md:pt-60 pb-20 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                        >
                            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-10 leading-[0.85]">
                                Mapping <br/>the <span className="text-[#FACC15]">Dark.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/50 font-medium leading-snug max-w-lg mb-12">
                                We are designing a spatial intelligence tool that identifies safe running paths through
                                community-verified lighting and hazard data.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <button
                                    className="bg-[#FACC15] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                                    Join the Build
                                </button>
                                <div className="flex flex-col justify-center">
                                    <span
                                        className="text-[10px] font-bold uppercase tracking-widest text-white/40">Status</span>
                                    <span className="text-sm font-bold uppercase italic">Pre-Alpha Concept</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Visual Logic Diagram (No fake stats) */}
                        <div className="relative border border-white/10 rounded-[3rem] p-10 bg-white/[0.02]">
                            <div className="space-y-12">
                                <div className="flex items-start gap-6">
                                    <div
                                        className="w-12 h-12 rounded-full border border-[#FACC15] flex items-center justify-center font-bold text-[#FACC15] text-xs">01
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-tight text-lg mb-1">Environmental
                                            Input</h4>
                                        <p className="text-sm text-white/40">Community members flag street-level data:
                                            light outages, path hazards, and density.</p>
                                    </div>
                                </div>
                                <div className="h-12 w-px bg-gradient-to-b from-[#FACC15] to-transparent ml-6"></div>
                                <div className="flex items-start gap-6">
                                    <div
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-bold text-white/20 text-xs">02
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-tight text-lg mb-1 text-white/40">Spatial
                                            Analysis</h4>
                                        <p className="text-sm text-white/20 italic">Logic engine currently under
                                            development to verify report accuracy and weight.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DATA GRID: THE PROPOSED UTILITY */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden">

                        <div className="bg-[#050607] p-10 flex flex-col justify-between min-h-[300px]">
                            <h3 className="text-xl font-black uppercase italic mb-4">Lumen Check</h3>
                            <p className="text-sm text-white/40 leading-relaxed">
                                A proposed system for runners to verify streetlight functionality in real-time to
                                prevent "Blind Running."
                            </p>
                        </div>

                        <div className="bg-[#050607] p-10 flex flex-col justify-between min-h-[300px]">
                            <h3 className="text-xl font-black uppercase italic mb-4">Crowd Pulse</h3>
                            <p className="text-sm text-white/40 leading-relaxed">
                                Using aggregated GPS pings to determine if a route is "Socially Active" or "Isolated."
                            </p>
                        </div>

                        <div className="bg-[#050607] p-10 flex flex-col justify-between min-h-[300px]">
                            <h3 className="text-xl font-black uppercase italic mb-4">Hazard Log</h3>
                            <p className="text-sm text-white/40 leading-relaxed">
                                One-tap community reporting for temporary obstacles like construction or slippery
                                surfaces.
                            </p>
                        </div>

                        <div className="bg-[#050607] p-10 flex flex-col justify-between min-h-[300px]">
                            <h3 className="text-xl font-black uppercase italic mb-4">Route Audit</h3>
                            <p className="text-sm text-white/40 leading-relaxed">
                                Every route will generate a safety coefficient based on verified environmental inputs.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* STATUS FEED */}
            <section className="py-20 px-6 max-w-[1400px] mx-auto">
                <div className="bg-[#111] p-1 border border-white/5">
                    <div className="border border-white/10 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">System_Current_State</span>
                            </div>
                            <h2 className="text-3xl font-black uppercase italic mb-4">Building the Node.</h2>
                            <p className="text-sm text-white/40 font-sans max-w-md">
                                JogSmart is currently in the R&D phase at SpicaLab. We are stress-testing the geofencing engine to ensure 0ms latency in hazard reporting.
                            </p>
                        </div>
                        <div className="w-full md:w-auto">
                            <form className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="USER_EMAIL@DOMAIN"
                                    className="bg-black border border-white/10 px-6 py-4 text-xs focus:border-[#FACC15] focus:outline-none w-full sm:w-64"
                                />
                                <button className="bg-white text-black px-8 py-4 font-black text-[10px] uppercase tracking-widest hover:bg-[#FACC15] transition-colors">
                                    Queue_Access
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            {/* FOOTER */}
            <footer className="py-12 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="font-bold text-xs uppercase tracking-widest">JogSmart</span>
                    <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.2em]">© 2026 Designed by
                        Taaha Siddiqui</p>
                </div>
            </footer>
        </main>
    );
}