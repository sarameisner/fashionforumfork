'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Knap1 = ({ text = 'Næste', link }) => {
  return (
    <div className="w-full flex justify-center pr-0 md:pr-20 md:justify-end">
   <Link href={link}><button className="flex cursor-pointer items-center space-x-2 text-black hover:underline">
      <span className="text-[1.3rem] font-medium">{text}</span>
      <Image
        src="/arrow.svg"
        alt="Pil"
        width={30}
        height={30}
        className="transition-transform duration-200"
      />
    </button>
    </Link>
  </div>
  );
};

export default Knap1;