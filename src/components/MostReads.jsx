'use client';

import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';
import Link from 'next/link';

const MostReads = ({ minId, maxId }) => {
  const [artikler, setArtikler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fashionforum')
        .select('id, overskrift, dato, tags, image, content')
        .gte('id', minId)
        .lte('id', maxId);

      if (error) {
        console.error('Fejl ved hentning:', error);
      } else {
        setArtikler(data);
      }
    };

    fetchData();
  }, [minId, maxId]);

  // Antag 5 artikler maks: 2 i venstre, 1 i midten, 2 i højre
  const col1 = artikler.slice(0, 2);
  const col2 = artikler.slice(2, 3);
  const col3 = artikler.slice(3, 5);

  const renderCard = (artikel) => (
    
    <div key={artikel.id} className="mb-6 ">
      {artikel.image && (
        <img
          className=" w-full sm:w-[300px] h-[300px] object-cover m-auto sm:m-0"
          src={artikel.image}
          alt={artikel.overskrift}
          width={40}
              height={40}
        />
      )}
      <Link href={`/artikler/${artikel.id}`}>
        <div className="pt-2 text-sm text-gray-600 ">
          <p>{artikel.dato} - <span>{artikel.tags}</span></p>
        </div>
        <h3 className=" w-[400px] sm:w-[300px] text-lg font-semibold pt-1 hover:underline ">
          {artikel.overskrift}
        </h3>
      </Link>
    </div>
    
  );

  return (
    <>
    <h2 className='pt-10 pb-10'>Ugens mest læste</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-[500px] md:w-[1100px]">
      {/* Venstre kolonne */}
      <div className="flex flex-col justify-start">
        {col1.map(renderCard)}
      </div>

      {/* Midterkolonne */}
      <div className="flex flex-col justify-center">
        {col2.map(renderCard)}
      </div>

      {/* Højre kolonne */}
      <div className="flex flex-col justify-start">
        {col3.map(renderCard)}
      </div>
    </div>
    </>
  );
};

export default MostReads;
