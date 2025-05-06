'use client';

import { useEffect, useState } from 'react';
import supabase from '../lib/supabase'; 
import Link from 'next/link';
const Cards = () => {
  const [artikler, setArtikler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fashionforum')
        .select('id, overskrift, dato, tags, image'); // Hent image_url fra fashionforum tabellen

      if (error) {
        console.error('Fejl ved hentning:', error);
      } else {
        setArtikler(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='grid grid-cols-3 '>
      {artikler.map((artikel) => (
        <div key={artikel.id} className='mb-10'>
          <Link href={`/artikler/${artikel.id}`}>
          {artikel.image && (
            <img className='w-[300px] h-[300px] object-cover' src={artikel.image} alt={artikel.overskrift} width="300" height="300" />
          )}  
          <div className='flex'><p>{artikel.dato} -</p> <p className='pl-1'>{artikel.tags}</p></div>
          <h3 className="w-[300px]">{artikel.overskrift}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
