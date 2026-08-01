import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideSection from './SlideSection';
import Container from './Container';

import SectionHeading from './SectionHeading';
import bride1 from "../assets/images/bride1.png"
import bride2 from "../assets/images/bride2.jpg"
import bride3 from "../assets/images/bride3.jpg"
import bride4 from "../assets/images/bride4.jpg"
import bride5 from "../assets/images/bride5.jpg"
import mehandi from "../assets/images/mehandi.jpg"
import mehandi1 from "../assets/images/mehandi1.jpg"
import mehandi2 from "../assets/images/mehandi2.jpg"
import mehandi3 from "../assets/images/mehandi3.jpg"
import haldi from "../assets/images/haldi.jpg"
import haldi1 from "../assets/images/haldi1.avif"
import haldi2 from "../assets/images/haldi2.jpg"
import haldi3 from "../assets/images/haldi3.jpg"
import babyshower from "../assets/images/babyshower.jpg"
import babyshower1 from "../assets/images/babyshower1.jpg"
import babyshower2 from "../assets/images/babyshower2.jpg"
import babyshower3 from "../assets/images/babyshower3.jpg"
import enagement1 from "../assets/images/enagement1.jpg"
import enagement2 from "../assets/images/enagement2.jpg"
import enagement3 from "../assets/images/enagement3.jpg"
import enagement4 from "../assets/images/enagement4.jpg"

const categories = ['Traditional Bride', 'Engagement', 'Haldi', 'Mehendi', 'Baby Shower'];

const galleryData = {
  'Traditional Bride': [
    bride1,
    bride2,
    bride3,
    bride4,
    bride5
  ],
  'Engagement': [
    enagement1,
    enagement2,
    enagement3,
    enagement4



  ],

  'Haldi': [
    haldi,
    haldi1,
    haldi2,
    haldi3
  ],

  'Mehendi': [
    mehandi,
    mehandi1,
     mehandi2,
      mehandi3
  ],
  'Baby Shower': [
    babyshower,
    babyshower1,
    babyshower2,
    babyshower3
  ]
};

const ServicesSlide = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const currentImages = galleryData[activeTab] || [];
  const loopedImages = [...currentImages, ...currentImages];

  return (
    <SlideSection id="services" className="justify-center pt-8 pb-16 md:pt-4 md:pb-4 relative overflow-hidden bg-slate-950">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-[100px]"></div>
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center shrink-0 mb-10"
        >
          <SectionHeading className="text-4xl md:text-6xl mb-4 tracking-wide text-white">
            Signature Looks
          </SectionHeading>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Explore timeless bridal transformations crafted for every special occasion.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative px-6 py-3 rounded-full text-sm md:text-base transition-all duration-300 backdrop-blur-md border ${activeTab === category
                ? 'text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                : 'text-zinc-300 border-white/10 hover:border-amber-400/50 hover:bg-white/5'
                }`}
            >
              {activeTab === category && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-amber-400 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 font-medium tracking-wide">{category}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full relative overflow-hidden hide-scrollbar py-8"
          >
            <div className="flex w-[200%] animate-marquee hover:paused">
              {loopedImages.map((src, index) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="w-full max-w-[280px] md:max-w-[340px] flex-shrink-0 px-3 md:px-4 cursor-pointer group"
                  onClick={() => setSelectedImage(src)}
                >
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden transition-all duration-500 group-hover:shadow-gold group-hover:-translate-y-2">
                    <img
                      src={src}
                      alt={`${activeTab} look ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged signature look"
                className="w-full h-full object-contain max-h-[90vh] rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </SlideSection>
  );
};

export default ServicesSlide;
