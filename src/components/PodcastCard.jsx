'use client'

import Image from 'next/image'

const PodcastCard = ({
  imageSrc,
  date,
  title,
  content,
  spotifyLink,
  appleLink,
  podimoLink,
}) => {
  return (
    <div className="pb-20   p-4 max-w-md ">
      <div className=" aspect-square  max-w-[300px]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
<div className='w-[350px] pb-5'>
      <p className=" pt-5">{date}</p>

      <h3 className=" font-bold mt-2">{title}</h3>

      <p className="  mt-2">{content}</p>
      </div>
      <div className="flex gap-4">
        
        <a href={spotifyLink} target="_blank" rel="noopener noreferrer" className='flex gap-2 hover:underline'>
          <Image src="/play.svg" alt="Spotify" width={20} height={20} />Spotify
        </a>
        <a href={appleLink} target="_blank" rel="noopener noreferrer" className='flex gap-2 hover:underline'>
          <Image src="/play.svg" alt="Apple Podcast" width={20} height={20} />Apple Podcast
        </a>
        <a href={podimoLink} target="_blank" rel="noopener noreferrer" className='flex gap-2 hover:underline'>
          <Image src="/play.svg" alt="Podimo" width={20} height={20} />Podimo
        </a>
      </div>
    </div>
  );
};

export default PodcastCard;
