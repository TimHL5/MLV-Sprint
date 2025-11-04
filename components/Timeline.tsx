'use client';

import { useEffect, useState, useRef } from 'react';
import timelineData from '@/data/timeline.json';

export default function Timeline() {
  const [visible, setVisible] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

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

  // Animate gradient line on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      const timelineBottom = timelineRef.current.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the timeline is visible
      if (timelineTop < viewportHeight && timelineBottom > 0) {
        const visiblePercentage = Math.min(
          1,
          Math.max(0, (viewportHeight - timelineTop) / (timelineRef.current.offsetHeight + viewportHeight))
        );
        setLineHeight(visiblePercentage * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="timeline" className="py-24 md:py-32 bg-black-deep relative">
      <div id="timeline-section" className="max-w-[800px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 fade-in ${visible ? 'visible' : ''}`}>
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

        {/* Vertical Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Gradient Line - Left side on mobile, centered on desktop */}
          <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 w-[4px] md:w-[5px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full overflow-hidden">
            {/* Animated gradient line that extends on scroll */}
            <div
              className="absolute top-0 left-0 w-full transition-all duration-300 ease-out rounded-full"
              style={{
                height: `${lineHeight}%`,
                background: 'linear-gradient(180deg, #6AC670 0%, #F2CF07 100%)',
                boxShadow: '0 0 15px rgba(106, 198, 112, 0.5)',
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-10 md:space-y-15">
            {timelineData.timeline.map((item, index) => (
              <div
                key={item.id}
                className={`relative fade-in ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 w-[18px] h-[18px] bg-gradient-to-br from-[#6AC670] to-[#F2CF07] border-4 border-black-deep rounded-full shadow-lg z-10"
                  style={{
                    boxShadow: '0 0 20px rgba(106, 198, 112, 0.6)',
                  }}
                />

                {/* Content Card - Alternating sides on desktop, right side on mobile */}
                <div className={`ml-[70px] md:ml-0 md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <div className="bg-black-steel/60 border border-green-quantum/10 rounded-xl p-8 backdrop-blur-sm transition-all duration-500 hover:border-green-quantum hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(106,198,112,0.2)]">
                    {/* Day Label */}
                    <div className="font-display text-xs text-[#6AC670] uppercase tracking-wider mb-3">
                      {item.day}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white-pure mb-2">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
