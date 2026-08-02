import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import { SecondaryButton } from './ButtonVariants';

const instagramPosts = [
  'https://images.unsplash.com/photo-1595954421407-b6f722a4b56a?q=80&w=400',
  'https://images.unsplash.com/photo-1610484784964-67258dc71f86?q=80&w=400',
  'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=400',
  'https://images.unsplash.com/photo-1629814696209-4f4fac4205ce?q=80&w=400',
  'https://images.unsplash.com/photo-1512496115851-a5083f40d336?q=80&w=400',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400',
];

const InstagramSlide = () => {
  return (
    <SlideSection id="instagram" className="justify-center py-24 relative overflow-hidden">
      <Container className="h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4 text-zinc-400">
            <Instagram size={24} />
            <span className="tracking-widest uppercase text-sm font-medium">@sriluxuryuma</span>
          </div>
          <SectionHeading className="text-4xl md:text-5xl mb-6">Join the Community</SectionHeading>
          
          <SecondaryButton className="text-sm">Follow on Instagram</SecondaryButton>
        </motion.div>

        <div className="w-full max-w-6xl overflow-hidden rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2">
            {instagramPosts.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-square relative group overflow-hidden bg-slate-900 cursor-pointer"
              >
                <img 
                  src={img} 
                  alt="Instagram post preview" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </SlideSection>
  );
};

export default InstagramSlide;
