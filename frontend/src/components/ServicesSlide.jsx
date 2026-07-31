import React from 'react';
import { motion } from 'framer-motion';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import FlowingMenu from './FlowingMenu';

const services = [
  { id: 1, title: 'Bridal Makeup', desc: 'Signature traditional & modern bridal looks.', img: 'https://images.unsplash.com/photo-1595954421407-b6f722a4b56a?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Engagement', desc: 'Soft, radiant glows for your ring ceremony.', img: 'https://images.unsplash.com/photo-1610484784964-67258dc71f86?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Reception', desc: 'Glamorous, bold styles for the evening.', img: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'HD Makeup', desc: 'Flawless camera-ready finish.', img: 'https://images.unsplash.com/photo-1629814696209-4f4fac4205ce?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Airbrush', desc: 'Weightless, long-lasting perfection.', img: 'https://images.unsplash.com/photo-1512496115851-a5083f40d336?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'Saree Draping', desc: 'Professional draping in multiple styles.', img: 'https://images.unsplash.com/photo-1610031526315-bb8a53e990b7?q=80&w=800&auto=format&fit=crop' },
  { id: 7, title: 'Hairstyling', desc: 'Intricate braids to modern waves.', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop' },
  { id: 8, title: 'Home Service', desc: 'Luxury salon experience at your venue.', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop' },
];

const ServicesSlide = () => {
  const menuItems = services.map(s => ({
    link: '#',
    text: s.title,
    image: s.img
  }));

  return (
    <SlideSection id="services" className="justify-center pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden">
      <Container className="h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center shrink-0 mb-8"
        >
          <SectionHeading className="text-4xl md:text-5xl mb-4">Curated Experiences</SectionHeading>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            A comprehensive suite of luxury services designed to make you feel extraordinary from preparation to the final reveal.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full relative rounded-3xl overflow-hidden border border-white/10"
        >
          <FlowingMenu 
            items={menuItems}
            speed={15}
            textColor="#ffffff"
            bgColor="rgba(255,255,255,0.02)"
            marqueeBgColor="#fbbf24"
            marqueeTextColor="#120F17"
            borderColor="rgba(255,255,255,0.1)"
          />
        </motion.div>
      </Container>
    </SlideSection>
  );
};

export default ServicesSlide;
