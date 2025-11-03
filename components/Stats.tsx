'use client';

import { useEffect, useState, useRef } from 'react';

interface StatBlockProps {
  number: number;
  label: string;
  description: string;
  delay: number;
}

function StatBlock({ number, label, description, delay }: StatBlockProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const duration = 2000;
            const increment = number / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= number) {
                setCount(number);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 16);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [number, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="stat-block relative bg-green-quantum/5 border-2 border-green-quantum/20 rounded-3xl p-10 transition-all duration-500 hover:-translate-y-4 hover:rotate-[-2deg] hover:border-green-quantum hover:shadow-[0_30px_80px_rgba(0,255,136,0.3)] cursor-pointer overflow-hidden group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-quantum/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="font-display text-7xl font-extrabold bg-gradient-to-br from-green-quantum to-green-cyber bg-clip-text text-transparent mb-4">
          {count}+
        </div>
        <h3 className="text-2xl font-bold text-white-pure mb-3">
          {label}
        </h3>
        <p className="text-base text-white-dim leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Stats() {
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

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="impact" className="py-24 md:py-32 bg-black-deep relative">
      <div id="stats-section" className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
          <div className="text-green-quantum text-sm font-semibold uppercase tracking-widest mb-4">
            IMPACT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white-pure mb-4">
            Proven track record
          </h2>
          <p className="text-lg text-white-dim max-w-2xl mx-auto">
            Three years of empowering young innovators across Asia
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-stagger ${visible ? 'visible' : ''}`}>
          <StatBlock
            number={500}
            label="Students Empowered"
            description="Across Hong Kong, Singapore, Hanoi, and Ho Chi Minh City"
            delay={0}
          />
          <StatBlock
            number={25}
            label="Companies Created"
            description="Born from MLV programs over 3 years of operation"
            delay={100}
          />
          <StatBlock
            number={6}
            label="Program Cycles"
            description="Consistently delivering results since launch"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}
