"use client";
import React from 'react';
import Link from 'next/link';

export default function Home() {
    const [isVisible, setIsVisible] = React.useState({});

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible((prev) => ({...prev, [entry.target.id]: true}));
                }
            });
        }, {threshold: 0.1});

        document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const apps = [
        {name: 'Agora', status: 'Live'}, {name: 'Pulse', status: 'Live'}, {name: 'SafeRun', status: 'Coming Soon'},
        {name: 'AirVista', status: 'Coming Soon'},
        {name: 'JogSmart', description: 'Run with confidence. Safer routes, mapped by the community.'},
        {name: 'OOHify', description: 'Run with confidence. Safer routes, mapped by the community.'}
    ];

    return (<main className="bg-gradient-to-b from-white to-slate-50">
        {/* Navigation - Transparent */}
        <nav
            className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
                <svg width="48" height="48" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="70.7107" cy="70.7102" r="25.7654" transform="rotate(-45 70.7107 70.7102)"
                            fill="white"/>
                    <path
                        d="M35.3553 35.3553L66.6806 63.7567C68.9673 65.83 72.454 65.83 74.7408 63.7567L106.066 35.3553L77.6646 66.6806C75.5913 68.9673 75.5913 72.454 77.6646 74.7408L106.066 106.066L74.7408 77.6646C72.454 75.5913 68.9673 75.5913 66.6806 77.6646L35.3553 106.066L63.7567 74.7408C65.83 72.454 65.83 68.9673 63.7567 66.6806L35.3553 35.3553Z"
                        fill="#274C77"/>
                </svg>
                <span className="font-bold text-2xl tracking-tight text-white drop-shadow-lg">SpicaLab</span>
            </div>
            <div className="flex gap-8 text-sm font-semibold">
                <a href="#apps" className="text-white/90 hover:text-white transition-colors drop-shadow-md">Apps</a>
                <a href="#about"
                   className="text-white/90 hover:text-white transition-colors drop-shadow-md">About</a>
                <a href="#contact"
                   className="text-white/90 hover:text-white transition-colors drop-shadow-md">Contact</a>
            </div>
        </nav>

        {/* Hero Section - FULL WIDTH */}
        <section className="relative w-full overflow-hidden min-h-[800px] flex items-center justify-center">
            {/* Background Image - Full Coverage */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/3d-liquid-abstract-background.jpeg"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
            </div>

            {/* Centered White Text Content */}
            <div className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-white leading-[0.95]">
                    Apps that do<br/>one thing well
                </h1>
                <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white font-medium max-w-3xl mx-auto">
                    A minimal app studio crafting intentional digital products. No bloat, no distractions—just tools
                    that work.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button
                        className="px-8 py-4 bg-[#06AED5] text-white rounded-full font-semibold hover:bg-[#0597BA] hover:scale-105 transition-all shadow-xl">
                        Explore Apps
                    </button>
                    <button
                        className="px-8 py-4 bg-white text-[#274C77] rounded-full font-semibold hover:bg-white/90 transition-all">
                        Learn More
                    </button>
                </div>
            </div>
        </section>

        {/* Mission Statement */}
        <section className="max-w-5xl mx-auto px-6 md:px-8 py-32 md:py-40">
            <h2 className="text-4xl md:text-6xl font-bold text-[#274C77] leading-tight text-center">
                We believe the best apps aren't the ones with the most features, but the ones with the most{' '}
                <span className="text-[#06AED5] relative inline-block">
                         intent
                        <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8"
                             preserveAspectRatio="none">
                            <path d="M0,7 Q50,0 100,7" stroke="#06AED5" strokeWidth="3" fill="none"/>
                        </svg>
                    </span>
                .
            </h2>
        </section>

        {/* Apps Showcase - MINIMALIST PILL DESIGN */}
        <section id="apps"
                 className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-[#274C77] to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-[#06AED5] rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-[#06AED5] rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16 px-6">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Our Ecosystem
                    </h2>
                </div>

                {/* Scrolling Apps Marquee */}
                <div className="flex overflow-hidden">
                    <div className="animate-marquee flex items-center">
                        {[...apps, ...apps, ...apps].map((app, i) => {
                            const isAgora = app.name === 'Agora';
                            const isPulse = app.name === 'Pulse';
                            const isJogSmart = app.name === 'JogSmart';
                            const isOohify = app.name === 'OOHify';
                            const isAirVista = app.name === 'AirVista';

                            // Determine the path based on app name
                            const getPath = () => {
                                if (isAgora) return "/products/agora";
                                if (isPulse) return "/products/pulse";
                                if (isJogSmart) return "/products/jogsmart";
                                if (isOohify) return "/products/oohify";
                                if (isAirVista) return "/products/airvista";
                                return "#";
                            };

                            // This is the actual UI of the pill
                            const PillContent = (
                                <div
                                    className="group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-8 py-5 transition-all duration-500 hover:bg-white/20 hover:scale-105 cursor-pointer">
                                    {/* ICON LOGIC */}
                                    <div className="shrink-0">
                                        {isAgora ? (
                                            <svg width="32" height="32" viewBox="460 370 310 480" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 className="transition-transform duration-500 group-hover:scale-110">
                                                <path
                                                    d="M528 377C531.743 378.45 534.972 380.109 538.359 382.273C541.466 384.255 544.75 386.375 560.58 396.566 574.324 406.095 587.39 416.698C599.83 426.701 614.25 441C622.676 449.355 635 464 658.607 493.546 675.357 521.626 691 550C725.75 613.12 746.096 675.385 752.657 743.559C754.793 763.054 756.433 786.897 757.635 805.621 758.336 824.5 758.466 832.219 754 841C744.033 849.058 720 847C701.913 844.804 666.39 838.39 653 825C651.583 812.74 650.516 802.62 647.938 776.375C644.719 752.484 643 739.938 639.8 713.553 627.62 661.279 612.89 604.665 594.421 562.469 562 524C554.351 514.879 537.868 496.977 527.005 477.963C527.219 461.277 527.451 434.854 528 377Z"
                                                    fill="white"/>
                                                <path
                                                    d="M524 597C556.754 637.933 569.622 710.235 576.735 760.382C579.199 777.473 580.785 795.183 582 803C582.75 815.188 583.265 824.649 583 827C574.793 830.516 561.109 834.121 539.296 840.046C515.041 845.195 502.063 845.375 498.971 845.488C490.434 845.586 477.527 837.832 474.277 833.77C464.368 820.042 473.463 781.439 475 765C477.054 743.297 483 708C488.749 677.831 509 627C520.156 603.248 524 597Z"
                                                    fill="white"/>
                                            </svg>
                                        ) : isPulse ? (
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7DFF7D"
                                                 strokeWidth="2.5"
                                                 className="transition-transform duration-500 group-hover:scale-110">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round"
                                                      strokeLinejoin="round"/>
                                            </svg>
                                        ) : isJogSmart ? (
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FACC15"
                                                 strokeWidth="2.5"
                                                 className="transition-transform duration-500 group-hover:scale-110">
                                                <path d="M13 4v16M17 4v16M9 4v16M5 4v16M21 4v16" strokeOpacity="0.2"/>
                                                <path d="M18 12l-5 5-2-2-3 3" strokeLinecap="round"
                                                      strokeLinejoin="round"/>
                                            </svg>
                                        ) : isOohify ? (
                                            /* Added OOHify Billboard/Terminal Icon */
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF3E00"
                                                 strokeWidth="2.5"
                                                 className="transition-transform duration-500 group-hover:scale-110">
                                                <rect x="3" y="4" width="18" height="12" rx="2"/>
                                                <path d="M7 20l2-4h6l2 4" strokeLinecap="round"/>
                                                <circle cx="12" cy="10" r="1" fill="#FF3E00"/>
                                            </svg>
                                        ) : isAirVista ? (
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6"
                                                 strokeWidth="2.5"
                                                 className="transition-transform duration-500 group-hover:rotate-12">
                                                <path
                                                    d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3-3 .5c-.5 0-.8.3-.9.7l-.3.5c-.2.5.1 1.1.6 1.3l4 1.5 1.5 4c.2.5.7.8 1.3.6l.5-.3c.4-.1.7-.4.7-.9l.5-3 3-2 3.7 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
                                            </svg>
                                        ) : (
                                            <span
                                                className="text-white/30 text-2xl font-bold uppercase tracking-tighter group-hover:text-white transition-colors">
                                {app.name[0]}
                            </span>
                                        )}
                                    </div>

                                    {/* NAME */}
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        {app.name}
                                    </h3>
                                </div>
                            );

                            return (
                                <div key={i} className="flex-shrink-0 mx-4">
                                    {getPath() !== "#" ? (
                                        <Link href={getPath()} className="no-underline">
                                            {PillContent}
                                        </Link>
                                    ) : (
                                        PillContent
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Footer */}
                <div className="text-center mt-20">
                    <button
                        className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white hover:text-[#274C77] transition-all hover:scale-105 shadow-2xl">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>

        {/* How It Works Section - Alternating Layout */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-[#274C77] mb-4">How It Works</h2>
                <p className="text-xl text-slate-600">Your journey from discovery to productivity</p>
            </div>

            {/* Step 1 - Left aligned (Updated with Apps.jpg) */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#274C77] leading-tight">
                        Browse through our curated collection of focused applications. Each app is designed to solve
                        one specific problem exceptionally well.
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        No feature bloat, no unnecessary complexity. Just clean, purposeful tools that respect your
                        time and attention.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    {/* The Image Container for Step 1 */}
                    <div className="relative group overflow-hidden rounded-3xl h-80 border border-slate-200 shadow-lg">
                        <img
                            src="/Apps.jpg"
                            alt="Browsing SpicaLab Apps"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                </div>
            </div>

            {/* Step 2 - Right aligned (Updated with Choice.jpg) */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="order-1">
                    {/* The Image Container */}
                    <div className="relative group overflow-hidden rounded-3xl h-80 border border-slate-200 shadow-lg">
                        <img
                            src="/Choice.jpg"
                            alt="Selecting the right tool"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Subtle Overlay to make it feel premium */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                </div>
                <div className="order-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#274C77] leading-tight">
                        Pick the perfect tool that matches your specific need. Every app has a clear purpose and
                        delivers exactly what it promises.
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Read descriptions, check features, and find the right fit. We make it simple to understand
                        what each app does best.
                    </p>
                </div>
            </div>

            {/* Step 3 - Left aligned (Updated with Productivity.jpg) */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#274C77] leading-tight">
                        Start using your chosen app instantly. No lengthy setup, no confusing onboarding, no time
                        wasted.
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Jump straight into productivity. Our apps are designed to be intuitive from the first click,
                        letting you focus on what matters.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    {/* The Image Container for Step 3 */}
                    <div className="relative group overflow-hidden rounded-3xl h-80 border border-slate-200 shadow-lg">
                        <img
                            src="/Productivity.jpg"
                            alt="Productivity in action"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* About / Manifesto Section - Zig Zag Scroll Reveal */}
        <section id="about" className="relative bg-[#0F172A] py-40 md:py-60 overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#274C77]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col items-start space-y-12 md:space-y-20">

                    {/* Line 1: From Left */}
                    <h2 id="line1" className={`scroll-reveal text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 ease-out
                ${isVisible.line1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        SpicaLab is a <span className="text-[#06AED5]">minimalist studio</span>
                    </h2>

                    {/* Line 2: From Right */}
                    <h2 id="line2" className={`scroll-reveal text-4xl md:text-6xl lg:text-7xl font-bold text-white/50 leading-tight self-end transition-all duration-1000 delay-300 ease-out
                ${isVisible.line2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                        focused on clean, practical products.
                    </h2>

                    {/* Line 3: From Bottom */}
                    <h2 id="line3" className={`scroll-reveal text-3xl md:text-5xl lg:text-6xl font-bold text-[#06AED5] leading-tight transition-all duration-1000 delay-500 ease-out
                ${isVisible.line3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        Every app is an answer to a real problem,
                        <span
                            className="block text-white italic mt-4 underline decoration-[#274C77] underline-offset-8">
                    stripped down to its essence.
                </span>
                    </h2>
                </div>

                {/* Bottom Detail Cards: Fade in from bottom */}
                <div id="cards" className={`scroll-reveal mt-32 w-full grid md:grid-cols-3 gap-12 pt-12 border-t border-white/5 transition-all duration-1000 delay-700
            ${isVisible.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div>
                        <p className="text-white font-bold mb-2">Focused Scope</p>
                        <p className="text-white/40 text-sm italic">We ignore the noise.</p>
                    </div>
                    <div>
                        <p className="text-white font-bold mb-2">Native Speed</p>
                        <p className="text-white/40 text-sm italic">Built for performance.</p>
                    </div>
                    <div>
                        <p className="text-white font-bold mb-2">Zero Friction</p>
                        <p className="text-white/40 text-sm italic">Designed for use.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section - The Bright Finish */}
        <section className="relative max-w-7xl mx-auto px-6 md:px-8 py-32 md:py-48 text-center overflow-hidden">

            {/* Subtle "Aura" Background Effect */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#06AED5]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold text-[#274C77] mb-8 tracking-tighter">
                    Ready to simplify?
                </h2>
                <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Experience the tools built with <span className="text-[#06AED5] font-semibold">intent</span>.
                    Join a community that values focus over features.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                        className="group relative px-10 py-5 bg-[#274C77] text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                        {/* Inner Glow Effect on Hover */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        Explore the Ecosystem
                    </button>

                    <button
                        className="px-10 py-5 bg-transparent text-[#274C77] border-2 border-[#274C77]/10 rounded-full font-bold text-lg hover:bg-[#274C77]/5 transition-all">
                        View on GitHub
                    </button>
                </div>

                {/* Floating Accent Elements */}
                <div className="mt-16 flex justify-center items-center gap-8 opacity-20 grayscale">
                    {/* You can put tiny logos here later, for now just decorative dots */}
                    <div className="w-2 h-2 bg-[#274C77] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#06AED5] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#274C77] rounded-full"></div>
                </div>
            </div>
        </section>

        {/* Footer - The Clean Anchor */}
        <footer id="contact" className="bg-[#F8FAFC] border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-3 mb-6 group cursor-default">
                            <div className="relative">
                                <svg width="40" height="40" viewBox="0 0 142 142" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                     className="transition-transform duration-700 group-hover:rotate-180">
                                    <circle cx="70.7107" cy="70.7102" r="25.7654"
                                            transform="rotate(-45 70.7107 70.7102)" fill="#274C77"/>
                                    <path
                                        d="M35.3553 35.3553L66.6806 63.7567C68.9673 65.83 72.454 65.83 74.7408 63.7567L106.066 35.3553L77.6646 66.6806C75.5913 68.9673 75.5913 72.454 77.6646 74.7408L106.066 106.066L74.7408 77.6646C72.454 75.5913 68.9673 75.5913 66.6806 77.6646L35.3553 106.066L63.7567 74.7408C65.83 72.454 65.83 68.9673 63.7567 66.6806L35.3553 35.3553Z"
                                        fill="#F5FBEF"/>
                                </svg>
                                {/* Little "shimmer" dot */}
                                <div
                                    className="absolute -top-1 -right-1 w-2 h-2 bg-[#06AED5] rounded-full animate-pulse"></div>
                            </div>
                            <span className="font-bold text-2xl tracking-tighter text-[#274C77]">SpicaLab</span>
                        </div>
                        <p className="text-slate-500 leading-relaxed max-w-xs text-lg">
                            Crafting intentional digital tools for a more focused world.
                        </p>
                    </div>

                    {/* Link Columns */}
                    <div>
                        <h4 className="font-bold text-[#274C77] mb-6 uppercase text-xs tracking-[0.2em]">Products</h4>
                        <div className="space-y-4 text-slate-500 font-medium">
                            <a href="#" className="block hover:text-[#06AED5] transition-colors">Agora</a>
                            <a href="#" className="block hover:text-[#06AED5] transition-colors">Pulse</a>
                            <a href="#" className="block hover:text-[#06AED5] transition-colors">SafeRun</a>
                            <a href="#"
                               className="block hover:text-[#06AED5] transition-colors opacity-50 cursor-not-allowed">AirVista</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-[#274C77] mb-6 uppercase text-xs tracking-[0.2em]">Studio</h4>
                        <div className="space-y-4 text-slate-500 font-medium">
                            <a href="#about" className="block hover:text-[#06AED5] transition-colors">Our
                                Manifesto</a>
                            <a href="#" className="block hover:text-[#06AED5] transition-colors">Process</a>
                            <a href="#" className="block hover:text-[#06AED5] transition-colors">Contact</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-[#274C77] mb-6 uppercase text-xs tracking-[0.2em]">Social</h4>
                        <div className="space-y-4 text-slate-500 font-medium">
                            <a href="#" className="block hover:text-[#06AED5] transition-colors">Twitter / X</a>
                            <a href="#" className="block hover:text-[#06AED5] transition-colors">GitHub</a>
                            <a href="#" className="block hover:text-[#06AED5] transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 font-medium">
                    <div className="flex items-center gap-2">
                        <span>© 2026 SpicaLab Studio.</span>
                        <span className="hidden md:inline text-slate-200">|</span>
                        <span>Built for focus.</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-[#274C77] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#274C77] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    </main>);
}