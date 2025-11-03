'use client';

import { useEffect, useState } from 'react';
import timelineData from '@/data/timeline.json';

export default function Timeline() {
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

    const element = document.getElementById('timeline-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="timeline" className="py-24 md:py-32 bg-black-deep relative">
      <div id="timeline-section" className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
          <div className="text-green-quantum text-sm font-semibold uppercase tracking-widest mb-4">
            EVENT SCHEDULE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white-pure mb-4">
            Three days that change everything
          </h2>
          <p className="text-lg text-white-dim max-w-2xl mx-auto">
            From idea to pitch in 48 hours. Here&apos;s how it works.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-green-quantum scrollbar-track-black-steel">
          <div className="flex gap-8 min-w-max px-4">
            {timelineData.timeline.map((item, index) => (
              <div
                key={item.id}
                className={`timeline-card relative min-w-[280px] md:min-w-[320px] bg-black-steel/60 border border-green-quantum/10 rounded-xl p-8 backdrop-blur-sm transition-all duration-500 hover:border-green-quantum hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,255,136,0.2)] fade-in ${
                  visible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Dot */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-quantum border-4 border-black-deep rounded-full shadow-glow-sm" />

                {/* Day Label */}
                <div className="font-display text-xs text-green-quantum uppercase tracking-wider mb-3">
                  {item.day}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white-pure mb-2">
                  {item.title}
                </h3>

                {/* Time */}
                <div className="text-sm text-white-dim mb-4">
                  {item.time}
                </div>

                {/* Description */}
                <p className="text-base text-white-dim/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-quantum to-transparent mt-4" />
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-8 text-white-dim text-sm flex items-center justify-center gap-2">
          <span>→</span>
          <span>Scroll to see full schedule</span>
        </div>
      </div>
    </section>
  );
}
