import React from 'react';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-slate-900">
      <Hero />
      <Logos />
      <Features />
      <CTA />
      <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Flowcard Inc. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
