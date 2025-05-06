'use client';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';

const HeroSlide = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dine egne hardcodede slides (uden billeder)
  const hardcodedSlides = [
    { overskrift: 'Nyeste Beauty Jobs', image: '/billede1.png' }
  ];

  // Hent slides fra databasen
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fashionforum')
        .select('overskrift, image, tags, dato')
        .limit(3); // Begræns til 3 databaser-slides

      if (!error) {
        // Kombinér hardcoded + hentede slides
        setSlides([...hardcodedSlides, ...data]);
      } else {
        console.error('Supabase error:', error);
      }
    };

    fetchData();
  }, []);

  // Auto-slide
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-900 text-white">
      {/* Billede baggrund */}
      {currentSlide?.image && (
        <img
          src={currentSlide.image}
          alt="Slide image"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      )}

      {/* Overlay med tekst */}
      <div className="relative z-0 w-full h-full pl-20 flex flex-col justify-center">
        <div className='flex'>
        <p className='text-white '>{currentSlide?.tags}  - </p>
        <p className='text-white pl-2'>{currentSlide?.dato}</p></div>
        <h1 className="text-4xl md:text-6xl font-bold pt-5">
          {currentSlide?.overskrift || 'Indlæser...'}
        </h1>
      </div>
    </div>
  );
};

export default HeroSlide;
