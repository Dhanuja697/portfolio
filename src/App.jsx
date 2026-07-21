import React from 'react';
import CanvasBackground3D from './components/CanvasBackground3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* 3D WebGL Particle Background */}
      <CanvasBackground3D />

      {/* Main UI Wrapper */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Home / Hero Landing */}
        <Hero />

        {/* Stats Counter & About Me details */}
        <AboutStats />

        {/* Skills Indicator & Rotating Dial */}
        <Skills />

        {/* What I Do 3D tilt grid */}
        <Services />

        {/* Recent Work and Tech Tags */}
        <Projects />

        
        {/* Interactive Message Inbox form */}
        <Contact />

        {/* Sitemap & Footer info */}
        <Footer />
      </div>
    </>
  );
}

export default App;
