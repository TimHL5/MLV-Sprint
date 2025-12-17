'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black-deep to-green-matrix/30">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full animate-grid-move"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[80px] animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 136, 0.3), transparent)',
            animationDelay: '0s',
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px] animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 136, 0.3), transparent)',
            animationDelay: '5s',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-[450px] h-[450px] rounded-full opacity-15 blur-[80px] animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 136, 0.3), transparent)',
            animationDelay: '10s',
          }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-20 w-40 h-40 border border-green-quantum/20 animate-[shapeFloat_15s_ease-in-out_infinite]"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bottom-40 left-40 w-32 h-32 border border-green-quantum/20 rounded-full animate-[shapeFloat_15s_ease-in-out_infinite]"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-24 h-24 border border-green-quantum/20 rotate-45 animate-[shapeFloat_15s_ease-in-out_infinite]"
          style={{ animationDelay: '6s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-green-quantum/[0.08] border border-green-quantum/20 px-5 py-3 rounded-full mb-8 transition-all duration-800 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="w-1.5 h-1.5 bg-green-quantum rounded-full animate-pulse-slow" />
          <span className="text-green-quantum font-semibold text-sm uppercase tracking-wider">
            JAN 9-11, 2026
          </span>
        </div>

        {/* Hero Date */}
        <h1
          className={`font-display text-[clamp(3.5rem,12vw,8rem)] font-extrabold leading-[0.9] tracking-tighter gradient-text mb-4 transition-all duration-800 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          48 HOURS
        </h1>

        {/* Subheadline */}
        <h2
          className={`text-[clamp(2rem,5vw,2.5rem)] font-bold text-white-pure mb-6 transition-all duration-800 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          Build your startup in one weekend
        </h2>

        {/* Body Text */}
        <p
          className={`text-lg md:text-xl text-white-dim max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-800 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          No idea needed. No experience required. Just you, a weekend, and the drive to create something that matters.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-800 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <a
            href="#register"
            className="bg-green-quantum text-black-deep px-8 py-4 rounded-md font-bold text-base tracking-tight transition-all duration-300 hover:shadow-glow-md hover:-translate-y-1 active:-translate-y-0 relative overflow-hidden group"
          >
            <span className="relative z-10">Register Now — $49</span>
            <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full" />
          </a>

          <a
            href="#timeline"
            className="bg-transparent text-white-ghost px-8 py-4 rounded-md font-semibold text-base border border-white/15 transition-all duration-300 hover:border-green-quantum hover:text-green-quantum hover:bg-green-quantum/5"
          >
            View Schedule
          </a>
        </div>

        {/* Location Badges */}
        <div
          className={`flex flex-wrap gap-6 justify-center items-center text-white-dim text-sm transition-all duration-800 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-green-quantum">→</span>
            <span>Hong Kong</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-quantum">→</span>
            <span>Ho Chi Minh City</span>
          </div>
        </div>
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)]" />
    </section>
  );
}
