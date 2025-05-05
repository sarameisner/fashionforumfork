
'use client'; 

import { useEffect, useState } from 'react';
import supabase from '../lib/supabase'; 

const Cards = () => {
  const [artikler, setArtikler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fashionforum') 
        .select('id, overskrift, forfatter'); 

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
      {artikler.map(artikler => (
        <div key={artikler.id}>
          <h2>{artikler.overskrift}</h2>
          <p>{artikler.forfatter}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
