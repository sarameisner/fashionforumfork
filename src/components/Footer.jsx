"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const getBackgroundColor = () => {
    if (pathname.includes("/mode")) return "#FFFED9";
    if (pathname.includes("/beauty")) return "#FFE3F5";
    if (pathname.includes("/podcast")) return "#D3EEFF";
    if (pathname.includes("/jobportal")) return "#5EAEC9";
    return "#FFE3F5";
  };

  const getRightPadding = () => {
    if (pathname.includes("/mode")) return "md:pr-[120px]";
    if (pathname.includes("/beauty")) return "md:pr-[120px]";
    if (pathname.includes("/podcast")) return "md:pr-[120px]";
    if (pathname.includes("/jobportal")) return "md:pr-[160px]";
    return "md:pr-0";
  };

  const getLeftPadding = () => {
    if (pathname === "/") return "md:pl-[140px]";
    return "pl-0";
  };

  const bgColor = getBackgroundColor();

  return (
    <footer style={{ backgroundColor: bgColor }} className="w-full overflow-hidden px-6 py-20 mt-32 text-black">
      <div className={`max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 w-full ${getLeftPadding()}`}>
        <div className="flex-1 space-y-3 text-sm">
          <h2 className="text-lg font-medium">Fashion Forum</h2>
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
        <div className={`space-y-3 text-sm text-right ${getRightPadding()}`}>
          <p>Kontakt os</p>
          <p>Mediekit</p>
          <p>Om os</p>
          <p>Job annoncer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
