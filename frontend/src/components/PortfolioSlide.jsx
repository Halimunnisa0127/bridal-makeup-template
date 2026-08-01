import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';

const categories = ['All', 'Bridal', 'Engagement', 'Reception'];

const portfolioItems = [
  { id: 1, category: 'Bridal', img: 'https://images.unsplash.com/photo-1595954421407-b6f722a4b56a?q=80&w=800', title: 'Traditional Elegance' },
  { id: 2, category: 'Engagement', img: 'https://images.unsplash.com/photo-1610484784964-67258dc71f86?q=80&w=800', title: 'Radiant Glow' },
  { id: 3, category: 'Reception', img: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800', title: 'Bold Glamour' },
  { id: 4, category: 'Bridal', img: 'https://images.unsplash.com/photo-1629814696209-4f4fac4205ce?q=80&w=800', title: 'Modern Telugu' },
  { id: 5, category: 'Reception', img: 'https://images.unsplash.com/photo-1512496115851-a5083f40d336?q=80&w=800', title: 'Evening Star' },
  { id: 6, category: 'Engagement', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800', title: 'Soft Pastels' },
  { id: 7, category: 'Bridal', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800', title: 'Heritage Look' },
  { id: 8, category: 'Reception', img: 'https://images.unsplash.com/photo-1610031526315-bb8a53e990b7?q=80&w=800', title: 'Classic Chic' },
];

const PortfolioSlide = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredItems = portfolioItems.filter(item => filter === 'All' || item.category === filter).slice(0, 8);

  return (
    <SlideSection id="portfolio" className="justify-center py-12 sm:py-16 md:py-20 relative overflow-hidden bg-[#0A0A0E]">
      <Container className="h-full flex flex-col relative z-10 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 sm:mb-10 gap-6 lg:gap-8">
          <div>
            <SectionHeading className="text-3xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4 tracking-tight">
              Signature <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Looks</span>
            </SectionHeading>
            <p className="text-zinc-400 font-light text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
              A curated visual journey showcasing our most iconic bridal transformations.
            </p>
          </div>
          
          {/* Categories Tab (Scrollable on mobile) */}
          <div className="w-full lg:w-auto flex overflow-x-auto hide-scrollbar gap-4 sm:gap-6 bg-white/5 p-2 px-4 sm:px-6 rounded-full border border-white/10 backdrop-blur-md">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs sm:text-sm md:text-base tracking-wide transition-all duration-300 py-1.5 shrink-0 relative ${filter === c ? 'text-amber-400' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                {c}
                {filter === c && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 h-auto min-h-0">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl md:rounded-[2rem] cursor-pointer bg-[#111116] border border-white/5 shadow-lg min-h-[240px] sm:min-h-[280px] ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                onClick={() => setSelectedImg(item)}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/40 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <div className="transform translate-y-0 sm:translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <h4 className="text-white font-medium text-base sm:text-lg md:text-xl tracking-wide mb-1">{item.title}</h4>
                    <p className="text-amber-400 text-[10px] sm:text-xs uppercase tracking-[0.2em]">{item.category}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 border border-white/20">
                  <ZoomIn className="text-white w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0E]/95 backdrop-blur-2xl p-4 sm:p-8 pt-[env(safe-area-inset-top,1rem)]"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all z-50"
              onClick={() => setSelectedImg(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            {/* Expanded Image */}
            <motion.img
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImg.img}
              alt={selectedImg.title}
              loading="eager"
              decoding="async"
              className="max-w-full max-h-[80vh] object-contain rounded-xl sm:rounded-[2rem] shadow-2xl border border-white/5 relative z-40"
              onClick={e => e.stopPropagation()}
            />
            
            {/* Details */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-6 text-center pointer-events-none z-50"
            >
              <h3 className="text-white text-xl sm:text-3xl font-light tracking-wide mb-1">{selectedImg.title}</h3>
              <p className="text-amber-400 text-xs sm:text-sm uppercase tracking-[0.25em]">{selectedImg.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideSection>
  );
};

export default PortfolioSlide;
