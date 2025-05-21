'use client';

const PrisCard = ({
  titel,
  pris,
 point, 
 point2,
  ekstraPris,
  onClick,
}) => {
  return (
    <div className="bg-[#D3EEFF]  p-6  max-w-md h-full flex flex-col justify-between w-full">
        <div className="p-5 h-">
      <h3 className="text-xl font-semibold mb-2">{titel}</h3>
      <p className="">{pris}</p></div>

        <ul className="p-5 space-y-1 text-sm">
            <li  className="flex items-start">
              <span className="mr-2 text-lg leading-5">•</span>
              <span>Din pris per annonce:{point}</span>
            </li>
            <li  className="flex items-start">
              <span className="mr-2 text-lg leading-5">•</span>
              <span> Du sparer i alt {point2}</span>
            </li>
            <li  className="flex items-start">
              <span className="mr-2 text-lg leading-5">•</span>
              <span>Gyldig ét år fra købsdato</span>
            </li>

        </ul>
   

      <div className="text-sm p-5 ">
        <p className="mb-1 font-semibold">Ønsker du, at vi sætter annoncen op for dig?</p>
        <p>
          Send en mail med annoncetekst, logo og eventuelt coverbillede til{' '}
          <a href="mailto:job@fashionforum.dk" className="underline text-blue-600">
            job@fashionforum.dk
          </a>
          .
        </p>
      </div>

      <p className="text-lg font-medium  p-5">{ekstraPris}</p>
<div className="p-5">
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
