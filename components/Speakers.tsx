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
];

const additionalSpeakers = [
  {
    name: "Huy Nguyen",
    linkedin: "https://www.linkedin.com/in/byhuy/"
  },
  {
    name: "Evelyn Nguyen - Goldman TMT",
    linkedin: "https://www.linkedin.com/in/evelynng912/"
  }
];

export default function Speakers() {
  const [visible, setVisible] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      if (element) observer.unobserve(element);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleSpeakerClick = (index: number) => {
    if (isMobile) {
      setActiveSpeaker(activeSpeaker === index ? null : index);
    }
  };

  return (
    <section id="speakers" className="py-24 md:py-32 bg-black-steel/40 relative">
      <div id="speakers-section" className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
          <div className="text-green-quantum text-sm font-semibold uppercase tracking-widest mb-4">
            GUEST SPEAKERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white-pure mb-4">
            Learn from the Best
          </h2>
        </div>

        {/* Speakers Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 fade-in-stagger ${visible ? 'visible' : ''}`}>
          {/* Speaker Cards 1-5 */}
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              onClick={() => handleSpeakerClick(index)}
              className="speaker-card group relative bg-[rgba(6,6,6,0.4)] backdrop-blur-xl rounded-2xl p-6 border border-transparent bg-clip-padding cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{
                backgroundImage: 'linear-gradient(rgba(6, 6, 6, 0.4), rgba(6, 6, 6, 0.4)), linear-gradient(135deg, #6AC670 0%, #F2CF07 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'transparent',
              }}
            >
              {/* Photo Container */}
              <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden">
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  fill
                  className="object-cover transition-all duration-300 group-hover:brightness-50 group-hover:blur-sm"
                />

                {/* Bio Overlay - Desktop Hover / Mobile Click */}
                <div className={`absolute inset-0 bg-black/85 p-5 flex items-center justify-center transition-opacity duration-300 ${
                  isMobile
                    ? (activeSpeaker === index ? 'opacity-100' : 'opacity-0 pointer-events-none')
                    : 'opacity-0 group-hover:opacity-100'
                } overflow-auto`}>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-xl font-bold text-white-pure mb-1">
                {speaker.name}
              </h3>
              <p className="text-sm text-white-dim mb-4">
                {speaker.title}
              </p>

              {/* LinkedIn Icon */}
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-[#6AC670] to-[#F2CF07] flex items-center justify-center transition-transform duration-300 hover:scale-110 z-20"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          ))}

          {/* Card 6: And Many More */}
          <div
            className="relative rounded-2xl p-8 border border-transparent bg-clip-padding overflow-hidden flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(106, 198, 112, 0.15) 0%, rgba(242, 207, 7, 0.15) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'transparent',
            }}
          >
            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6AC670] to-[#F2CF07] bg-clip-text text-transparent">
              And Many More...
            </h3>

            {/* Subtext */}
            <p className="text-white-dim mb-6 text-sm">
              Additional confirmed speakers:
            </p>

            {/* Speaker List */}
            <div className="space-y-4 w-full">
              {additionalSpeakers.map((speaker, index) => (
                <div key={index} className="flex items-center justify-between gap-3 text-left">
                  <span className="text-white text-base flex-1">• {speaker.name}</span>
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6AC670] to-[#F2CF07] flex items-center justify-center transition-transform duration-300 hover:scale-110 flex-shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
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
  );
}
