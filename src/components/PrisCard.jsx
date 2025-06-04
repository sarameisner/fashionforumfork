'use client';
import { GoDotFill } from "react-icons/go";

const PrisCard = ({
  titel,
  beskrivelse = '',
pris,
  onClick,
  overskrift1,
  prob1,
  prob2,
  prob3,
  prob4,
  prob5, 
  prob6,
  overskrift2,
  pris2,
  pris3
}) => {
  return (
    <div className="bg-[#d3eeff] p-6  max-w-[900px] h-full flex flex-col w-full">
        <div className="p-5 ">
      <h3 className="text-xl font-semibold ">{titel}</h3>
      </div>

      {beskrivelse && (
        <div className="pl-5"><p className="text-sm mb-4">{beskrivelse}</p></div>
      )}

      <div className="text-sm p-5 ">
        <p className="mb-1 font-semibold">{overskrift1}</p>
        <ul className="">
        <li className="flex items-center gap-2  "><GoDotFill/>{prob1}</li>
          <li className="flex items-center gap-2"><GoDotFill/>{prob2}</li>
          <li className="flex items-center gap-2"><GoDotFill/>{prob3}</li>
          {prob4 && (
  <li className="flex items-center gap-2">
    <GoDotFill /> {prob4}
  </li>
)}
        </ul>
     </div>
        <div className="text-sm pl-5">
          <p className="mb-1 font-semibold">{overskrift2}</p>
          <ul>
          {prob5 && (<li className="flex items-center gap-2  "><GoDotFill/>{prob5}</li>)}
          {prob6 && (<li className="flex items-center gap-2  "><GoDotFill/>{prob6}</li> )}
          </ul>
        </div>
        <p className="p-5">Obs: Stillingen skal være midlertidig og målrettet studerende – og det skal tydeligt fremgå, at der er tale om en praktikplads eller studenterstilling.</p>
          <p className="text-lg  font-semibold  pl-5">Priser:</p>
          <p className="text-lg font-semibold  pl-5 pb-2">{pris}</p>
          {pris2 && (<p className="text-lg font-semibold  pl-5 pb-2">{pris2}</p>)}
          {pris3 && (<p className="text-lg font-semibold  pl-5 pb-2">{pris3}</p>)}
          
     

  
<div className="pl-5">
      <button
        onClick={onClick}
        className="bg-black text-white px-4 py-2 cursor-pointer hover:bg-white hover:text-black border-black border-1 transition"
      >
        Vælg
      </button>
      </div>
    </div>
  );
};

export default PrisCard;
