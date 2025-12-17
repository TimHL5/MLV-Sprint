'use client';

import { useEffect, useState } from 'react';

const tiers = [
  {
    name: 'Early Bird',
    price: '$29',
    timing: 'Now - Dec 15',
    active: false,
  },
  {
    name: 'Regular',
    price: '$49',
    timing: 'Dec 16 - Jan 5',
    active: true,
  },
  {
    name: 'At Door',
    price: '$99',
    timing: 'Jan 6 - 9',
    active: false,
  },
];

const features = [
  'Full weekend access',
  'Virtual speaker sessions',
  'Mentor office hours',
  'Demo Day pitch opportunity',
  'Certificate of participation',
  'MLV community access',
];

export default function Pricing() {
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

    const element = document.getElementById('pricing-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="register" className="py-24 md:py-32 bg-black-deep relative">
      <div id="pricing-section" className="max-w-[900px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
          <div className="text-green-quantum text-sm font-semibold uppercase tracking-widest mb-4">
            REGISTRATION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white-pure mb-4">
            Secure your spot
          </h2>
          <p className="text-lg text-white-dim max-w-2xl mx-auto">
            Price increases as the event approaches. Register early to save.
          </p>
        </div>

        {/* Pricing Card */}
        <div className={`bg-black-steel/80 border-2 border-green-quantum/20 rounded-3xl p-10 md:p-16 relative overflow-hidden fade-in ${visible ? 'visible' : ''}`}>
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,136,0.1),transparent)] pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-block bg-green-quantum/10 border border-green-quantum/30 rounded-full px-5 py-2 mb-6">
              <span className="text-sm text-green-quantum font-semibold uppercase tracking-wider">
                FULL WEEKEND ACCESS
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-white-pure mb-2">
              MLV Sprint 2026
            </h3>
            <p className="text-lg text-white-dim mb-10">
              One ticket. Three pricing tiers based on when you register.
            </p>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`tier relative bg-black/30 border rounded-2xl p-6 text-center transition-all duration-300 ${
                    tier.active
                      ? 'border-green-quantum bg-green-quantum/8 scale-105'
                      : 'border-green-quantum/15 hover:border-green-quantum/30'
                  }`}
                >
                  {tier.active && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-quantum text-black-deep px-3 py-1 rounded-full text-xs font-bold">
                      ACTIVE
                    </div>
                  )}

                  <div className="text-sm text-white-dim mb-2">{tier.name}</div>
                  <div className="font-display text-5xl font-extrabold text-white-pure mb-2">
                    {tier.price}
                  </div>
                  <div className="text-sm text-white-dim">{tier.timing}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-10">
              <h4 className="text-xl font-bold text-white-pure mb-6">
                What&apos;s Included
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-quantum/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-quantum text-xs font-bold">✓</span>
                    </div>
                    <span className="text-white-dim">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://tally.so/r/mRXOBj"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-quantum text-black-deep px-8 py-5 rounded-lg font-bold text-lg text-center tracking-tight transition-all duration-300 hover:shadow-glow-md hover:-translate-y-1 active:-translate-y-0 relative overflow-hidden group"
            >
              <span className="relative z-10">Register Now — $49</span>
              <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
