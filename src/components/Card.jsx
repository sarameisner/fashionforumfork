// components/Cards.jsx
'use client'; // hvis du er i app directory med Next 13+

import { useEffect, useState } from 'react';
import supabase from '../lib/supabase'; // tilpas sti hvis nødvendigt

const Cards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fashionforum') 
        .select('id, overskrift, forfatter'); 

      if (error) {
        console.error('Fejl ved hentning:', error);
      } else {
        setPosts(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.overskrift}</h2>
          <p>{post.forfatter}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
