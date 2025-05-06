'use client';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';
import Link from 'next/link';

const HeroSlide = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hardcodedSlides = [
    { overskrift: 'Nyeste Beauty Jobs', image: '/billede1.png' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fashionforum')
        .select('overskrift, image, tags, dato, id')
        .limit(3);

      if (!error) {
        setSlides([...hardcodedSlides, ...data]);
      } else {
        console.error('Supabase error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-900 text-white">
      {/* Slide container med animation */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => {
          const slideContent = (
            <div className="w-full flex-shrink-0 h-[500px] relative" key={index}>
              {slide.image && (
                <img
                  src={slide.image}
                  alt="Slide image"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
              )}
              <div className="relative z-10 w-full h-full pl-10 flex flex-col justify-center">
                <div className="flex">
                  <p className="text-white">{slide.tags} - </p>
                  <p className="text-white pl-2">{slide.dato}</p>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold pt-5">
                  {slide.overskrift || 'Indlæser...'}
                </h1>
              </div>
            </div>
          );

          return slide.id ? (
            <Link key={index} href={`/artikler/${slide.id}`} className="w-full flex-shrink-0 h-[500px] relative block">
              {slideContent}
            </Link>
          ) : (
            slideContent
          );
        })}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Gå til slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => goToSlide(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlide;
