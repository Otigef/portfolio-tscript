import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import TransitionOverlay from './components/TransitionOverlay';
import HomeTransition from './components/HomeTransition';
import { initSmoothScroll } from './utils/smoothScroll';

const App: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showHomeTransition, setShowHomeTransition] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleOverlayComplete = () => {
    setShowOverlay(false);
    setIsNavigating(false);
  };

  const handleHomeTransitionComplete = () => {
    setShowHomeTransition(false);
    setIsNavigating(false);
  };

  const handleNavigation = (targetId: string) => {
    // Prevent multiple transitions
    if (showOverlay || showHomeTransition || isNavigating) return;
    
    setIsNavigating(true);
    
    // Special handling for home button
    if (targetId === 'home') {
      setShowHomeTransition(true);
    } else {
      setShowOverlay(true);
    }
  };

  useEffect(() => {
    // Initialize smooth scroll with navigation callback
    initSmoothScroll({ 
      headerSelector: 'header', 
      defaultOffset: 88,
      onTransition: handleNavigation
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans leading-normal tracking-wider text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {showOverlay && <TransitionOverlay onComplete={handleOverlayComplete} isVisible={showOverlay} />}
      {showHomeTransition && <HomeTransition onComplete={handleHomeTransitionComplete} isVisible={showHomeTransition} />}
      <Header />
      <main>
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;