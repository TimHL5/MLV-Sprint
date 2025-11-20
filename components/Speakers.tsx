'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Speaker {
  name: string;
  title: string;
  linkedin: string;
  photo: string;
  bio: string;
}

const speakers: Speaker[] = [
  {
    name: "Simon Squibb",
    title: "Serial Entrepreneur & Founder of HelpBnk",
    linkedin: "https://www.linkedin.com/in/simonsquibb/",
    photo: "/images/Simon Squibb.png",
    bio: "Simon Squibb went from being homeless at 15 to founding 19 companies. A Sunday Times bestselling author with 17 million followers across social media, Simon is on a mission to help 10 million people start their own businesses through HelpBnk, showing students everywhere that entrepreneurship isn't as impossible as the system makes it seem—and that building something meaningful is way more fulfilling than working for someone else."
  },
  {
    name: "Jenna Lee",
    title: "Vice President, Samsung SDS",
    linkedin: "https://www.linkedin.com/in/jennalion/",
    photo: "/images/Jenna Lee.png",
    bio: "Jenna Lee is a Corporate Vice President at Samsung SDS and a graduate of MIT Sloan School of Management, bringing years of experience from Microsoft where she led program management for commercialization and innovation. She works at the forefront of enterprise technology, digital transformation, and AI—helping shape the future of how businesses leverage cutting-edge solutions."
  },
  {
    name: "Paul Kramer",
    title: "GTM & Non-Profits",
    linkedin: "https://www.linkedin.com/in/yip-paul/",
    photo: "/images/Paul Kramer.png",
    bio: "Paul Kramer is the Founder and Chairman of the Institute for Youth in Policy, the world's largest network of young changemakers, and Head of Non-Profits at Stripe. Paul founded YIP at just 14 years old and has since built it into a nonpartisan organization with 40+ programs impacting youth civic engagement worldwide—proving that age is just a number when it comes to creating real change."
  },
  {
    name: "Davy Deng",
    title: "Mind-Uploading Researcher, Harvard-MIT Doctoral Candidate",
    linkedin: "https://www.linkedin.com/in/davy-deng-280638194/",
    photo: "/images/Davy Deng.png",
    bio: "Davy Deng is a joint doctoral candidate in the Harvard-MIT Health Sciences and Technology program, researching neural activity and whole brain emulation (mind-uploading) to prepare humanity for the future of consciousness technology. A UC Berkeley graduate and Point Foundation Scholar with 17+ publications and 500+ citations, he's pushing the boundaries of neuroscience and computational biology at two of the world's most prestigious institutions."
  },
  {
    name: "Jackee Wong",
    title: "Partner & Chief Marketing Officer, Leadsourcing",
    linkedin: "https://www.linkedin.com/in/jackeewong/",
    photo: "/images/Jackee Wong.png",
    bio: "Jackee Wong was Global Marketing Director at RedotPay (unicorn 2025) and previously built the growth department at ExpressVPN that helped turn it into a unicorn in 2021. With marketing experience since 2009 and leadership roles since 2015, Jackee has an impressive track record: he was made team lead of a game studio after less than 2 years of full-time experience and has since built growth departments for two tech startups that became unicorns—proving that understanding growth marketing can literally create billion-dollar companies."
  },
  {
    name: "Yongwon Cho",
    title: "Co-Founder, Waddle (Backed by OpenAI)",
    linkedin: "https://www.linkedin.com/in/yongwon/",
    photo: "/images/Yongwon Cho.png",
    bio: "Yongwon Cho is the Co-founder and Chief Operating Officer of Waddle, where he leads operations and growth strategy for one of Asia's fastest-emerging tech ventures. Recognized as a Forbes Asia 30 Under 30 (2025) honoree and a Global Shaper at the World Economic Forum, Yongwon exemplifies the next generation of innovators driving meaningful global impact. He has been awarded the Most AGI Potential Award by OpenAI and earned 1st Place in the OpenAI GPT-5 Hackathon, highlighting his forward-thinking approach to artificial intelligence and operational excellence."
  },
  {
    name: "Huy Nguyen",
    title: "Founder, MONOLOG",
    linkedin: "https://www.linkedin.com/in/byhuy/",
    photo: "/images/Huy Nguyen.png",
    bio: "Huy dropped out of university at 20 after 1 year of balancing coursework with building his business, trapped between self-doubt and the fear of judgment. Now he runs MONOLOG, a design studio creating brand and web experiences for mission-driven companies. Through his personal brand on YouTube and LinkedIn, he helps solopreneurs build sustainable businesses and challenges students to define their ideal life on their own terms, not society's, not their parents', but theirs."
  },
];

