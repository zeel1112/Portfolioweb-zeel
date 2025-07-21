// src/App.jsx
import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar              from './components/Navbar';
import HeroSection         from './components/HeroSection';
import AboutSection        from './components/AboutSection';
import ExperienceSection   from './components/ExperienceSection';
import ProjectsSection     from './components/ProjectsSection';
import SkillsSection       from './components/SkillsSection';
import ContactSection      from './components/ContactSection';
import Footer              from './components/Footer';
import ScrollToTop         from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.scroll-section').forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight * 0.8) {
          sec.classList.add('is-visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="font-inter transition-all duration-500 animate-fadeIn">
        <Navbar />

        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
