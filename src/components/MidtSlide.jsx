'use client';

import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';

import Link from 'next/link';


const MidtSlide = ({ minId, maxId, categori, bgColor }) => {
  const [artikler, setArtikler] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!categori) {
      console.error('En kategori skal vælges!');
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fashionforum')
        .select('id, overskrift, dato, tags, image, content, categori')
        .gte('id', minId)
        .lte('id', maxId)
        .eq('categori', categori);

      if (error) {
        console.error('Fejl ved hentning:', error);
      } else {
        setArtikler(data);
      }
    };

    fetchData();
  }, [minId, maxId, categori]);

  // Slide every 5 seconds
  useEffect(() => {
    if (artikler.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % artikler.length);
        setIsAnimating(false);
      }, 500); // match CSS transition
    }, 5000);

    return () => clearInterval(interval);
  }, [artikler]);

  const current = artikler[currentIndex];
  const next = artikler[(currentIndex + 1) % artikler.length];

  if (!current) return null;

  return (
    <>
   
    <div
    className="relative w-full sm:w-[900px] h-[350px] overflow-hidden mx-auto mt-10"
   // ← Tilføj baggrundsfarve her
  >      {/* Slide container */}
      <div className="relative h-full w-full">
        {/* Current slide */}
        <Slide artikel={current} position={isAnimating ? '-translate-x-full' : 'translate-x-0'} zIndex="z-20" />

        {/* Next slide (under, sliding in) */}
        {isAnimating && next && (
          <Slide artikel={next} position="translate-x-full" animateIn zIndex="z-10" bgColor={bgColor} />
        )}
      </div>
    </div>
    </>
  );
};

const Slide = ({ artikel, position, animateIn = false, zIndex }) => {
  return (<>
    <div
      className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${position} ${zIndex} ${
        animateIn ? 'animate-in' : ''
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center h-full">
        {artikel.image && (
          <img
            className="w-[400px] h-[400px] sm:w-[1000px] object-cover"
            src={artikel.image}
            alt={artikel.overskrift}
            width="400"
            height="400"
          />
        )}
        
        <div>
          <Link href={`/artikler/${artikel.id}`}>
            <div className="flex pt-2 w-[400px] text-sm text-gray-600">
              <p>{artikel.dato} -</p>
              <p className="pl-1">{artikel.tags}</p>
            </div>
            <h1 className="text-[1.5rem] font-semibold w-[400px] pt-2 hover:underline">
              {artikel.overskrift}
            </h1>
            {artikel.content && (
              <p className="pt-2 text-gray-700 text-sm w-[300px] line-clamp-3">
                {artikel.content.slice(0, 150)}...
              </p>
            )}
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default MidtSlide;
