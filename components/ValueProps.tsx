'use client';

import { useEffect, useState } from 'react';

const values = [
  {
    number: '01',
    title: 'Start from zero',
    description: "Never built a startup? Perfect. We'll guide you from idea to pitch in one weekend.",
  },
  {
    number: '02',
    title: 'Real mentorship',
    description: "Get feedback from founders, investors, and operators who've been where you want to go.",
  },
  {
    number: '03',
    title: 'Portfolio builder',
    description: 'Add a tangible achievement to college applications. Show universities you take initiative.',
  },
  {
    number: '04',
    title: 'Unmatched value',
    description: 'Full weekend experience for $49-99. Other programs charge $200+ for less.',
  },
];

export default function ValueProps() {
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

    const element = document.getElementById('value-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="value" className="py-24 md:py-32 bg-black-steel/40 relative">
      <div id="value-section" className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
          <div className="text-green-quantum text-sm font-semibold uppercase tracking-widest mb-4">
            WHY SPRINT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white-pure mb-4">
            Built for ambitious students
          </h2>
          <p className="text-lg text-white-dim max-w-2xl mx-auto">
            Everything you need to launch your entrepreneurial journey
          </p>
        </div>

        {/* Value Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-stagger ${visible ? 'visible' : ''}`}>
          {values.map((value) => (
            <div
              key={value.number}
              className="value-card relative bg-transparent border border-green-quantum/10 rounded-2xl p-10 transition-all duration-400 hover:-translate-y-2 hover:border-green-quantum/30 hover:bg-black-steel/40 overflow-hidden group"
            >
              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-quantum to-green-matrix scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

              {/* Number */}
              <div className="font-display text-5xl font-extrabold text-green-quantum/30 mb-6">
                {value.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white-pure mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-base text-white-dim leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
