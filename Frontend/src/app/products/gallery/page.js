"use client";

import React from 'react';
import Link from 'next/link';

export default function GalleryPage() {
    const projects = [
        {
            name: "Pulse",
            category: "Finance",
            status: "Live",
            description: "Passive rhythm-based expense tracking.",
            color: "#7DFF7D",
            link: "/products/pulse"
        },
        {
            name: "Agora",
            category: "Marketplace",
            status: "Beta",
            description: "Trust-based university ecosystem.",
            color: "#008BFD",
            link: "/products/agora"
        },
        {
            name: "AirVista",
            category: "Environment",
            status: "Concept",
            description: "Real-time air quality visualization.",
            color: "#3B82F6",
            link: "/products/airvista"
        },
        {
            name: "JogSmart",
            category: "Health",
            status: "In Lab",
            description: "Rhythm-based activity coaching.",
            color: "#FACC15",
            link: "/products/jogsmart"
        },
        {
            name: "Oohify",
            category: "Social",
            status: "Concept",
            description: "Mapping the energy of physical spaces.",
            color: "#FF3E00",
            link: "/products/oohify"
        },
        {
            name: "SafeRun",
            category: "Safety",
            status: "In Lab",
            description: "Intelligent companion for solo runners.",
            color: "#8B5CF6",
            link: "/products/saferun"
        }
    ];

    return (
        <main className="bg-[#F8FAFC] min-h-screen text-slate-900 selection:bg-[#274C77] selection:text-white pb-32">

            <nav className="p-8 flex justify-between items-center">
                <Link href="/"
                      className="group flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-slate-400">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Studio
                </Link>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Archive v1.0</span>
            </nav>

            <header className="max-w-7xl mx-auto px-6 pt-20 pb-16">
                <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none mb-8">
                    The <span className="text-slate-300">Lab.</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
                    A collection of experiments in focus, intent, and digital rhythm.
                    Every project is viewable, regardless of its development stage.
                </p>
            </header>

            <section className="max-w-7xl mx-auto px-6">
                <div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50">
                    {projects.map((item) => (
                        <Link key={item.name} href={item.link} className="block group">
                            <div
                                className="h-full bg-white p-10 flex flex-col justify-between hover:bg-slate-50 transition-all duration-500">
                                <div>
                                    <div className="flex justify-between items-start mb-12">
                                        <div
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform"
                                            style={{backgroundColor: item.color}}
                                        >
                                            {item.name[0]}
                                        </div>
                                        <span
                                            className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                                                item.status === 'Live' ? 'bg-[#7DFF7D]/10 border-[#7DFF7D]/20 text-emerald-700' :
                                                    item.status === 'Beta' ? 'bg-blue-50 border-blue-100 text-blue-600' :
                                                        'bg-slate-50 border-slate-100 text-slate-400'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tight mb-3">{item.name}</h2>
                                    <p className="text-slate-500 text-base leading-snug">{item.description}</p>
                                </div>
                                <div
                                    className="mt-12 flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-[#274C77] opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Project <span>→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}