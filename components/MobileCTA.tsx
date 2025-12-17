'use client';

import { useEffect, useState } from 'react';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section
      const heroHeight = window.innerHeight;
      const scrolled = window.pageYOffset;

      setVisible(scrolled > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[999] md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-black-deep/95 backdrop-blur-xl border-t border-green-quantum/20 p-4">
        <a
          href="https://tally.so/r/mRXOBj"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-quantum text-black-deep px-6 py-4 rounded-lg font-bold text-center tracking-tight transition-all duration-300 hover:shadow-glow-md active:scale-95 relative overflow-hidden group"
        >
          <span className="relative z-10">Register — $49</span>
          <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full" />
        </a>
      </div>
    </div>
  );
}
