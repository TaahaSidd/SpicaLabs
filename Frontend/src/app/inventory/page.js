"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import {AnimatePresence, motion} from 'framer-motion';

export default function InventoryPage() {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            name: "Pulse",
            category: "Finance",
            status: "Concept",
            description: "Passive rhythm-based expense tracking.",
            color: "#2DD4BF",
            tech: "Java / Spring / React-Native",
            path: "/products/pulse"
        },
        {
            name: "Agora",
            category: "Marketplace",
            status: "Beta",
            description: "Trust-based university ecosystem.",
            color: "#008BFD",
            tech: "Java / Spring / React-Native",
            path: "/products/agora"
        },
        {
            name: "AirVista",
            category: "Environment",
            status: "Archived",
            description: "Real-time visualization systems.",
            color: "#3B82F6",
            tech: "Java / React",
            path: "/products/airvista"
        },
        {
            name: "JogSmart",
            category: "Health",
            status: "Concept",
            description: "Intelligent routing engine for urban athletes. Generates safe paths based on real-time traffic density, lighting conditions, and user-defined scheduling.",
            color: "#FACC15",
            tech: "React Native / Google Maps SDK / GeoLib",
            path: "/products/jogsmart"
        },
        {
            name: "OOHify",
            category: "AdTech",
            status: "Concept",
            description: "Programmatic DOOH aggregator. Managing physical attention through high-speed API protocols.",
            color: "#FF3E00",
            tech: "Next.js / Python / Google Maps API",
            path: "/products/oohify"
        },
        {
            name: "Lyra",
            category: "DevTools",
            status: "Concept",
            description: "Technical content engine. Converting complex repository structures into high-signal engineering insights.",
            color: "#00F5FF",
            tech: "Java / Spring AI / React",
            path: "/products/lyra"
        }
    ];

    const categories = ["All", ...new Set(projects.map(p => p.category))];
    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <main className="bg-[#0A0A0A] min-h-screen text-[#E0E0E0] font-mono selection:bg-teal-500 overflow-x-hidden">

            {/* --- TECHNICAL GRID --- */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                 style={{
                     backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                     backgroundSize: '30px 30px'
                 }}>
            </div>

            {/* NAV - BUMPED TO text-xs/sm */}
            <nav className="relative z-10 p-6 md:p-8 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/"
                      className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-white/40 hover:text-teal-400 transition-all">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                </Link>
                <div className="flex gap-6 items-center overflow-x-auto no-scrollbar ml-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap transition-all font-black ${filter === cat ? 'text-teal-400' : 'text-white/20 hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </nav>

            <header className="relative z-10 max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-12">
                <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}}>
                    <p className="text-teal-400 text-xs font-black uppercase tracking-[0.5em] mb-4">Query Type: Project Archive</p>
                    <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.8] text-white uppercase">
                        The <span className="text-white/10">Lab.</span>
                    </h1>
                </motion.div>
            </header>

            <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((item, i) => (
                            <motion.div
                                layout
                                key={item.name}
                                initial={{opacity: 0, scale: 0.98}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.98}}
                                transition={{duration: 0.4, delay: i * 0.05}}
                            >
                                <Link href={item.path} className="group block h-full">
                                    <div
                                        className="h-full bg-white/[0.02] border border-white/5 p-6 md:p-8  flex flex-col justify-between hover:bg-teal-400/[0.02] hover:border-teal-400/40 transition-all duration-500 relative overflow-hidden">

                                        <div
                                            className="absolute top-0 left-0 w-full h-[1px] bg-teal-400/30 -translate-y-full group-hover:translate-y-[500px] transition-all duration-[2s] ease-in-out opacity-0 group-hover:opacity-100"></div>

                                        <div>
                                            <div className="flex justify-between items-start mb-8 md:mb-10">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-teal-400/10 blur-md rounded-sm"></div>
                                                    <div
                                                        className="relative w-10 h-10 md:w-12 md:h-12 rounded-sm flex items-center justify-center text-black font-black text-xs md:text-sm bg-teal-400"
                                                        style={{backgroundColor: item.color}}>
                                                        {item.name[0]}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    {/* Bumped Status text */}
                                                    <p className="text-[10px] text-white/20 uppercase font-black tracking-widest mb-1">Status</p>
                                                    <span
                                                        className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm border-2 ${item.status === 'Beta' ? 'text-teal-400 border-teal-400/40' : 'text-white/40 border-white/10'}`}>
                                                        {item.status}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Bumped Category text */}
                                            <p className="text-[10px] text-teal-400 font-black uppercase tracking-[0.2em] mb-2">{item.category}</p>
                                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4 group-hover:text-teal-400 transition-colors uppercase leading-tight">{item.name}</h2>
                                            <p className="text-white/50 text-sm md:text-base leading-relaxed font-sans mb-6 line-clamp-2">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="pt-6 border-t border-white/10">
                                            <div className="flex justify-between items-center">
                                                <div className="flex flex-col">
                                                    {/* Bumped Technical Stack text */}
                                                    <span
                                                        className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Technical_Stack</span>
                                                    <span
                                                        className="text-xs font-bold text-white uppercase tracking-tight">{item.tech}</span>
                                                </div>
                                                <div
                                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-500">
                                                    <span
                                                        className="text-white group-hover:text-black transition-colors text-sm">→</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* FOOTER - CLEAN INDUSTRIAL GRID */}
            <footer className="relative z-10 bg-[#080808] border-t border-white/5 pt-24 pb-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                        {/* BRAND SECTION */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-sm font-black tracking-[0.3em] uppercase text-white">SpicaLabs</span>
                            </div>
                            <p className="text-white/40 text-sm font-medium font-sans leading-relaxed max-w-xs">
                                Software engineering studio focused on high-performance Java systems and cross-platform architecture.
                            </p>
                        </div>

                        {/* INDEX SECTION */}
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-400 mb-6">Navigation</h4>
                            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                                <li><Link href="/" className="text-white/40 hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/inventory" className="text-white/40 hover:text-white transition-colors">Inventory</Link></li>
                                <li><Link href="/about" className="text-white/40 hover:text-white transition-colors">Archive</Link></li>
                            </ul>
                        </div>

                        {/* CONNECT SECTION */}
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-400 mb-6">Uplink</h4>
                            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                                <li><a href="https://github.com/TaahaSidd" target="_blank" className="text-white/40 hover:text-white transition-colors">GitHub</a></li>
                                <li><a href="mailto:taaha@system.dev" className="text-white/40 hover:text-white transition-colors">Email</a></li>
                                <li><span className="text-white/20">LinkedIn</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* BOTTOM STRIP - NO UNDERSCORES */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
                            <span>Version 2.0.4</span>
                            <span>Environment: Production</span>
                            <span>Latency: 24ms</span>
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40">
                            © 2026 SpicaLabs Studio. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}