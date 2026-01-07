"use client";

import React from 'react';
import Link from 'next/link';

export default function PortfolioPage() {
    const skills = [
        {category: "Languages", items: ["Java", "JavaScript", "SQL", "TypeScript"]},
        {category: "Backend", items: ["Spring Boot", "Spring Security", "JPA/Hibernate", "REST APIs"]},
        {category: "Frontend", items: ["React Native", "React.js", "Next.js", "Tailwind CSS"]},
        {category: "Tools & DevOps", items: ["Docker", "PostgreSQL", "Cloudinary", "Git", "Vercel"]}
    ];

    const projects = [
        {
            title: "Agora",
            type: "Full-Stack Mobile Marketplace",
            story: "Campus commerce is often fragmented and unsafe. I built Agora to provide a verified, student-only ecosystem for trading items and services.",
            solution: "Implemented Spring Security for RBAC and integrated Cloudinary for optimized image delivery.",
            tech: ["Java", "Spring Boot", "React Native", "PostgreSQL", "Docker"],
            links: {code: "https://github.com/TaahaSidd/Agora"},
            // Path to your 3D iPhone Mockup
            image: "/Hand and iPhone 16 Agora.png",
            align: "right"
        },
        {
            title: "Pulse",
            type: "Fintech Monitoring System",
            story: "Managing personal finances requires more than just tracking; it requires automated insights.",
            solution: "Leveraged JPA/Hibernate for efficient data persistence and built a modular REST API to serve a clean React dashboard.",
            tech: ["Spring Boot", "React", "PostgreSQL", "JPA"],
            links: {code: "https://github.com/TaahaSidd/Pulse"},
            image: "/iPhone 15 Pulse.png",
            align: "left"
        }
    ];

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-slate-900 selection:text-white pb-20">

            {/* Transparent Nav */}
            <nav className="absolute top-0 left-0 right-0 z-50 p-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/"
                          className="text-xs font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                        Portfolio
                    </Link>
                    <div className="flex gap-8 items-center">
                        <a href="https://linkedin.com/in/tahasidd" target="_blank"
                           className="text-xs font-black uppercase tracking-widest text-white/50 hover:text-white">LinkedIn</a>
                        <a href="https://github.com/TaahaSidd" target="_blank"
                           className="text-xs font-black uppercase tracking-widest text-white/50 hover:text-white">GitHub</a>
                        <a href="/resume.pdf"
                           className="px-6 py-2 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all">Resume</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative h-[750px] w-full flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/rick-rothenberg-eSdUR--aS88-unsplash.jpg" alt="Hero Background"
                         className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white whitespace-nowrap mb-8">
                        Full Stack Engineer.
                    </h1>
                    <p className="text-xl md:text-3xl text-slate-300 max-w-2xl leading-relaxed font-light">
                        Architecting production-ready systems using <span
                        className="text-white border-b border-white/30">Java Spring Boot</span> and <span
                        className="text-white border-b border-white/30">React Native</span>.
                    </p>
                </div>
            </header>

            {/* Large Philosophy Section */}
            <section
                className="min-h-[100vh] flex items-center justify-center bg-slate-50 border-y border-slate-100 px-6">
                <div className="max-w-5xl text-center">
                    <p className="text-4xl md:text-6xl lg:text-7xl font-medium text-slate-900 leading-[1.05] tracking-tight">
                        "Code is like humor. When you have to <span className="text-slate-400 italic">explain</span> it,
                        it's bad." – Cory House
                    </p>
                </div>
            </section>

            {/* About Me Section */}
            <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 italic underline underline-offset-8">Identification</h3>
                </div>
                <div className="lg:col-span-8 space-y-10">
                    <h2 className="text-5xl font-bold tracking-tight text-slate-900">Taaha Sidd.</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-lg text-slate-600 leading-relaxed">
                        <p>I am a Full Stack Developer specializing in the Spring Ecosystem. My approach is defined by
                            building systems that are as robust on the backend as they are seamless on the mobile
                            frontend.</p>
                        <p>Currently strengthening fundamentals in System Design and DevOps to bridge the gap between
                            development and scalable solutions.</p>
                    </div>
                </div>
            </section>

            {/* Projects Grid: 3D Off-Screen Logic */}
            <section className="w-full overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-20 space-y-64">
                    {projects.map((p, i) => (
                        <article key={i} className="grid lg:grid-cols-2 gap-20 items-center relative">
                            {/* Text Content */}
                            <div className={`z-20 space-y-8 ${p.align === "left" ? "lg:order-2" : ""}`}>
                                <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2">{p.type}</h3>
                                    <h2 className="text-6xl font-bold tracking-tighter">{p.title}</h2>
                                </div>
                                <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-md">
                                    <p>{p.story}</p>
                                    <p><strong className="text-slate-900">The Build:</strong> {p.solution}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map(t => (
                                        <span key={t}
                                              className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded-md">{t}</span>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <a href={p.links.code}
                                       className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-slate-900 pb-1 w-fit">
                                        Source Code <span
                                        className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>

                            {/* 3D Mockup Container */}
                            <div
                                className={`relative h-[600px] flex items-center ${p.align === "left" ? "lg:justify-start lg:order-1" : "lg:justify-end"}`}>
                                {p.image ? (
                                    <div className="relative w-full h-full flex items-center group">
                                        {/* Ambient Glow */}
                                        <div
                                            className={`absolute ${p.align === "left" ? "left-0" : "right-0"} w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity`}></div>

                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className={`
                                    relative z-10 
                                    w-full h-full object-contain 
                                    transform transition-all duration-1000 ease-out
                                    pointer-events-none
                                    
                                    /* Logic for Right Side (Agora - Massive) */
                                    ${p.align === "right" ?
                                                "scale-[1.8] md:scale-[2.2] translate-x-[20%] md:translate-x-[35%] -rotate-6 group-hover:translate-x-[25%] group-hover:scale-[2.3] group-hover:rotate-0" :
                                                ""
                                            }

                                    /* Logic for Left Side (Pulse - Small/Standard) */
                                    ${p.align === "left" ?
                                                "scale-[1.8] md:scale-[1.6] -translate-x-[10%] md:-translate-x-[15%] rotate-3 group-hover:-translate-x-[5%] group-hover:scale-[1.9] group-hover:rotate-0" :
                                                ""
                                            }
                                `}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className="aspect-[4/3] w-full bg-slate-100 rounded-[3rem] border border-slate-200 flex items-center justify-center">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Technical
                                            Case Study</p>
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Skills UI */}
            <section className="max-w-7xl mx-auto px-6 py-40">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
                    {skills.map((group, idx) => (
                        <div key={idx}
                             className="p-10 border-r border-b border-slate-200 last:border-r-0 hover:bg-slate-50 transition-colors">
                            <span
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-8">0{idx + 1} // {group.category}</span>
                            <ul className="space-y-4">
                                {group.items.map(item => (
                                    <li key={item}
                                        className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-3">
                                        <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Footer */}
            <footer className="py-40 px-6 border-t border-slate-100 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Collaborate</h3>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Ready to build.</h2>
                    <div className="pt-10 flex flex-col md:flex-row justify-center gap-6">
                        <a href="mailto:taaha.sidd@example.com"
                           className="px-12 py-6 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl">Email</a>
                        <a href="https://linkedin.com/in/tahasidd"
                           className="px-12 py-6 bg-white border border-slate-200 text-slate-900 rounded-full font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}