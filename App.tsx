
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Empathy from './components/Empathy';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Conditions from './components/Conditions';
import Process from './components/Process';
import Trust from './components/Trust';
import Closing from './components/Closing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <Empathy />
        <Features />
        <Benefits />
        <Conditions />
        <Process />
        <Trust />
        <Closing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
