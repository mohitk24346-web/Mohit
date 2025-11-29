import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Team />
        <Testimonials />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;