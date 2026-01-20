// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Zap, Terminal, Code2, Share2, CheckCircle2, Globe, Database, ShieldCheck, Box } from 'lucide-react';
//
// export default function LyraPage() {
//     return (
//         <main className="bg-[#030507] min-h-screen text-[#94a3b8] font-sans selection:bg-[#00F5FF] selection:text-black overflow-x-hidden">
//
//             {/* 1:1 NAVIGATION */}
//             <nav className="fixed top-0 w-full z-[100] bg-[#030507]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
//                 <div className="max-w-[1400px] mx-auto flex justify-between items-center">
//                     <div className="flex items-center gap-2">
//                         <div className="w-7 h-7 bg-[#00F5FF] rounded-md flex items-center justify-center">
//                             <Box size={18} className="text-black stroke-[3]" />
//                         </div>
//                         <span className="font-bold text-lg tracking-tighter text-white">LYRA</span>
//                     </div>
//
//                     <div className="hidden md:flex items-center gap-10">
//                         <div className="flex gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
//                             <a href="#" className="hover:text-[#00F5FF] transition-colors">Pricing</a>
//                             <a href="#" className="hover:text-[#00F5FF] transition-colors">Docs</a>
//                             <a href="#" className="hover:text-[#00F5FF] transition-colors">Changelog</a>
//                         </div>
//                         <div className="h-4 w-px bg-white/10"></div>
//                         <button className="bg-[#00F5FF] shadow-[0_0_20px_rgba(0,245,255,0.3)] text-black px-6 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all">
//                             Sign In
//                         </button>
//                     </div>
//                 </div>
//             </nav>
//
//             {/* HERO SECTION */}
//             <section className="pt-44 pb-32 px-6 relative">
//                 {/* Radial Glow Background */}
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#00F5FF]/5 blur-[120px] rounded-full pointer-events-none"></div>
//
//                 <div className="max-w-5xl mx-auto text-center relative z-10">
//                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00F5FF]/10 border border-[#00F5FF]/20 rounded-full mb-8">
//                         <div className="w-1.5 h-1.5 bg-[#00F5FF] rounded-full animate-pulse"></div>
//                         <span className="text-[10px] font-black text-[#00F5FF] uppercase tracking-[0.2em]">Lyra V.2.0 is Live</span>
//                     </div>
//
//                     <h1 className="text-5xl md:text-[5.5rem] font-bold text-white leading-[1.1] tracking-tight mb-8">
//                         No-BS Technical <span className="text-[#00F5FF] italic">Content</span>
//                     </h1>
//
//                     <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
//                         Turn your GitHub repositories into senior-level LinkedIn posts in seconds.
//                         <span className="text-white"> Engineered for engineers</span> to cut through the noise.
//                     </p>
//
//                     {/* THE MOCKUP WINDOW (Exact from image) */}
//                     <div className="max-w-3xl mx-auto bg-[#0D1117] border border-white/10 rounded-2xl p-4 shadow-2xl relative">
//                         <div className="flex gap-1.5 mb-4 px-2">
//                             <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
//                             <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
//                             <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
//                             <span className="text-[10px] text-white/20 ml-2 font-mono uppercase tracking-widest">Repository_Parser</span>
//                         </div>
//
//                         <div className="flex flex-col md:flex-row gap-3 bg-black/40 p-2 rounded-xl border border-white/5">
//                             <div className="flex-1 flex items-center px-4 gap-4">
//                                 <Globe size={18} className="text-white/20" />
//                                 <input
//                                     type="text"
//                                     placeholder="Paste github URL or repo (e.g. spicalab/lyra)"
//                                     className="bg-transparent border-none outline-none text-sm w-full text-white/80 placeholder:text-white/20 font-medium"
//                                 />
//                             </div>
//                             <button className="bg-[#00F5FF] text-black px-8 py-3 rounded-lg font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,245,255,0.2)]">
//                                 Extract Insights <Zap size={14} fill="black" />
//                             </button>
//                         </div>
//                         <p className="mt-4 text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">Press <span className="text-white/60">Shift + Enter</span> to execute</p>
//                     </div>
//                 </div>
//             </section>
//
//             {/* STATS STRIP */}
//             <section className="max-w-6xl mx-auto px-6 mb-32">
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
//                     {[
//                         { val: '10k+', label: 'Generations' },
//                         { val: '50k+', label: 'Repos Mapped' },
//                         { val: '2.5k', label: 'Active Users' },
//                         { val: '0.4s', label: 'Avg Latency' }
//                     ].map((s, i) => (
//                         <div key={i} className="bg-[#030507] py-12 px-8 text-center">
//                             <h3 className="text-3xl font-bold text-white mb-2">{s.val}</h3>
//                             <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">{s.label}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//
//             {/* 3-STEP PROCESS */}
//             <section className="py-20 px-6 max-w-[1400px] mx-auto">
//                 <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-10">
//                     <div>
//                         <h2 className="text-4xl font-bold text-white mb-4">From Code to Content in 3 Steps</h2>
//                         <p className="text-white/40 max-w-md">Our engine understands system architecture, design patterns, and engineering tradeoffs.</p>
//                     </div>
//                     <a href="#" className="text-[#00F5FF] text-xs font-bold uppercase tracking-widest border-b border-[#00F5FF]/30 pb-1">Documentation →</a>
//                 </div>
//
//                 <div className="grid md:grid-cols-3 gap-6">
//                     {[
//                         { icon: <Code2 />, title: 'Input Repo', desc: 'Paste any public repo URL. Lyra fetches system context and architecture tree instantly.' },
//                         { icon: <Zap />, title: 'Extract Architecture', desc: 'Lyra identifies file structures, design patterns, and key system design decisions.' },
//                         { icon: <Share2 />, title: 'Get Content', desc: 'Receive high-signal LinkedIn posts designed to establish engineering authority.' }
//                     ].map((step, i) => (
//                         <div key={i} className="bg-[#0D1117] border border-white/5 p-10 rounded-[2.5rem] hover:border-[#00F5FF]/20 transition-all group">
//                             <div className="w-12 h-12 bg-[#00F5FF]/10 text-[#00F5FF] rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
//                                 {step.icon}
//                             </div>
//                             <h4 className="text-white font-bold text-lg uppercase tracking-tight mb-4">{step.title}</h4>
//                             <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//
//             {/* INTEGRATION MARQUEE */}
//             <div className="py-24 flex flex-wrap justify-center gap-12 grayscale opacity-40">
//                 <div className="flex items-center gap-2 font-bold text-sm tracking-tighter"><Globe size={18}/> AWS</div>
//                 <div className="flex items-center gap-2 font-bold text-sm tracking-tighter"><ShieldCheck size={18}/> STRIPE</div>
//                 <div className="flex items-center gap-2 font-bold text-sm tracking-tighter"><Database size={18}/> MONGODB</div>
//                 <div className="flex items-center gap-2 font-bold text-sm tracking-tighter"><Zap size={18}/> DATABRICKS</div>
//             </div>
//
//             {/* HIGH SIGNAL SECTION */}
//             <section className="py-32 px-6">
//                 <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
//                     <div>
//                         <h2 className="text-5xl font-bold text-white mb-2 leading-none">High Signal.</h2>
//                         <h2 className="text-5xl font-bold text-[#00F5FF] mb-10 leading-none italic">Zero Fluff.</h2>
//                         <p className="text-lg text-white/50 mb-12 max-w-md">
//                             Most AI tools write like marketing interns. Lyra writes like a Staff Engineer who actually built the system.
//                         </p>
//                         <div className="space-y-6">
//                             {[
//                                 'Focus on architectural tradeoffs',
//                                 'Technical deep diving over hype',
//                                 'Developer-first tone of voice'
//                             ].map((text, i) => (
//                                 <div key={i} className="flex items-center gap-4 text-white/80 font-semibold">
//                                     <div className="w-5 h-5 bg-[#00F5FF]/20 text-[#00F5FF] rounded-full flex items-center justify-center">
//                                         <CheckCircle2 size={14} />
//                                     </div>
//                                     {text}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//
//                     {/* MOCK CODE WINDOW */}
//                     <div className="bg-[#0D1117] rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
//                         <div className="absolute top-0 right-0 p-4 opacity-20"><Code2 size={40}/></div>
//                         <div className="font-mono text-sm space-y-4">
//                             <p className="text-[#00F5FF]/60">// Lyra_Senior_Output.txt</p>
//                             <div className="space-y-2 text-white/80">
//                                 <p className="text-[#00F5FF]">"The system implements a <span className="text-white underline">CQRS pattern</span> to decouple..."</p>
//                                 <p>Instead of scaling the whole monolith, we target the write-heavy nodes. This prevents bottlenecks during peak sync.</p>
//                             </div>
//                             <div className="pt-4 border-t border-white/5 flex gap-4">
//                                 <div className="h-2 w-24 bg-white/5 rounded"></div>
//                                 <div className="h-2 w-12 bg-white/5 rounded"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* FOOTER */}
//             <footer className="py-20 px-6 border-t border-white/5 bg-[#030507]">
//                 <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
//                     <div className="flex items-center gap-2 opacity-50">
//                         <Box size={18} className="text-white" />
//                         <span className="font-bold text-xs uppercase tracking-[0.3em]">Lyra // SpicaLab</span>
//                     </div>
//                     <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
//                         <a href="#" className="hover:text-white transition-colors">Privacy</a>
//                         <a href="#" className="hover:text-white transition-colors">Terms</a>
//                         <a href="#" className="hover:text-white transition-colors">Twitter</a>
//                         <a href="#" className="hover:text-white transition-colors">Github</a>
//                     </div>
//                 </div>
//             </footer>
//         </main>
//     );
// }


