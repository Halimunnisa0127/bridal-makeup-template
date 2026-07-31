import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

const testimonials = [
  {
    id: 1,
    name: 'Anjali Desai',
    role: 'South Indian Bride',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
    text: '"Siri understood exactly what I wanted. The makeup was flawless, felt weightless, and looked incredible in both daylight and evening reception lights. Truly the best decision I made for my wedding."',
    rating: 5,
    hasVideo: true,
  },
  {
    id: 2,
    name: 'Meera Reddy',
    role: 'Engagement Client',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200',
    text: '"The glass-skin finish was exactly what I dreamed of. Her attention to detail and calm demeanor made the getting-ready process so relaxing."',
    rating: 5,
    hasVideo: false,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Destination Bride',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
    text: '"I was worried about my makeup melting during the outdoor mandap ceremony, but Siri\'s airbrush technique held up perfectly for 12 hours straight!"',
    rating: 5,
    hasVideo: false,
  }
];

const TestimonialsSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[currentIndex];

  return (
    <SlideSection id="testimonials" className="justify-center py-24 relative overflow-hidden">
      <Container className="h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full max-w-6xl mx-auto">
          
          {/* Left: Text & Controls */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionHeading className="text-4xl md:text-6xl mb-6">Love<br/>Letters.</SectionHeading>
              <p className="text-zinc-400 text-lg font-light max-w-md">
                Don't just take our word for it. Hear from the brides who trusted us with their most important moments.
              </p>
            </motion.div>

            <div className="flex gap-4">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="relative h-[400px] w-full flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full absolute"
              >
                <GlassCard className="p-8 md:p-10 relative overflow-hidden group">
                  <div className="flex gap-1 mb-6 text-white">
                    {[...Array(active.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-10 text-balance">
                    {active.text}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={active.img} alt={active.name} className="w-14 h-14 rounded-full object-cover border border-white/20" loading="lazy" />
                      <div>
                        <div className="text-white font-medium">{active.name}</div>
                        <div className="text-zinc-400 text-sm">{active.role}</div>
                      </div>
                    </div>
                    
                    {active.hasVideo && (
                      <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400" aria-label="Watch video testimonial">
                        <Play size={20} className="ml-1" fill="currentColor" />
                      </button>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </SlideSection>
  );
};

export default TestimonialsSlide;
