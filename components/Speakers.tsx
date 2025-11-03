'use client';

import { useEffect, useState } from 'react';
import speakersData from '@/data/speakers.json';

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  session: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export default function Speakers() {
  const [visible, setVisible] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

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

    const element = document.getElementById('speakers-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const closeModal = () => setSelectedSpeaker(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (selectedSpeaker) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedSpeaker]);

  return (
    <>
      <section id="speakers" className="py-24 md:py-32 bg-black-steel/40 relative">
        <div id="speakers-section" className="max-w-[1200px] mx-auto px-6">
          {/* Section Header */}
          <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
            <div className="text-green-quantum text-sm font-semibold uppercase tracking-widest mb-4">
              GUEST SPEAKERS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white-pure mb-4">
              Learn from the best
            </h2>
            <p className="text-lg text-white-dim max-w-2xl mx-auto">
              Hear from founders, investors, and operators who&apos;ve built successful companies
            </p>
          </div>

          {/* Speakers Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-stagger ${visible ? 'visible' : ''}`}>
            {speakersData.speakers.map((speaker) => (
              <div
                key={speaker.id}
                onClick={() => setSelectedSpeaker(speaker as Speaker)}
                className="speaker-card bg-black-steel/40 border border-green-quantum/[0.08] rounded-2xl p-8 text-center cursor-pointer transition-all duration-400 hover:-translate-y-3 hover:border-green-quantum hover:shadow-[0_25px_70px_rgba(0,255,136,0.2)] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-quantum/5 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                {/* Avatar */}
                <div className="relative z-10 mb-6">
                  <div className="w-[120px] h-[120px] mx-auto rounded-full border-4 border-green-quantum bg-gradient-to-br from-green-matrix to-green-quantum flex items-center justify-center text-4xl font-bold text-white-pure transition-all duration-400 group-hover:scale-110 group-hover:shadow-glow-md">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Info */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white-pure mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-white-dim">
                    {speaker.title}
                  </p>
                  <p className="text-sm text-green-quantum">
                    {speaker.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSpeaker && (
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[2000] flex items-center justify-center p-6 transition-opacity duration-400 ${
            selectedSpeaker ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div
            className="bg-black-steel border-2 border-green-quantum/30 rounded-3xl p-10 max-w-2xl w-full relative transition-all duration-400"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white-dim hover:text-white-pure transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Avatar */}
            <div className="w-[150px] h-[150px] mx-auto rounded-full border-4 border-green-quantum bg-gradient-to-br from-green-matrix to-green-quantum flex items-center justify-center text-5xl font-bold text-white-pure mb-6">
              {selectedSpeaker.name.split(' ').map(n => n[0]).join('')}
            </div>

            {/* Name & Title */}
            <h3 className="text-3xl font-bold text-white-pure text-center mb-2">
              {selectedSpeaker.name}
            </h3>
            <p className="text-lg text-white-dim text-center mb-1">
              {selectedSpeaker.title}
            </p>
            <p className="text-lg text-green-quantum text-center mb-6">
              {selectedSpeaker.company}
            </p>

            {/* Session Badge */}
            <div className="inline-block bg-green-quantum/10 border border-green-quantum/30 rounded-full px-5 py-2 mb-6 mx-auto block w-fit">
              <span className="text-sm text-green-quantum font-semibold">
                {selectedSpeaker.session}
              </span>
            </div>

            {/* Bio */}
            <p className="text-base text-white-dim leading-relaxed mb-6">
              {selectedSpeaker.bio}
            </p>

            {/* Social Links */}
            {(selectedSpeaker.linkedin || selectedSpeaker.twitter || selectedSpeaker.website) && (
              <div className="flex gap-4 justify-center">
                {selectedSpeaker.linkedin && (
                  <a
                    href={selectedSpeaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-dim hover:text-green-quantum transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {selectedSpeaker.twitter && (
                  <a
                    href={selectedSpeaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-dim hover:text-green-quantum transition-colors"
                  >
                    Twitter
                  </a>
                )}
                {selectedSpeaker.website && (
                  <a
                    href={selectedSpeaker.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-dim hover:text-green-quantum transition-colors"
                  >
                    Website
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
