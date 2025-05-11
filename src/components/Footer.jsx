"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  const getBackgroundColor = () => {
    if (pathname.includes("/mode")) return "#FFFED9";
    if (pathname.includes("/beauty")) return "#FFE3F5";
    if (pathname.includes("/podcast")) return "#D3EEFF";
    if (pathname.includes("/jobportal")) return "#5EAEC9";
    return "#FFE3F5";
  };

  const bgColor = getBackgroundColor();

  return (
    <footer style={{ backgroundColor: bgColor }} className="relative w-full overflow-hidden px-6 py-20 mt-32 text-black">
      <div className="relative w-full md:max-w-3xl md:mx-auto pt-20 flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8 md:gap-12">
        <div className="block text-2xl font-bold leading-none space-y-1 text-center mb-4 md:absolute md:top-[-48px] md:left-16 md:transform md:rotate-90 md:origin-top-left">
          <span className="block">Fashion</span>
          <span className="block">Forum</span>
        </div>

        <div className="order-2 md:order-2 space-y-4 text-lg text-center md:text-right w-full md:w-auto">
          <p className="hover:underline cursor-pointer">Kontakt os</p>
          <Link href="/omos" className="hover:underline cursor-pointer">
            Om os
          </Link>
          <p className="hover:underline cursor-pointer">Job annoncer</p>
        </div>

        <div className="order-3 md:order-1 flex-1 space-y-3 text-sm md:ml-6">
          <p>
            Fashion Forum
            <br />
            Store Strandstræde 20, 2. sal
            <br />
            1255 København K
          </p>
          <p>
            +45 33 18 65 69
            <br />
            info@fashionforum.dk
            <br />
            CVR: DK 41 62 72 12
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
