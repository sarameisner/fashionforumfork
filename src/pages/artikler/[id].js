import supabase from '../../lib/supabase';

export async function getServerSideProps({ params }) {
  const { id } = params;

  const { data, error } = await supabase
    .from('fashionforum')
    .select('*')
    .eq('id', id)
    .single();

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
    <div className="p-8">
      <h1 className="text-4xl font-bold">{artikel.overskrift}</h1>
      <p className="text-gray-500 mb-4">{artikel.dato} - {artikel.forfatter}</p>
      {artikel.image && (
        <img src={artikel.image} alt={artikel.overskrift} className="mb-6" />
      )}
      <div className="prose max-w-none">{artikel.content}</div>
    </div>
  );
}