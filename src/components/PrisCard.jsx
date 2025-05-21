'use client';

const PrisCard = ({
  titel,
  pris,
  varighed,
  tidspunkt,
  beskrivelse = '',
  ekstraPris,
  onClick,
}) => {
  return (
    <div className="bg-gray-100  p-6  max-w-md h-full flex flex-col justify-between w-full">
        <div className="p-5 h-">
      <h3 className="text-xl font-semibold mb-2">{titel}</h3>
      <p className="">{pris}</p></div>

      <div className="p-5 h-[50px]">
        <p className="text-sm ">Varighed: {varighed}</p>
        <p className="text-sm "> {tidspunkt}</p>
      </div>

      {beskrivelse && (
        <div className="h-[100px] p-5"><p className="text-sm italic mb-4">{beskrivelse}</p></div>
      )}

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
