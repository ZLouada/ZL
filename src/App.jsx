import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000; // 2 seconds total
    const interval = 30; // Update every 30ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Easing function for more natural progress
      const easeProgress = 1 - Math.pow(1 - currentStep / steps, 3);
      setProgress(Math.min(easeProgress * 100, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        // Small delay after reaching 100%
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader progress={progress} />}
      </AnimatePresence>

      <div className={`bg-dark-900 min-h-screen ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
