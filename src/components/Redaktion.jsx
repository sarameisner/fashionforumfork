// komponent til om os siden
export default function Redaktion() {
  return (
    <section className="py-16 pt-25 lg:pt-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Redaktionen</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Carla */}
        <div className="space-y-2">
          <img src="https://fashionforum.dk/wp-content/uploads/2022/08/carla-864x1536.jpg" alt="Carla" className="w-full max-w-[360px] h-auto object-cover" />
          <p className="font-semibold">Chefredaktør</p>
          <p>Carla Christine Bruus Aagaard-Strube</p>
          <p className="text-sm text-gray-600">carla@fashionforum.dk</p>
          <p className="text-sm text-gray-600">+45 28 89 03 20</p>
        </div>
        {/* Amalie */}
        <div className="space-y-2">
          <img src="https://fashionforum.dk/wp-content/uploads/2022/08/amaliekontakt-864x1536.jpg" alt="Amalie" className="w-full max-w-[360px] h-auto object-cover" />
          <p className="font-semibold">Journalist</p>
          <p>Amalie Theils Uebel</p>
        </div>
      </div>
    </section>
  );
}
