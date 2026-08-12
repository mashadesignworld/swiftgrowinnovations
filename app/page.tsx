import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BestsellersGrid from '@/components/BestsellersGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-brand-dark">
     
      <Hero />
      <BestsellersGrid />
      
    </main>
  );
}