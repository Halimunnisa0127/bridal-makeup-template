import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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

  const filteredItems = portfolioItems.filter(item => filter === 'All' || item.category === filter).slice(0, 8); // Max 8 to fit viewport

  return (
    <SlideSection id="portfolio" className="justify-center py-24 relative overflow-hidden">
      <Container className="h-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <SectionHeading className="text-4xl md:text-5xl mb-2">The Archive</SectionHeading>
            <p className="text-zinc-400 font-light">A visual journey of our most iconic brides.</p>
          </div>
          <div className="flex gap-4">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-sm tracking-wide transition-colors ${filter === c ? 'text-white border-b border-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-full min-h-0">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className={`group relative overflow-hidden rounded-xl cursor-pointer bg-slate-900 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                onClick={() => setSelectedImg(item)}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-white font-medium text-lg">{item.title}</h4>
                    <p className="text-zinc-400 text-sm">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={selectedImg.img}
              alt={selectedImg.title}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
            <div className="absolute bottom-8 text-center pointer-events-none">
              <h3 className="text-white text-2xl font-medium">{selectedImg.title}</h3>
              <p className="text-zinc-400">{selectedImg.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideSection>
  );
};

export default PortfolioSlide;
