'use client';

import { useEffect, useState } from 'react';
import supabase from '../lib/supabase'; 
import Link from 'next/link';



const Cards = ({minId, maxId, selectedTag, categori}) => {
  const [artikler, setArtikler] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      let query = supabase
        .from('fashionforum')
        .select('id, overskrift, dato, tags, image, categori')
        .gte('id', minId)
        .lte('id', maxId);
  
      if (categori) {
        query = query.eq('categori', categori); 
      }
  
      const response = await query;
      const { data, error } = response;

      if (error) {
        console.error('Fejl ved hentning:', error);
      } else {
        setArtikler(data);
      }
    };

    fetchData();
  }, [minId, maxId, categori]);

  const filteredArticles =
  selectedTag === 'Alle artikler'
    ? artikler
    : artikler.filter((artikel) => artikel.tags === selectedTag);

  return (
    <>
    
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:m-auto lg:grid-cols-3 w-full sm:w-[700px] lg:w-[1100px]'>
      {filteredArticles.map((artikel) => (
        <div key={artikel.id} className='mb-10'>
          <Link href={`/artikler/${artikel.id}`}>
            {artikel.image && (
              <img
                className='w-full sm:w-[300px] h-[300px] m-auto sm:m-0 lg:w-[300px] object-cover'
                src={artikel.image}
                alt={artikel.overskrift}
                width={40}
                height={40}
              />
            )}  
            <div className='flex pt-2'>
              <p>{artikel.dato} -</p>
              <p className='pl-1'>{artikel.tags}</p>
            </div>
            <h3 className="w-full lg:w-[300px] hover:underline">{artikel.overskrift}</h3>
          </Link>
        </div>
      ))}
    </div>
    </>
  );

};


export default Cards;
