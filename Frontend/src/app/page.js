import React from 'react';

export default function Home() {
    const apps = [
        { name: 'Agora', status: 'Live' },
        { name: 'Pulse', status: 'Live' },
        { name: 'SafeRun', status: 'Coming Soon' },
        { name: 'AirVista', status: 'Coming Soon' },
    ];

    return (
        <main className="bg-gradient-to-b from-white to-slate-50">
            {/* Navigation - Transparent */}
            <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <svg width="48" height="48" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="70.7107" cy="70.7102" r="25.7654" transform="rotate(-45 70.7107 70.7102)" fill="white"/>
                        <path d="M35.3553 35.3553L66.6806 63.7567C68.9673 65.83 72.454 65.83 74.7408 63.7567L106.066 35.3553L77.6646 66.6806C75.5913 68.9673 75.5913 72.454 77.6646 74.7408L106.066 106.066L74.7408 77.6646C72.454 75.5913 68.9673 75.5913 66.6806 77.6646L35.3553 106.066L63.7567 74.7408C65.83 72.454 65.83 68.9673 63.7567 66.6806L35.3553 35.3553Z" fill="#274C77"/>
                    </svg>
                    <span className="font-bold text-2xl tracking-tight text-white drop-shadow-lg">SpicaLab</span>
                </div>
                <div className="flex gap-8 text-sm font-semibold">
                    <a href="#apps" className="text-white/90 hover:text-white transition-colors drop-shadow-md">Apps</a>
                    <a href="#about" className="text-white/90 hover:text-white transition-colors drop-shadow-md">About</a>
                    <a href="#contact" className="text-white/90 hover:text-white transition-colors drop-shadow-md">Contact</a>
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
                        A minimal app studio crafting intentional digital products. No bloat, no distractions—just tools that work.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-8 py-4 bg-[#06AED5] text-white rounded-full font-semibold hover:bg-[#0597BA] hover:scale-105 transition-all shadow-xl">
                            Explore Apps
                        </button>
                        <button className="px-8 py-4 bg-white text-[#274C77] rounded-full font-semibold hover:bg-white/90 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Apps Showcase - REDESIGNED */}
            <section id="apps" className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-[#274C77] to-slate-900">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#06AED5] rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#06AED5] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <div className="inline-block px-6 py-2 bg-[#06AED5]/20 backdrop-blur-sm border border-[#06AED5]/30 rounded-full text-[#06AED5] text-sm font-bold mb-6 uppercase tracking-wider">
                            ✨ Live Now
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Your next favorite app<br/>is waiting
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
                            Join thousands already using these tools. Don't miss out.
                        </p>
                    </div>

                    {/* Apps Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {apps.map((app, index) => (
                            <div
                                key={index}
                                className={`group relative ${
                                    app.status === 'Live'
                                        ? 'cursor-pointer'
                                        : 'opacity-50 pointer-events-none'
                                }`}
                            >
                                {/* Card */}
                                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 h-48 flex flex-col justify-between transition-all duration-500 hover:bg-white/10 hover:border-[#06AED5]/50 hover:scale-105 hover:shadow-2xl hover:shadow-[#06AED5]/20">
                                    {/* Status badge */}
                                    {app.status === 'Live' ? (
                                        <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    ) : (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 rounded-full text-[10px] text-white/50 font-bold uppercase tracking-wider">
                                            Soon
                                        </div>
                                    )}

                                    {/* App name */}
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#06AED5] transition-colors">
                                            {app.name}
                                        </h3>
                                    </div>

                                    {/* Hover arrow */}
                                    <div className="flex items-center gap-2 text-white/60 group-hover:text-[#06AED5] transition-all">
                                        <span className="text-sm font-semibold">Explore</span>
                                        <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                                    </div>
                                </div>

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#06AED5]/0 to-[#274C77]/0 group-hover:from-[#06AED5]/20 group-hover:to-[#274C77]/20 rounded-3xl blur-xl transition-all duration-500 -z-10"></div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <p className="text-white/60 mb-6">More apps launching soon. Stay tuned.</p>
                        <button className="px-8 py-4 bg-white text-[#274C77] rounded-full font-bold hover:bg-[#06AED5] hover:text-white transition-all hover:scale-105 shadow-2xl">
                            View All Apps
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

                {/* Step 1 - Left aligned */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#274C77] leading-tight">
                            Browse through our curated collection of focused applications. Each app is designed to solve one specific problem exceptionally well.
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            No feature bloat, no unnecessary complexity. Just clean, purposeful tools that respect your time and attention.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="bg-gradient-to-br from-[#06AED5]/10 to-[#274C77]/10 rounded-3xl p-12 h-80 flex items-center justify-center border-2 border-[#06AED5]/20">
                            <div className="text-center">
                                <div className="text-6xl mb-4">📱</div>
                                <p className="text-slate-600 font-semibold">Browse Apps</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2 - Right aligned */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-1">
                        <div className="bg-gradient-to-br from-[#274C77]/10 to-[#06AED5]/10 rounded-3xl p-12 h-80 flex items-center justify-center border-2 border-[#274C77]/20">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🎯</div>
                                <p className="text-slate-600 font-semibold">Select Your Tool</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-2">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#274C77] leading-tight">
                            Pick the perfect tool that matches your specific need. Every app has a clear purpose and delivers exactly what it promises.
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Read descriptions, check features, and find the right fit. We make it simple to understand what each app does best.
                        </p>
                    </div>
                </div>

                {/* Step 3 - Left aligned */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#274C77] leading-tight">
                            Start using your chosen app instantly. No lengthy setup, no confusing onboarding, no time wasted.
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Jump straight into productivity. Our apps are designed to be intuitive from the first click, letting you focus on what matters.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="bg-gradient-to-br from-[#06AED5]/10 to-[#274C77]/10 rounded-3xl p-12 h-80 flex items-center justify-center border-2 border-[#06AED5]/20">
                            <div className="text-center">
                                <div className="text-6xl mb-4">⚡</div>
                                <p className="text-slate-600 font-semibold">Start Working</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="max-w-5xl mx-auto px-6 md:px-8 py-32 md:py-40">
                <h2 className="text-4xl md:text-6xl font-bold text-[#274C77] leading-tight text-center">
                    We believe the best apps aren't the ones with the most features, but the ones with the most{' '}
                    <span className="text-[#06AED5] relative inline-block">
                        intent
                        <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                            <path d="M0,7 Q50,0 100,7" stroke="#06AED5" strokeWidth="2" fill="none"/>
                        </svg>
                    </span>
                    .
                </h2>
            </section>

            {/* About */}
            <section id="about" className="bg-[#274C77] text-white py-32">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <p className="text-3xl md:text-4xl leading-relaxed font-medium mb-8">
                        SpicaLab is a minimalist app studio focused on building clean, practical digital products.
                    </p>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Every app we create is an answer to a real problem, stripped down to its essence.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-8 py-32 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#274C77] mb-6">Ready to explore?</h2>
                <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                    Join thousands who've discovered the power of focused apps.
                </p>
                <button className="px-10 py-5 bg-[#06AED5] text-white rounded-full font-semibold text-lg hover:bg-[#0597BA] hover:scale-105 transition-all shadow-2xl shadow-[#06AED5]/30">
                    Get Started Free
                </button>
            </section>

            {/* Footer */}
            <footer id="contact" className="border-t border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <svg width="44" height="44" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="70.7107" cy="70.7102" r="25.7654" transform="rotate(-45 70.7107 70.7102)" fill="#274C77"/>
                                    <path d="M35.3553 35.3553L66.6806 63.7567C68.9673 65.83 72.454 65.83 74.7408 63.7567L106.066 35.3553L77.6646 66.6806C75.5913 68.9673 75.5913 72.454 77.6646 74.7408L106.066 106.066L74.7408 77.6646C72.454 75.5913 68.9673 75.5913 66.6806 77.6646L35.3553 106.066L63.7567 74.7408C65.83 72.454 65.83 68.9673 63.7567 66.6806L35.3553 35.3553Z" fill="#F5FBEF"/>
                                </svg>
                                <span className="font-bold text-2xl tracking-tight text-[#274C77]">SpicaLab</span>
                            </div>
                            <p className="text-slate-600 leading-relaxed max-w-sm">
                                Building intentional apps for focused people.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#274C77] mb-4">Products</h4>
                            <div className="space-y-3 text-slate-600">
                                <a href="#" className="block hover:text-[#06AED5] transition-colors">Agora</a>
                                <a href="#" className="block hover:text-[#06AED5] transition-colors">Pulse</a>
                                <a href="#" className="block hover:text-[#06AED5] transition-colors">Coming Soon</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#274C77] mb-4">Connect</h4>
                            <div className="space-y-3 text-slate-600">
                                <a href="#" className="block hover:text-[#06AED5] transition-colors">Twitter</a>
                                <a href="#" className="block hover:text-[#06AED5] transition-colors">GitHub</a>
                                <a href="#" className="block hover:text-[#06AED5] transition-colors">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <p>© 2026 SpicaLab. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-[#06AED5] transition-colors">Privacy</a>
                            <a href="#" className="hover:text-[#06AED5] transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}