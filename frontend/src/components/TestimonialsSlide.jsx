import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Anjali Desai',
    role: 'South Indian Bride',
    img: 'https://i.pinimg.com/736x/2e/ba/79/2eba7972013a9a02b1af5af6088fb1ab.jpg',
    text: '"Siri made me feel confident throughout my wedding day. The makeup looked flawless from morning till the reception, and I received so many compliments."',
    rating: 5,
    hasVideo: true,
  },
  {
    id: 2,
    name: 'Meera Reddy',
    role: 'Engagement Client',
    img: 'https://i.pinimg.com/736x/23/c3/f2/23c3f20abd6f0c041f5f147aacafa02b.jpg',
    text: '"Engagement roju simple and elegant look kavali anukunna.Final makeup chala beautiful ga vachindi. Chala happy ga unna.Thank you for making my special day memorable."',
    rating: 5,
    hasVideo: false,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Destination Bride',
    img: 'https://i.pinimg.com/736x/8d/19/82/8d1982d9ee21bf8d969073dc2f03dfa8.jpg',
    text: '"I was worried about my makeup melting during the outdoor mandap ceremony, but Sri\'s airbrush technique held up perfectly for 12 hours straight!"',
    rating: 5,
    hasVideo: false,
  },
  {
    id: 4,
    name: 'Lakshmi',
    role: 'Haldi function',
    img: 'https://i.pinimg.com/736x/2a/b5/74/2ab5741ce357c62d87d91c560404fc74.jpg',
    text: '"Haldi function kosam simple, glowing look kavali anukunna. Final look chala nachindi. Experience motham smooth ga, tension lekunda jarigindi Thank You Sri.',
    rating: 5,
    hasVideo: false,
  }
];

const TestimonialsSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch gesture swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      next(); // Swiped left -> Next slide
    } else if (diff < -50) {
      prev(); // Swiped right -> Prev slide
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, currentIndex]);

  const active = testimonials[currentIndex];

  return (
    <SlideSection id="testimonials" className="justify-center py-12 sm:py-16 md:py-20 relative bg-[#0A0A0E] overflow-hidden">
      {/* Background Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#5C4033]/10 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10 h-full flex items-center justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center w-full max-w-6xl mx-auto">
          
          {/* Left: Text & Controls */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionHeading className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight">
                What Our <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Brides Say</span>
              </SectionHeading>
              
              {/* Trust Badge */}
              <div className="flex items-center gap-4 mb-4 sm:mb-6 bg-[#17171C]/50 border border-white/5 rounded-2xl p-3 sm:p-4 inline-flex">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#17171C] overflow-hidden"><img src="https://i.pinimg.com/736x/2e/ba/79/2eba7972013a9a02b1af5af6088fb1ab.jpg" alt="Bride" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#17171C] overflow-hidden"><img src="https://i.pinimg.com/736x/23/c3/f2/23c3f20abd6f0c041f5f147aacafa02b.jpg" alt="Bride" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#17171C] overflow-hidden"><img src="https://i.pinimg.com/736x/8d/19/82/8d1982d9ee21bf8d969073dc2f03dfa8.jpg" alt="Bride" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#17171C] bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white text-xs font-bold">+</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                    <Star size={14} fill="currentColor" />
                    <span className="text-zinc-100 font-medium text-xs sm:text-sm">4.9/5 Rating</span>
                  </div>
                  <div className="text-zinc-400 text-[10px] sm:text-xs font-light">500+ Happy Brides</div>
                </div>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-light max-w-md leading-relaxed">
                Don't just take our word for it. Hear from the brides who trusted us with their most important moments.
              </p>
            </motion.div>

            <div className="flex gap-3">
              <button 
                onClick={prev} 
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-white/10 bg-[#17171C]/50 flex items-center justify-center text-zinc-300 hover:text-amber-400 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={next} 
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-white/10 bg-[#17171C]/50 flex items-center justify-center text-zinc-300 hover:text-amber-400 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right: Carousel (Touch swipe enabled) */}
          <div 
            className="relative min-h-[300px] h-auto w-full flex items-center touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full relative"
              >
                <div className="p-5 sm:p-8 md:p-10 relative overflow-hidden group backdrop-blur-md rounded-2xl bg-gradient-to-b from-[#17171C] to-[#0A0A0E] border border-white/5 shadow-2xl">
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-4 sm:mb-6 text-amber-400">
                      {[...Array(active.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    
                    <p className="text-base sm:text-xl lg:text-2xl text-zinc-100 font-light leading-relaxed mb-6 sm:mb-8 italic">
                      {active.text}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={active.img} 
                          alt={active.name} 
                          loading="lazy"
                          decoding="async"
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#17171C] shadow-lg" 
                        />
                        <div>
                          <div className="text-zinc-100 font-medium text-sm sm:text-base tracking-wide">{active.name}</div>
                          <div className="text-amber-400/80 text-[10px] sm:text-xs font-light uppercase tracking-widest mt-0.5">{active.role}</div>
                        </div>
                      </div>
                      
                      {active.hasVideo && (
                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1A1D24]/80 text-zinc-300 hover:text-amber-400 transition-all" aria-label="Watch video testimonial">
                          <Play size={16} className="ml-0.5" fill="currentColor" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </SlideSection>
  );
};

export default TestimonialsSlide;
