'use client';
import Link from 'next/link';
import { useState } from 'react';

const links = [
    { label: 'Mode', href: '/mode', color: 'bg-modeColor' },
  { label: 'Beauty', href: '/beauty', color: 'bg-beautyColor ' },
  { label: 'Podcast', href: '/podcast', color: 'bg-podcastColor' },
  { label: 'Jobportal', href: '/jobportal', color: 'bg-jobPortalColor ' },
];

export default function MenuM() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 w-full z-50 stroked-text">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold">
          Fashion <br /> Forum
        </Link>
        <button
          onClick={handleToggle}
          className="text-2xl font-bold focus:outline-none cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* Fullscreen menu */}
      {open && (
        <div className="fixed w-[100%] h-[40vw] flex flex-col z-40 ">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${link.color}   flex-1 flex items-center justify-center font-semibold hover:opacity-90 transition-all duration-300`}
              onClick={() => setOpen(false)} // Close menu after click
            >
             <span className="text-right pr-10 w-full">{link.label}</span> 
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
