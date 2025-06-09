import supabase from "../../lib/supabase";
import Footer from "@/components/Footer";
import News from "@/components/NewsLetter";
import MostReads from "@/components/MostReads";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const { id } = params;

  const { data, error } = await supabase.from("fashionforum").select("id, image, dato, content, forfatter, fotograf, tags, categori, overskrift").eq("id", id).single();

  if (error || !data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      artikel: data,
    },
  };
}

export default function ArtikelSide({ artikel }) {
  return (
    <div className="lg:ml-[60px] lg:mr-[230px]">
      <div className="p-0">
        {/* Hero med overlay */}
        <div className="relative w-full h-[400px]">
          {artikel.image && <img src={artikel.image} alt={artikel.overskrift} className="w-full h-full object-cover opacity-80" />}
          <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-8 text-white">
            <p>{artikel.forfatter} </p>
            <p>{artikel.fotograf}</p>
            <h1 className="text-4xl font-bold">{artikel.overskrift}</h1>
          </div>
        </div>

        {/* Metadata (dato, tags, kategori) */}

        <div className="w-full p-5 items-center gap-2 flex ">
          <Image src="/arrow.svg" alt="Pil" width={20} height={20} className="transition-transform duration-200 rotate-[180deg]" />
          <Link href="/">
            <button className="flex cursor-pointer hover:underline">
              <p>Tilbage</p>
            </button>
          </Link>
        </div>

        {/* Selve indholdet */}
        <div className="lg:w-[700px] mb-50 w-full m-auto p-5 py-6">
          <div className="flex gap-5 pb-10">
            <p>{artikel.dato}</p>
            <p>
              {artikel.categori && (
                <>
                  {" "}
                  <span className="font-medium">{artikel.categori}</span>
                </>
              )}
              {artikel.tags ? (
                <>
                  {" "}
                  - <span>{artikel.tags}</span>
                </>
              ) : null}
            </p>
          </div>
          {artikel.content}
        </div>
      </div>
      <MostReads minId={14} maxId={19} />
      <News />
      <Footer />
    </div>
  );
}
