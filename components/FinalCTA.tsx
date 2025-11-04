'use client';

import { useEffect, useState } from 'react';

export default function FinalCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('final-cta-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="py-32 md:py-40 bg-gradient-to-br from-black-deep via-green-matrix/20 to-black-deep relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 136, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.2) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.1)_0%,transparent_70%)]" />

      <div id="final-cta-section" className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`fade-in ${visible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white-pure mb-6 leading-tight">
            Your startup journey starts here
          </h2>
          <p className="text-xl md:text-2xl text-white-dim mb-10 leading-relaxed">
            48 hours. Two cities. One weekend that could change everything.
          </p>

          <a
            href="https://tally.so/r/mRXOBj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-quantum text-black-deep px-10 py-5 rounded-lg font-bold text-lg tracking-tight transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-2 active:-translate-y-0 relative overflow-hidden group mb-6"
          >
            <span className="relative z-10">Register for Sprint — $29</span>
            <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full" />
          </a>

          <p className="text-white-dim text-sm">
            January 9-11, 2026 • Limited spots available
          </p>
        </div>
      </div>
    </section>
  );
}
