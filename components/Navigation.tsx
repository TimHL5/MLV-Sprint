'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // Add scrolled class after 100px
      setScrolled(currentScroll > 100);

      // Hide nav on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 500) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-black-deep/95 backdrop-blur-[30px] py-3'
          : 'bg-black-deep/85 backdrop-blur-[30px] py-5'
      } ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } border-b border-green-quantum/[0.08]`}
      style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Image
            src="/images/logos/Logo Type 2 (White).png"
            alt="MLV Sprint"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        <a
          href="#register"
          className="bg-green-quantum text-black-deep px-6 py-3 rounded-md font-bold text-sm tracking-tight transition-all duration-300 hover:shadow-glow-md hover:-translate-y-1 active:-translate-y-0 relative overflow-hidden group"
        >
          <span className="relative z-10">Register Now</span>
          <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full" />
        </a>
      </div>
    </nav>
  );
}