const additionalSpeakers = [
  {
    name: "Evelyn Nguyen - Goldman TMT",
    linkedin: "https://www.linkedin.com/in/evelynng912/"
  }
];

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

  // Handle modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSpeaker(null);
    };

    if (selectedSpeaker) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedSpeaker]);

  return (
    <>
      <section id="speakers" className="py-24 md:py-32 bg-black-steel/40 relative">
        <div id="speakers-section" className="max-w-[1200px] mx-auto px-6">
          {/* Section Header */}
          <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-[#6AC670] to-[#F2CF07] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-widest mb-4">
              CONFIRMED SPEAKERS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white-pure mb-4">
              Learn from the Best
            </h2>
          </div>

          {/* Speakers Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-stagger ${visible ? 'visible' : ''}`}>
            {/* Speaker Cards 1-5 */}
            {speakers.map((speaker, index) => (
              <div
                key={speaker.name}
                onClick={() => setSelectedSpeaker(speaker)}
                className="speaker-card group relative cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(24, 24, 24, 0.6)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  padding: '32px 20px',
                  height: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Gradient Border */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
                  style={{
                    padding: '2px',
                    background: 'linear-gradient(135deg, rgba(106, 198, 112, 0.6) 0%, rgba(242, 207, 7, 0.6) 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                {/* Gradient Border Hover State */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    padding: '2px',
                    background: 'linear-gradient(135deg, #6AC670 0%, #F2CF07 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                {/* Photo Wrapper with Gradient Ring */}
                <div className="relative mb-5 group-hover:scale-105 transition-transform duration-300">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      inset: '-3px',
                      background: 'linear-gradient(135deg, rgba(106, 198, 112, 0.3) 0%, rgba(242, 207, 7, 0.3) 100%)',
                      borderRadius: '50%',
                      zIndex: -1,
                    }}
                  />
                  <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                    <Image
                      src={speaker.photo}
                      alt={speaker.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {speaker.name}
                </h3>

                {/* Title */}
                <p className="text-sm text-white/70 text-center leading-relaxed">
                  {speaker.title}
                </p>

                {/* Hover Background Effect */}
                <div className="absolute inset-0 rounded-2xl bg-[rgba(30,30,30,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: -1 }} />

                {/* Hover Shadow */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_8px_32px_rgba(106,198,112,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}

            {/* Card 6: And Many More */}
            <div
              className="many-more-card relative"
              style={{
                background: 'rgba(24, 24, 24, 0.6)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '32px 20px',
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Gradient Border */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  padding: '2px',
                  background: 'linear-gradient(135deg, rgba(106, 198, 112, 0.4) 0%, rgba(242, 207, 7, 0.4) 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Heading */}
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] bg-clip-text text-transparent">
                And Many More...
              </h3>

              {/* Subtext */}
              <p className="text-white/60 mb-6 text-sm">
                Additional confirmed speakers:
              </p>

              {/* Speaker List */}
              <div className="space-y-3 w-full px-4">
                {additionalSpeakers.map((speaker, index) => (
                  <div key={index} className="flex items-center justify-between gap-3">
                    <span className="text-white text-sm">• {speaker.name}</span>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6AC670] to-[#F2CF07] flex items-center justify-center transition-transform duration-300 hover:scale-110 flex-shrink-0"
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSpeaker && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-6 animate-fadeIn"
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
          }}
          onClick={() => setSelectedSpeaker(null)}
        >
          <div
            className="modal-content relative animate-slideUp"
            style={{
              background: 'rgba(15, 15, 15, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '48px',
              maxWidth: '600px',
              width: '100%',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Border */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                padding: '2px',
                background: 'linear-gradient(135deg, #6AC670 0%, #F2CF07 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-[#6AC670] hover:rotate-90 transition-all duration-300 text-2xl"
            >
              ×
            </button>

            {/* Photo with Gradient Ring */}
            <div className="relative mb-6 mx-auto w-[150px]">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  inset: '-3px',
                  background: 'linear-gradient(135deg, #6AC670 0%, #F2CF07 100%)',
                  borderRadius: '50%',
                  zIndex: -1,
                }}
              />
              <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">
                <Image
                  src={selectedSpeaker.photo}
                  alt={selectedSpeaker.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-3xl font-bold text-white text-center mb-2">
              {selectedSpeaker.name}
            </h3>

            {/* Title */}
            <p className="text-base text-white/70 text-center mb-6">
              {selectedSpeaker.title}
            </p>

            {/* Bio */}
            <p className="text-white/90 leading-relaxed mb-8 text-center">
              {selectedSpeaker.bio}
            </p>

            {/* LinkedIn Button */}
            <div className="flex justify-center">
              <a
                href={selectedSpeaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link relative inline-block text-white text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(106, 198, 112, 0.1)',
                }}
              >
                {/* Gradient Border */}
                <div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    padding: '1px',
                    background: 'linear-gradient(135deg, rgba(106, 198, 112, 0.5) 0%, rgba(242, 207, 7, 0.5) 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <span className="relative z-10">View LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease;
        }

        .speaker-card:hover {
          transform: translateY(-4px);
        }

        @supports not (backdrop-filter: blur(20px)) {
          .speaker-card {
            background: rgba(24, 24, 24, 0.95) !important;
          }
          .modal-content {
            background: rgba(15, 15, 15, 0.98) !important;
          }
        }
      `}</style>
    </>
  );
}
