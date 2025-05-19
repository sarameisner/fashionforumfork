'use client';

import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';
import Design from "../components/Design"
import Link from 'next/link';

const MidtCards = ({ minId, maxId }) => {
  const [artikler, setArtikler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fashionforum')
        .select('id, overskrift, dato, tags, image, content') // <-- tilføj content
        .gte('id', minId)
        .lte('id', maxId);

      if (error) {
        console.error('Fejl ved hentning:', error);
      } else {
        setArtikler(data);
      }
    };

    fetchData();
  }, [minId, maxId]); // <-- tilføj dependency for god praksis

  return (
    <div className='w-[300px] sm:w-[700px] mt-20 m-auto'>
      {artikler.map((artikel) => (
        <div key={artikel.id} className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-auto mb-10 items-center">
          {artikel.image && (
            <img
              className="w-[300px] h-[300px] m-auto sm:w-[700px] object-cover"
              src={artikel.image}
              alt={artikel.overskrift}
              width="400"
              height="400"
            />
          )}
          <Design color="#c5c7c9" height="350px"/>
          <div className='pl-5'>
            <Link href={`/artikler/${artikel.id}`}>
              <div className="flex pt-2  m-auto w-[400px]">
                <p>{artikel.dato} -</p>
                <p className="pl-1">{artikel.tags}</p>
              </div>
              <h3 className="text-xl font-semibold w-[300px] pt-2 hover:underline">
                {artikel.overskrift}
              </h3>
              {artikel.content && (
                <p className="pt-2s w-[300px] line-clamp-3">
                  {artikel.content.slice(0, 150)}...
                </p>
              )}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MidtCards;

