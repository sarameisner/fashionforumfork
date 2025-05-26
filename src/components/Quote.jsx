// quote til om os siden
import Design from "@/components/Design";

export default function Quote() {
  return (
    <section className="relative text-black">
      <Design color="#D3EEFF" height="300px" position="top" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 max-w-3xl">
        <p className="text-lg italic">“Fashion Forum er skabt af branchen, for branchen. Vi formidler, forbinder og udfordrer – med respekt for faglighed og blik for fremtiden.”</p>
        <p className="mt-4 font-semibold">Chefredaktør, Carla Christine Bruus Aagaard-Strube</p>
      </div>
      <div className="h-[300px]" /> {/* Makes space so next content doesn't overlap */}
    </section>
  );
}
