'use client';

import { useEffect, useState } from 'react';
import supabase from '../lib/supabase'; 

const Cards = () => {
  const [artikler, setArtikler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fashionforum')
        .select('id, overskrift, forfatter, image'); // Hent image_url fra fashionforum tabellen

      if (error) {
        console.error('Fejl ved hentning:', error);
      } else {
        setArtikler(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {artikler.map((artikel) => (
        <div key={artikel.id}>
          <h2>{artikel.overskrift}</h2>
          <p>{artikel.forfatter}</p>
          {/* Vis billede hvis image_url findes */}
          {artikel.image && (
            <img src={artikel.image} alt={artikel.overskrift} width="200" height="200" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;