"use client";
import React from 'react';
import Link from 'next/link';

export default function LyraPage() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen text-[#E0E0E0] font-mono selection:bg-[#00F5FF] selection:text-black overflow-x-hidden">

            {/* LAB GRID */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                 style={{
                     backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                     backgroundSize: '40px 40px'
                 }}>
            </div>

            {/* NAV */}
            <nav className="relative z-10 p-8 flex justify-between items-center max-w-7xl mx-auto uppercase">
                <Link href="/"
                      className="group flex items-center gap-3 text-sm font-black tracking-widest text-white hover:text-[#00F5FF] transition-all">
                    <span className="group-hover:-translate-x-2 transition-transform">←</span> Back
                </Link>
                <span className="text-xs font-black tracking-widest text-[#00F5FF] border border-[#00F5FF]/30 px-3 py-1 bg-[#00F5FF]/5">
                    Status: Development Active
                </span>
            </nav>

            {/* HERO */}
            <header className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
                <p className="text-[#00F5FF] text-sm font-black uppercase tracking-widest mb-6">Active Build 002</p>
                <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-white uppercase mb-12">
                    Lyra
                </h1>

                <div className="grid md:grid-cols-2 gap-16 items-start border-l-4 border-[#00F5FF] pl-8">
                    <p className="text-white/60 text-xl md:text-2xl font-medium font-sans leading-relaxed">
                        An architectural parser built to turn raw GitHub repositories into high signal engineering content. It bypasses the hype and focuses on structural integrity.
                    </p>
                    <div className="bg-[#00F5FF]/5 border border-[#00F5FF]/20 p-8">
                        <p className="text-[#00F5FF] text-xs font-black uppercase tracking-widest mb-4">Intelligence Layer</p>
                        <p className="text-sm text-white/40 leading-relaxed font-sans italic">
                            Powered by Spring AI. I am implementing a strict Staff Engineer persona that analyzes code patterns to produce authority-driven content instead of generic AI summaries.
                        </p>
                    </div>
                </div>
            </header>

            {/* THE PARSER INPUT MOCKUP */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">
                <div className="bg-[#111] border border-white/10 p-2 rounded-sm shadow-2xl">
                    <div className="bg-[#0A0A0A] border border-white/5 p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="PASTE REPOSITORY URL (GHTOKEN REQUIRED)"
                                className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-[#00F5FF] text-white font-black uppercase tracking-widest"
                            />
                            <button className="bg-[#00F5FF] text-black px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
                                Extract Insights
                            </button>
                        </div>
                        <div className="mt-6 flex gap-4 text-[10px] text-white/20 font-black uppercase tracking-widest">
                            <span>Architecture Mapping</span>
                            <span className="text-[#00F5FF]">Spring AI Integration</span>
                            <span>Persona Steering</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PIPELINE SECTION */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
                    <div className="bg-[#0A0A0A] p-12 space-y-6">
                        <h4 className="text-xl font-black text-white uppercase tracking-tighter">Code Parsing</h4>
                        <p className="text-sm text-white/40 leading-relaxed font-sans">
                            The system crawls file trees to map out the core architecture, identifying the real tech debt and design choices hidden in the source.
                        </p>
                    </div>
                    <div className="bg-[#0A0A0A] p-12 space-y-6 border-x border-white/10">
                        <h4 className="text-xl font-black text-white uppercase tracking-tighter">Persona Engine</h4>
                        <p className="text-sm text-white/40 leading-relaxed font-sans">
                            Using System Message steering in Spring AI to ensure every output sounds like it was written by a developer with ten years of experience.
                        </p>
                    </div>
                    <div className="bg-[#0A0A0A] p-12 space-y-6">
                        <h4 className="text-xl font-black text-white uppercase tracking-tighter">Signal Synthesis</h4>
                        <p className="text-sm text-white/40 leading-relaxed font-sans">
                            The final layer translates technical patterns into LinkedIn posts that establish real engineering authority.
                        </p>
                    </div>
                </div>
            </section>

            {/* STACK BOX */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                    <div>
                        <h3 className="text-white text-4xl font-black uppercase tracking-tighter mb-8">System Spec</h3>
                        <p className="text-white/50 text-lg font-sans leading-relaxed">
                            I chose Spring AI for the backend to handle the complexity of persona-based steering. It allows for a more structured way to manage the AI chat client and model interactions.
                        </p>
                    </div>

                    <div className="bg-white/5 p-10 border border-white/10">
                        <div className="space-y-6 text-sm font-black uppercase tracking-widest">
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/30 text-xs">AI Framework</span>
                                <span>Spring AI</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/30 text-xs">Primary Backend</span>
                                <span>Java Spring Boot</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/30 text-xs">Analysis Model</span>
                                <span>GPT 4o</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-white/30 text-xs">UI Architecture</span>
                                <span>React Tailwind</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 py-40 text-center border-t border-white/5">
                <Link href="/"
                      className="bg-[#00F5FF] text-black px-16 py-6 font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl shadow-[#00F5FF]/10">
                    Return to Lab
                </Link>
            </footer>
        </main>
    );
}