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
            tech: "Java / Spring",
            path: "/products/pulse"
        },
        {
            name: "Agora",
            category: "Marketplace",
            status: "Beta",
            description: "Trust-based university ecosystem.",
            color: "#008BFD",
            tech: "Java / Spring",
            path: "/products/agora"
        },
        {
            name: "AirVista",
            category: "Environment",
            status: "Concept",
            description: "Real-time visualization systems.",
            color: "#3B82F6",
            tech: "Java / React",
            path: "/products/airvista"
        },
        {
            name: "JogSmart",
            category: "Health",
            status: "Concept",
            description: "Rhythm-based activity coaching.",
            color: "#FACC15",
            tech: "React Native",
            path: "/products/jogsmart"
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

            <nav className="relative z-10 p-6 md:p-8 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/"
                      className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-teal-400 transition-all">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Terminal
                </Link>
                {/* Horizontal Scroll for categories on Mobile */}
                <div className="flex gap-4 items-center overflow-x-auto no-scrollbar ml-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-[8px] md:text-[9px] uppercase tracking-widest whitespace-nowrap transition-all ${filter === cat ? 'text-teal-400 font-bold' : 'text-white/20 hover:text-white/50'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </nav>

            <header className="relative z-10 max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-12">
                <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}}>
                    <p className="text-teal-400 text-[9px] font-black uppercase tracking-[0.5em] mb-4">Query_Type:
                        Project_Archive</p>
                    <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.8] text-white uppercase">
                        The <span className="text-white/10 italic">Lab.</span>
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
                                        className="h-full bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-sm flex flex-col justify-between hover:bg-teal-400/[0.02] hover:border-teal-400/40 transition-all duration-500 relative overflow-hidden">

                                        {/* Hover Scanline Effect (Teal) */}
                                        <div
                                            className="absolute top-0 left-0 w-full h-[1px] bg-teal-400/30 -translate-y-full group-hover:translate-y-[500px] transition-all duration-[2s] ease-in-out opacity-0 group-hover:opacity-100"></div>

                                        <div>
                                            <div className="flex justify-between items-start mb-8 md:mb-10">
                                                <div className="relative">
                                                    <div
                                                        className="absolute inset-0 bg-teal-400/10 blur-md rounded-sm"></div>
                                                    <div
                                                        className="relative w-10 h-10 md:w-12 md:h-12 rounded-sm flex items-center justify-center text-black font-black text-xs md:text-sm bg-teal-400"
                                                        style={{backgroundColor: item.color}}>
                                                        {item.name[0]}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[7px] text-white/20 uppercase tracking-widest mb-1">Status</p>
                                                    <span
                                                        className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm border ${item.status === 'Beta' ? 'text-teal-400 border-teal-400/30' : 'text-white/40 border-white/10'}`}>
                                                        {item.status}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-[8px] text-teal-400 font-bold uppercase tracking-[0.2em] mb-2">{item.category}</p>
                                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4 group-hover:text-teal-400 transition-colors uppercase">{item.name}</h2>
                                            <p className="text-white/40 text-xs md:text-sm leading-relaxed font-sans mb-6 line-clamp-2">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="pt-6 border-t border-white/5">
                                            <div className="flex justify-between items-center">
                                                <div className="flex flex-col">
                                                    <span
                                                        className="text-[7px] text-white/20 uppercase tracking-widest mb-1">Technical_Stack</span>
                                                    <span
                                                        className="text-[9px] font-mono text-white/60 uppercase">{item.tech}</span>
                                                </div>
                                                <div
                                                    className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-500">
                                                    <span
                                                        className="text-white group-hover:text-black transition-colors text-xs">→</span>
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

            <footer className="relative z-10 border-t border-white/5 py-8 px-6 md:px-10">
                <div
                    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 opacity-20 text-[8px] uppercase tracking-[0.4em]">
                    <span>Entries_Logged: {projects.length}</span>
                    <span className="hidden md:inline">Architecture_V2.0</span>
                    <span>©_2026_System_Stable</span>
                </div>
            </footer>
        </main>
    );
}