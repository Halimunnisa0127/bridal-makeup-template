import React, { useState, useEffect, useCallback } from 'react';
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

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide animation
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, currentIndex]);

  const active = testimonials[currentIndex];

  return (
    <SlideSection id="testimonials" className="justify-center py-20 relative bg-[#0A0A0E] overflow-hidden">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#5C4033]/10 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full max-w-6xl mx-auto">
          
          {/* Left: Text & Controls */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionHeading className="text-3xl md:text-5xl lg:text-5xl mb-6 tracking-tight">
                What Our <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Brides Say</span>
              </SectionHeading>
              
              {/* Trust Badge */}
              <div className="flex items-center gap-5 mb-6 bg-[#17171C]/50 border border-white/5 rounded-2xl p-4 inline-flex">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#17171C] overflow-hidden"><img src="https://i.pinimg.com/736x/2e/ba/79/2eba7972013a9a02b1af5af6088fb1ab.jpg" alt="Bride" className="w-full h-full object-cover" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#17171C] overflow-hidden"><img src="https://i.pinimg.com/736x/23/c3/f2/23c3f20abd6f0c041f5f147aacafa02b.jpg" alt="Bride" className="w-full h-full object-cover" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#17171C] overflow-hidden"><img src="https://i.pinimg.com/736x/8d/19/82/8d1982d9ee21bf8d969073dc2f03dfa8.jpg" alt="Bride" className="w-full h-full object-cover" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#17171C] bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white text-xs font-bold">+</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 mb-0.5">
                    <Star size={16} fill="currentColor" />
                    <span className="text-zinc-100 font-medium text-sm">4.9/5 Rating</span>
                  </div>
                  <div className="text-zinc-400 text-xs font-light">500+ Happy Brides</div>
                </div>
              </div>

              <p className="text-zinc-400 text-sm md:text-base font-light max-w-md leading-relaxed">
                Don't just take our word for it. Hear from the brides who trusted us with their most important moments.
              </p>
            </motion.div>

            <div className="flex gap-4">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 bg-[#17171C]/50 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:bg-[#1A1D24] hover:border-amber-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 bg-[#17171C]/50 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:bg-[#1A1D24] hover:border-amber-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="relative h-[400px] w-full flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full absolute"
              >
                <div className="p-8 md:p-10 relative overflow-hidden group backdrop-blur-md rounded-2xl bg-gradient-to-b from-[#17171C] to-[#0A0A0E] border border-white/5 shadow-2xl transition-all duration-500 hover:border-amber-500/30">
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1.5 mb-8 text-amber-400">
                      {[...Array(active.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-lg md:text-xl lg:text-2xl text-zinc-100 font-light leading-relaxed mb-10 text-balance italic">
                      {active.text}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img src={active.img} alt={active.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#17171C] shadow-lg" loading="lazy" />
                          <div className="absolute -bottom-1 -right-1 bg-amber-500 w-4 h-4 rounded-full border-2 border-[#17171C]" />
                        </div>
                        <div>
                          <div className="text-zinc-100 font-medium tracking-wide">{active.name}</div>
                          <div className="text-amber-500/80 text-xs font-light uppercase tracking-widest mt-0.5">{active.role}</div>
                        </div>
                      </div>
                      
                      {/* Video Button */}
                      {active.hasVideo && (
                        <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-[#1A1D24]/80 text-zinc-300 hover:text-amber-400 hover:bg-[#1a110a] hover:border-amber-500/30 transition-all duration-300 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50" aria-label="Watch video testimonial">
                          <Play size={20} className="ml-1 group-hover/btn:scale-110 transition-transform duration-300" fill="currentColor" />
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
