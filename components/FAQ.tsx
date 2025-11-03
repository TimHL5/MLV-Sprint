'use client';

import { useEffect, useState } from 'react';
import faqData from '@/data/faq.json';

export default function FAQ() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

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

    const element = document.getElementById('faq-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-black-steel/40 relative">
      <div id="faq-section" className="max-w-[900px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
          <div className="text-green-quantum text-sm font-semibold uppercase tracking-widest mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white-pure mb-4">
            Common questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className={`space-y-4 fade-in ${visible ? 'visible' : ''}`}>
          {faqData.faqs.map((faq) => {
            const isActive = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isActive
                    ? 'border-green-quantum/30'
                    : 'border-green-quantum/10 hover:border-green-quantum/30'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 bg-black-steel/60 text-left flex justify-between items-center transition-all duration-300 hover:bg-black-steel/80"
                >
                  <span className="font-semibold text-lg text-white-pure pr-8">
                    {faq.question}
                  </span>
                  <span
                    className={`text-green-quantum text-2xl font-light transition-transform duration-300 flex-shrink-0 ${
                      isActive ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`bg-black/30 overflow-hidden transition-all duration-400 ${
                    isActive ? 'max-h-96' : 'max-h-0'
                  }`}
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className="px-8 py-6 text-white-dim leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
