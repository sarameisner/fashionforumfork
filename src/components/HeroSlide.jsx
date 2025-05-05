'use client';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';

const HeroSlide = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dine egne hardcodede slides
  const hardcodedSlides = [
    { overskrift: 'Velkommen til FashionForum' },
    { overskrift: 'Eksklusive Trends og Insights' },
  ];

  // Hent slides fra databasen
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fashionforum')
        .select('overskrift, image')
        .limit(3); // Henter 3 fra databasen

      if (!error) {
        // Kombinér dine egne med dem fra databasen
        setSlides([...hardcodedSlides, ...data]);
      } else {
        console.error('Supabase error:', error);
      }
    };

    fetchData();
  }, []);

  // Auto-skift slides
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white text-4xl font-bold text-center p-4">
      {slides.length > 0 ? slides[currentIndex].overskrift : 'Indlæser...'}
    </div>
  );
};

export default HeroSlide;

