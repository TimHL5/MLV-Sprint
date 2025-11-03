import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Speakers from '@/components/Speakers';
import Stats from '@/components/Stats';
import ValueProps from '@/components/ValueProps';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import MobileCTA from '@/components/MobileCTA';

export default function Home() {
  return (
    <main className="relative">
      <CursorTrail />
      <MobileCTA />
      <Navigation />
      <Hero />
      <Timeline />
      <Speakers />
      <Stats />
      <ValueProps />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
