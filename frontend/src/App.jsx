import React, { useState, Suspense, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import SlideProgressIndicator from './components/SlideProgressIndicator';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingBlobs from './components/FloatingBlobs';
import LoadingScreen from './components/LoadingScreen';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

// Lazy loading all slides for code splitting per slide/route
const HeroSlide = React.lazy(() => import('./components/HeroSlide'));
const AboutSlide = React.lazy(() => import('./components/AboutSlide'));
const ServicesSlide = React.lazy(() => import('./components/ServicesSlide'));
const PortfolioSlide = React.lazy(() => import('./components/PortfolioSlide'));
const PackagesSlide = React.lazy(() => import('./components/PackagesSlide'));
const WhyChooseUsSlide = React.lazy(() => import('./components/WhyChooseUsSlide'));
const TestimonialsSlide = React.lazy(() => import('./components/TestimonialsSlide'));
const InstagramSlide = React.lazy(() => import('./components/InstagramSlide'));
const FaqSlide = React.lazy(() => import('./components/FaqSlide'));
const AppointmentSlide = React.lazy(() => import('./components/AppointmentSlide'));
const ContactSlide = React.lazy(() => import('./components/ContactSlide'));
const FooterSlide = React.lazy(() => import('./components/FooterSlide'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 12;

  const handleScroll = (e) => {
    const slideIndex = Math.round(e.target.scrollTop / window.innerHeight);
    setCurrentSlide(slideIndex);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <AnimatedBackground>
        <FloatingBlobs />
      </AnimatedBackground>
      <FloatingWhatsApp />
      <BackToTop show={currentSlide > 0} />

      <main 
        className="relative h-[100dvh] min-h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-slate-950/0"
        onScroll={handleScroll}
      >
        <Navbar />
        <Suspense fallback={<div className="h-[100dvh] w-full" />}>
          <HeroSlide />
          <AboutSlide />
          <ServicesSlide />
          <PortfolioSlide />
          <PackagesSlide />
          <WhyChooseUsSlide />
          <TestimonialsSlide />
          <InstagramSlide />
          <FaqSlide />
          <AppointmentSlide />
          <ContactSlide />
          <FooterSlide />
        </Suspense>
      </main>
      
      <SlideProgressIndicator total={totalSlides} current={currentSlide} />
    </>
  );
}

export default App;
